function myFunction() {
  var myDate = new Date('January 1, 2021'); // using JS Date() object
  var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', myDate); // < pass Date here
  Logger.log('Event ID: ' + event.getById());
}

function refactored() {
 var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', new Date('January 1, 2021'));
 Logger.log('Event ID: ' + event.getById());
}

// 😀 
