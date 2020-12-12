function myFunction() {
  var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', 
  new Date('January 1, 2021'), {location: 'Home'});
  Logger.log('Event ID:' + event.getById());
}
