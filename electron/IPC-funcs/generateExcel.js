const path = require('path');
const fs = require('fs');
const ExcelJS = require("exceljs");
const { TECHNICAL, FUNDAMENTAL, SENTIMENT } = require('../constants/analysis');

const TECH_COL_LETTER = ['D', 'E', 'F', 'G', 'H', 'I'];
const TECH_SYMBOLS = ['', 'L', 'R', 'S'];
const TECH_BODY_ROW_START = 4;
const TECH_RES_ROW_START = 39;

const generateExcel = async (data, savePath) => {
    if (!savePath) {
        throw new Error("No save path provided");
    }

    const templatePath = path.join(__dirname, "..", "templates", "Stocks.xlsx");

    if (!fs.existsSync(templatePath)) {
        throw new Error("Template file does not exist");
    }

    // Copy template (keeps original formatting)
    fs.copyFileSync(templatePath, savePath);

    // Open copied file with ExcelJS (to retain formatting)
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(savePath);
    const worksheetTechnical = workbook.worksheets[0];
    const worksheetFundamental = workbook.worksheets[0];
    const worksheetSentiment = workbook.worksheets[0];

    if (!worksheetTechnical) {
        throw new Error("Worksheet is missing in the template");
    }

    // Modify values while keeping formatting
    if (data[TECHNICAL] !== undefined) {
        data[TECHNICAL].body.forEach((row, index) => {
            row.forEach((col, idx) => {
                worksheetTechnical.getCell(`${TECH_COL_LETTER[idx]}${index + TECH_BODY_ROW_START}`).value = TECH_SYMBOLS[col];
            });
        });

        data[TECHNICAL].res.forEach((row, index) => {
            row.forEach((col, idx) => {
                worksheetTechnical.getCell(`${TECH_COL_LETTER[idx]}${index + TECH_RES_ROW_START}`).value = col;
            });
        });
    }

    // Save the modified file
    await workbook.xlsx.writeFile(savePath);

    return { message: "Excel file created successfully", filePath: savePath };
};

module.exports = { generateExcel };
