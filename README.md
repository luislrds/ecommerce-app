
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
 ├── data                        # Funciones de lectura/escritura
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

## Decisiones técnicas clave

- Se eligió Next.js con App Router para aprovechar su soporte nativo para API Routes y server components, facilitando el desarrollo fullstack en un solo proyecto.  
- Se utilizó TypeScript para mayor seguridad de tipos y mejor mantenimiento del código.  
- TailwindCSS fue seleccionado por su rapidez y flexibilidad para crear una UI minimalista y responsive sin salir del JSX.  
- Para las animaciones se optó por Framer Motion, dado que permite microinteracciones fluidas con poco código.  
- Se implementó un mockDB en memoria para persistencia local, evitando la complejidad inicial de bases de datos reales, con vistas a poder escalar a MongoDB o similar.  
- La arquitectura se diseñó siguiendo principios de clean code y separación de responsabilidades, facilitando la modularidad y tests.  

## Comentarios e insights sobre usar IA como copiloto

- La IA fue un gran apoyo para acelerar la generación de código base, especialmente en la creación de la estructura de carpetas, componentes y API Routes.  
- Resultó muy útil para obtener ejemplos concretos de integración con librerías como Framer Motion y Tailwind, ahorrando tiempo de búsqueda y pruebas.  
- Ayudó a detectar y corregir errores comunes en React y Next.js, incluyendo problemas con hooks y configuraciones de tests.  
- Sin embargo, es necesario validar siempre el código generado y adaptarlo al contexto particular, ya que no reemplaza el conocimiento del desarrollador.  
- En general, usar IA como copiloto permite enfocarse más en la arquitectura y experiencia del usuario, delegando tareas repetitivas  
- Recomiendo combinar IA con buenas prácticas y revisiones para obtener los mejores resultados.

## 📄 Licencia

MIT © [Luis Alberto Salazar]
