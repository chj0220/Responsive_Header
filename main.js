const togleBtn = document.querySelector('.navbar_togleButton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
