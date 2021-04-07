window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navbar__wrapper'),
    menuItem = document.querySelectorAll('.navbar__link'),
    hamburger = document.querySelector('.hamburger__menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__menu-active');
    menu.classList.toggle('active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__menu-active');
      menu.classList.toggle('active');
    })
  })
})