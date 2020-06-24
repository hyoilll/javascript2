const body = document.querySelector("body");

const IMG_NUM = 12;

function genRandom() {
  const number = Math.random() * IMG_NUM + 1;
  return Math.floor(number);
}

const img = new Image();

function changeImgSrc() {
  const randomNumer = genRandom();
  img.src = "../image/" + randomNumer + ".jpg";
}

function showBackGround() {
  const randomNumer = genRandom();
  img.src = "../image/" + randomNumer + ".jpg";
  img.className = "background";

  body.appendChild(img);
}

function init() {
  showBackGround();

  setInterval(changeImgSrc, 2000);
}

init();
