import express from "express";
// import cors from "cors";
const userRoutes = require("./Routes/userRoute.js"); // Import the excel routes
const PORT = 3001;

const backend = express();
backend.use(express.json());
// backend.use(cors());

// Sample API Route: Get all users

backend.use('/users', userRoutes);

// Start the server on port 3001
backend.listen(PORT, () => {
  console.log("Backend running on http://localhost:3001")
});

export default backend;
