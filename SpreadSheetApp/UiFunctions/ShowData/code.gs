function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advance')
   .addItem('About Us', 'htmlService')
   .addSeparator()
   .addSubMenu(SpreadsheetApp.getUi().createMenu('Clear')
               .addItem('All Formatting', 'clearFormat')
               .addItem('Selected Content', 'clearSelectedContent')
               ) // end of Clear Sub Menu
   .addItem('Search', 'highlightContact')
   .addItem('Sidebar Menu', 'sidebarMenu')
   .addToUi();
}
