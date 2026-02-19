import {create} from "zustand";
type CartItem = {
  id: number,
  name: string,
  imageUrl: string,
  category?: string,
  material?: string,
  price?: string,
};

type DrawingImageProps={
    DrawingImageFile:File|null;
    setDrawingImageFile:(file:File|null)=>void;
    clearDrawingImage:()=>void;
    DrawingImageRecommended: CartItem[];
    setDrawingImageRecommended: (recommended: CartItem[]) => void;
}
export const DrawingImageStore=create<DrawingImageProps>((set)=>({
    DrawingImageFile:null,
    setDrawingImageFile:(file)=>set({DrawingImageFile:file}),
    clearDrawingImage:()=>set({DrawingImageFile:null}),
    DrawingImageRecommended:[],
    setDrawingImageRecommended:(DrawingImageRecommended:CartItem[])=>set({DrawingImageRecommended}),
}))
