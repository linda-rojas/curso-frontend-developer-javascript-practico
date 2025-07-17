import React, { useEffect, useRef } from "react";
import iconMenu from "/icons/icon_menu.svg";
import iconCart from "/icons/icon_shopping_cart.svg";
import logo from "/logo_yard_sale.svg";

import MyOrder from "../my-order/MyOrder";
import { UserMenuDesktop } from "../menu-user-desktop/UserMenuDesktop";
import { UserMenuMobile } from "../menu-user-mobile/UserMenuMobile";
import { useClickOutside } from "../../hooks/useClickOutside"; 
import { useCartCount } from "../../hooks/useCartCount";
import { useToggle } from "../../hooks/useToggle";
import { useIsMobile } from "../../hooks/mobilebreakpoint";


export default function Navbar({ setCategory, selectedCategory}) {

  // Estado y funciones para mostrar/ocultar el panel de ordenes (carrito)
  const [showOrder, toggleOrder, , setOrderFalse] = useToggle(false);
  const [showDesktopMenu, toggleDesktopMenu, , setDesktopMenuFalse] = useToggle(false);
  const [showMobileMenu, toggleMobileMenu, , setMobileMenuFalse] = useToggle(false);

  // contador de productos en el carrito
  const { cartCount } = useCartCount();

  // Refs (acceder a elementos del DOM y manejar eventos como clics fuera de componentes)
  const orderRef = useRef(null);
  const orderBtnRef = useRef(null);

  const desktopMenuRef = useRef(null);
  const desktopBtnRef = useRef(null);

  const mobileMenuRef = useRef(null);
  const mobileBtnRef = useRef(null);

  // Usar hook para cerrar menú al hacer click fuera
  // Escucha clicks fuera de ambos: contenedor + botón
  useClickOutside([orderRef, orderBtnRef], setOrderFalse, showOrder);
  useClickOutside([desktopMenuRef, desktopBtnRef], setDesktopMenuFalse, showDesktopMenu);
  useClickOutside([mobileMenuRef, mobileBtnRef], setMobileMenuFalse, showMobileMenu);

    // mapeo para filtrar las categorias
  const categoryMap = {
    All: "all",
    Electronics: "electronics",
    Jewelery: "jewelery",
    Men: "men's clothing",
    Women: "women's clothing",
  };
  // para detectar si es móvil
    const isMobile = useIsMobile();

    useEffect(() => {
    if (!isMobile) {
      setMobileMenuFalse();
    }
  }, [isMobile, setMobileMenuFalse]);


  // estilo según la seleección de categoría
  const categoryClass = (name) =>
  `border p-[8px] rounded-lg 
    ${selectedCategory === categoryMap[name] 
      ? "border-[#5cd56c] text-[#5cd56c] font-bold"
      : "text-[var(--text-input-field)] border-[var(--white)] hover:border-[var(--hospital-green)] hover:text-[var(--hospital-green)]"
    }`;

    // cerrar
    const handleClose = (setToggleFn) => () => {
      setToggleFn(false);
    };

  return (
    <>
      <nav className="flex justify-between px-[24px] py-0 border-b border-[var(--very-light-pink)] top-0 left-0 w-full fixed z-50 bg-white">

        {/* Icono del menú para móviles */}
        { isMobile && (
          <div 
          className="flex sm:hidden cursor-pointer" 
          ref={mobileBtnRef} 
          onClick={toggleMobileMenu}
          >
              <img
              src={iconMenu}
              alt="menu"
              id="menu"
            />
        </div>
        )}

        <div className="navbar-left flex">
          <img src={logo} alt="logo" className="w-[120px]" />
          <ul className="hidden sm:list-none sm:flex sm:gap-1 sm:p-0 sm:m-0 sm:items-center sm:h-[60px] sm:ml-[12px]">
            {Object.keys(categoryMap).map((key) => (
              <li key={key}>
                <a 
                  href="#"
                  onClick={e => { e.preventDefault(); setCategory(categoryMap[key])}}
                  className={categoryClass(key)}
                  >{key}</a>
              </li>

            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="list-none flex p-0 m-0 items-center h-[60px]">
            <li 
              className="hidden sm:block sm:text-[15px] sm:text-[var(--text-input-field)] sm:mr-[12px] sm:cursor-pointer sm:p-[8px] sm:border sm:border-[var(--white)] sm:rounded-lg  sm:hover:text-[var(--hospital-green)] sm:select-none" 
              ref={desktopBtnRef}
              onClick={toggleDesktopMenu}
            >
              user@.com
            </li>
            <li  
              className="relative cursor-pointer select-none"
              ref={orderBtnRef}
              onClick={toggleOrder}
              >
              <img src={iconCart} alt="shopping cart" />
              {cartCount > 0 && <div className="w-[19px] h-[19px] bg-[var(--hospital-green)] rounded-full text-[13px] font-bold absolute bottom-[1rem] left-[1rem] flex justify-center align-center">{cartCount}</div>}
            </li>
          </ul>
        </div>
      </nav>

      {showOrder && (
        <div ref={orderRef} className="mt-[3.6rem]">
          <MyOrder 
            
            // onClose={handleClose}
          />
        </div>
      )}
      {showDesktopMenu && (
        <div ref={desktopMenuRef} className="fixed top-[3.8rem] left-0 w-full bg-white z-50">
          <UserMenuDesktop />
        </div>
      )}
      {showMobileMenu && <div ref={mobileMenuRef} className="mt-[3.6rem]">
                            <UserMenuMobile 
                              setCategory={setCategory} 
                              selectedCategory={selectedCategory}
                              onClose={handleClose(setMobileMenuFalse)}
                              />
                        </div>}

    </>
  );
}
