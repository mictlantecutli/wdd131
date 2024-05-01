/*
Use of the DOM, make changes dinamically
document.title = "Page of Me";
document.body.style.backgroundColor = "black";
console.dir(document);

const username = "Moisés";

const nameLesson = document.getElementById("name-lesson");

nameLesson.textContent += username === "" ? `Guest` : username;
*/

const article = document.querySelector(".article");
console.log(article);

article.innerHTML =
  "innerHTML supports <strong>HTML</strong> tags. The textContent property does not.";

/*To change the style*/
article.style.textAlign = "right";

article.setAttribute("class", "active");

article.classList.add("active2");

const paragraph02 = document.createElement("p");
article.appendChild(paragraph02);
paragraph02.append("Hello World Addition");
