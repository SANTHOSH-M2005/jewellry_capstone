
import {create} from 'zustand';

type selectInputprops={
    inputType:string,
    setInputType:(inputType:string)=>void,
}

export const selectInputStore=create<selectInputprops>((set)=>({
    inputType:"image",
    setInputType:(inputType:string)=>set({inputType}),
}));
