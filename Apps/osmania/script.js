function bcomStudents(
  studentName,
  hallTicketNo,
  result,
  orResult,
  fatherName,
  gender
) {
  this.name = studentName;
  this.hallTicketNo = hallTicketNo;
  this.gpa = result;
  this.cgpa = orResult;
  this.fatherName = fatherName;
  this.gender = gender;
  this.subjects = {};
  this.setSubjects = (
    english,
    arabic,
    costControl,
    GST,
    MMS,
    research,
    GSTpr,
    MMSpr,
    researchpr
  ) => {
    this.subjects.english = english;
    this.subjects.arabic = arabic;
    this.subjects.costControl = costControl;
    this.subjects.GST = GST;
    this.subjects.MMS = MMS;
    this.subjects.research = research;
    this.subjects.GSTpr = GSTpr;
    this.subjects.MMSpr = MMSpr;
    this.subjects.researchpr = researchpr;
  };
}

let student1 = new bcomStudents(
  "SYED TALHA AHMED",
  "206521405064",
  "PASSED-9.3",
  "PASSED-8.2",
  "SYED NASEER AHMED",
  "MALE"
);
student1.setSubjects("A+", "O", "O", "A+", "A+", "O", "A", "A", "O");

let student2 = new bcomStudents(
  "MOHAMMED YOUSUF",
  "206521405036",
  "PASSED-9.1",
  "PASSED-8.7",
  "MOHAMMED YOUNUS",
  "MALE"
);
student2.setSubjects("O", "O", "A+", "A+", "A", "A+", "A+", "O", "A+");

let student3 = new bcomStudents(
  "MOHD DANISH",
  "206521405038",
  "PROMOTED",
  "PROMOTED",
  "MOHD ISHTIYAQ",
  "MALE"
);
student3.setSubjects("B+", "O", "B", "F", "F", "A", "A", "A", "A");

let student4 = new bcomStudents(
  "MOHAMMED YASEEN ULLAH",
  "206521405035",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED KHALEEL ULLAH",
  "MALE"
);
student4.setSubjects("F", "O", "B", "D", "F", "A", "A", "B", "A");

let student5 = new bcomStudents(
  "MOHAMMED TAHMEED UDDIN",
  "206521505033",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED SAYEED UDDIN",
  "MALE"
);
student5.setSubjects("B", "A", "B", "F", "B", "F", "A", "A", "A");

let student6 = new bcomStudents(
  "SYED MD ABDUL QADEER",
  "206521405062",
  "PROMOTED",
  "PROMOTED",
  "SYED MUSAB AHMED",
  "MALE"
);
student6.setSubjects("O", "A", "F", "B", "C", "F", "A", "A", "A");

let student7 = new bcomStudents(
  "SYED MEHRAJ",
  "206521405063",
  "PROMOTED",
  "PROMOTED",
  "SYED SALEEM",
  "MALE"
);
student7.setSubjects("B", "B", "D", "C", "A", "F", "A", "A", "A");

let student8 = new bcomStudents(
  "SYED ZAINULABEDDIN HASHMI",
  "206521405065",
  "PROMOTED",
  "PROMOTED",
  "SYED ATHER HASHMI",
  "MALE"
);
student8.setSubjects("B", "O", "B", "F", "F", "A", "A", "A", "A");

let student9 = new bcomStudents(
  "TAUSEEF AHMED",
  "206521405066",
  "PROMOTED",
  "PROMOTED",
  "MAQSOOD AHMED",
  "MALE"
);
student9.setSubjects("B", "A", "C", "F", "B", "C", "A", "A", "A");

let student10 = new bcomStudents(
  "WASEY KHAN",
  "206521405070",
  "PROMOTED",
  "PROMOTED",
  "JAVEED KHAN",
  "MALE"
);
student10.setSubjects("D", "C", "F", "F", "F", "F", "A", "A", "A");

let student11 = new bcomStudents(
  "SYED ABDUL KHADAR HASHMI",
  "206521405060",
  "PROMOTED",
  "PROMOTED",
  "SYED KHAJA SHAREEFUDDIN HASHMI",
  "MALE"
);
student11.setSubjects("B", "C", "D", "F", "C", "F", "A", "A", "A");

let student12 = new bcomStudents(
  "SOHAIL AHMED",
  "206521405059",
  "PROMOTED",
  "PROMOTED",
  "SULTAN AHMED",
  "MALE"
);
student12.setSubjects("B", "A", "B", "F", "C", "F", "A", "A", "A");
let student13 = new bcomStudents(
  "SHAIK MUJEEB UDDINI",
  "206521405058",
  "PROMOTED",
  "PROMOTED",
  "SHAIK RAFEEQ UDDIN",
  "MALE"
);
student13.setSubjects("F", "D", "F", "F", "C", "B", "A", "A", "A");
let student14 = new bcomStudents(
  "SHAHANA BEGUM",
  "206521405056",
  "PROMOTED",
  "PROMOTED",
  "M A ISMAIL",
  "FEMALE"
);
student14.setSubjects("F", "F", "B", "F", "C", "A", "D", "A", "A");
let student15 = new bcomStudents(
  "SADIYA UNISSA",
  "206521405052",
  "PROMOTED",
  "PROMOTED",
  "HAKEEM KHAN",
  "FEMALE"
);
student15.setSubjects("D", "F", "B", "D", "F", "A", "A", "A", "A");
let student16 = new bcomStudents(
  "RAYYAN KHAN",
  "206521405049",
  "PROMOTED",
  "PROMOTED",
  "RAYEES KHAN",
  "MALE"
);
student16.setSubjects("B+", "O", "B", "F", "F", "A", "A", "A", "A");
let student17 = new bcomStudents(
  "QURRATUL AIN JUVERIYA",
  "206521405047",
  "PROMOTED",
  "PROMOTED",
  "SYED LAYEEQ",
  "FEMALE"
);
student17.setSubjects("B+", "O", "B", "F", "F", "A", "A", "A", "A");

let student18 = new bcomStudents(
  "NOOR JAHAN BEGUM",
  "206521405044",
  "PROMOTED",
  "PROMOTED",
  "LATE GULAM AHMED",
  "FEMALE"
);
student18.setSubjects("Ab", "Ab", "Ab", "Ab", "Ab", "Ab", "A+", "A", "A");

let student19 = new bcomStudents(
  "MARIYAM SULTANA",
  "206521401013",
  "PROMOTED",
  "PROMOTED",
  "FAREED GULAM SAMDANI",
  "FEMALE"
);
student19.setSubjects("B+", "O", "B", "F", "F", "A", "A", "A", "A");

let student20 = new bcomStudents(
  "MOHAMMED ASHFAQ",
  "206521405029",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED MOULANA",
  "MALE"
);
student20.setSubjects("B", "A+", "B", "D", "F", "A", "A", "A", "A");

let student21 = new bcomStudents(
  "MOHAMMED NASEER",
  "206521405032",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED JAMEEL",
  "MALE"
);
student21.setSubjects("B+", "C", "B", "F", "F", "C", "A", "A", "A");

let student22 = new bcomStudents(
  "MOHAMMED FARDEEN",
  "206521405031",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED FAHEEM",
  "MALE"
);
student22.setSubjects("B", "O", "B", "D", "F", "A", "A", "A", "A");

let student23 = new bcomStudents(
  "ABDUL NAYEEM",
  "206521401002",
  "PROMOTED",
  "PROMOTED",
  "ABDUL KAREEM",
  "MALE"
);
student23.setSubjects("B", "D", "B", "F", "A", "D", "A", "A", "A");

let student24 = new bcomStudents(
  "AHMED KHAN",
  "206521401004",
  "PROMOTED",
  "PROMOTED",
  "SABER KHAN",
  "MALE"
);
student24.setSubjects("A", "D", "B", "D", "F", "A", "A", "A", "A");

let student25 = new bcomStudents(
  "MOHAMMED FAIZAN HUSSAIN",
  "206521401015",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED ASHFAQ HUSSAIN",
  "MALE"
);
student25.setSubjects("D", "O", "B", "F", "A", "C", "A", "A", "A");

let student26 = new bcomStudents(
  "MOHAMMED SAMI",
  "206521401016",
  "PROMOTED",
  "PROMOTED",
  "MOHAMMED YOUSUF",
  "MALE"
);
student26.setSubjects("F", "D", "B", "D", "F", "C", "A", "A", "A");

let student27 = new bcomStudents(
  " SYEDA ZOHA FATIMA",
  "206521401022",
  "PROMOTED",
  "PROMOTED",
  "SYED RAWOOF",
  "FEMALE"
);
student27.setSubjects("B", "O", "B", "F", "F", "A", "A", "A", "A");

let student28 = new bcomStudents(
  "SYED SOHAIL",
  "206521401023",
  "PROMOTED",
  "PROMOTED",
  "SYED KHAJA PASHA",
  "FEMALE"
);
student28.setSubjects("B", "O", "B", "F", "F", "A", "A", "A", "A");

let student29 = new bcomStudents(
  "MOHD KASHIF",
  "206521405039",
  "PROMOTED",
  "PROMOTED",
  "MD GHOUSE",
  "MALE"
);
student29.setSubjects("A", "B+", "D", "B+", "F", "D", "A", "A", "A");

let student30 = new bcomStudents(
  "HUMERA FATIMA",
  "206521405019",
  "PROMOTED",
  "PROMOTED",
  "MD ISHAQ",
  "FEMALE"
);
student30.setSubjects("B+", "O", "B", "F", "F", "A", "A", "A", "A");

let student31 = new bcomStudents(
  "SARFARAZ AHMED",
  "125721405075",
  "PROMOTED",
  "PROMOTED",
  "SHABBIR AHMED",
  "MALE"
);
student31.setSubjects("B", "O", "B", "F", "F", "A", "A", "A", "A");

let students = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
  student11,
  student12,
  student13,
  student14,
  student15,
  student16,
  student17,
  student18,
  student19,
  student20,
  student21,
  student22,
  student23,
  student24,
  student25,
  student26,
  student27,
  student28,
  student29,
  student30,
  student31,
];

// this.name = studentName;
// this.hallTicketNo = hallTicketNo;
// this.gpa = result;
// this.cgpa = orResult;
// this.fatherName = fatherName;
// this.gender = gender;
// this.subjects = {};
// this.setSubjects = (
//   english,
//   arabic,
//   costControl,
//   GST,
//   MMS,
//   research,
//   GSTpr,
//   MMSpr,
//   researchpr
// ) => {
//   this.subjects.english = english;
//   this.subjects.arabic = arabic;
//   this.subjects.costControl = costControl;
//   this.subjects.GST = GST;
//   this.subjects.MMS = MMS;
//   this.subjects.research = research;
//   this.subjects.GSTpr = GSTpr;
//   this.subjects.MMSpr = MMSpr;
//   this.subjects.researchpr = researchpr;

function checkInput() {
  let userInput = document.getElementById("userInput");
  let userValue = userInput.value;
  if (userValue) {
    let studentData = students.find((e) => e.hallTicketNo == userValue);
    if (studentData) {
      pageSwitch1();
      setTicketData(studentData);
    } else {
      pageSwitch2();
    }
  } else {
    alert(`Please enter a value for the "Hall ticket Number" field.`);
  }
}

function checkInput2() {
  let reInput = document.getElementById("reCheckInput");
  let useReInput = reInput.value;
  if (useReInput) {
    let studentData = students.find((e) => e.hallTicketNo == useReInput);
    if (studentData) {
      setTicketData(studentData);
    } else {
      pageSwitch2();
      console.log("enter valid Hallticket Number");
    }
  } else {
    alert(`Please enter a value for the "Hall ticket Number" field.`);
  }
}

//?==============Page Switch start
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
function pageSwitch1() {
  page1.style.display = "none";
  page2.style.display = "block";
}
function pageSwitch2() {
  page1.style.display = "block";
  page2.style.display = "none";
  let getError = document.getElementById("error");
  getError.style.display = "block";
}

//?==============Page Switch End

//adding values realated to hallticket inter by user
function setTicketData(studentData) {
  let setHallTicket = document.getElementById("setHallTicket");
  setHallTicket.textContent = studentData.hallTicketNo;

  let setName = document.getElementById("setName");
  setName.textContent = studentData.name;

  let setCgpa = document.getElementById("setCgpa");
  setCgpa.textContent = studentData.cgpa;

  let setSgpa = document.getElementById("setSgpa");
  setSgpa.textContent = studentData.gpa;

  let setFatherName = document.getElementById("setFatherName");
  setFatherName.textContent = studentData.fatherName;

  let setGender = document.getElementById("setGender");
  setGender.textContent = studentData.gender;

  let setenglish = document.getElementById("setenglish");
  setenglish.textContent = studentData.subjects.english;

  let setarabic = document.getElementById("setarabic");
  setarabic.textContent = studentData.subjects.arabic;

  let setcostControl = document.getElementById("setcostControl");
  setcostControl.textContent = studentData.subjects.costControl;

  let setGST = document.getElementById("setGST");
  setGST.textContent = studentData.subjects.GST;

  let setMMS = document.getElementById("setMMS");
  setMMS.textContent = studentData.subjects.MMS;

  let setresearch = document.getElementById("setresearch");
  setresearch.textContent = studentData.subjects.research;

  let setGSTpr = document.getElementById("setGSTpr");
  setGSTpr.textContent = studentData.subjects.GSTpr;

  let setMMSpr = document.getElementById("setMMSpr");
  setMMSpr.textContent = studentData.subjects.MMSpr;

  let setresearchpr = document.getElementById("setresearchpr");
  setresearchpr.textContent = studentData.subjects.researchpr;
}

// .
// .
// .
// .
// .
// ==========================shortcut
let shiftBg = document.getElementById("shift");
let ubtnBg = document.getElementById("ubtn");
let hallTicketDash = document.getElementById("hallTicketDash");
let copied = document.getElementById("copied");
window.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    let shiftBg = document.getElementById("shift");
    shiftBg.style.transform = "scale(0.9)";
    shiftBg.style.backgroundColor = "darkgray";

    onkeyup();
    window.addEventListener("keypress", (e) => {
      let uClick = e.key.toLowerCase();
      if (uClick === "u") {
        ubtnBg.style.transform = "scale(0.9)";
        ubtnBg.style.backgroundColor = "darkgray";
        hallTicketDash.style.display = "block";
        onkeyup();
      }
    });
  }
});

function onkeyup() {
  window.addEventListener("keyup", () =>; {
    shiftBg.style.transform = "scale(1)"
    shiftBg.style.backgroundColor = "#D3D3D3";
    ubtnBg.style.transform = "scale(1)";
    ubtnBg.style.backgroundColor = "#D3D3D3";
  });
}

//----------copy text

function copyToClipboard(inputId) {
  const textToCopy = document.getElementById(inputId).value;
  navigator.clipboard.writeText(textToCopy);
  hallTicketDash.style.display = "none";
  copied.style.display = "block";
  setTimeout(() => {
    copied.style.display = "none";
  }, 2600);
}
