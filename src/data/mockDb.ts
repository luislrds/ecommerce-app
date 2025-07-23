import { Order } from "@/types";

let orders: Order[] = [];

export function getOrders(): Order[] {
  return orders;
}

export function addOrder(order: Order): void {
  orders.push(order);
}