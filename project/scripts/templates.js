const containerFooter = document.querySelector(".container-footer");
const navItems = ["Home", "Newer", "Older", "Pencil"];
function displayHeader(items) {
  const templateListNav = items
    .map(
      (item) => `<li><a href="#" id="${item}" title="${item}">${item}</a></li>`
    )
    .join("");

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

  const containerHeader = document.querySelector(".container-header");
  containerHeader.innerHTML = navBar;
}

function displayFooter() {
  return `
  <p>&copy; <span id="currentyear"></span> | Moisés Parra | México</p>
    <p id="lastModified"></p>
    <div class="social">
      <a href="#" target="_blank"><img src="images/face2Icon.png" alt="facebook icon" width="30" height="30"></a>
      <a href="#" target="_blank"><img src="images/instaIcon.png" alt="instagram icon" width="35" height="35"></a>
    </div>
    `;
}

displayHeader(navItems);

const footerContent = displayFooter();
containerFooter.innerHTML = footerContent;
