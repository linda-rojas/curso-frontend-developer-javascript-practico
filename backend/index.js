require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
// Importar validaciones desde utils/validation.js
const { isValidEmail, isValidPassword } = require("./utils/validation");

const app = express();
// Usar el puerto desde .env si está definido, o 3307 por defecto
const PORT = process.env.PORT || 3307;

// Configuración de CORS para permitir peticiones desde el frontend
app.use(cors());
app.use(express.json());

// Configuración de conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

// NOTA IMPORTANTE:
// La lógica de validación de email y password debe estar sincronizada con el frontend (services/auth.js)
// Si se modifica aquí, también debe actualizarse en el frontend para mantener la experiencia y seguridad.

// Ruta para registrar usuario
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email y password requeridos" });
  }
  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ message: "Formato de email inválido o demasiado largo" });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({
      message:
        "La contraseña debe tener entre 8 y 150 caracteres, incluir letras y números",
    });
  }
  // Verifica si el usuario ya existe
  // db.query(
  //   "SELECT * FROM users WHERE email = ?",
  //   [email],
  //   async (err, results) => {
  //     if (err) return res.status(500).json({ message: "Error en el servidor" });
  //     if (results.length > 0) {
  //       return res.status(409).json({ message: "El usuario ya existe" });
  //     }
  //     // Hashea la contraseña
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     db.query(
  //       "INSERT INTO users (email, password) VALUES (?, ?)",
  //       [email, hashedPassword],
  //       (err, result) => {
  //         if (err)
  //           return res
  //             .status(500)
  //             .json({ message: "Error al registrar usuario" });
  //         res.status(201).json({ message: "Usuario registrado correctamente" });
  //       }
  //     );
  //   }
  // );
});

// Ruta para login mejorada
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email y password requeridos" });
  }
  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ message: "Formato de email inválido o demasiado largo" });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({
      message:
        "La contraseña debe tener entre 8 y 150 caracteres, incluir letras y números",
    });
  }
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Error en el servidor" });
    if (results.length === 0) {
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrectos" });
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: "Error en el servidor" });
      if (!isMatch)
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrectos" });
      res.json({
        message: "Login exitoso",
        user: { id: user.id, email: user.email },
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
