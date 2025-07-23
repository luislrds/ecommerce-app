import { NextResponse } from "next/server";
import { getOrders, addOrder } from "@/data/mockDb"; // mockDB temporal

export async function GET() {
  try {
    const orders = getOrders();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener pedidos" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    addOrder(body);
    return NextResponse.json({ message: "Pedido guardado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al guardar pedido" }, { status: 500 });
  }
}
