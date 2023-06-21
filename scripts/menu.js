const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-menu");

const navItems = [...document.getElementsByClassName("nav-item")];

const navClassesToggle = ["nav-mobile", "nav-menu"];
const closeClassesToggle = ["close-menu-btn", "none"];
const menuBtnStyleToggle = "inline";

const navMenuHandler = (navClasses, closeClasses, menuBtnStyle) => {
    navMenu.classList.replace(navClasses[0], navClasses[1]);
    menuBtn.style.display = menuBtnStyle;
    closeBtn.classList.replace(closeClasses[0], closeClasses[1]);
}


navItems.forEach(element => {
    element.onclick = () => navMenuHandler(navClassesToggle.reverse(), closeClassesToggle.reverse(), menuBtnStyleToggle)
});

menuBtn.onclick = () => navMenuHandler(navClassesToggle.reverse(), closeClassesToggle.reverse(), "none");
closeBtn.onclick = () => navMenuHandler(navClassesToggle.reverse(), closeClassesToggle.reverse(), menuBtnStyleToggle);
