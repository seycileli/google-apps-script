function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet(); //can also use openById(); method here
    var sheet = ss.getActiveSheet(); //can also use getSheetByName();
    var test = GmailApp.getUserLabelByName(‘test’); // <- adding chat to your Gmail label name
    var email = test.getThreads();

    for (var i = 0; I < email.length; I++) {
      var msg = email[I].getMessages();

      for (var I = 0; I < msg.length; I++) {
        var fromSender = msg[i].getFrom();
        var subject = msg[i].getSubject();
        var message = msg[i].getBody();
        var dateSent = msg[i].getDate();
        msg[i].star();

        sheet.appendRow( [fromSender, subject, message, dateSent ] );
      } //for-loop
      
    } //for-loop
}
