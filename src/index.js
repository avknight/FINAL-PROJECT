function searchCity(city) {
  let apikey = "9t5b364c049odb68c86a10ac1444f04e";
  let apiUrl =
    '"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"';
}
console.log(apiUrl);
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormelement = document.querySelector("#search-form");
searchFormelement.addEventListener("submit", handleSearchSubmit);
