// src/types/index.ts

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type CartItem = Product & {
  qty: number;
};

export type CustomerInfo = {
  name: string;
  email: string;
  address: string;
};

export interface Order {
  id: number;
  createdAt: string;
  customer: {
    name: string;
    email: string;
    address: string;
  };
  items: {
    id: number;
    name: string;
    price: number;
    qty: number;
  }[];
}

