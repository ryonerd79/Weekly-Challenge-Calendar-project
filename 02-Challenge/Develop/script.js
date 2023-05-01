// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
/*var amHour9 = $('#9AM');
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

var arrayTime = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"


]*/
$('.time-block').each(function() {
 var blockHour = parseInt($(this).attr('id').split('-')[1]);
 var currentHour = dayjs().hour()
 if(blockHour < currentHour) {
    $(this).addClass('past');
 }else if (currentHour === blockHour) {
  $(this).addClass('present');
 } else {
  $(this).addClass('future');
 };
});

var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(rightNow);
$('.saveBtn').click(function() {
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, value);
});

$('#hour-9 .description').val(localStorage.getItem('hour-9'));

/*$(function () {
  
  for (i= 0; i < arrayForHour.length; i++) {
   arrayForHour[i].attr('class', 'container-lg px 5 row time-block col-2 col-md-1 hour py-3');
   arrayForHour[i].text(arrayTime[i]);
   
   };

   for (i= 0; i < arrayForHour.length; i++) {
      $('root').addClass("row time-block");
      textarea.text(arrayTime[i]);

   }; 
   
});*/
