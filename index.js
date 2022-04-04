const menuBtn = document.querySelector('#menu-btn');
const menuNav = document.querySelector('#menu-nav');
const navLinks = document.querySelectorAll('.toolbar ul > li');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('menu-hidden');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuNav.classList.toggle('menu-hidden');
  });
});