import { Router } from "express";
import pool from "../db.js";

const router = Router();

// GET /api/exercises → tous les exercices
router.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM exercises ORDER BY name");
  res.json(rows);
});

// GET /api/exercises/:id → un seul exercice
router.get("/:id", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM exercises WHERE id = $1", [
    req.params.id,
  ]);

  if (rows.length === 0) {
    return res.status(404).json({ error: "Exercice introuvable" });
  }
  res.json(rows[0]);
});

export default router;
