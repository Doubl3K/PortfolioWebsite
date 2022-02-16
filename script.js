let clock = document.getElementById('clock');

function time() {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();
  clock.textContent =
    ("0" + hour).substr(-2) + ":" + ("0" + min).substr(-2);
}

function timeZone() {
  let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return tz;
}

function clockwrapp() {
  let clockwrapper = document.getElementById('clockwrapper');
  let div = document.createElement('div')
  div.textContent = timeZone();
  clockwrapper.appendChild(div);
}
clockwrapp()
setInterval(time, 1000);
