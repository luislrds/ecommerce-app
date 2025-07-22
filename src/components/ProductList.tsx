// src/components/ProductList.tsx
"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 border hover:shadow-xl transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-52"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price} MXN</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
