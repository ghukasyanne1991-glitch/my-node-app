import mysql from 'mysql2/promise';

import 'dotenv/config';
//console.log(process.env.DATABASE_URL);

const databaseUrl = process.env.DATABASE_URL.replace("?ssl-mode=REQUIRED", "");

const db = mysql.createPool({
    uri: databaseUrl,
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
export default db;