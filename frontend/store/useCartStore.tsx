import {create} from "zustand";

type CartItem = {
  id: number,
  name: string,
  price: number,
  material: string,
  category: string,
  imageUrl?: string,
};

export const CartStore = create<CartItem>((set) => ({
    id: 1,
    name: "Elegant Pearl Necklace",
    price: 129.99,
    material: "Pearl",
    category: "Necklaces",
}))