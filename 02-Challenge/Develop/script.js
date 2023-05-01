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
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


