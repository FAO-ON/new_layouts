//Display the hamburger menu when clicked

function toggleMenu() {
    var links = document.getElementById("myLinks");
    //trigger an animation when the menu is clicked
    links.classList.toggle("animate");
    //toggle the menu
    links.style.display === "block" ? links.style.display = "none" : links.style.display = "block";
}

function removeMainMenuLinks(){
    var mainMenuLinks = document.getElementsByClassName("main-menu-links");
    var top = document.getElementsByClassName("top");
    var search = 
    mainMenuLinks[0].style.display = "none";
    top[0].style.display = "none";

}

function addMainMenuLinks(){
    var mainMenuLinks = document.getElementsByClassName("main-menu-links");
    var top = document.getElementsByClassName("top");
    mainMenuLinks[0].style.display = "flex";
    top[0].style.display = "flex";
}