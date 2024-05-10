const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;

/*The logic for the windchill*/
const windChillHolder = document.querySelector("#chill");

let temp = 32;
let wind = 29;

function windChill(temperature, wind) {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * wind ** 0.16 +
    0.3965 * temperature * wind ** 0.16
  ).toFixed(2);
}

if (temp <= 10 && wind > 4.8) {
  const windChillToday = windChill(temp, wind);
  windChillHolder.innerHTML = `${windChillToday}&#176;C`;
} else {
  windChillHolder.textContent = "N/A";
}
