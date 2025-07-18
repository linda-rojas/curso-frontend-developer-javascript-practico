import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./cardsProducts.css";

export function CardsProducts({ products, onSelectProduct  }) {

  // productos por nombre en el input de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    // Feedback visual
    const btn = e.currentTarget;
    btn.classList.remove("added");
    void btn.offsetWidth;
    btn.classList.add("added");
    setTimeout(() => btn.classList.remove("added"), 500);
  };

  // Filtrar productos según searchTerm
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <section className="mt-[3rem] p-[0.5rem] pt-[3rem] sm:p-[3rem] sm:mt-[3rem]">

        {/* Input de búsqueda */}
        <div className="max-w-md mx-auto mb-10 sm:mb-6">
          <div className="relative mr-3 ml-3 sm:mr-0 sm:ml-0">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[var(--hospital-green)] focus:border-[var(--hospital-green)]"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-sm" />
            </span>
          </div>
        </div>

        <div className="grid [grid-template-columns:repeat(auto-fill,_180px)] gap-[1.5rem] place-content-center sm:[grid-template-columns:repeat(auto-fill,_240px)] sm:gap-[3.5rem]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="w-[180px] p-[10px] border border-[var(--very-light-pink)] rounded-[8px] sm:w-[240px] sm:p-0 sm:border-0 sm:rounded-none"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[190px] h-[190px] object-contain cursor-pointer sm:block sm:w-[240px] sm:h-[240px] sm:rounded-[20px]"
                  onClick={() => onSelectProduct(product)}
                />
                <div className="max-w-full flex justify-between items-center mt-[12px]">
                  <div className="m-0">
                    <p className="font-bold text-[var(--md)] mt-0 mb-[4px] select-none">${product.price}</p>
                    <p className="w-[110px] max-w-full block truncate text-[var(--text-input-field)] sm:w-[150px] sm:block sm:text-[16px] sm:text-[var(--text-input-field)] sm:mt-0 sm:mb-0 select-none">{product.title}</p>
                  </div>
                  <figure
                    className="add-to-cart-btn flex items-center justify-center m-0 w-[35px] h-[35px] sm:w-[38px] sm:h-[38px] cursor-pointer rounded-full bg-[var(--hospital-green)]"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    <FontAwesomeIcon icon={faCartPlus} size="1rem" className="text-[18px] sm:text-[20px] text-white" />
                  </figure>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No se encontraron productos.</p>
          )}
        </div>
      </section>
    </>
  );
}