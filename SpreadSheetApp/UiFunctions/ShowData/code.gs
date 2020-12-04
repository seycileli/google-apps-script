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
