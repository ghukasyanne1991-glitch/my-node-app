import express from "express";

import db from "./db";

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
    try{
       const [rows] = await db.query ('SELECT 1');
       res.status(200).json({
           status: 'ok',
           db: 'connected'
       });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message});
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`));