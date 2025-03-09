import express from "express";
import db from "../database.js";

const router = express.Router();

// Signup Route
router.post("/signup", (req, res) => {
  const { name, age, gender, address, sports } = req.body;

  if (!name || !age || !gender || !address || !sports) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query = `
    INSERT INTO users (name, age, gender, address, sports)
    VALUES (?, ?, ?, ?, ?)
  `;
  const params = [name, age, gender, address, sports.join(", ")];

  db.run(query, params, function (err) {
    if (err) {
      return res.status(500).json({ error: "Failed to create user." });
    }
    res.json({ message: "User created successfully!", id: this.lastID });
  });
});

export default router;