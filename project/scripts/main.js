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

/*Object Art Works*/
/*Temples Object*/
const artWorks = [
  {
    nameWork: "Deset Eyes",
    yearCreation: 2018,
    size: "12x16 inches",
    technique: "Oil",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "The Canoe",
    yearCreation: 2015,
    size: "18x24 inches",
    technique: "Oil",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nameWork: "Aba Nigeria",
    yearCreation: "Aba, Nigeria",
    size: "2005, August, 7",
    technique: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
];
