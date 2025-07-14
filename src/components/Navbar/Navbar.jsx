import iconMenu from "/icons/icon_menu.svg";
import iconCart from "/icons/icon_shopping_cart.svg";
import logo from "/logo_yard_sale.svg";
import { useCartCount } from "../../hooks/useCartCount";
import "./navbar.css";


export default function Navbar({ setCategory }) {

  // contador de productos en el carrito
  const { cartCount } = useCartCount();

    // mapeo para filtrar las categorias
  const categoryMap = {
    All: "all",
    Electronics: "electronics",
    Jewelery: "jewelery",
    Men: "men's clothing",
    Women: "women's clothing",
  };

  return (
    <>
      <nav className="flex justify-between px-[24px] py-0 border-b border-[var(--very-light-pink)] top-0 left-0 w-full fixed z-50 bg-white">

        {/* Icono del menú para móviles */}
        <img
          src={iconMenu}
          alt="menu"
          className="block sm:hidden"
          id="menu"

        />
        <div className="navbar-left flex">
          <img src={logo} alt="logo" className="w-[110px]" />
          <ul className="hidden sm:list-none sm:flex sm:p-0 sm:m-0 sm:items-center sm:h-[60px] sm:ml-[12px]">
            <li>
              <a 
                  href="/" 
                  className="text-[var(--text-input-field)] border border-[var(--white)] p-[8px] rounded-lg hover:border hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap["All"]); }}>All</a></li>
            <li>
              <a 
                  href="#" 
                  className="text-[var(--text-input-field)] border border-[var(--white)] p-[8px] rounded-lg hover:border hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap["Electronics"]); }}>Electronics</a></li>
            <li>
              <a 
                  href="#" 
                  className="text-[var(--text-input-field)] border border-[var(--white)] p-[8px] rounded-lg hover:border hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap["Jewelery"]); }}>Jewelery</a></li>
            <li>
              <a 
                  href="#" 
                  className="text-[var(--text-input-field)] border border-[var(--white)] p-[8px] rounded-lg hover:border hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap["Men"]); }}>Men</a></li>
            <li>
              <a 
                  href="#" 
                  className="text-[var(--text-input-field)] border border-[var(--white)] p-[8px] rounded-lg hover:border hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap["Women"]); }}>Women</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="list-none flex p-0 m-0 items-center h-[60px]">
            <li className="hidden sm:block sm:text-[15px] sm:text-[var(--text-input-field)] sm:mr-[12px] sm:cursor-pointer sm:p-[8px] sm:border sm:border-[var(--white)] sm:rounded-lg  sm:hover:text-[var(--hospital-green)] sm:select-none" >
              user@.com
            </li>
            <li  className="relative cursor-pointer select-none" >
              <img src={iconCart} alt="shopping cart" />
              {cartCount > 0 && <div className="w-[19px] h-[19px] bg-[var(--hospital-green)] rounded-full text-[13px] font-bold absolute b-[1rem] l-[1rem] flex justify-center align-center">{cartCount}</div>}
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}
