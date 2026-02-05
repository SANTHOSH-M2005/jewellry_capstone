import { create } from "zustand";

type AdminDetails = {
  name: string;
  material: string;
  occasion: string;
  type: string;
  weight: string;
  price: string;
};

type AdminInputStoreType = {
  details: AdminDetails;
  uploadedImage: File | null;

  setDetail: (key: keyof AdminDetails, value: string) => void;
  setUploadedImage: (file: File | null) => void;
};

export const useAdminInputStore = create<AdminInputStoreType>((set) => ({
  details: {
    name: "",
    material: "",
    occasion: "",
    type: "",
    weight: "",
    price: "",
  },

  uploadedImage: null,

  setDetail: (key, value) =>
    set((state) => ({
      details: {
        ...state.details,
        [key]: value,
      },
    })),

  setUploadedImage: (file) => set({ uploadedImage: file }),
}));
