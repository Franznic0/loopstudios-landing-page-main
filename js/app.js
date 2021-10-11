const burger = document.getElementsByClassName("burger");
const closeButton = document.getElementById("close-button");
const menu = document.getElementsByClassName("mobile-menu");

burger[0].addEventListener("click", function() {
    menu[0].style.transform = "translateX(0)";
});

closeButton.addEventListener("click", function() {
    menu[0].style.transform = "translateX(100%)";
})