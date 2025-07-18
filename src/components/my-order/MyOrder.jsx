import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import { ProductDescription } from "../product-description/ProductDescription";
// import { useToggle } from "../../hooks/useToggle";

export default function MyOrder() {
  const [cart, setCart] = useState([]);
  const [groupedCart, setGroupedCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectProduct, setSelectProduct] = useState(null);

  // Agrupar productos y calcular total
  const updateGroupedCart = (rawCart) => {
    const grouped = {};
    let sum = 0;

    rawCart.forEach((product) => {
      if (!grouped[product.id]) {
        grouped[product.id] = { ...product, quantity: 1 };
      } else {
        grouped[product.id].quantity += 1;
      }
    });

    const groupedArray = Object.values(grouped);
    groupedArray.forEach((item) => {
      sum += item.price * item.quantity;
    });

    setGroupedCart(groupedArray);
    setTotal(sum);
  };

  // Al cargar
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    updateGroupedCart(storedCart);
  }, []);

  // Actualiza estado y localStorage sin recargar
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    updateGroupedCart(newCart);
  };

  const increaseQty = (product) => {
    updateCart([...cart, product]);
  };

  const decreaseQty = (product) => {
    const index = cart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      updateCart(newCart);
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((p) => p.id !== productId);
    updateCart(newCart);
  };

  // deja de mostrarse my-order al dar click
    const [showMyOrder, setShowMyOrder] = useState(true);

    const handleCheckout = () => {
      if (cart.length === 0) return;

      const newOrder = {
        id: Date.now(), // id único para la orden
        date: new Date().toISOString(),
        products: [...cart],
      };

      // Recuperar órdenes anteriores y agregar la nueva
      const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const updatedOrders = [...previousOrders, newOrder];

      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      // Vaciar carrito
      setCart([]);
      updateCart([]);
    };
  
  return (
    <>
    {showMyOrder && (

      <aside className="w-full right-0 p-[24px] sm:w-[360px] sm:absolute sm:right-[2rem] sm:bg-[var(--white)] sm:border sm:border-[var(--very-light-pink)] sm:rounded-[5px] sm:box-content">
        <div className="w-[230px] flex mb-[2rem] justify-between">

            <img 
            src="/icons/flechita.svg" 
            alt="arrow" 
            className="w-[12px] rotate-180 mr-[14px] cursor-pointer hover:w-[13px]"
            onClick={() => setShowMyOrder(false)}
          />
          
          
          <p className="text-[21px] font-bold select-none sm:text-[20px]">My order</p>
        </div>

        <div>
          {groupedCart.map((product) => (
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 mb-6 items-center" key={product.id}>
              <figure onClick={() => {
                  setSelectProduct(product); 
                  setShowMyOrder(false);
                }}
                  className="cursor-pointer m-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-[70px] h-[70px] object-contain rounded-[20px]"
                  />
              </figure>
              <p className="truncate text-[var(--text-input-field)] select-none">{product.title}</p>
              <p className="text-[var(--md)] font-bold select-none">${product.price}</p>
              <figure onClick={() => removeFromCart(product.id)} className="cursor-pointer">
                <FontAwesomeIcon icon={faXmark} size="1rem" className="text-[25px] text-[var(--text-input-field)] cursor-pointer hover:text-[#ee3622da]"  />
              </figure>
              {product.quantity > 1 && (
                <div className="max-w-max select-none">
                  <button 
                    className="mr-[5px] bg-[#ee3622da] border-0 text-white
                    text-[1.1rem] w-[25px] h-[25px] rounded-[70%]
                    cursor-pointer font-bold transition-colors duration-200" 
                    onClick={() => decreaseQty(product)}>-</button>
                  <span className="mr-[5px]">{product.quantity}</span>
                  <button 
                    onClick={() => increaseQty(product)}
                    className="mr-[5px] bg-[#ee3622da] border-0 text-white
                    text-[1.1rem] w-[25px] h-[25px] rounded-[70%]
                    cursor-pointer font-bold transition-colors duration-200"
                    >+</button>
                </div>
              )}
            </div>
          ))}

          {groupedCart.length > 0 ? (
            <>
              <div className="grid grid-cols-[auto_1fr] gap-4 items-center mb-6 rounded-[8px] p-[10px_24px] bg-[var(--text-input)] select-none">
                <p className="flex flex-col"><span className="text-[var(--md)] font-bold select-none">Total</span></p>
                <p className="flex justify-end font-bold select-none">${total.toFixed(2)}</p>
              </div>
              <button 
              onClick={handleCheckout}
                className="bg-[var(--hospital-green)] rounded-[8px] border-0 text-white w-full cursor-pointer text-[16px] font-bold h-[50px] hover:bg-[var(--hospital-green-hover)] select-none"
              >
                  Checkout
              </button>
            </>
          ) : (
            <p style={{ textAlign: "center" }}>Tu carrito está vacío.</p>
          )}
        </div>
      </aside>
    )}

    {/* si selecciona la imagen se muestra la descripcion del producto */}
    {
        selectProduct && (
            <ProductDescription
              product={selectProduct}
              onClose={() => setSelectProduct(null)}
            />
        )
      }
    </>
  );
}
