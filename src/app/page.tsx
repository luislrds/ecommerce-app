// src/app/page.tsx
import ProductList from "@/components/ProductList";
import { Product } from "@/types";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error al cargar productos");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
