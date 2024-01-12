//Mobile Menu Toggle
var version = "1.0.0";
console.log('mobile.js' + version + ' loaded');


//DOM elements
var menu = document.getElementsByClassName("header-menu")[0];
var menuButton = document.getElementsByClassName("mobile-menu")[0];
var closemenuButton = document.getElementsByClassName("mobile-menu-close")[0];

/* Toggle Disabled
function toggleMenu() {
//change the menu visbility to visible if it is hidden
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        menuButton.style.visibility = "visible";
        closemenuButton.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
        menuButton.style.visibility = "hidden";
        closemenuButton.style.visibility = "visible";
    }
}

function closeMenu() {
//console.log("Close menu button clicked")
    if(menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        closemenuButton.style.visibility = "hidden";
        menuButton.style.visibility = "visible";
    } else {
        menu.style.visibility = "visible";
        menuButton.style.visibility = "hidden";
        //console.log("Changed to visible")
    }
}
*/

function isMobile() {
    var flag = getComputedStyle(menu).getPropertyValue('--isMobile');
    if(flag == '1') return true;
    else return false;
}

window.addEventListener("resize", function() {
    //if resize was only vertical, do nothing
    console.log(isMobile());
    if(isMobile()){
        //if is in mobile mode, close it
        menu.style.visibility = "hidden";
    }else{
        //console.log('desktop');
        menu.style.visibility = "visible";
    }
})
