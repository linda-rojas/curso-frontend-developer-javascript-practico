import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isValidEmail, isValidPassword, loginUser } from "../../services/auth";

export default function LoginUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState({ email: false, password: false });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInputError({ email: false, password: false });
    let hasError = false;
    if (!isValidEmail(email)) {
      setInputError((prev) => ({ ...prev, email: true }));
      hasError = true;
    }
    if (!isValidPassword(password)) {
      setInputError((prev) => ({ ...prev, password: true }));
      hasError = true;
    }
    if (hasError) {
      setError("Datos incorrectos");
      return;
    }
    const res = await loginUser({ email, password });
    if (!res.ok) {
      setError(res.data.message || "Datos incorrectos");
      setInputError({ email: true, password: true });
      return;
    }
    setError("");
    setInputError({ email: false, password: false });
    navigate("/store");
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
            className="w-[170px] mb-[48px] justify-self-center hidden sm:block"
          />
          <form action="/" className="flex flex-col" onSubmit={handleLogin}>
            <label htmlFor="email" className="text-[14px] font-bold mb-[4px]">
              Email address
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@.cm"
              className={`bg-[var(--text-input)] border-0 rounded-[8px] h-[40px] text-[var(--md)] p-[10px] mb-[22px] focus:outline-none focus:ring-0 ${inputError.email ? "border border-red-500 bg-red-100" : ""}`}
            />
            <label htmlFor="password" className="text-[14px] font-bold mb-[4px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              className={`bg-[var(--text-input)] border-0 rounded-[8px] h-[40px] text-[var(--md)] p-[10px] mb-3 focus:outline-none focus:ring-0 ${inputError.password ? "border border-red-500 bg-red-100" : ""}`}
            />
            {error && (
              <div className="text-red-600 text-center text-[14px] mb-2 font-semibold">
                {error}
              </div>
            )}
            <input
              type="submit"
              value="Log in"
              className="text-[var(--white)] bg-[var(--hospital-green)]  rounded-[8px] border-0 w-full cursor-pointer text-[var(--md)] font-bold h-[50px] mt-[14px] mb-[30px] hover:bg-[var(--hospital-green-hover)]"
            />
            <a
              href="/"
              className="text-[var(--hospital-green)] text-[14px] text-center no-underline mb-[52px] hover:text-[var(--hospital-green-hover)]"
            >
              Forgot my password
            </a>
          </form>
        </div>
      </div>
    </>
  );
}