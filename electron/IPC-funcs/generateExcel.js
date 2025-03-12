const path = require('path');
const fs = require('fs');
const fillExcel = require('./fillExcel');
const { shell } = require('electron');


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

    fillExcel(data, type, savePath)

    // Open the generated Excel file
    shell.openPath(savePath).then((res) => {
        if (res) console.error("Failed to open Excel file:", res);
    });

    return { message: "Excel file created successfully", filePath: savePath };
};

module.exports = { generateExcel };
