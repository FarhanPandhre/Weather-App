const apikey = `5c94588d16610195ee06853344d07553`;
const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const searchbar = document.querySelector(".search-bar");
const button = document.querySelector(".button");
const weather = document.querySelector("#weather");

// const API = `https://api.openweathermap.org/data/2.5/weatherq=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


// get weather section
const getWeather = async(city) => {
  // weather.innerHTML = `<h2> Loading... <h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
//   console.log(data);
  return showWeather(data);
};
// if (data.cod == "404") {
//         input.innerHTML = `<p>Please enter valid city name</p>`
//           return;
//     }

//showcase of weather
const showWeather = (data) => {
    console.log(data);
//   if (data.cod == "404") {
//       weather.innerHTML = `<p>Please enter valid city name</p>`
//       return;
//   }
  weather.innerHTML = `
       <img class="weather-img" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
       <h2 class="temp">${data.main.temp}°C</h2>
       <p class="weather-eff">${data.weather[0].description}</p>
       <h3 class="city-name">Weather in ${data.name}</h3>
    <div class="weather-prop">
        <p class="prop1">Speed: ${data.wind.speed}kmph</p>
        <p class="prop2">Humidity: ${data.main.humidity}%</p>
    </div>
    `
       ;
};

//Event done part
form.addEventListener("submit", function (event) {
  getWeather(searchbar.value);
  event.preventDefault();
});

