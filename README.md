
# 🛒 Tienda E-Commerce Fullstack con Next.js

Aplicación de e-commerce desarrollada con Next.js (App Router), que permite simular un flujo completo de pedidos: desde el catálogo hasta la confirmación y visualización de pedidos desde una página administrativa.

## 🚀 Demo

👉 [Ver aplicación desplegada en Vercel](https://ecommerce-app-xi-ten.vercel.app)

---

## 🧰 Tecnologías utilizadas

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: API Routes (Next.js)
- **Lenguaje**: TypeScript
- **Persistencia**: MockDB
- **Íconos**: [Lucide](https://lucide.dev/)
- **Pruebas**: Jest + Testing Library (opcional)
- **Despliegue**: Vercel

---

## 📁 Estructura del proyecto

```
/src
 ├── app
 │   ├── page.tsx                # Página de catálogo
 │   ├── cart/page.tsx           # Página del carrito
 │   ├── checkout/page.tsx       # Formulario de compra
 │   ├── confirm/page.tsx        # Confirmación de pedido
 │   └── admin/orders/page.tsx   # Vista de pedidos (admin)
 ├── components                  # Navbar, Footer, etc.
 ├── context                     # Contexto global del carrito
 ├── lib                         # Funciones de lectura/escritura (fs)
 ├── types                       # Tipos TS: Product, Order, etc.
 └── api
     ├── products/route.ts       # GET productos
     └── orders/route.ts         # POST pedido, GET pedidos
```

---

## 💡 Características principales

- 🛍️ Catálogo visual con productos
- 🛒 Carrito interactivo (añadir, eliminar, modificar)
- 📋 Formulario de checkout con validación
- ✅ Confirmación visual del pedido
- 🧾 Página de administración de pedidos (`/admin/orders`)
- ✨ Framer Motion para animaciones y microinteracciones
- 🎨 Estilo limpio y responsivo con Tailwind
- 🔒 Validación en frontend y backend
- 📁 Persistencia de pedidos en MockDB

---

## ⚙️ Instalación local

1. Clona el repositorio:

```bash
git clone https://github.com/luislrds/ecommerce-app.git
cd ecommerce-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` con la siguiente variable:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## 🔐 Acceso a la página de administración de pedidos

Para visualizar los pedidos recibidos:

1. Ve a la ruta:  
   👉 [`/admin/orders`](https://ecommerce-app-xi-ten.vercel.app/admin/orders)

2. Esta página muestra una tabla con:
   - Datos del cliente (nombre, email, dirección)
   - Fecha y hora del pedido
   - Lista de productos y cantidades
   - Total del pedido

> Nota: Esta página es pública en esta versión. Puedes protegerla con autenticación básica o middleware si se requiere.

---

## 🤖 IA como copiloto

Partes del código fueron generadas con ayuda de IA:

- Componentes visuales como `Navbar`, `Footer`, `ProductCard`.
- Validaciones de formularios.
- Generación inicial de rutas y layout.
- Persistencia en mockDb.
- Correcciones de errores (hooks, tipado, async/await).

Todas las sugerencias de la IA fueron revisadas y adaptadas manualmente.

---

## ✅ Mejoras futuras (TODO)

- [ ] Autenticación para `/admin/orders`
- [ ] Búsqueda y filtrado en catálogo
- [ ] Gestión de stock
- [ ] Pruebas unitarias e2e
- [ ] Migrar a base de datos real (PostgreSQL, Mongo, etc.)

---

## 📄 Licencia

MIT © [Luis Alberto Salazar]
