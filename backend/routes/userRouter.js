import express from 'express';
import { mysqlConnection } from '../config.js';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

userRouter.get('/detail', async (request, response) => {
    try {
        const token = request.headers["access-token"];
        if (!token) return response.json({message: "Token needed"});
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const id = parseInt(decoded.id, 10);
            const sql = `CALL GetUser(${id})`;
            mysqlConnection.query(sql, (err, results, fields) => {
                if (err) return response.status(404).send({message: err.message});
                return response.status(200).json({
                    username: results[0][0].Username,
                    name: results[0][0].Name,
                    faculty: results[0][0].FacultyID,
                    email: results[0][0].Email,
                    role: toString(results[0][0].Role)
                });
            });
        });
    }
    catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

userRouter.put('/update', async (request, response) => {
    try {
        const token = request.body.headers["access-token"];
        if (!token) return response.json({message: "Token needed"});
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const id = parseInt(decoded.id, 10);
            const sqlCheck = `SELECT Password FROM user WHERE UserID = ${id}`;
            mysqlConnection.query(sqlCheck, (err, results, fields) => {
                if (err || results.length == 0 || request.body.password != results[0].Password)
                    return response.status(404).json({status: "Wrong user or password"});
            });
            const sql = `CALL UpdateUser(?,?,?,?,?)`;
            const values = [
                id, request.body.username, request.body.name,
                parseInt(request.body.faculty, 10), request.body.email
            ];
            mysqlConnection.query(sql, values, (err, results, fields) => {
                if (err) console.error(err.message);
                return response.status(201).send({message: `User updated`});
            });
        });
    }
    catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

userRouter.delete('/delete', async (request, response) => {
    try {
        const token = request.headers["access-token"];
        if (!token) return response.json({message: "Token needed"});
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error"});
            const id = parseInt(decoded.id, 10);
            const sqlCheck = `SELECT Password FROM user WHERE UserID = ${id}`;
            mysqlConnection.query(sqlCheck, (err, results, fields) => {
                if (err || results.length == 0 || request.body.password != results[0].Password)
                    return response.status(404).json({status: "Wrong user or password"});
            });
            const sql = `DELETE FROM roms.user WHERE UserID = ${id}`;
            mysqlConnection.query(sql, (err, results, fields) => {
                if (err) return response.status(404).send({message: err.message});
                return response.status(200).json({message: "Account Deleted"});
            });
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default userRouter;