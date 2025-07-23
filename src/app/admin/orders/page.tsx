"use client";

import { useEffect, useState } from "react";
import { Item, Order } from "@/types";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) throw new Error("Error al cargar pedidos");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <p>Cargando pedidos...</p>;

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pedidos recibidos</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Aún no hay pedidos.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg bg-white shadow-sm">
              <h2 className="font-semibold text-lg mb-2">Pedido #{order.id}</h2>
              <p><strong>Cliente:</strong> {order.customer.name}</p>
              <p><strong>Email:</strong> {order.customer.email}</p>
              <p><strong>Dirección:</strong> {order.customer.address}</p>
              <p><strong>Fecha:</strong> {new Date(order.createdAt).toLocaleString()}</p>

              <div className="mt-3">
                <h3 className="font-medium">Productos:</h3>
                <ul className="list-disc pl-6">
                  {order.items.map((item: Item) => (
                    <li key={item.id}>
                      {item.name} × {item.qty} (${item.price} c/u)
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
