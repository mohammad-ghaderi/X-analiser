const express = require("express");
const db = require('../database.js')


const router = express.Router();

router.get("/users", async (req, res) => {
    try {
      const users = await db("users").select("*");
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;