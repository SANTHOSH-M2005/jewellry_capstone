import {create} from "zustand";
type CartItem = {
  id: number,
  name: string,
  imageUrl: string,
  category?: string,
  material?: string,
  price?: string,
};

type HandwrittenImageProps={
    handwrittenImageFile:File|null;
    setHandwrittenImageFile:(file:File|null)=>void;
    clearHandwrittenImage:()=>void;
    HandWrittenRecommended: CartItem[];
    setHandWrittenRecommended: (recommended: CartItem[]) => void;
}
export const HandwrittenImageStore=create<HandwrittenImageProps>((set)=>({
    handwrittenImageFile:null,
    setHandwrittenImageFile:(file)=>set({handwrittenImageFile:file}),
    clearHandwrittenImage:()=>set({handwrittenImageFile:null}),
    HandWrittenRecommended:[],
    setHandWrittenRecommended:(HandWrittenRecommended:CartItem[])=>set({HandWrittenRecommended}),
}))
