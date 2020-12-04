function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advanced')
   .addItem('Content', 'buildContent')
   .addToUi();
}
