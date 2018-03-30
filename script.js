var time = new Date().getHours();  //represents current hour (1-24)
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

// Setting up clock to increment once every second on its own, also changes messages and pictures with clock time change
var updateClock = function() {

  var message = document.getElementById("timeEvent");
  var messageText;
  var lolcatImage = document.getElementById("lolcatImage");
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

  if (time == partyTime) {
  	messageText = "IZ PARTEE TIME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  } else if (time == napTime) {
  	messageText = "IZ NAP TIME...";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (time == lunchTime) {
  	messageText = "IZ NOM NOM NOM TIME!!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  } else if (time == wakeupTime) {
  	messageText = "IZ TIME TO  GETTUP!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  } else if (time < noon){
  	messageText  = "Good Morning!";
    image = "http://i.dailymail.co.uk/i/pix/2016/09/23/13/38B62A9400000578-3803995-image-a-115_1474633842301.jpg";
  } else if (time > evening){
  	messageText  = "Good Evening!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  } else {
  	messageText  = "Good Afternoon!";
    image = "http://i.dailymail.co.uk/i/pix/2014/10/06/1412613364603_wps_17_SANTA_MONICA_CA_AUGUST_04.jpg";
  }

  message.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();
};

// function to create working clock with current time on page
var showCurrentTime = function(){
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// party Time Button change text, color and image
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // changes button to read "Party TIME"
      partyTimeButton.innerText = "PARTY TIME!";
      // change color of the button to blue
      partyTimeButton.style.backgroundColor = "magenta";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // changes button to read "PARTY OVER!"
      partyTimeButton.innerText = "PARTY OVER!";
      // change color of the button to black
      partyTimeButton.style.backgroundColor = "#222";
   }
};


// event listener for wakeUpTime Selector to change time
var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

// event listener for lunchTime Selector
var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

// event listener for napTime Selector
var napEvent = function() {
  napTime = napTimeSelector.value;
};

// event listeners
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napTimeEvent);
