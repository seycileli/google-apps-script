function searchAndHighlight() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Looking for something?', 'Tell us and we\'ll highlight it for you', ui.ButtonSet.OK_CANCEL);
  var data = ss.getDataRange().getValues();
  var output = '<h1>Search results</h1>';
  
  for (var i = 0; i < data.length; i++) {
    
    for (var j = 0; j < data[i].length; j++) {
      Logger.log(data[i][j]);
      
      if (data[i][j] == response.getResponseText()) {
        output += 'Located @: ' + '[ Row: ' + (i +1) + '] | [ Column: ' + (j +1) + ' ]' + '<br>';
        ss.getRange((i +1), (j +1)).setBackground('yellow');
        
      } //closing braces if statement
      
    } //closing braces
  
  } //closing braces for-loop
  
  logOut(output);
  
} //closing braces for function

function logOut(message) {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createHtmlOutput('<h1>' + message + '</h1>');
  ui.showModalDialog(html, '< LOGO />');
}
