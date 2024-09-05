const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainerProducts = document.querySelector(".cards-container");

// usamos la palabra reservada toggle que significa intercambiar
navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMenuHamburguesa);
menuCarritoIcon.addEventListener("click", toggleMenuCarritoIcon);

//De la clase desktopMenu traeme dentro de esa lista de clases la clase inactive
function toggleDesktopMenu() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  // si no esta cerrado entonces agregueme la clase inactive que esta en mobileMenu
  if (!isAsideClosed) {
    asideProductDetail.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMenuHamburguesa() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  // si no esta cerrado entonces agregueme la clase inactive que esta en mobileMenu
  if (!isAsideClosed) {
    asideProductDetail.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleMenuCarritoIcon() {
  // en estas variables estamos preguntando si tienen la clase inactive osea que si esta cerrado
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  // si no esta cerrado entonces agregueme la clase inactive que esta en mobileMenu
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  asideProductDetail.classList.toggle("inactive");
}

/* <section class="main-container">
<div class="cards-container">
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>
</div>
</section> */

const productList = [];
productList.push({
  name: "bike",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const image = document.createElement("img");
    image.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productDiv = document.createElement("div");

    const priceP = document.createElement("p");
    priceP.innerText = "$" + product.price;

    const nameP = document.createElement("p");
    nameP.innerText = product.name;

    productDiv.append(priceP, nameP);

    const productInfoFigure = document.createElement("figure");

    const imgIconBtn = document.createElement("img");
    imgIconBtn.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(imgIconBtn);

    //sintaxis mas corta (agrega los 2 hijos de una vez)
    productInfo.append(productDiv, productInfoFigure);

    productCard.append(image, productInfo);

    cardsContainerProducts.appendChild(productCard);
  }
}

renderProducts(productList);
