// const path = require('path');
// const XLSX = require('xlsx');
// const fs = require('fs');

// // Function to generate Excel file from template
// function generateExcel(data) {
//   const templatePath = path.join(__dirname, '..', 'templates', 'template.xlsx'); // Path to your template file
//   const outputPath = path.join(__dirname, '..', 'templates', 'output', 'filled.xlsx'); // Path where the new file will be saved

//   // Check if the template file exists
//   if (!fs.existsSync(templatePath)) {
//     throw new Error('Template file does not exist');
//   }

//   // Load the template Excel file
//   const workbook = XLSX.readFile(templatePath);

//   // Assuming the data needs to go into the first sheet and starting at row 2, column 1
//   const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Get the first sheet

//   // Fill the worksheet with the provided data (starting from row 2, column 1)
//   data.forEach((row, index) => {
//     row.forEach((cell, colIndex) => {
//       // Convert row/column to A1-style reference
//       const cellRef = XLSX.utils.encode_cell({ r: index + 1, c: colIndex }); // Starting at row 2
//       worksheet[cellRef] = { v: cell };  // Assign value to the cell
//     });
//   });

//   // Write the modified workbook to a new file
//   XLSX.writeFile(workbook, outputPath);

//   // Return file path (for renderer to use)
//   return { message: 'Excel file created successfully from template', filePath: outputPath };
// }

// module.exports = { generateExcel };


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
