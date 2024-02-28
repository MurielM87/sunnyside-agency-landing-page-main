const button = document.getElementById("hamburger_menu");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});