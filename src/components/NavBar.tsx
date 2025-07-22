
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react"; // o cualquier otro icono

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="bg-white p-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="flex items-center">
        <img
        src="../../assets/logo.svg"
        alt="Logo Café Shop"
        className="w-10 h-10"
      />
        <span className="ml-2 text-xl font-bold text-brown-800">Café Shop</span>
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/" className="hover:text-blue-600">
          Catálogo
        </Link>
        <Link href="/cart" className="relative hover:text-blue-600">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
