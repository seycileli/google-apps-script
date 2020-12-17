function onOpen(e){
  SpreadsheetApp.getUi()
  .createMenu('Options')
  .addItem('Drive Manager', 'driveManager')
  .addToUi();
}
