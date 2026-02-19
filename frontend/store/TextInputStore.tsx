
import {create} from 'zustand';


type CartItem = {
  id: number,
  name: string,
  imageUrl: string,
  category?: string,
  material?: string,
  price?: string,
};

type TestInputProps={
    textInput:string,
    recommended: CartItem[];
    setTestInput:(textInput:string)=>void,
    setRecommended: (recommended: CartItem[]) => void;
}


export const TestInputStore = create<TestInputProps>((set)=>({
    textInput:"",
    recommended:[],
    setTestInput:(textInput:string)=>set({textInput}),
    setRecommended: (recommended: CartItem[]) => set({ recommended })
}));
