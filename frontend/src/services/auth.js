// Validación de email
export function isValidEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  return re.test(email) && email.length <= 50;
}

// Validación de password (mínimo 8 caracteres, máximo 50, al menos una letra y un número)
export function isValidPassword(password) {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    password.length <= 50 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password)
  );
}

// Lógica de login (petición al backend)
export async function loginUser({ email, password }) {
  const response = await fetch("http://localhost:3307/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return { ok: response.ok, data };
}
