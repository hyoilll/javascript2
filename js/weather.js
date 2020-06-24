const weather = document.querySelector(".js_weather");

const API_KEY = "21bda8e399d110518c102ec4ec22ffa5";
const COORDS = "coords";

function getWeather(lat, lon) {
  //fetch - API를 호출해 데이터를 가져옴
  //then - fetch함수가 완전히 끝날 때까지 기다리다가 내부 수행
  fetch(
    `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const place_weather = json.weather[0].description;
      weather.innerText = `
      現在の温度 : ${temperature} ℃ 
      現在の位置 : ${place} 
      現在の天気 : ${place_weather}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//askForCoordsが成功すれば呼ばれる
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };

  saveCoords(coordsObj);

  getWeather(latitude, longitude);
}

//askForCoordsが失敗すれば呼ばれる
function handleGeoError() {
  console.log("Error");
}

function askForCoords() {
  //위도와 경도 불러오는 navigaotr클래스
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCords() {
  const loadedCords = localStorage.getItem(COORDS);

  if (loadedCords == null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords); //string to object
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCords();
}

init();
