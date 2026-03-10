import mysql from 'mysql2/promise';

import 'dotenv/config';
//console.log(process.env.DATABASE_URL);

const db = mysql.createPool({
    uri: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
export default db;