import iconMenu from "/icons/icon_menu.svg";
import iconCart from "/icons/icon_shopping_cart.svg";
import logo from "/logo_yard_sale.svg";
import "./navbar.css";


export default function Navbar() {


  return (
    <>
      <nav className="flex justify-between px-[24px] py-0 border-b border-[var(--very-light-pink)] top-0 left-0 w-full fixed">

        {/* Icono del menú para móviles */}
        <img
          src={iconMenu}
          alt="menu"
          className="menu hidden"
          id="menu"

        />
        <div className="navbar-left flex">
          <img src={logo} alt="logo" className="w-[110px]" />
          <ul className="list-none flex p-0 m-0 items-center h-[60px] ml-[12px]">
            <li><a href="/" className="category">All</a></li>
            <li><a href="#" className="category">Electronics</a></li>
            <li><a href="#" className="category">Jewelery</a></li>
            <li><a href="#" className="category">Men</a></li>
            <li><a href="#" className="category">Women</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="list-none flex p-0 m-0 items-center h-[60px]">
            <li className="navbar-email text-[14px] mr-[12px] cursor-pointer" >
              user@.com
            </li>
            <li  className="navbar-shopping-cart" >
              <img src={iconCart} alt="shopping cart" />

            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}
