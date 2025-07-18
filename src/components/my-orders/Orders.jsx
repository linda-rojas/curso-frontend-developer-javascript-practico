import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const getTotal = (products) => {
    return products.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);
  };


  return (
    <>
      <aside className="w-full h-screen grid place-items-center px-4">
        <section className="grid grid-rows-[auto_1fr_auto] w-[300px]">
          <h1 className="hidden sm:block sm:text-[18px] sm:mb-[40px] sm:text-center sm:font-bold">My orders</h1>

          {orders.length === 0 ? (
            <p className="text-center text-[var(--text-input-field)]">No hay órdenes aún</p>
          ) : (
              orders.map((order) => {
              const totalItems = order.products.reduce((acc, p) => acc + (p.quantity || 1), 0);
              const dateFormatted = new Date(order.date).toLocaleDateString();

              return (
                <div key={order.id} className="flex flex-col mb-6 p-4 border rounded">
                  <p className="text-base font-bold">{dateFormatted}</p>
                  <p className="text-sm text-[var(--very-light-pink)]">{totalItems} artículos</p>
                  <p className="text-end font-bold">Total ${getTotal(order.products)}</p>
                </div>
              );
            })
          )}
        </section>
      </aside>
    </>
  );
}
