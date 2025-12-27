// Value
var endText = 'Happy New Year!'
var dday = new Date()

var con = document.querySelector('#con')
var fireworks = new Fireworks(con, { intensity : 15, traceSpeed: 7, delay : { min: 5, max: 30 }, rocketsPoint: { min: 50, max: 50 }, })

function padnum(x, n) {
  // x: 숫자(문자열), n: 자릿수
  return String(x).padStart(n, '0')
}

function AutoYear() {
  // 1월 1일인 경우에만 메시지 출력
  // 나머지 날엔 자동으로 다음 해 계산
  var now = new Date()
  var year = now.getFullYear()
  if (!(now.getMonth() == 0 && now.getDate() < 2)) {
    year += 1
  }
  dday = Date.parse(`${year}/01/01 00:00:00`)
}

function LiveTimer() {
  var now = new Date()
  var y = now.getFullYear()
  var m = padnum(now.getMonth() + 1, 2)
  var d = padnum(now.getDate(), 2)
  var h = padnum(now.getHours(), 2)
  var mi = padnum(now.getMinutes(), 2)
  var s = padnum(now.getSeconds(), 2)
  
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
}

function Countdown() {
  var dff = dday - new Date()
  
  var dd = Math.floor(dff / (1000*60*60*24))
  var hh = Math.floor(dff / (1000*60*60))
  var mm = Math.floor(dff / (1000*60))
  var ss = Math.floor(dff / 1000)
  
  var d = padnum(dd, 2)
  var h = padnum(hh - dd * 24, 2)
  var m = padnum(mm - hh * 60, 2)
  var s = padnum(ss - mm * 60, 2)
  
  var text = `${d} : ${h} : ${m} : ${s}`
  if (dff < 0) {
    text = endText
    fireworks.start()
    $('#cd').addClass('grad')
  }
  return text
}

function name(year) {
  var a = "경신임계갑을병정무기"
  var b = "신유술해자축인묘진사오미"
  
  var a2 = "庚辛壬癸甲乙丙丁戊己"
  var b2 = "申酉戌亥子丑寅卯辰巳午未"
 
  var color = '흰 흰 검은 검은 푸른 푸른 붉은 붉은 황금 황금'.split(' ')
  var ani = '원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양'.split(' ')
  
  var text = `${year}년: ${a[year%10]}${b[year%12]}(${a2[year%10]}${b2[year%12]})년 <br> ${color[year%10]} ${ani[year%12]}의 해`
  
  if (year % 4 == 0 && year % 100 != 0) {
    text += ', 윤년'
  } else if (year % 400 == 0) { text += ', 윤년' }
  
  return text
}


function main() {
  var realtime = LiveTimer()
  var ctxt = Countdown()
  var yearInfo = name(new Date().getFullYear())
  
  $('#cd').html(ctxt)
  $('#lc').html(realtime)
  $('#info').html(yearInfo)
}

AutoYear()
main()
setInterval(main, 1000)


// Dev Mode
var cnt = 0

function DevMode() {
  cnt += 1
  if (cnt > 2) {
    $('#dev').removeClass('hide')
  }
}

function OffDev() {
  $('#dev').addClass('hide')
}

function test() {
  var now = new Date()
  now.setSeconds(now.getSeconds() + 10)
  dday = now
}

function test2() {
  var input = prompt('연도 정보를 테스트할 연도를 입력하세요')
  alert(name(parseInt(input)).replace('<br>', '').replace('　', ''))
}

function setText() {
  endText = prompt('바꿀 메시지를 입력하세요', 'Happy New Year!')
}
