function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('About Us', 'htmlService')
   .addToUi();
}

function htmlService() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createTemplateFromFile('aboutUs') //html file name that we've created
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setHeight(400)
  .setWidth(550);
  
  var response = ui.showModalDialog(html, '< LoremTech />');
  // Logger.log(response); logging this is optional
}
