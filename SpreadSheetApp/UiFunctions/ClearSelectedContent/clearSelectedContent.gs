function clearSelectedContent() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveRange();
  ss.clearContent();
}
