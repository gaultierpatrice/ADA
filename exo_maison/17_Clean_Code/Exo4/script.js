async function fetchWeatherByCity(cityLat, cityLong, city) {
  let resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${cityLat}&longitude=${cityLong}&current=temperature_2m,rain`
  );

  let json = await resp.json();

  console.log(json.current.rain);
  document.getElementById(`pluie_${city}`).innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById(`degres_${city}`).innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";
}

const LAT_PARIS = 48.8534;
const LONG_PARIS = 2.3488;

fetchWeatherByCity(LAT_PARIS, LONG_PARIS, "paris");

const LAT_LYON = 45.75;
const LONG_LYON = 4.85;

fetchWeatherByCity(LAT_LYON, LONG_LYON, "lyon");

const LAT_NANTES = 47.2173;
const LONG_NANTES = -1.5534;

fetchWeatherByCity(LAT_NANTES, LONG_NANTES, "nantes");

const LAT_MARSEILLE = 43.3;
const LONG_MARSEILLE = 5.4;

fetchWeatherByCity(LAT_MARSEILLE, LONG_MARSEILLE, "marseille");

const LAT_LILLE = 50.633333;
const LONG_LILLE = 3.066667;

fetchWeatherByCity(LAT_LILLE, LONG_LILLE, "lille");
