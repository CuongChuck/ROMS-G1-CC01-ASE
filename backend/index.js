import express from 'express';
import { PORT, mysqlConnection } from './config.js';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import https from 'https';
import fs from 'fs';
import path from 'path';
import http from 'http';
import userRouter from './routes/userRouter.js';
import roomRouter from './routes/roomRouter.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Handle CORS policy
app.use(cors({
    origin: ["https://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const privateKey = fs.readFileSync(path.join('../', 'server.key'), 'utf8');
const certificate = fs.readFileSync(path.join('../', 'server.crt'), 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
    console.log(`HTTPS server is listening on port ${PORT}`);
});

//Redirect HTTP to HTTPS
const httpApp = express();
httpApp.use((req, res, next) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
});
const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => {
    console.log('HTTP server listening on port 80 for redirection to HTTPS');
});

mysqlConnection.connect((err) => {
    if (err) return console.error(err.message);
    console.log("Connected to MySQL server");
});

app.use('/', authRouter);
app.use('/user', userRouter);
app.use('/room', roomRouter);