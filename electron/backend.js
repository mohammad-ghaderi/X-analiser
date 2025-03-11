const express = require('express');
const cors = require('cors');
const analysisRoute = require('./Routes/analysisRoute.js');
const PORT = 3001;

const backend = express();
backend.use(express.json());

backend.use(cors());

// Sample API Route: Get all users

backend.use('/analysis', analysisRoute);

// Start the server on port 3001
backend.listen(PORT, () => {
  console.log("Backend running on http://localhost:3001")
});

module.exports = backend;
