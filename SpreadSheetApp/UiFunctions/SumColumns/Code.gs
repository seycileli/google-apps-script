function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advanced')
   .addItem('Content', 'buildContent')
   .addItem('Show Info', 'showInfo')
   .addToUi();
}
