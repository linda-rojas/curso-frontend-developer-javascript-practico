# 🛍️ Plataforma de Comercio Electrónico (Tienda Virtual)

Este proyecto es una **aplicación full-stack** para una tienda virtual. Permite a los usuarios iniciar sesión y, próximamente, realizar compras, ver productos y gestionar su cuenta. El sistema está dividido en frontend y backend, e incluye autenticación, diseño responsivo y conexión con base de datos.

---

## 📁 Estructura del Proyecto

/Frontend-developer-Javascript/
├── frontend/ # Aplicación cliente con React + Vite y Tailwind CSS
└── backend/ # API REST con Node.js + Express, BD MySQL

---

## 🚀 Frontend

- **Tecnologías:**

  - HTML/CSS
  - [Tailwind CSS](https://tailwindcss.com/)

- **Funcionalidad actual:**

  - Se instaló y configuró Tailwind CSS.
  - Se creó el componente `LoginUser`, que incluye campos para:
    - usuario (correo)
    - Contraseña

- **Próximos pasos:**
  - Agregar validaciones de usuario y contraseña.
  - Conectar el formulario con la API del backend para autenticación.

---

## 🛠 Backend

- Inicializado con `npm init -y`
- Se instalaron las siguientes dependencias:

````bash

npm install express mysql2 cors bcrypt jsonwebtoken


Tecnologías utilizadas:

Express: framework para la API REST

MySQL2: conexión con base de datos

CORS: permite la comunicación entre frontend y backend

bcrypt: encriptación de contraseñas

jsonwebtoken (JWT): autenticación segura basada en tokens

Estructura futura del backend:

Rutas para autenticación

Validación de credenciales

Conexión con base de datos MySQL para almacenar usuarios y productos

```bash

````
