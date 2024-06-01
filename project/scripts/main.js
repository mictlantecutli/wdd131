const allLinks = document.querySelectorAll("li a");
let containerMain = document.querySelector(".container");
let profileSection = document.querySelector(".profile");
const pathname = window.location.pathname;
const pageName = pathname.substring(
  pathname.lastIndexOf("/") + 1,
  pathname.indexOf(".html")
);
let getVisits = parseInt(localStorage.getItem("numReviews")) || 0;

const artistProfile = {
  name: "Benjamín",
  lastName: "Parra",
  image: "./images/benyi.webp",
  bio01:
    "I am a designer and artist, whose main objective is that the people can use my art, and feel satisfaction find satisfaction in managing her/his feelings and thoughts through composition, color and lines. Well, it is well known that our mind is a stage and is fed by everything we observe.",
  bio02:
    "To each stroke an action, and to each work a story..... I want to share a little of what gives meaning to my life and the little I know about painting, so that you can feel the same joy as I feel when I see a finished work, I can only say: enjoy what you do.",
};

/*Hamburguer NAV*/
function burguerNav() {
  if (pageName === "index") {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-items");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  } else {
    console.log("it does not fit here");
  }
}

burguerNav();

/*Get data of art works from a JSON*/
async function getData() {
  const response = await fetch("./artsData/artWorks.json");
  const data = await response.json();
  return data;
}

/**This function id for the home to chose randomly three arts*/
function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**function template cards*/
function cardHtmlTemplate(objArt) {
  return `

  <div class="artCard">
      <div class="infoArt">
        <h2>${objArt.nameWork}</h2>
        <ul class="dataArt">
          <li><span class="label">Year: </span>${objArt.yearCreation}</li>
          <li><span class="label">Size: </span>${objArt.size}</li>
          <li><span class="label">Technique: </span>${objArt.technique}</li>
        </ul>
      </div>
      <div class="imageSection">
        <picture>
          <img src="${objArt.imageUrl}" alt="${objArt.nameWork} art" width="400" height="300" loading="lazy"></img>
        </picture>
      </div>
    </div>`;
}

/*Function to render the profile artist section*/
function artistProfileTemplate(info) {
  return `
  <h2>Profile</h2>
  <div class="artistCard">
      <div class="infoProfile">
        <h2>${info.name} ${info.lastName}</h2>
        <p>${info.bio01}</p><br>
        <p>${info.bio02}</p>

      </div>
      <div class="imageArtist">
        <picture>
          <img src="${info.image}" alt="picture of ${info.name} ${info.lastName}" width="400" height="394" loading="lazy"></img>
        </picture>
      </div>
    </div>
    <div class="interLine"></div>
    `;
}

/*This code is to get arts data, and the the work of every page*/
async function getArts(selectedLink) {
  const artWorks = await getData();
  const randomArtWorks = randomArray(artWorks).slice(0, 3);
  const artsHolder = document.querySelector(".cards-arts-holder");
  const titlePage = document.querySelector("#title-page");

  function renderArts(arts) {
    artsHolder.innerHTML = arts.map((art) => cardHtmlTemplate(art)).join("");
  }

  //**CODE FOR CONTACT FORM */
  function renderContact() {
    return `<form method="get" action="opinionSaved.html" class="formOpinion">
    <fieldset class="contact">
        <legend>How did my work make you feel?, let's talk</legend>
        <label for="name">Name*: <input type="text" id="name" name="name" required></label>
        <label for="email">Email*: <input type="email" id="email" name="email" required></label>                 
        <label for="textarea">Message:</label>
        <textarea id="textarea" name="textarea" rows="7"></textarea>  
        <input id="submitCommentBtn" type="submit" value="Send Your Opinion">
    </fieldset> 
</form>`;
  }

  if (selectedLink === "home") {
    titlePage.textContent = "Welcome to Benji Art";
    let cardsHeadSection = document.querySelector(".artsH2");
    cardsHeadSection.style.display = "block";
    const contentProfile = artistProfileTemplate(artistProfile);
    if (profileSection.children.length === 0) {
      profileSection.innerHTML += contentProfile;
    }
    renderArts(randomArtWorks);
  } else if (selectedLink === "newer") {
    let cardsHeadSection = document.querySelector(".artsH2");
    cardsHeadSection.style.display = "none";
    if (profileSection.children.length > 0) {
      profileSection.innerHTML = "";
    }
    let newArts = artWorks.filter((art) => art.yearCreation >= 2015);
    titlePage.textContent = "Newer Arts";
    renderArts(newArts);
  } else if (selectedLink == "older") {
    let cardsHeadSection = document.querySelector(".artsH2");
    cardsHeadSection.style.display = "none";
    if (profileSection.children.length > 0) {
      profileSection.innerHTML = "";
    }
    let oldArts = artWorks.filter((art) => art.yearCreation < 2015);
    titlePage.textContent = "Older Arts";
    renderArts(oldArts);
  } else if (selectedLink == "carbon") {
    let cardsHeadSection = document.querySelector(".artsH2");
    cardsHeadSection.style.display = "none";
    if (profileSection.children.length > 0) {
      profileSection.innerHTML = "";
    }
    let carbonArts = artWorks.filter(
      (art) => art.technique.toLowerCase() == "carbon"
    );
    titlePage.textContent = "Carbon Arts";
    renderArts(carbonArts);
  } else if (selectedLink == "contact") {
    let cardsHeadSection = document.querySelector(".artsH2");
    cardsHeadSection.style.display = "none";
    if (profileSection.children.length > 0) {
      profileSection.innerHTML = "";
    }
    titlePage.textContent = "Contact Me";
    artsHolder.innerHTML = renderContact();

    let buttonBtn = document.querySelector("#submitCommentBtn");
    buttonBtn.addEventListener("click", () => {
      getVisits += 1;
      localStorage.setItem("numReviews", getVisits);
      const userName = document.querySelector("#name").value;
      localStorage.setItem("name", userName);
    });
  }
}

/**Home is the default page*/
if (pageName === "index") {
  let sect = document.querySelector(".my-clase");
  getArts("home");
  const navMenu = document.querySelector(".nav-items");
  navMenu.addEventListener("click", (event) => {
    getArts(event.target.textContent.toLowerCase());
    allLinks.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
  });
}

/*DISPLAY DATA FROM LOCAL STORAGE INTO opinionSaved page*/
if (pageName !== "index") {
  let holderNumVisit = document.querySelector(".visits");
  let holderName = document.querySelector(".userName");
  holderNumVisit.textContent = getVisits;
  let user = localStorage.getItem("name");
  holderName.textContent = user;
}
