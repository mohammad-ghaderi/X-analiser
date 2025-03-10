Dim excelPath, pdfPath
excelPath = WScript.Arguments(0)
pdfPath = WScript.Arguments(1)

On Error Resume Next
Set excel = CreateObject("Excel.Application")
excel.Visible = False
Set workbook = excel.Workbooks.Open(excelPath)

If Err.Number = 0 Then
    workbook.ExportAsFixedFormat 0, pdfPath
    WScript.Echo "PDF generated at: " & pdfPath
Else
    WScript.Echo "Error: " & Err.Description
End If

workbook.Close False
excel.Quit

Set workbook = Nothing
Set excel = Nothing
