<h1>Google Apps Script - Class GmailApp</h1>

<div>
<h1>How To:</h1>
<h3>Retrieve Google Chat and send to Email Tutorial</h3>

We'll start off with creating our variable and assigning its value to the class `GmailApp`, and using its built-in method `getChatThreads();`

<hr>
<strong>PAUSE</strong>
<p>
To retrieve ALL content within your Google Chat, use `getChatThreads();`

But if you're looking for a specific range, you can set the value starting from 0, to maximum of 50 for example. `getChatThreads(0, 50);`</p>

<p>To learn more - click <a href="https://developers.google.com/apps-script/reference/gmail/gmail-app#getchatthreadsstart,-max">here</a><p>

<strong>CONTINUING</strong>
<hr>

Let's also retrieve the user we're chatting with. We can do so with;

`var email = Session.getActiveUser().getEmail();`

<h2>Info on the class / methods</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>Session</td>
    <td>Class</td>
    <td>The Session class provides access to session information, such as the user's email address (in some circumstances) and language setting.</td>
  </tr>
  <tr>
    <td>getActiveUser()</td>
    <td>Method</td>
    <td>Gets information about the current user.</td>
  </tr>
  <tr>
    <td>getEmail()</td>
    <td>Method</td>
    <td>Gets the user's email address, if available.</td>
  </tr>
</table>

From there we can use a conditional statement to check if the number of threads are equal to / or greater than 1. If this condition happens to be true we'll
bring back the class GmailApp and use it's built in method again, but this time `sendEmail();` which goes as follows:

`GmailApp.sendEmail('hello@world.com', 'email subject', 'email body - hey this is cool');`

So, because we've created a variable earlier to getActiveUser(); we can pass that within the `sendEmail()` parameters, also we're looking to retrieve the chat.
Therefore we'll pass in the first variable we've created when we assigned it's value to `getChatThreads();`

<a href="https://github.com/seycileli/google-apps-script/blob/main/GmailApp/GetChatThreads/code.gs">End result</a>

After completion and running the code, you should be emailed with the number of threads from the chat.

</div>
