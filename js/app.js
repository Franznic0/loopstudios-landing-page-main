const burger = document.getElementsByClassName("burger");
const closeButton = document.getElementById("close-button");
const menu = document.querySelector(".mobile-menu");

burger[0].addEventListener("click", function() {
    // menu[0].style.transform = "translateX(0)";
    // menu[0].style.display = "block";
    menu.classList.toggle('active');
});

closeButton.addEventListener("click", function() {
    // menu[0].style.transform = "translateX(100%)";
    // menu[0].style.display = "none";
    menu.classList.toggle('active');
})