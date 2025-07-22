// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { ReactNode } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

function RootLayoutContent({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">{children}</main>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </CartProvider>
      </body>
    </html>
  );
}
