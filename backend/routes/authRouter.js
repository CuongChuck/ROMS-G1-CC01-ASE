import express from 'express';
import { mysqlConnection } from '../config.js';
import jwt from 'jsonwebtoken';
import mailer from 'nodemailer';
import crypto from 'crypto';

const authRouter = express.Router();

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'englishtalent123@gmail.com',
        pass: 'wcsj epjk acvx scpt'
    }
});

var code = '';
var ID = '';
var ROLE = 0;
var email = '';

const verifyUser = (request, response, next) => {
    const token = request.headers["access-token"];
    if (!token) return response.json({message: "Token needed"});
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const role = decoded.role;
            if (role != 1 && role != 2) return response.json({message: "Authentication Error"});
            next();
        });
    }
}

const verifyLecture = (request, response, next) => {
    const token = request.headers["access-token"];
    if (!token) return response.json({message: "Token needed"});
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const role = decoded.role;
            if (role != 1) return response.json({message: "Authentication Error"});
            next();
        });
    }
}

// Route for confirm log in
authRouter.get('/auth', verifyUser, (request, response) => {
    return response.json({message: "User Authorized"});
});

// Route for confirm log in
authRouter.get('/lecture/auth', verifyLecture, (request, response) => {
    return response.json({message: "Lecture Authorized"});
});

// Check code
authRouter.post('/f2a', async (request, response) => {
    try {
        const receivedCode = request.body.code;
        if (receivedCode == code) {
            const token = jwt.sign({id: ID, role: ROLE}, "jwt-secret-key", {expiresIn: '1d'});
            response.cookie("token", token, {sameSite:'none'});
            return response.status(200).json({status: "Login Success", token: token});
        }
        else {
            return response.status(200).json({status: "Login Failed"});
        }
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: err.message });
    }
});

// Resend the code
authRouter.get('/f2a/resend', (request, response) => {
    try {
        code = crypto.randomInt(100000, 999999).toString();
        const mailOptions = {
            from: '"BK-ROMS" <englishtalent123@gmail.com>',
            to: `${email}`,
            subject: 'NoReply - Mã xác thực 2 yếu tố',
            text: `KHÔNG ĐƯỢC CHIA SẺ MÃ. Nhập mã này để đăng nhập vào hệ thống BK-ROMS: ${code}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return response.status(500).json({ message: "Failed to send email" });
            }
            console.log("Email sent:", info.messageId);
        });
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: err.message });
    }
});

// Route for confirm log in
authRouter.get('/role', async (request, response) => {
    try {
        const token = request.cookies.token;
        if (!token) return response.json({message: "Token needed"});
        else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if (err) return response.json({message: "Authentication Error."});
                const role = decoded.role;
                if (role == 1) return response.json({role: "Role Lecturer", id: decoded.id});
                else return response.json({role: "Role User", id: decoded.id});
            });
        }
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message});
    }
});

// Route for logout
authRouter.get('/logout', (request, response) => {
    response.clearCookie("token");
    return response.json({message: "Logout Success"});
});

// Route for Register
authRouter.post('/register', async (request, response) => {
    try {
        if (!request.body.email || !request.body.username || !request.body.password ||
            !request.body.name || !request.body.faculty || !request.body.role) {
            return response.status(400).send({
                message: "Send all required fields"
            });
        }
        const sql = `INSERT INTO user(Email, Username, Password, Name, FacultyID, Role) VALUES(?,?,?,?,?,?)`;
        const values = [
            request.body.email, request.body.username, request.body.password,
            request.body.name, parseInt(request.body.faculty, 10), parseInt(request.body.role, 10)
        ];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `User ${values[3]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Log In
authRouter.post('/login', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password) {
            return response.status(400).send({
                message: "Send all required fields: username, password"
            });
        }
        const sql = `SELECT * FROM user WHERE Username = ?`;
        mysqlConnection.query(sql, [request.body.username], (err, results, fields) => {
            if (err || results.length == 0 || request.body.password != results[0].Password)
                return response.status(404).json({status: "Failed"});
            else {
                code = crypto.randomInt(100000, 999999).toString();
                email = results[0].Email;
                const mailOptions = {
                    from: '"BK-ROMS" <englishtalent123@gmail.com>',
                    to: `${email}`,
                    subject: 'NoReply - Mã xác thực 2 yếu tố',
                    text: `KHÔNG ĐƯỢC CHIA SẺ MÃ. Nhập mã này để đăng nhập vào hệ thống BK-ROMS: ${code}`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error("Error sending email:", error);
                        return response.status(500).json({ message: "Failed to send email" });
                    }
                    console.log("Email sent:", info.messageId);
                });
                ID = results[0].UserID;
                ROLE = results[0].Role;
            }
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).json({status: "Failed"});
    }
});

// Route for SELECT a User
authRouter.get('/profile', async (request, response) => {
    try {
        const token = request.headers["access-token"];
        if (!token) return response.json({message: "Token needed"});
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const id = parseInt(decoded.id, 10);
            const sql = `CALL GetUserProfile(${id})`;
            mysqlConnection.query(sql, (err, results, fields) => {
                if (err) return response.status(404).send({message: err.message});
                return response.status(200).json({
                    name: results[0][0].Name,
                    faculty: results[0][0].FacultyName,
                    role: results[0][0].Role
                });
            });
        });
        response.clearCookie("token");
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

export default authRouter;