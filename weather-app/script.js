const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

let userLocation = null;
function gotLocation(position) {
  userLocation = `${position.coords.latitude},${position.coords.longitude}`;
  loadWeather(userLocation);
}

function failedToGetLocation() {
  console.log("Could not get user location -- waiting for manual city search");
}

navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
async function getData(query) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`,
  );
  if (!response.ok) {
    throw new Error(`Weather API Error : ${response.status}`);
  }
  return await response.json();
}

function renderWeather(result){
  cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c} degree celsius`;
} 

async function loadWeather(query) {
  try{
    const res = await getData(query);
    renderWeather(res);
  }
  catch(err){
    console.error(err);
    cityName.innerText = "Could not fetch this city, try another city."
  }
}

async function searchCity() {
  const value = input.value.trim();
  if(!value) return;
  await loadWeather(value);
  // localStorage.setItem("name", result.location);
}

button.addEventListener("click", searchCity);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") searchCity();
});
