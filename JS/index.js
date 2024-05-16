const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtns = document.querySelectorAll('.nav-btn');

function toggleNav() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
}

