import { useState, useEffect } from "react";

export function useCategoryFilter() {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Cargar productos solo una vez
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // Filtrar productos cada vez que cambia la categoría o los productos
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  return { category, setCategory, filteredProducts };
}
