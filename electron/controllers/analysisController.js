const db = require('../database.js');
const HttpError = require('../modules/http-error.js');

const createAnalysis = async (req, res, next) => {
    try {
        const { type, category, data } = req.body;

        if (!type || !category || !data) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const [id] = await db("analysis").insert({
            type,
            category,
            data: JSON.stringify(data), // Convert object to JSON string
        });

        res.status(201).json({ id, type, category, data });
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return(next(error));
    }
}

const getAllAnalysis = async (req, res, next) => {
    try {
        const results = await db("analysis").select("*");

        // Convert JSON string back to object
        results.forEach(row => {
            row.data = JSON.parse(row.data);
        });

        res.json(results);
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return(next(error));
    }
}


// Update an analysis entry
const updateAnalysis = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;

        if (!data) {
            return res.status(400).json({ error: "Missing data field" });
        }

        await db("analysis")
            .where({ id })
            .update({
                data: JSON.stringify(data),
                last_edited: db.fn.now(), // Update timestamp
            });

        res.json({ message: `Analysis entry ${id} updated.` });
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return(next(error));
    }
}

// Delete an analysis entry
const deleteAnalysis = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedRows = await db("analysis").where({ id }).del();

        if (deletedRows) {
            res.json({ message: `Analysis entry ${id} deleted.` });
        } else {
            res.status(404).json({ error: "Entry not found" });
        }
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return(next(error));
    }
}

module.exports = {
    createAnalysis,
    getAllAnalysis,
    updateAnalysis,
    deleteAnalysis
}