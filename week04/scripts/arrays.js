const numNames = ["one", "two", "three"];

const myList = document.querySelector("#myList");
const listStr = numNames.map((num) => `<li>${num}</li>`);

myList.innerHTML = listStr.join("");

const letterGrades = ["A", "B", "A"];
const gradesInPoints = letterGrades.map((letter) => {
  let points = 0;
  if (letter == "A") {
    points = 4;
  } else if (letter == "B") {
    points = 3;
  }
  return points;
});

/*
reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one value that can be mathematically flattened
Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
Using reduce calculate the GPA from the array of gpaPoints.*/

const pointsTotal = gradesInPoints.reduce(
  (total, current) => total + current,
  0
);

const gpa = pointsTotal / gradesInPoints.length;

// this could be further simplified as
//const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

/*
function gradesToPoints() {
  let points = 0;

  if (letter == "A") {
    points = 4;
  } else if (letter == "B") {
    points = 3;
  }
  return points;
}*/

/******************************/
/**filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.
Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
Using filter keep only the fruits that are longer than 6 characters. */

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const fruitLongSix = fruits.filter((fruit) => fruit.length < 6);

/*************** */

/**indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

Declare an array with the following value: [12, 34, 21, 54]
Declare a luckNumber variable with the value 21;
Use indexOf to see if the luckyNumber is in the Array. */

const numsss = [12, 34, 21, 54];
const luckNum = 21;

const locateLuckIndex = numsss.indexOf(luckNum);

/********PRACTICING */
const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

const reveal = document.querySelector(".reveal");
const babygender = "Boy";
/*reveal.innerHTML = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;*/
reveal.textContent = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
/*reveal.text = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;*/

/*reveal.HTMLvalue = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;*/
