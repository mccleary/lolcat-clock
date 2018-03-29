var time = new Date().getHours();  //represents current hour (1-24)
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

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
// console.log(messageText);

message.innerText = messageText;
lolcatImage.src = image;
