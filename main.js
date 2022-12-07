var size = document.querySelector("div#size")
var move = document.querySelector("div#move")
var fire = document.querySelector("div#fire")
var years = document.querySelector("div#years")


function Animation() {
  size.setAttribute('class', 'txt-size');
  move.setAttribute('class', 'txt-move');
  fire.setAttribute('class', 'fireworks');
  
  setTimeout(function() {
      years.setAttribute('class', 'year');
  }, 800);
  
  setTimeout(function() {
    size.setAttribute('class', 'txt-back-size');
    move.setAttribute('class', 'txt-back-move');
  }, 3300);
  
}



function CountDown() {
	const now = new Date().getTime();
	var The_Day = new Date(2022,12,01,00,00,00).getTime();
	var distance = The_Day - now
	var mark = document.querySelector("div#text")
  var time = document.querySelector("div#real")
  
	if (distance < 0) {
		mark.innerHTML = 'Happy New Year!'
    Animation()
	} else {
		
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		if (days < 10) { days = "0" + days }
		if (hours < 10) { hours = '0' + hours }
		if (minutes < 10) { minutes = '0' + minutes }
		if (seconds < 10) { seconds = '0' + seconds }
    
    if (seconds == 40) {Animation()} //test

		var text = days + ' : ' + hours + ' : ' + minutes + ' : '+ seconds
		mark.innerHTML = text
		
	}
  
let today = new Date();
  
let month = today.getMonth() + 1;
let date = today.getDate();

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds() + 1;
  
if (hour < 10) { hour = '0' + hour }
if (minute < 10) { minute = '0' + minute }
if (second < 10) { second = '0' + second }
if (second == 60) { second = '00';                      minute = Number(minute) + 1}
if (month < 10) {month = '0' + month;}
if (date < 10) {date = '0' + date}
if (minute == 60) {minute = '00'; hour = Number(hour) + 1}
  
const timeStr = month + '/' + date + ' ' + hour + ':' + minute + ':' + second;
  
  time.innerHTML = timeStr
};



setInterval(CountDown, 1000)
