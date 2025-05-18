# ROMS-G1-CC01-ASE

A platform for lecturers registering rooms for teaching. Students, staffs, and guests are able to view teaching schedules of rooms.

This project is built using the following stack

Frontend: ReactJS (created using Vite)

Backend: NodeJS

Database: MySQL

Project structure:

* /backend: contains the NodeJS backend and API routes
* /frontend: contains the ReactJS frontend
* /roms.sql: contains the MySQL queries
* /server.crt: contains self-signed certificate
* /server.key: contains a private key

Running the project:

1. Clone the repository: git clone https://github.com/CuongChuck/ROMS-G1-CC01-ASE.git
2. Install backend dependencies:
```
cd backend
npm install cookie-parser cors express jsonwebtoken mysql2 nodemailer nodemon
```
3. Install frontend dependencies:
```
cd frontend
npm install @mui/icons-material axios react react-router react-router-dom
```
4. Run backend server
```
cd backend
npm run dev
```
5. Run frontend
```
cd frontend
npm run dev
```