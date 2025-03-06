// backend/excelRoutes.js
const express = require("express");
import db from "./database.js";


const router = express.Router();

// Route to fill Excel template
router.get("/users", async (req, res) => {
    try {
      const users = await db("users").select("*");
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });