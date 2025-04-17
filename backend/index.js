import express from 'express';
import { PORT, mysqlConnection } from './config';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Handle CORS policy
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.listen(PORT, () => {
    console.log(`App is listening to MySQL server port ${PORT}`);
});

mysqlConnection.connect((err) => {
    if (err) return console.err(err.message);
    console.log("Connected to MySQL server");
});