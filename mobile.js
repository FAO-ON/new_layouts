//Mobile Menu Toggle
var version = "1.1";
console.log('mobile.js' + version + ' loaded');


//DOM elements
var menu = document.getElementsByClassName("header-menu")[0];

function toggleMenu() {
    if(menu.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menu.classList.remove("closed");
    menu.classList.add("open");
}

function closeMenu() {
    menu.classList.remove("open");
    menu.classList.add("closed");
}


