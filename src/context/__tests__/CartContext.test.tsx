import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../CartContext";
import { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

// Limpia localStorage antes de cada test
beforeEach(() => {
  localStorage.clear();
});

const sampleProduct = {
  id: "1",
  name: "Producto Test",
  description: "Descripción",
  price: 100,
  image: "/test.jpg",
  qty: 1,
};

describe("CartContext", () => {
  test("agrega un producto al carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(sampleProduct);
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe("Producto Test");
    expect(result.current.cart[0].qty).toBe(1);
  });

  test("incrementa cantidad si se agrega el mismo producto", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(sampleProduct);
      result.current.addToCart(sampleProduct);
    });

    expect(result.current.cart.length).toBe(1); // aún un solo producto
    expect(result.current.cart[0].qty).toBe(2); // cantidad incrementada
  });

  test("remueve producto del carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(sampleProduct);
      result.current.removeFromCart("1");
    });

    expect(result.current.cart.length).toBe(0);
  });

  test("actualiza cantidad del producto", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(sampleProduct);
      result.current.updateQuantity("1", 5);
    });

    expect(result.current.cart[0].qty).toBe(5);
  });

  test("limpia el carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(sampleProduct);
      result.current.clearCart();
    });

    expect(result.current.cart.length).toBe(0);
  });
});
