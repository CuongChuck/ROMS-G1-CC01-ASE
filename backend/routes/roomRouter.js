import express from 'express';
import { mysqlConnection } from '../config.js';
import jwt from 'jsonwebtoken';

const roomRouter = express.Router();

roomRouter.get("/list", async (request, response) => {
    try {
        const sql = `CALL GetRoomList()`;
        mysqlConnection.query(sql, (err, result, field) => {
            if (err) {
                console.error(err.message);
                return response.status(500).json({message: "Getting room list error"});
            }
            return response.status(200).json({data: result[0]});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetRoom(${id})`;
        mysqlConnection.query(sql, (err, result, field) => {
            if (err) {
                console.error(err.message);
                return response.status(500).json({message: "Getting room list error"});
            }
            return response.status(200).json({data: result[0][0]});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.get('/schedule/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetRoomSchedule(${id})`;
        mysqlConnection.query(sql, (err, result, field) => {
            if (err) {
                console.error(err.message);
                return response.status(500).json({message: "Getting room list error"});
            }
            return response.status(200).json({
                building: result[0][0].BuildingName,
                room: result[0][0].RoomNum,
                data: result[1]
            });
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.get('/register/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetRegister(${id})`;
        mysqlConnection.query(sql, (err, result, field) => {
            if (err) {
                console.error(err.message);
                return response.status(500).json({message: "Getting room list error"});
            }
            return response.status(200).json({data: result[0][0]});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.get('/free/:id/:date', async (request, response) => {
    try {
        const { id, date } = request.params;
        const sql = `CALL GetFree(?,?)`;
        mysqlConnection.query(sql, [id, date], (err, result, field) => {
            if (err) {
                console.error(err.message);
                return response.status(500).json({message: "Getting room list error"});
            }
            var lst = [];
            for (let i = 2; i < 13; i++) {
                let dup = false;
                for (const reg of result[0]) {
                    if (i >= reg.Start && i <= reg.End) {
                        dup = true;
                        break;
                    }
                }
                if (!dup) lst.push(i);
            }
            return response.status(200).json({data: lst});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.post('/register/add/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const token = request.body.token;
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                console.error(err);
                return response.status(200).json({message: "Authentication Error"});
            }
            const userid = parseInt(decoded.id, 10);
            const values = [
                id, userid, request.body.date,
                request.body.start, request.body.end, request.body.subject
            ]
            const sql = `CALL RegisterRoom(?,?,?,?,?,?)`;
            mysqlConnection.query(sql, values, (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return response.status(404).send({message: err.message});
                }
                return response.status(200).json({message: "Register success"});
            });
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.put('/register', async (request, response) => {
    try {
        const values = [
            request.body.registerid, request.body.date,
            request.body.start, request.body.end, request.body.subject
        ]
        const sql = `CALL UpdateRegister(?,?,?,?,?)`;
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) {
                console.error(err);
                return response.status(404).send({message: err.message});
            }
            return response.status(200).json({message: "Register success"});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

roomRouter.delete('/register/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `DELETE FROM register WHERE RegisterID = ${id}`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) {
                console.error(err);
                return response.status(404).send({message: err.message});
            }
            return response.status(200).json({message: "Register deleted"});
        });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({message: "Getting room list error"});
    }
});

export default roomRouter;