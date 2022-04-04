const menuBtn = document.querySelector('#menu-btn');
const menuNav = document.querySelector('#menu-nav');
const navLinks = document.querySelectorAll('#headline #about-me #contact');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle("menu-hidden")
})