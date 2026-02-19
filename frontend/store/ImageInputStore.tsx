import { create } from "zustand";


type CartItem = {
  id: number,
  name: string,
  imageUrl: string,
  category?: string,
  material?: string,
  price?: string,
};

type ImageInputProps = {
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  clearImage: () => void;
  visible: boolean;
  recommended: CartItem[];
  setRecommended: (recommended: CartItem[]) => void;
};

export const ImageInputStore = create<ImageInputProps>((set) => ({
  imageFile: null,
  visible:true,
  recommended: [],  
  setImageFile: (file) => set({ imageFile: file }),
  setRecommended: (recommended: CartItem[]) => set({ recommended }),
  clearImage: () => set({ imageFile: null }),
}));
