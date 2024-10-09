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
  displayFavourate.style.display = "grid";
  displaySearch.style.display = "none";
}

function searchDisplayFun() {
  search.style.background = "#d8e8ff";
  favorite.style.background = "white";
  displayFavourate.style.display = "none";
  displaySearch.style.display = "block";
  console.log("search");
}

//------------heart

document.addEventListener("DOMContentLoaded", function () {
  const favoriteButtons = document.querySelectorAll(".heart");

  const favoriteCardsContainer = document.querySelector(".displayFavourate");

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favoriteButtons.forEach((button) => {
    const card = button.closest(".appName_Container");
    const cardId = card.getAttribute("data-id");

    if (favorites.includes(cardId)) {
      button.children[0].setAttribute("src", "Style/Assets/Icons/hearfill.svg");
      addToFavorites(card);
    }
    button.addEventListener("click", function () {
      if (favorites.includes(cardId)) {
        favorites = favorites.filter((id) => id !== cardId);
        button.children[0].setAttribute(
          "src",
          "Style/Assets/Icons/hearstroke.svg"
        );
        removeFromFavorites(cardId);
      } else {
        favorites.push(cardId);
        button.children[0].setAttribute(
          "src",
          "Style/Assets/Icons/hearfill.svg"
        );
        addToFavorites(card);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });

  function addToFavorites(card) {
    const cardClone = card.cloneNode(true);
    cardClone
      .querySelector(".heart")
      .setAttribute("src", "Style/Assets/Icons/hearfill.svg");
    favoriteCardsContainer.appendChild(cardClone);

    cardClone.querySelector(".heart").addEventListener("click", () => {
      const cardId = cardClone.getAttribute("data-id");
      favorites = favorites.filter((id) => id !== cardId);

      localStorage.setItem("favorites", JSON.stringify(favorites)); // Update storage
      cardClone.remove();

      document
        .querySelector(`.appName_Container[data-id="${cardId}"]`)
        .querySelector(".heart img")
        .setAttribute("src", "Style/Assets/Icons/hearstroke.svg");
    });
  }

  function removeFromFavorites(cardId) {
    const cardToRemove = favoriteCardsContainer.querySelector(
      `.appName_Container[data-id="${cardId}"]`
    );

    if (cardToRemove) {
      cardToRemove.remove();
    }
  }

  // const messageElement = document.querySelector(".displayWhenCldNotThere");
  // if (favoriteCardsContainer.children.length === 0) {
  //   messageElement.style.display = "flex";
  //   console.log("yes");
  // } else {
  //   messageElement.style.display = "none";
  //   console.log("yes");
  // }
});
