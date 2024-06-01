/*********************************************************/
/***********TEMPLATES FOR HEADER AND FOOTER***************/
/*********************************************************/

/*****************************************/
const containerFooter = document.querySelector(".container-footer");
const navItems = [
  { name: "Home", path: "#/", status: true },
  { name: "Newer", path: "#/newer", status: false },
  { name: "Older", path: "#/older", status: false },
  { name: "Carbon", path: "#/carbon", status: false },
  { name: "Contact", path: "#/contact", status: false },
];

const path = window.location.pathname;
const page = path.substring(path.lastIndexOf("/") + 1, path.indexOf(".html"));
console.log(page);

/**This is the function to display Header anywhere*/
function displayHeader(items) {
  const templateListNav = items
    .map((item) => {
      if (item.status === true) {
        return `<li><a class="active" href="${item.path}">${item.name}</a></li>`;
      } else {
        return `<li><a class="" href="${item.path}">${item.name}</a></li>`;
      }
    })
    .join("");

  const navContact = `<div class="navbar">
    <h1>Benji Art</h1>
  <nav class="navigation">
    <ul class="goBack">
      <li><a class="" href="./index.html">Go Back</a></li>
    </ul>
  </nav>
</div>`;

  const navBar = `
  <div class="navbar">
        <div class="title-hamburger">
          <h1>Benji Art</h1>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>

        <nav class="navigation">
          <ul class="nav-items">
            ${templateListNav}
          </ul>
        </nav>
      </div>
      `;

  if (page === "index") {
    const containerHeader = document.querySelector(".container-header");
    containerHeader.innerHTML = navBar;
  } else {
    const containerHeader = document.querySelector(".container-header");
    containerHeader.innerHTML = navContact;
  }
}

/**This is the function for footer*/

function displayFooter() {
  return `
  <p>&copy; <span id="currentyear"></span> 🎨 Moisés Parra 🎨 México</p>
    <p id="lastModified"></p>
    <div class="social">
      <a href="https://www.facebook.com/artebenyi" target="_blank"><img src="images/face2Icon.png" alt="facebook icon" width="30" height="30"></a>
      <a href="https://www.instagram.com/artebenyi" target="_blank"><img src="images/instaIcon.png" alt="instagram icon" width="35" height="35"></a>
    </div>
    `;
}

displayHeader(navItems);

const footerContent = displayFooter();
containerFooter.innerHTML = footerContent;

/*The footer, LAST MODIFICATION*/
function lastModif() {
  const today = new Date();
  const currentYear = document.querySelector("#currentyear");
  currentYear.textContent = today.getFullYear();

  const lastModified = document.querySelector("#lastModified");
  const dateModif = document.lastModified;

  lastModified.innerHTML = `Last Modification: ${dateModif}`;
}

lastModif();
/************************** */
