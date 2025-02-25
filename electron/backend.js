import express from "express";
// import cors from "cors";
import db from "./database.js";

const backend = express();
backend.use(express.json());
// backend.use(cors());

// Sample API Route: Get all users
backend.get("/users", async (req, res) => {
  try {
    const users = await db("users").select("*");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server on port 3001
backend.listen(3001, () => console.log("Backend running on http://localhost:3001"));

export default backend;
