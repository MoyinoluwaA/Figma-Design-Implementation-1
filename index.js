const hamburgerMenu = document.getElementById('hamburger__menu');
const navList = document.getElementById('nav__list')
const headerBg = document.getElementById('header__img')

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('hide')
    headerBg.classList.toggle('nav__open')
})