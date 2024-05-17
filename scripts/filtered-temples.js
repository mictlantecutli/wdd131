const hamburger = document.querySelector(".hamburger");

const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  hamburger.classList.toggle("open");
});

/*The footer, LAST MODIFICATION*/
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;

/**********WEEK 04********/
/*Temples Object*/
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Marden, Australia",
    dedicated: "1999, June, 15",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg",
  },
  {
    templeName: "Concepcion Chile",
    location: "Bio-Bio, Chile",
    dedicated: "2018, October, 28",
    area: 7011,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/02-Concepcion-Chile-Temple-2113675.jpg",
  },
  {
    templeName: "Veracruz Mexico",
    location: "Boca del Rio, Veracruz ",
    dedicated: "2000, July, 9",
    area: 2073,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/veracruz-mexico/400x250/veracruz-mexico-temple-lds-83516-wallpaper.jpg",
  },
];

/* Temples card**/

function cardTemple(array) {
  const template = array.map(
    (item) =>
      `<div class="templeCard">
      <div class="infoTemple">
        <h2>${item.templeName}</h2>
        <ul class="dataTemple">
          <li><span class="label">Location: </span>${item.location}</li>
          <li><span class="label">Dedicated: </span>${item.dedicated}</li>
          <li><span class="label">Size: </span>${item.area}</li>
        </ul>
      </div>
      <div class="imageSection">
        <picture>
          <img src="${item.imageUrl}" alt="Temple of ${item.templeName}" width="400" height="200" loading="lazy"></img>
        </picture>
      </div>
    </div>`
  );
  const holderTemples = document.querySelector(".images-temples");
  holderTemples.innerHTML = template.join("");
}

cardTemple(temples);

/***FILTERING*****/

/**Render HOME PAGE*/
/**Render Old temples below 1900*/

const menu = document.querySelector(".nav-items");
//const oldLink = document.querySelector("#old");
menu.addEventListener("click", (event) => {
  const titlePage = document.querySelector("#title-page");
  if (event.target.textContent.toLowerCase() == "old") {
    titlePage.textContent = "Old Temples";
    let oldTemplesArr = temples.filter(
      (temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900
    );
    cardTemple(oldTemplesArr);
  } else if (event.target.textContent.toLowerCase() == "home") {
    titlePage.textContent = "Home";
    cardTemple(temples);
  } else if (event.target.textContent.toLowerCase() == "new") {
    titlePage.textContent = "New Temples";
    let newTemplesArr = temples.filter(
      (temple) => parseInt(temple.dedicated.substring(0, 4)) >= 2000
    );
    cardTemple(newTemplesArr);
  } else if (event.target.textContent.toLowerCase() == "large") {
    titlePage.textContent = "Large Temples";
    let largerTemplesArr = temples.filter(
      (temple) => parseInt(temple.area) >= 90000
    );
    cardTemple(largerTemplesArr);
  } else if (event.target.textContent.toLowerCase() == "small") {
    titlePage.textContent = "Small Temples";
    let smallTemplesArr = temples.filter(
      (temple) => parseInt(temple.area) <= 10000
    );
    cardTemple(smallTemplesArr);
  }
});
