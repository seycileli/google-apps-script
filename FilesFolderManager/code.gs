function onOpen(e){
  SpreadsheetApp.getUi()
  .createMenu('Options')
  .addItem('Tools', 'showModal')
  .addItem('Drive Manager', 'driveManager')
  .addToUi();
}

// Show Modal
function showModal(){
  const html = HtmlService.createHtmlOutput('<h1>Hello</h1>');
  html.setWidth(600).setHeight(400).setTitle('Pop Up');
  SpreadsheetApp.getUi().showModalDialog(html, 'Pop Up');
} //testing
