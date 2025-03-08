const path = require('path');
const fs = require('fs');
const ExcelJS = require("exceljs");
const { TECHNICAL, FUNDAMENTAL, SENTIMENT } = require('../constants/analysis');

const TECH_COL_LETTER = ['D', 'E', 'F', 'G', 'H', 'I'];
const TECH_SYMBOLS = ['', 'L', 'R', 'S'];
const TECH_BODY_ROW_START = 4;
const TECH_RES_ROW_START = 39;

const FUND_COL_LETTER = [
    ['E', 'G', 'J'],
    ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['C', 'E', 'G', 'J'],
]
const FUNd_COMPARE_SYMBOLS = ['>', '<', '='];

const FUND_MAIN_COL_LETTER = [
    ['E', 'H', 'I'],
    ['C', 'E', 'G', 'J'],
]


const generateExcel = async (data, type, savePath) => {
    if (!savePath) {
        throw new Error("No save path provided");
    }

    const templatePath = path.join(__dirname, "..", "templates", 
        (data[type] === 'Stocks' ?
        "Stocks.xlsx" : 
        "Forex-Crypto-Commodity.xlsx"
    ));

    if (!fs.existsSync(templatePath)) {
        throw new Error("Template file does not exist");
    }

    // Copy template (keeps original formatting)
    fs.copyFileSync(templatePath, savePath);

    // Open copied file with ExcelJS (to retain formatting)
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(savePath);
    const worksheetTechnical = workbook.worksheets[0];
    const worksheetFundamental = workbook.worksheets[1];
    const worksheetSentiment = workbook.worksheets[2];

    console.log(data[FUNDAMENTAL])
    console.log(data[SENTIMENT])

    if (!worksheetTechnical) {
        throw new Error("Worksheet is missing in the template");
    }

    if (!worksheetFundamental) {
        throw new Error("Worksheet is missing in the template");
    }

    if (!worksheetSentiment) {
        throw new Error("Worksheet is missing in the template");
    }

    // Modify values while keeping formatting
    if (data[TECHNICAL] !== undefined) {
        data[TECHNICAL].body.forEach((row, index) => {
            row.forEach((col, idx) => {
                worksheetTechnical
                    .getCell(`${TECH_COL_LETTER[idx]}${index + TECH_BODY_ROW_START}`)
                    .value = TECH_SYMBOLS[col];
            });
        });

        data[TECHNICAL].res.forEach((row, index) => {
            row.forEach((col, idx) => {
                worksheetTechnical
                    .getCell(`${TECH_COL_LETTER[idx]}${index + TECH_RES_ROW_START}`)
                    .value = col;
            });
        });
    }
    if (data[FUNDAMENTAL] !== undefined) {
        if (data.type == 'Stocks') {
            for (const rowIndex in data[FUNDAMENTAL]) {
                for (const colIndex in data[FUNDAMENTAL][rowIndex]) {
                    const rowIdx = Number(rowIndex);
                    const colIdx = Number(colIndex);
                    let idx = 0;
                    if (rowIdx >= 26 && rowIdx <= 31) idx = 1;
                    console.log(`${FUND_COL_LETTER[idx][colIdx]}${rowIdx + 2}`)
                    const value = (rowIdx <= 23 && colIdx === 1) ? 
                            FUNd_COMPARE_SYMBOLS[data[FUNDAMENTAL][rowIndex][colIndex]] : 
                            data[FUNDAMENTAL][rowIndex][colIndex];
                    worksheetFundamental
                        .getCell(`${FUND_COL_LETTER[idx][colIdx]}${rowIdx + 2}`)
                        .value = value;
                }
            }

        } else {
            for (const rowIndex in data[FUNDAMENTAL]) {
                for (const colIndex in data[FUNDAMENTAL][rowIndex]) {
                    const rowIdx = Number(rowIndex);
                    const colIdx = Number(colIndex);
                    let idx = 0;
                    if (rowIdx >= 14 && rowIdx <= 25) idx = 1;
                    else if (rowIdx >= 28 && rowIdx <= 33) idx = 2;
                    console.log(`${FUND_MAIN_COL_LETTER[idx][colIdx]}${rowIdx + 2}`)
                    const value = (rowIdx <= 12 && colIdx === 1) ? 
                            FUNd_COMPARE_SYMBOLS[data[FUNDAMENTAL][rowIndex][colIndex]] : 
                            data[FUNDAMENTAL][rowIndex][colIndex];
                    worksheetFundamental
                        .getCell(`${FUND_MAIN_COL_LETTER[idx][colIdx]}${rowIdx + 2}`)
                        .value = value;
                }
            }
        }
    }

    // Save the modified file
    await workbook.xlsx.writeFile(savePath);

    return { message: "Excel file created successfully", filePath: savePath };
};

module.exports = { generateExcel };
