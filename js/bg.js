const body = document.querySelector("body");

const IMG_NUM = 12;

function genRandom() {
  const number = Math.random() * IMG_NUM + 1;
  return Math.floor(number);
}

function showBackGround() {
  const randomNumer = genRandom();
  const img = new Image();
  img.src = "../image/" + randomNumer + ".jpg";
  img.className = "background";

  body.appendChild(img);
}

function init() {
  showBackGround();
  setInterval(showBackGround, 2000);
}

init();
