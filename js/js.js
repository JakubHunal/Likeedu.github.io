let responsiveNavIcon = document.querySelector("nav .burger");
let responsiveNav = document.querySelector("nav ul");

let burgerLine1 = document.querySelector("nav .burger .line1");
let burgerLine2 = document.querySelector("nav .burger .line2");
let burgerLine3 = document.querySelector("nav .burger .line3");

responsiveNavIcon.addEventListener("click", function (e) {
  responsiveNav.classList.toggle("activeIcon");
  burgerLine1.classList.toggle("burgerLine1");
  burgerLine2.classList.toggle("burgerLine2");
  burgerLine3.classList.toggle("burgerLine3");
});

function hideNavBar() {
  responsiveNav.classList.toggle("activeIcon");
  burgerLine1.classList.toggle("burgerLine1");
  burgerLine2.classList.toggle("burgerLine2");
  burgerLine3.classList.toggle("burgerLine3");
}
