"use client";
import React, { useState } from "react";
import { TestInputStore } from "@/store/TextInputStore"; 
import { sendText } from "@/utils/TextImageApi";
import { useRouter } from "next/navigation";


export default function QueryComponent() {

  const [input, setInput] = useState("");
  const router = useRouter();
  const setTestInput = TestInputStore((state) => state.setTestInput);
  const setRecommended = TestInputStore((state) => state.setRecommended);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); 
  };
  
  const getRandomPrice = () => {
    const price = Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000;
    return `₹ ${price.toLocaleString("en-IN")}`;
  };

  const handleSearch = async () => {
    console.log("User query:", input);
    setTestInput(input); // store in Zustand if needed

  try {
    const data = await sendText(input);
    console.log("Data from backend:", data);

     const formatted = data.results.map((item: any, index: number) => ({
        id: index,
        name: item.image_name,
        imageUrl: item.image_url,
        category: item.category,
        material: "Gold",
        price: getRandomPrice(),
      }));

      setRecommended(formatted);
      router.push("/test");// Update Zustand with recommended items
      
  } catch (err) {
    console.error("Search failed:", err);
  }
};

  return (
    <>
      <div className="flex flex-col w-[80%] h-56.25 bg-[#FFFFFF] rounded-[15px] justify-center px-8">

        <p className="mb-2 font-bold text-black text-left">What are you looking for?</p>

        <div className="flex flex-col h-30 justify-between">
          <input
            className="h-12 border rounded-lg pl-3.5 border-[#888] focus:outline-none focus:ring-amber-500"
            placeholder="e.g 22K Gold ring for wedding under Rs2 lakhs"
            value={input}
            onChange={handleChange}
          />

          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-black transition hover:bg-yellow-600 active:scale-[0.98]"
            onClick={handleSearch}
          >
          🔍   Search Jewelry
          </button>
        </div>
      </div>
    </>
  );
}
