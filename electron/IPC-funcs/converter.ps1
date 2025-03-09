param(
    [string]$excelPath,
    [string]$pdfPath
)

try {
    # Create Excel application object
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false  # Keep Excel invisible

    # Open the Excel workbook
    $workbook = $excel.Workbooks.Open($excelPath)

    # Export to PDF
    $workbook.ExportAsFixedFormat(0, $pdfPath)

    Write-Host "PDF generated at: $pdfPath"
} catch {
    Write-Host "Error occurred: $_"
} finally {
    # Close the workbook and Excel application
    if ($workbook) {
        $workbook.Close($false)
    }
    $excel.Quit()

    # Release COM objects
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($workbook)
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel)
}
