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
