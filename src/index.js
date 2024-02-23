function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  console.log(response.data.temperature.console);
}

function searchCity(city) {
  let apikey = "9t5b364c049odb68c86a10ac1444f04e";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unit=metric`;
  axios.get(apiurl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormelement = document.querySelector("#search-form");
searchFormelement.addEventListener("submit", handleSearchSubmit);
