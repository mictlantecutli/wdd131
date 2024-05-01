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
  if (input.value.trim() !== "") {
    const scripture = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", `Remove ${input.value.trim()}`);

    scripture.textContent = input.value;
    deleteButton.textContent = "❎";
    scripture.append(deleteButton);
    list.append(scripture);

    /*The following is an add event listener for delete button */
    deleteButton.addEventListener("click", function () {
      list.removeChild(scripture);
      input.focus();
    });

    input.value = "";
    input.focus();
  } else {
    input.focus();
  }
});
