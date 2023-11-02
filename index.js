//Display the hamburger menu when clicked

function toggleMenu() {
    var links = document.getElementById("myLinks");
    //trigger an animation when the menu is clicked
    links.classList.toggle("animate");
    //toggle the menu
    links.style.display === "block" ? links.style.display = "none" : links.style.display = "block";
}