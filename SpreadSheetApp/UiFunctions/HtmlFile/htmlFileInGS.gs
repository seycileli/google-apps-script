/* 
  If you'll like to test this out,
  Open a Google Sheets file
  
  Select Tools ->
          <> Script Editor
            
  Script editor should now be open, because this is a bounded script. No need to call the sheet by Id() or Url() i.g.
  Add the code below,
  Hit debug -> then run
  Allow file permissions
  Afterwards, you should now see a new menu option in your Sheets called 'Advance'
  Then select 'About Us'
*/

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
