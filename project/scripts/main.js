/*The footer, LAST MODIFICATION*/
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;

/*Hamburguer NAV*/
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
});

/*Get data of art works from a JSON*/
async function getData() {
  const response = await fetch("./artsData/artWorks.json");
  const data = await response.json();
  return data;
}

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function getArts() {
  const artWorks = await getData();
  const randomArtWorks = randomArray(artWorks).slice(0, 3);
  const artsHolder = document.querySelector(".cards-arts");
  const templateCards = randomArtWorks.map(
    (art) =>
      `<div class="artCard">
      <div class="infoArt">
        <h2>${art.nameWork}</h2>
        <ul class="dataArt">
          <li><span class="label">Year: </span>${art.yearCreation}</li>
          <li><span class="label">Size: </span>${art.size}</li>
          <li><span class="label">Technique: </span>${art.technique}</li>
        </ul>
      </div>
      <div class="imageSection">
        <picture>
          <img src="${art.imageUrl}" alt="${art.nameWork} art" width="400" height="300" loading="lazy"></img>
        </picture>
      </div>
    </div>`
  );
  artsHolder.innerHTML = templateCards.join("");
}

getArts();
