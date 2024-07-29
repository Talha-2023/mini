// document.addEventListener(
//   "click",
//   function (event) {
//     event.stopPropagation();
//   },
//   true
// );

// document.addEventListener(
//   "mousedown",
//   function (event) {
//     event.stopPropagation();
//   },
//   true
// );

const close = document.getElementById("close");
const popContainer = document.querySelector(".popup");
const popSection = document.getElementById("popSection");

function openPopup() {
  popContainer.style.display = "block";
  popSection.classList.replace("closepopAnimation", "openpopAnimation");
}

function closePopup(event) {
  popSection.classList.replace("openpopAnimation", "closepopAnimation");
  event.stopPropagation();

  setTimeout(() => {
    popContainer.style.display = "none";
  }, 330);
}

const favorite = document.querySelector(".favorite");
const search = document.querySelector(".searchDi");
const displayFavourate = document.querySelector(".displayFavourate");
const displaySearch = document.querySelector(".displaySearch");

function favDisplayFun() {
  favorite.style.background = "#d8e8ff";
  search.style.background = "white";
  displayFavourate.style.display = "block";
  displaySearch.style.display = "none";
  }

function searchDisplayFun() {
  search.style.background = "#d8e8ff";
  favorite.style.background = "white";
  displayFavourate.style.display = "none";
  displaySearch.style.display = "block";
  console.log("search");
}
