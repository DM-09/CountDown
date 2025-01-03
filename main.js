var y = 2023
var next_year = 2024

// Setting value
var bool = false
var firework = true
var yearinfo = true
var lang = 0
var dev = true
var endText = 'Hello, 2025!! <br> Happy New Year!'

var dday = Date.parse(`${next_year}/01/01 00:00:00`);

// fireworks
const container = document.querySelector('#main')
var fireworks = new Fireworks(container, { intensity : 15, traceSpeed: 5, delay : { min: 15, max: 40 } })

// functions

function CountDown() {
  var day = dday
  var now = new Date()
  var diff = day - now
  
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var mins = Math.floor(diff / (1000 * 60));
  var secs = Math.floor(diff / 1000);
  var d = days;
  var h = hours - days * 24;
  var m = mins - hours * 60;
  var s = secs - mins * 60;
 
  if (d < 10) { d = '0' + d }
  if (h < 10) { h = '0' + h }
  if (m < 10) { m = '0' + m }
  if (s < 10) { s = '0' + s }
  
  var text = `${d} : ${h} : ${m} : ${s}`
  if (diff > 0) {
    text = endText
    bool = true
    $('#countdown').addClass('grad')
    if (firework) { fireworks.start() }
  }
  return text
}
function RealTimer() {
  var now = new Date()
  var box = [now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getFullYear()]
  
  if (box[0] < 10) { box[0] = "0" + box[0] }
  if (box[1] < 10) { box[1] = "0" + box[1] }
  if (box[2] < 10) { box[2] = "0" + box[2] }
  if (box[3] < 10) { box[3] = "0" + box[3] }
  if (box[4] < 10) { box[4] = "0" + box[4] }
  
  var text = `${box[5]} ${box[0]}/${box[1]} ${box[2]}:${box[3]}:${box[4]}`
  
  return text
}
function name(year) {
  var a = "경신임계갑을병정무기"
  var b = "신유술해자축인묘진사오미"
  
  var a2 = "庚辛壬癸甲乙丙丁戊己"
  var b2 = "申酉戌亥子丑寅卯辰巳午未"
 
  var color = ['흰', '흰', '검은', '검은', '푸른', '푸른', '붉은', '붉은', '황금', '황금']
  
  var ani = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양']
  
  var text = `${year + '년: ' + a[year % 10] + b[year % 12] + '(' + a2[year % 10] + b2[year % 12] + ')년'} <br>　${color[year % 10]} ${ani[year % 12]}의 해`
  
  if (year % 4 == 0 && year % 100 != 0) {
    text += ', 윤년'
  } else if (year % 400 == 0) { text += ', 윤년' }
  
  if (!yearinfo) { return '' } 
  return "　" + text
}
function UpdateCountDown() {
  var date = new Date()
  var year = date.getFullYear()
  if (date.getMonth() == 0) {
    if (date.getDate() >= 7) { next_year = year + 1 }
  } else { next_year = year + 1 }
  dday = Date.parse(`${next_year}/01/01 00:00:00`);
}
function main() {
  UpdateCountDown()
  var timer = RealTimer()
  var down = CountDown()
  var NAME = name(new Date().getFullYear())
  
  var text = `<div id='ctimer'>${down}</div>
   <div id='real-timer' class='h5' style=" font-weight: bold; color:White;">${timer}</div>
  `
  $("#countdown").html(text)
  $("#name").html(NAME)
}

// Setting Functions
function ShowFireworks() {
  if (firework) { 
    firework = false
    fireworks.stop()
  }
  else { 
    firework = true
    if (bool) { fireworks.start() }
   }
}
function ShowYearinfo() {
  if (yearinfo) { yearinfo = false }
  else { yearinfo = true }
}
function language() {
  var ko = ['설정', '불꽃놀이 보기', '년도 정보 표시', '개발자 모드 활성화', '언어', '카운트다운 테스트', '-- 개발자 모드 --', '메시지 수정', '년도 정보 테스트']
  var en = ['Setting', 'Show fireworks', 'Show year info', 'Enable Dev Mode', 'Language', 'Test Countdown', '-- Dev Mode --', 'Change message', 'Year Information Test']
  var el = ['m_title', 'm_fw', 'm_yi', 'm_dev', 'lang', 'test', 'm_dla', 'settext', 'yearinfotest']
  
  if (lang) { lang = 0 }
  else { lang = 1 }
  
  if (lang) {
    for (var i=0; i < el.length; i++) {
      $('#'+el[i]).html(ko[i])
    }
  } else {
    for (var i=0; i < el.length; i++) {
      $('#'+el[i]).html(en[i])
    }
  }
}
function TestCountdown() {
  var now = new Date();
  now.setSeconds(now.getSeconds() + 10);
  dday = now
}
function Devmode() {
  if (dev) { dev = false }
  else { dev = true }
  
  var el = ['test', 'm_dla', 'settext', 'yearinfotest']
  
  if (dev) {
    for (var i=0; i < el.length; i++) {
       $('#' + el[i]).removeClass('hide')
    }
  } else {
     for (var i=0; i < el.length; i++) {
       $('#' + el[i]).addClass('hide')
    }
  }
}
function Settext() {
  var text = '바꿀 메시지를 입력하세요'
  if (!lang) { text = 'Please enter a message to replace' }
  var input = prompt(text, 'Happy New Year!')
  endText = input
}
function TestYearInfo() {
  var text = '년도 정보를 테스트할 년도를 입력하세요'
  if (!lang) { text = 'Enter the year for which you want to test year information.' }
  var input = prompt(text)
  alert(name(parseInt(input)).replace('<br>', '').replace('　', ''))
}

language()
Devmode()

setInterval(main, 1000)
