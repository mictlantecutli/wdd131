const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const scripture = document.createElement("li");
const deleteButton = document.createElement("button");
deleteButton.setAttribute("aria-label", "Remove Alma5");

/*textContent is preferred over innerHTML because it is more secure.
However, if you need to include HTML tags, then you would use innerHTML.
textContent will not render HTML tags. It will display the tags as text.*/

/*This is an event listener for add scripture button */
button.addEventListener("click", function () {
  if (input.value.trim() != "") {
    displayList(input.value);
    chapterArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

/*Local storage activity*/
let chapterArray = getChapterList() || [];

chapterArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("aria-label", `Remove ${item.trim()}`);
  li.textContent = item;
  deleteButton.textContent = "❎";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);

  /*The following is an add event listener for delete button */
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    console.log(li.textContent);
    deleteChapter(li.textContent);

    input.focus();
  });
}

/**FUNCTIONS */
function setChapterList() {
  localStorage.setItem("favScriptures", JSON.stringify(chapterArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("favScriptures"));
}

function deleteChapter(chapter) {
  console.log("this is chaper", chapter);
  chapter = chapter.slice(0, chapter.length - 1);
  console.log(chapter);
  chapterArray = chapterArray.filter((item) => item != chapter);
  setChapterList();
}
