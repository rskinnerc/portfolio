const menuBtn = document.querySelector('#menu-btn');
const menuNav = document.querySelector('#menu-nav');
const closeMenuBtn = document.querySelector('#close-menu')
const navLinks = document.querySelectorAll('#headline #about-me #contact');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle("menu-hidden")
})

closeMenuBtn.addEventListener("click", () => {
  menuNav.classList.toggle("menu-hidden")
})