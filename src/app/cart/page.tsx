"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          El carrito está vacío.{" "}
          <Link href="/" className="text-blue-500 underline">
            Ver productos
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 p-1 border rounded text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Ir al Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
