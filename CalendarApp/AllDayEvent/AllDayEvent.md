<h1>Google Apps Script</h1>
<h2>Class CalendarApp</h2>

<h2>How To:</h2><p> Set an All Day event via Google Apps Script Tutorial</p>

<h3>Firstly</h3>
We'll have to create our instance variable and assign its value to JS object Date, within the params we can place our date.

`function myFunction() {`

  `var myDate = new Date('January 1, 2021');`
  
`}`

<h3>Secondly</h3>
We'll create another variable here. We'll name this one 'event' since we'll be using the built-in CalendarApp method `createAllDayEvent()`
along with using our default calendar.

`var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', myDate);`

<h3>Lastly</h3>
Let's log this out and check if it works!

`Logger.log('Event ID:', event.getId());`
<hr>

<h1>Refactoring the above:</h1>

`function myFunction() {`

  `var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!',`
  `new Date('January 1, 2021'));`
  
  `Logger.log('Event ID: ' + event.getId());`
`}`

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
    <td>createAllDayEvent(title, date)</td>
    <td>Creates a new all-day event.</td>
  </tr>
  <tr>
</table>
