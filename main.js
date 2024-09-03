const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// usamos la palabra reservada toggle que significa intercambiar
navbarEmail.addEventListener("click", toggleDesktopMenu);

// Aqui lo que estamos diciendole es de la clase desktopMenu traeme dentro de esa lista de clases la clase inactive recordar que el toggle me sirve para acivar y desactivar
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
