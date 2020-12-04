/* 
  If you'll like to test this out,
  Open a Google Sheets file
  
  Select Tools ->
          <> Script Editor
            
  Script editor should now be open, because this is a bounded script. No need to call the sheet by Id() or Url() i.g.
  
  Add the code below,
  Then select File -> Create -> HTML File,
  give it the same name 'aboutUs' -> an aboutUs.html file is now created
  Next copy and paste.
  
  Once finished.
  
  Hit debug -> then Run
  
  Allow file permissions
  
  Lastly, you should now see a new menu option in your Sheets called 'Advance'
  Then select 'About Us'
  You should now see your HTML file
*/

function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('About Us', 'htmlService')
   .addSeparator()
   .addItem('Sidebar About Us', 'htmlServiceTwo')
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

//if you prefer a sidebar over a modal, you can do so with the below

function htmlServiceTwo() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createTemplateFromFile('aboutUs') //html file name that we've created
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setHeight(400)
  .setWidth(550);
  
  SpreadsheetApp.getUi().showSidebar(html);
}

