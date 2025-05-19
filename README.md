# ROMS-G1-CC01-ASE

A platform for lecturers registering rooms for teaching. Students, staffs, and guests are able to view teaching schedules of rooms.

This project is built using the following stack

Frontend: ReactJS (created using Vite)

Backend: NodeJS

Database: MySQL

Project structure:

* /backend: contains the NodeJS backend and API routes
* /frontend: contains the ReactJS frontend
* /roms.sql: contains the MySQL statements to create a structure (schema and tables) for website database
* /romsdata.sql: contains the MySQL statements to insert data to roms schema
* /server.crt: contains self-signed certificate
* /server.key: contains a private key

Running the project:

1. Clone the repository: git clone https://github.com/CuongChuck/ROMS-G1-CC01-ASE.git
2. Create MySQL user based on information written in /backend/config.js file
3. Create MySQL schema and insert data based on /roms.sql and /romsdata.sql files
4. Install backend dependencies:
```
cd backend
npm install cookie-parser cors express jsonwebtoken mysql2 nodemailer nodemon
```
5. Install frontend dependencies:
```
cd frontend
npm install @mui/icons-material axios react react-router react-router-dom
```
6. Install global dependencies (in root folder):
```
npm install moment
```
7. Run backend server
```
cd backend
npm run dev
```
8. Run frontend
```
cd frontend
npm run dev
```
9. Copy one of the links provided by Vite into a browser's search bar, then press Enter
10. If you see a warning from the browser, click "Advanced" then click "Continue to localhost (unsafe)"