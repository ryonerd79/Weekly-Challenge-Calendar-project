//var Declaration
const timeSpan = document.getElementById("time-date");

function updateTime() {
    let timeNow= dayjs();
    timeSpan.textContent = timeNow;
}

setInterval(updateTime, 1000);

//need time