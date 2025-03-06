const path = require('path');
const XLSX = require('xlsx');
const fs = require('fs');

// Function to generate Excel file from template
function generateExcel(data) {
  const templatePath = path.join(__dirname, '..', 'templates', 'template.xlsx'); // Path to template
  const outputPath = path.join(__dirname, '..', 'templates', 'output', 'filled.xlsx'); // Save new file

  // Check if template exists
  if (!fs.existsSync(templatePath)) {
    throw new Error('Template file does not exist');
  }

  // Load the template Excel file
  const workbook = XLSX.readFile(templatePath);
  const sheetName = workbook.SheetNames[0]; // Get first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Ensure worksheet exists
  if (!worksheet) {
    throw new Error('Worksheet is missing in the template');
  }

  // Convert data to worksheet format
  data.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: colIndex }); // Start at row 2
      worksheet[cellRef] = { t: 's', v: cell }; // Set cell type ('s' for string, 'n' for number) and value
    });
  });

  // Ensure worksheet range is updated
  const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
  range.e.r = Math.max(range.e.r, data.length); // Extend row range
  range.e.c = Math.max(range.e.c, data[0].length); // Extend column range
  worksheet['!ref'] = XLSX.utils.encode_range(range);

  // Write updated workbook
  XLSX.writeFile(workbook, outputPath);

  return { message: 'Excel file created successfully from template', filePath: outputPath };
}

module.exports = { generateExcel };
