// NOTA: Si se modifican estas funciones, sincronizar también la validación en el frontend (services/auth.js)

function isValidEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  return re.test(email) && email.length <= 50;
}

function isValidPassword(password) {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    password.length <= 50 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password)
  );
}

module.exports = { isValidEmail, isValidPassword };
