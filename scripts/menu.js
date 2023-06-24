const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const navMenu = document.getElementById('nav-menu');

const navItems = [...document.getElementsByClassName('nav-item')];

const navClasses = ['nav-mobile', 'nav-menu'];
const closeClasses = ['close-menu-btn', 'none'];
const menuBtnDis = 'inline';

const navMenuHandler = (navClasses, closeClasses, menuBtnStyle) => {
  navMenu.classList.replace(navClasses[0], navClasses[1]);
  menuBtn.style.display = menuBtnStyle;
  closeBtn.classList.replace(closeClasses[0], closeClasses[1]);
};

const close = () => navMenuHandler(navClasses.reverse(), closeClasses.reverse(), menuBtnDis);

const open = () => navMenuHandler(navClasses.reverse(), closeClasses.reverse(), 'none');

navItems.forEach((element) => {
  element.onclick = () => close();
});

menuBtn.onclick = () => open();
closeBtn.onclick = () => close();