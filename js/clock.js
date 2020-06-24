const js_clock = document.querySelector(".main .js_clock .clock");

function loadData() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  js_clock.innerText = `${hour} : ${min} : ${sec}`;
}

function init() {
  loadData();

  setInterval(loadData, 1000);
}

init();
