import { NextApiRequest, NextApiResponse } from "next";
import { addOrder, getOrders } from "@/data/mockDb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Retorna todos los pedidos
    const allOrders = getOrders();
    return res.status(200).json(allOrders);
  }

  if (req.method === "POST") {
    try {
      const order = req.body;
      // Validar order aquí si quieres
      addOrder(order);
      return res.status(201).json({ message: "Pedido guardado" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al guardar pedido" });
    }
  }

  res.status(405).json({ message: "Método no permitido" });
}
