document.addEventListener("DOMContentLoaded", function () {
  fetch("../Common/navSmallBottom.html") // Adjusted path to go up one level
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("bottomNavContainer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navigation:", error));
});
