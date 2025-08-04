// script.js

document.addEventListener("DOMContentLoaded", () => {
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");

  subscribeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const input = button.previousElementSibling;
      if (input && input.value.includes("@")) {
        alert("Thank you for subscribing!");
        input.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });

  const searchBox = document.querySelector(".search-box");
  const searchIcon = document.querySelector(".fa-search");

  searchIcon.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
      alert(`Searching for: ${searchBox.value}`);
    } else {
      alert("Please enter a product name to search.");
    }
  });
});