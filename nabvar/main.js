const navbarEmail = document.querySelector(".navbar-email");
const menuHamburguesa = document.querySelector("#menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const mobileMenu = document.querySelector(".mobile-menu");

// Función genérica para cargar y hacer toggle de contenido dinámico
function toggleDynamicContent(btn, containerId, url, selector) {
  const container = document.getElementById(containerId);
  btn.addEventListener("click", function () {
    if (container.classList.contains("inactive")) {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;
          const content = tempDiv.querySelector(selector);
          if (content) {
            container.innerHTML = "";
            container.appendChild(content);
          }
          container.classList.remove("inactive");
        });
    } else {
      container.innerHTML = "";
      container.classList.add("inactive");
    }
  });
}

// Toggle para el carrito
if (menuCarritoIcon) {
  toggleDynamicContent(
    menuCarritoIcon,
    "order-container",
    "/My-order/index.html",
    ".product-detail"
  );
}

// Toggle para el menú de usuario desktop
if (navbarEmail) {
  toggleDynamicContent(
    navbarEmail,
    "menu-user-desktop-container",
    "/menu-user-desktop/index.html",
    ".desktop-menu"
  );
}

// Toggle para el menú de usuario mobile
if (menuHamburguesa) {
  toggleDynamicContent(
    menuHamburguesa,
    "menu-user-mobile-container",
    "/menu-user-mobile/index.html",
    ".mobile-menu"
  );
}
