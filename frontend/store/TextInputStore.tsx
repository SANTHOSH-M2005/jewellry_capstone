
import {create} from 'zustand';

type TestInputProps={
    testInput:string,
    setTestInput:(testInput:string)=>void,
}

export const TestInputStore = create<TestInputProps>((set)=>({
    testInput:"",
    setTestInput:(testInput:string)=>set({testInput}),
}));
