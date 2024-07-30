 //select DOM elements
 currentTimeElement = document.querySelector(".current-time");

 //get Time
function timeFunc() {
    const Hours = new Date().getHours();
    const Minutes = new Date().getMinutes();
    currentTimeElement.innerHTML = `${Hours<10?`0${Hours}`:Hours}:${Minutes<10?`0${Minutes}`:Minutes}`;
  }
  
  timeFunc();
  setInterval(function(){
    timeFunc();
  },1000);