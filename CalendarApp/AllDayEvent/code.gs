function myFunction() {
  var myDate = new Date('January 1 2021'); // using JS Date() object
  var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Set new goals for 2021!', myDate); // < pass Date here
}
