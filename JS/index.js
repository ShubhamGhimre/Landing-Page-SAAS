const navItemsMobile = document.querySelector('.nav-items-mobile');
const HamBurger = document.querySelector('.hamburger');

HamBurger.addEventListener('click', () => {
    navItemsMobile.classList.toggle('show');
    HamBurger.classList.toggle('close');
});


