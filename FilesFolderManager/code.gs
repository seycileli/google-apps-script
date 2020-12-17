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

// G Drive Manager
function gDriveManager() {
  try {
    const html = HtmlService.createTemplateFromFile('index').evaluate();
    html.setWidth(1200).setHeight(900);
    SpreadsheetApp.getUi().showModalDialog(html, 'G-Drive Manager');

  } catch (e) {
    const html = HtmlService.createHtmlOutput(JSON.stringify(e));
      html.setWidth(600).setHeight(400);
      SpreadsheetApp.getUi().showModalDialog(html, 'Error');
    Logger.log(e);
  }
}
