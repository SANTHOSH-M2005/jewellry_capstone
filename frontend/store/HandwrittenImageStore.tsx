import {create} from "zustand";
type HandwrittenImageProps={
    handwrittenImageFile:File|null;
    setHandwrittenImageFile:(file:File|null)=>void;
    clearHandwrittenImage:()=>void;
}
export const HandwrittenImageStore=create<HandwrittenImageProps>((set)=>({
    handwrittenImageFile:null,
    setHandwrittenImageFile:(file)=>set({handwrittenImageFile:file}),
    clearHandwrittenImage:()=>set({handwrittenImageFile:null}),
}))
