function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('Sidebar Menu', 'sidebarMenu')
   .addToUi();
}

function sidebarMenu() {
  var html = HtmlService.createTemplateFromFile('getData')
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  SpreadsheetApp.getUi().showSidebar(html); //passing variable name here
}

function getData(data) {
  Logger.log(data);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var theValue = sheet.getDataRange().getValues();
  
  var rowNumber = sheet.getActiveCell().getRow();
  //var columnNumber = sheet.getActiveCell().getColumn();
  
  return {'cell': theValue[rowNumber -1], 'headings': theValue[0]};
}
