import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { readFile } from "fs/promises";
import { Product } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { message: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const filePath = path.join(process.cwd(), "src", "data", "products.json");
    const data = await readFile(filePath, "utf-8");
    const products: Product[] = JSON.parse(data);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error al leer productos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
