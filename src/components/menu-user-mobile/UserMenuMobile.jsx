import React from "react";
import { forwardRef } from "react";

export const UserMenuMobile = forwardRef(({ setCategory, selectedCategory, onClose}, ref) => {
  
  const categoryMap = {
    All: "all",
    Electronics: "electronics",
    Jewelery: "jewelery",
    Men: "men's clothing",
    Women: "women's clothing",
  };

  // estilo según la seleección de categoría
  const categoryClass = (name) =>
  `no-underline font-bold
    ${selectedCategory === categoryMap[name] 
      ? "text-[#5cd56c]"
      : "text-[var(--black)] hover:text-[var(--hospital-green)]"
    }`;

  return (
    <div className="p-[24px]" ref={ref}>
      <ul className="p-0 mt-[24px] list-none border-b border-b-[var(--very-light-pink)]">
        <li className="mb-[24px] font-bold">
          <a href="/">CATEGORIES</a>
        </li>
      {Object.keys(categoryMap).map((key) => (
        <li key={key} className="mb-[24px]">
          <a 
            href="#"
            onClick={e => { e.preventDefault(); setCategory(categoryMap[key]); onClose()}}
            className={categoryClass(key)}
            >{key}</a>
        </li>

      ))}
      </ul>

      <ul className="p-0 mt-[24px] list-none">
        <li className="mb-[24px]">
          <a 
            href="#"
            className="no-underline text-[var(--black)] font-bold"
            onClick={onClose}
            >My orders</a>
        </li>

      </ul>
      
    </div>
  );
});