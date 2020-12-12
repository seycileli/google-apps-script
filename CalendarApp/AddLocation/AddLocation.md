<h1>Google Apps Script</h1>
<h2>Class CalendarApp</h2>

<h2>How To:</h2><p> Add location to our previously created <a href="https://github.com/seycileli/google-apps-script/blob/main/CalendarApp/AllDayEvent/AllDayEvent.md">All Day Event</a> via Google Apps Script Tutorial</p>

<h1>Explanation:</h1>
So we're going to jump straight into it, if you've missed the previous. You can find the link above.
But basically what we'll is we'll extend the `createAllDayEvent()` as it has multiple options to this method.
We can add what we've previously seen, such as title, and date, at the end we'll add our location by using advanced parameters.

`function myFunction() {`
  
`var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', new Date(January 1, 2021),`
`{location: 'Home'})`

Here are some more options that you can add;

<table>
  <tr>
    <th>Type</th>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>String</td>
    <td>description</td>
    <td>The description of the event</td>
  </tr>
    <tr>
    <td>String</td>
    <td>location</td>
    <td>The location of the event.</td>
  </tr>
    <tr>
    <td>String</td>
    <td>guests</td>
    <td>Creates a new all-day event.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>sendInvites</td>
    <td>whether to send invitation emails (default: false)</td>
  </tr>
</table>

<a href="https://developers.google.com/apps-script/reference/calendar/calendar-app#createalldayeventtitle,-date,-options">Source</a>

<hr>
<h1>More info:</h1>
This is a simple 'getting started' tutorial.

You can do a lot more with this, besides just adding the Calendar Title and Date. You can add a starting and end date, location, 
also a daily or weekly recurrence.

To learn more about CalendarApp methods, you can visit the below

<a href="https://developers.google.com/apps-script/reference/calendar/calendar-app#getDefaultCalendar()">the below</a> 😀 


<hr>
<h1>Source:</h1>
<table>
  <tr>
    <th>Type</th>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Class</td>
    <td>CalendarApp</td>
    <td>Allows a script to read and update the user's Google Calendar.</td>
  </tr>
    <tr>
    <td>Method</td>
    <td>getDefaultCalendar</td>
    <td>Gets the user's default calendar.</td>
  </tr>
    <tr>
    <td>Method</td>
    <td>createAllDayEvent(title, date, options)</td>
    <td>Creates a new all-day event.</td>
  </tr>
</table>
