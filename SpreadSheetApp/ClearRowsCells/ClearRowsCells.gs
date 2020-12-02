/**
clearing data in specific position
Let's aim for starting position: row = 7, column = 4
The number of: rows = 1, columns = 2
*/

function myFunction() {
  var ss = SpreadsheetApp.openById('insert-sheets-id-here');
  var sheet = ss.getSheets()[0];
  
  var range = sheet.getRange(7, 4, 1, 2); //for example
  var arr = [
  ['','']
  ]; //replacing with empty string tags
  
  range.setValues(arr);
}
