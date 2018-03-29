var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var message = document.getElementById("timeEvent");

if (time == partyTime) {
	messageText = "IZ PARTEE TIME!";
} else if (time == napTime) {
	messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	messageText = "IZ NOM NOM NOM TIME!!!";
} else if (time == wakeupTime) {
	messageText = "IZ TIME TO  GETTUP!";
} else if (time < noon){
	messageText  = "Good Morning!";
} else if (time > evening){
	messageText  = "Good Evening!";
} else {
	messageText  = "Good Afternoon!";
}
// console.log(messageText);

message.innerText = messageText;
