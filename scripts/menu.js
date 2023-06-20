const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.onclick= () => {
    navMenu.classList.replace("nav-menu","nav-mobile")
    menuBtn.style.display="none"
    closeBtn.classList.replace("none", "close-menu-btn")
}


closeBtn.onclick = () =>{
    navMenu.classList.replace("nav-mobile","nav-menu")
    menuBtn.style.display="inline"
    closeBtn.classList.replace( "close-menu-btn", "none")
}