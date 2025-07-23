import { Order } from "@/types";

const orders: Order[] = [];

export function getOrders(): Order[] {
  return orders;
}

export function addOrder(order: Order): void {
  orders.push(order);
}