# Lexsa Vinils 🎵

E-commerce de disquería especializada en vinilos, CDs y equipos de audio. Proyecto desarrollado con React + Vite como parte de mi formación en desarrollo frontend.

## 🚀 Demo

> Próximamente en producción

## 🛠️ Tech Stack

- **React 18** — UI y gestión de estado con Context API
- **React Router v6** — Navegación SPA con rutas dinámicas
- **Firebase / Firestore** — Base de datos en tiempo real y persistencia de órdenes
- **React Hook Form** — Manejo y validación de formularios
- **Vite** — Bundler y entorno de desarrollo

## ✨ Funcionalidades

- Listado de productos con categorías (Vinilos, CDs, Bandejas)
- Página de detalle por producto
- Carrito de compras con Context API (agregar, eliminar, vaciar)
- Checkout con validación de formulario
- Generación de orden en Firestore al finalizar la compra
- Loading states y manejo de errores en todas las vistas
- Página "Sobre Nosotros"

## ⚙️ Cómo correr el proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/Lexsa21/Proyecto-React.git
cd Proyecto-React
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear el archivo `.env` a partir del ejemplo:
```bash
cp .env.example .env
```

4. Completar las variables de entorno con tus credenciales de Firebase en `.env`.

5. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── NavBar.jsx
│   ├── CartWidget.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── SobreNosotros.jsx
│   └── footer.jsx
├── context/
│   └── CartContext.jsx
├── firebase/
│   └── config.js
├── App.jsx
└── main.jsx
```

## 📦 Variables de entorno

El proyecto requiere un archivo `.env` en la raíz con las siguientes variables:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Ver `.env.example` como referencia.
