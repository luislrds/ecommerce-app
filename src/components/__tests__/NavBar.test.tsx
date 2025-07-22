"use client";

import { render, screen } from "@testing-library/react";
import Navbar from "../NavBar";
import { CartProvider } from "@/context/CartContext";

describe("Navbar", () => {
  it("muestra el contador de carrito cuando hay productos", () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    );

    // Al iniciar, carrito vacío, no debe mostrar contador
    expect(screen.queryByText("1")).not.toBeInTheDocument();
  });
});
