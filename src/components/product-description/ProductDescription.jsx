import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./ProductDescription.css";

import { useClickOutside } from "../../hooks/useClickOutside";
import React, {  useRef } from "react";

export function ProductDescription({ product, onClose }) {

  // Agregar al carrito al hacer click en el botón (tambien efecto visual)
  const handleAddToCart = (product, e) => {

    e.stopPropagation();
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Este evento para que automaticamente se vean agregados los productos SIN RECARGAR
    window.dispatchEvent(new Event("cartUpdated"));

    // Feedback visual
    const btn = e.currentTarget;
    btn.classList.remove("added");
    void btn.offsetWidth;
    btn.classList.add("added");
    setTimeout(() => btn.classList.remove("added"), 500);
  };
    // si se hace click por fuera del elemento, se cierra

    const productDescriptionRef = useRef(null);
    const productDescriptionBtnRef = useRef(null);

    useClickOutside([productDescriptionRef, productDescriptionBtnRef], onClose, true);
  

    return(
        <>
        <aside 
          className="absolute w-full top-[3.8rem] bg-white p-[20px] right-2 sm:w-[360px] sm:border sm:border-[var(--very-light-pink)] sm:rounded-[5px] sm:box-content"
          ref={productDescriptionRef}
          >

            <div className="absolute flex items-center justify-center top-[24px] right-[24px] z-[2] bg-[#e8332d] w-[30px] h-[30px] p-[4px] rounded-full cursor-pointer hover:bg-[#ee3622da]">
                <FontAwesomeIcon 
                  icon={faXmark} 
                  alt="Icon-Close" 
                  size="xl"
                  className="text-white"
                  onClick={onClose} 
                />
            </div>
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[360px] object-contain rounded-[24px_24px_0_24px]"
            />
            <div className="m-[24px_24px_0_24px] select-none">
                <p className="font-bold text-[16px] mt-0 mb-[4px]">${product.price}</p>
                <p className="text-[#565353] text-[16px] mt-0 mb-[36px]">{product.title}</p>
                <p className="text-[var(--text-input-field)] text-[16px] mt-0 mb-[36px]">{product.description}</p>
                <button 
                  className="add-to-cart-button flex items-center justify-center gap-[1rem] bg-[var(--hospital-green)] rounded-[8px] border-0 text-white w-full cursor-pointer text-[16px] font-bold h-[50px] mb-[10px] select-none"
                  ref={productDescriptionBtnRef}
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <figure
                    className="flex items-center justify-center w-[35px] h-[35px] rounded-full  cursor-pointer"
                  >
                    <FontAwesomeIcon 
                      icon={faCartPlus} 
                      size="s" 
                      style={{color: "white"}}
                      className="w-[20px] h-[20px]"
                      />
                  </figure>
                  Add to cart
                </button>
            </div>
        </aside>
        </>
    )
}