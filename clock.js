
function clock() {
  var weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");

  var now = new Date();

  var year = now.getFullYear();

  var month = now.getMonth();

  var date = now.getDate();

  var day = weeks[now.getDay()];

  var hour = now.getHours();

  var minute = now.getMinutes();

  var second = now.getSeconds();

  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

　// 大体時計
  var aboutTime;

  if (minute == 0) {
    aboutTime = hour + "時丁度";
  } else if (0 < minute && minute < 25) {
    aboutTime = hour + "時前半";
  } else if (25 <= minute && minute <= 35) {
    aboutTime = hour + "時半頃";
  } else if (25 < minute && minute <= 59) {
    aboutTime = hour + "時後半"
  }

  //日時
  document.getElementById("clock_date").innerHTML = year + "/" + month + "/" + date + "(" + day + ")";
  //大体の時間
  document.getElementById("about_time").innerHTML = aboutTime;
  //正確な時間
  document.getElementById("clock_time").innerHTML = hour + ":" + minute + ":" + second;
  //フォントサイズ
  document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";




}


setInterval(clock, 1000);

// 〇時丁度　前半　半頃　後半
