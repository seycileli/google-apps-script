function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('All Formatting', 'clearFormat')
   .addToUi();
}

function clearFormat() {
  var ss = SpreadsheetApp.getActiveSheet().getActiveRange();
  ss.clearFormat();
}
