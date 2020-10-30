const toggler = document.querySelector(".navbar_toggler");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_icon");

toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
});