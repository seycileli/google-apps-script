function myFunction() {
    var thrads = GmailApp.getThreads();
    var email = Session.getActiveUser().getEmail();    

    if (threads.length > 0) {
        GmailApp.sendEmail(email, 'email subject', threads[0].getMessageCount());
    }
}
