function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('Sidebar Menu', 'sidebarMenu')
   .addToUi();
}
