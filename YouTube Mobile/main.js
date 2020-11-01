const buttonMore = document.querySelector(".information .titleAndButton .buttonMore");
const title = document.querySelector(".information .titleAndButton .title");
buttonMore.addEventListener('click', () => {
    buttonMore.classList.toggle("clicked");
    title.classList.toggle("clamp");
});