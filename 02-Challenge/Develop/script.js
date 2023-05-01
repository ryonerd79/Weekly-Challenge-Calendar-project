// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var amHour9 = $('#9AM');
var amHour10 = $('#10AM');
var amHour11 = $('#11AM');
var pmHour12 = $('#12PM');
var pmHour1 = $("#1PM");
var pmHour2 = $("#2PM");
var pmHour3 = $("#3PM");
var pmHour4 = $("#4PM");
var pmHour5 = $("#5PM");

var arrayForHour = [
  amHour9,
  amHour10,
  amHour11,
  pmHour12,
  pmHour1,
  pmHour2,
  pmHour3,
  pmHour4,
  pmHour5
];

var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(rightNow);

  

$(function () {
  



   for (i= 0; i < arrayForHour.length; i++ ) {
    arrayForHour.attr('class', 'row', 'time-block');
    $('hour').text(arrayForHour);
    var hour = arrayForHour[i];
   };
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
});
