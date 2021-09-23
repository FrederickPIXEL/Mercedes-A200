// console.log("burger");
const burger = document.querySelector(".humburger_menu");
const menuElem = document.querySelector(".menu");

const toggleMenu = () => {
  menuElem.classList.toggle("menu-active");
  burger.classList.toggle("humburger-menu-active");
};

// burger.addEventListener("click", () => {
//   toggleMenu();
// });
