// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollAndDropStd: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      setSection(this.sections);
    }
  },
};

function setCourseNum(course) {
  const nameCourse = document.getElementById("courseName");
  const courseCode = document.getElementById("courseCode");
  nameCourse.textContent = course.name;
  courseCode.textContent = course.code;
}

function setSection(sections) {
  const sectionHolder = document.querySelector("#sections");
  let htmlRows = sections.map((section) => {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
  });
  sectionHolder.innerHTML = htmlRows.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollAndDropStd(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollAndDropStd(sectionNum, false);
});

setCourseNum(aCourse);
setSection(aCourse.sections);
