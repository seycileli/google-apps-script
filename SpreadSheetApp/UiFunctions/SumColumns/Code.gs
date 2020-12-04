function onOpen(e) {
  SpreadsheetApp.getUi()
   .createMenu('Advanced')
   .addItem('Content', 'buildContent')
   .addToUi();
}

function buildContent() {
  var ss = SpreadsheetApp.getActiveSheet();
  var sheet = SpreadsheetApp.getActive(); 
  var range = sheet.getRange('E1:E:10'); //hardcoded specific ranges as an example
  
  range.setFormula('B1+C1+D1'); //this will sum the specific row + column(s)
  range.setBackground('yellow'); //will highlight the background to yellow
  range.setFontColor('black');  //will set the font color to black
  range.setFontWeight('bold'); //will set the font to weight 
}
