import express from "express";
import db from "./db.js";
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
    try{
        //console.log("Trying DB connection...");
        const result = await db.query ('SELECT 1');
        const rows = result[0];
        //console.log("DB query successful:", rows);
       res.status(200).json({
           status: 'ok',
           db: 'connected',
           rows: rows,
       });
    } catch (err) {
        //console.error("DB connection error:", err);
        res.status(500).json({
            status: 'error',
            message: err.message});
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`));