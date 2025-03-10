const fs = require('fs');
const os = require('os');
const { exec } = require('child_process');
const path = require('path');
const fillExcel = require('./fillExcel');
const { app } = require("electron");

// Function to copy template to a temporary file and convert it to PDF
const generatePDF = async (data, type, pdfOutputPath) => {

    if (!pdfOutputPath) {
        throw new Error("No save path provided");
    }

    const templatePath = path.join(__dirname, "..", "templates", 
            (data[type] === 'Stocks' ?
            "Stocks.xlsx" : 
            "Forex-Crypto-Commodity.xlsx"
        ));

    // Generate a temporary Excel file path
    const tempExcelPath = path.join(os.tmpdir(), `temp_${Date.now()}.xlsx`);

    
    // Copy the template file to the temporary location
    fs.copyFileSync(templatePath, tempExcelPath);
    
    if (!fs.existsSync(tempExcelPath)) {
            throw new Error("temp file does not exist");
    }

    fillExcel(data, type, tempExcelPath);

    // Convert to PDF using PowerShell
    convertExcelToPDF(tempExcelPath, pdfOutputPath, () => {
        // Delete temporary Excel file after conversion
        fs.unlink(tempExcelPath, (err) => {
            if (err) console.error('Error deleting temp file:', err);
            else console.log('Temporary Excel file deleted.');
        });
    });
}

// Convert Excel to PDF using PowerShell
const convertExcelToPDF = (excelPath, pdfPath, callback) => {
    const tempScriptPath = path.join(app.getPath("temp"), "converter.vbs");
    const vbsContent = `
    Set objExcel = CreateObject("Excel.Application")
    objExcel.Visible = False
    Set objWorkbook = objExcel.Workbooks.Open(WScript.Arguments(0))
    objWorkbook.ExportAsFixedFormat 0, WScript.Arguments(1)
    objWorkbook.Close False
    objExcel.Quit
    `;

    fs.writeFileSync(tempScriptPath, vbsContent, "utf-8");

    // Execute the script using cscript.exe
    const command = `cscript //Nologo "${tempScriptPath}" "${excelPath}" "${pdfPath}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error converting to PDF:', error);
            console.error('stderr:', stderr);
            return;
        }
        console.log('PDF generated successfully:', pdfPath);
        console.log('stdout:', stdout);
        // if (callback) callback();
    });
}

module.exports = {generatePDF};