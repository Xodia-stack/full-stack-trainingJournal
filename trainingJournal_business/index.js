import express from "express";
import cors from "cors";
import "dotenv/config";
import pool from "./db.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/exercices", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM exercises");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`API sur http://localhost:${process.env.PORT}`);
});
