import React, { useState } from "react";
import { CardsProducts } from '../products/CardsProducts';
import { useCategoryFilter } from '../../hooks/useCategoryFilter';
import Navbar from '../Navbar/Navbar';
import { ProductDescription } from "../product-description/ProductDescription";


export default function Store() {

    const { category:selectedCategory, setCategory, filteredProducts } = useCategoryFilter();

    // Este estado se usa para mostrar la descripción del producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <Navbar setCategory={setCategory} selectedCategory={selectedCategory}/>
            <CardsProducts products={filteredProducts} onSelectProduct={setSelectedProduct}/>

            {selectedProduct && (
                <ProductDescription 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </>
    )
}