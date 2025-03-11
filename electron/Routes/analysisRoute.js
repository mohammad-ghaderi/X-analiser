const express = require("express");
const { 
    createAnalysis,
    getAllAnalysis,
    updateAnalysis,
    deleteAnalysis 
} = require('../controllers/analysisController');

const router = express.Router();

router
    .post("/", createAnalysis)
    .get("/", getAllAnalysis);
router
    .put("/:id", updateAnalysis) 
    .delete("/:id", deleteAnalysis);

module.exports = router;