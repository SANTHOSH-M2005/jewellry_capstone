import { create } from "zustand";

type ImageInputProps = {
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  clearImage: () => void;
  visible: boolean;
};

export const ImageInputStore = create<ImageInputProps>((set) => ({
  imageFile: null,
  visible:true,
  setImageFile: (file) => set({ imageFile: file }),

  clearImage: () => set({ imageFile: null }),
}));
