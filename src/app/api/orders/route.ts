// src/app/api/orders/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Order } from "@/types";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, items } = body as Order;

    if (!customer?.name || !customer?.email || !customer?.address) {
      return NextResponse.json({ message: "Datos del cliente incompletos" }, { status: 400 });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ message: "El carrito está vacío" }, { status: 400 });
    }

    const orderWithTimestamp = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...body,
    };

    const filePath = join(process.cwd(), "/src/data/orders.json");
    const existing = [];

    try {
      const file = await import("fs/promises").then(fs => fs.readFile(filePath, "utf-8"));
      existing.push(...JSON.parse(file));
    } catch {
      // No file yet
    }

    existing.push(orderWithTimestamp);
    await writeFile(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ message: "Pedido guardado correctamente" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
