document.addEventListener("DOMContentLoaded", function (event) {
  const hamburger = document.querySelector("#hamburger");
  const nav = document.querySelector("nav");

  // TOGGLE MENU
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
});
