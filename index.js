//selectors
const logo = document.querySelector(".menu-logo");
const menu = document.querySelector(".menu");
const myApp = document.querySelectorAll(".animate");
const divOne = document.querySelector("#logo1");
const divTwo = document.querySelector("#logo2");
const divThree = document.querySelector("#logo3");
const bbb = document.querySelector("#bad");
//event listeners

logo.addEventListener("click", popMenu);

//funnction

function popMenu() {
  menu.classList.toggle("show-menu");
  divOne.classList.toggle("logo-1");
  divTwo.classList.toggle("logo-2");
  divThree.classList.toggle("logo-3");
  bbb.classList.toggle("good");
}
