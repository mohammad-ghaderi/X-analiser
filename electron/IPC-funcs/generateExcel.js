const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx')

const generateExcel = (data, savePath) => {
    if (!savePath) {
        throw new Error('No save path provided');
    }

    const templatePath = path.join(__dirname, '..', 'templates', 'template.xlsx');

    if (!fs.existsSync(templatePath)) {
        throw new Error('Template file does not exist');
    }

    const workbook = XLSX.readFile(templatePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error('Worksheet is missing in the template');
    }

    data.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: colIndex });
            worksheet[cellRef] = { t: 's', v: cell };
        });
    });

    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
    range.e.r = Math.max(range.e.r, data.length);
    range.e.c = Math.max(range.e.c, data[0].length);
    worksheet['!ref'] = XLSX.utils.encode_range(range);

    XLSX.writeFile(workbook, savePath);

    return { message: 'Excel file created successfully', filePath: savePath };
}

module.exports = { generateExcel };
