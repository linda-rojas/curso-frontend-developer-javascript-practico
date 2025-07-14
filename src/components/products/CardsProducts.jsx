import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./cardsProducts.css";

export function CardsProducts({ products }) {


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

  return (
    <>
    <section className="mt-[3rem] p-[0.5rem] pt-[3rem] sm:p-[3rem] sm:mt-[3rem]">
      <div className="grid [grid-template-columns:repeat(auto-fill,_180px)] gap-[1.5rem] place-content-center sm:[grid-template-columns:repeat(auto-fill,_240px)] sm:gap-[3.5rem]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[180px] p-[10px] border border-[var(--very-light-pink)] rounded-[8px] sm:w-[240px] sm:p-0 sm:border-0 sm:rounded-none"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[190px] h-[190px] object-contain sm:block sm:w-[240px] sm:h-[240px] sm:rounded-[20px]"
            />
            <div className="max-w-full flex justify-between items-center mt-[12px]">
              <div className="m-0">
                <p className="font-bold text-[var(--md)] mt-0 mb-[4px]">${product.price}</p>
                <p className="w-[110px] max-w-full block truncate text-[var(--text-input-field)] sm:w-[150px] sm:block sm:text-[var(--md)] sm:text-[var(--text-input-field)] sm:mt-0 sm:mb-0">{product.title}</p>
              </div>
              <figure
                className="add-to-cart-btn flex items-center justify-center m-0 w-[35px] h-[35px] sm:w-[38px] sm:h-[38px] cursor-pointer rounded-full bg-[var(--hospital-green)]"
                onClick={(e) => handleAddToCart(product, e)}
              >
                <FontAwesomeIcon icon={faCartPlus} size="1rem" className="text-[18px] sm:text-[20px] text-white"  />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
    
  );
}