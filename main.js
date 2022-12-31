var bool = 0
var be_year = 2022 //현재 년도 -기본 값: 2022
var af_year = 2023 //새해 년도 -기본 값: 2023
var is = 0

var full = 'https://user-images.githubusercontent.com/112751504/208221388-7468a028-17da-4eee-a2be-70a200fa0d79.png'

var no = 'https://user-images.githubusercontent.com/112751504/208221578-ebb13ce5-0cf4-4ee3-b9a8-89c2f6a8dac7.png'

var playing = 'https://user-images.githubusercontent.com/112751504/208221987-6bc88e7e-9fff-41e5-88b3-4e8dc2c03fb1.png'

function goGithub() {
  location.replace('https://github.com/DM-09/CountDown');
}

function toggleFullScreen() {
  var btn = document.querySelector("img#fulls")
  
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    btn.src = full
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      btn.src = no
    }
  }
}

function AutoYear() { //새해 7일 후 자동으로 년도를 바꿔줌
  let date = new Date();
  let day = date.getDate()
  
  if (day >= 1) {
    let year = date.getFullYear()
    be_year = year
    af_year = year + 1
  }
}

function Animation() {
  if (bool == 0) {
    var year = document.querySelector("div#target")
    var shell = document.querySelector("div#pos")
    var fire = document.querySelector("div#fire")
    
    //play animation
    fire.setAttribute('class', 'fireworks');
    shell.setAttribute('class', 'animation');
    setTimeout(function() {
       year.innerHTML = af_year
       TypeHangul.type('#target');
    }, 3500);
  }
} 

function play() {
  var playa = document.querySelector("img#playa")
  
  if (is == 0) {
    Animation()
    playa.src = playing
    is = 1
  } else {
    location.replace('https://dm-09.github.io/CountDown/');
  }
}

function CountDown() {
	const now = new Date().getTime();
	var The_Day = new Date(be_year,12,01,00,00,00).getTime();
	var distance = The_Day - now
	var mark = document.querySelector("div#text")
  var time = document.querySelector("div#real")
  
	if (distance < 0) {
		mark.innerHTML = 'Happy New Year!'
    Animation()
    bool = 1
	} else {
		
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		if (days < 10) { days = "0" + days }
		if (hours < 10) { hours = '0' + hours }
		if (minutes < 10) { minutes = '0' + minutes }
		if (seconds < 10) { seconds = '0' + seconds }

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
  AutoYear()
};

AutoYear()

setInterval(CountDown, 1000)
