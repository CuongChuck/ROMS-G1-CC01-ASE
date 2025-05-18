import mysql from 'mysql2';

export const PORT = 8080;

export const mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "ROMS_Admin",
    password: "rAtrObitaNTo",
    database: "roms"
});