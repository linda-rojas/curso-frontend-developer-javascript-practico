import { useNavigate } from "react-router-dom";

export default function LoginUser() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí hacer validación o simularla
    navigate("/store"); // redirige a la tienda
  };

  return (
    <>
    <div className="grid w-full h-screen place-items-center">
      <div className="grid grid-rows-[auto_1fr_auto] w-[300px]">

        {/* Visible en móviles, oculto en pantallas ≥ 640px */}
        <img 
          src="/logo_yard_sale.svg" 
          alt="logo" 
          className="w-[150px] mb-[48px] justify-self-center block sm:hidden" 
        />

        {/* Visible en desktop, oculto en pantallas < 640px */}
        <img 
          src="/logo_yard_sale.svg" 
          alt="logo" 
          className="w-[150px] mb-[48px] justify-self-center hidden sm:block" 
        />

        <form action="/" className="flex flex-col" onSubmit={handleLogin}>
          <label for="email" className="text-[14px] font-bold mb-[4px]">Email address</label>
          <input 
            type="text" 
            id="email" 
            placeholder="user@.cm" 
            className="bg-[var(--text-input)] border-0 rounded-[8px] h-[30px] text-[var(--md)] p-[6px] mb-[22px] focus:outline-none focus:ring-0" />

          <label for="password" className="text-[14px] font-bold mb-[4px]">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="*********" 
            className="bg-[var(--text-input)] border-0 rounded-[8px] h-[30px] text-[var(--md)] p-[6px] mb-3 focus:outline-none focus:ring-0" />

          <input 
            type="submit" 
            value="Log in" 
            className="text-[var(--white)] bg-[var(--hospital-green)]  rounded-[8px] border-0 w-full cursor-pointer text-[var(--md)] font-bold h-[50px] mt-[14px] mb-[30px] hover:bg-[var(--hospital-green-hover)]" />

          <a 
            href="/"
            className="text-[var(--hospital-green)] text-[14px] text-center no-underline mb-[52px] hover:text-[var(--hospital-green-hover)]"
          >Forgot my password</a>
        </form>
      </div>
  </div>
    </>
  );
}