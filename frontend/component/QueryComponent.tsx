"use client";
import React, { useState } from "react";

export default function QueryComponent() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    console.log("User query:", input);
  };

  return (
    <>
      <div className="flex flex-col w-[80%] h-56.25 bg-[#FFFFFF] rounded-[15px] justify-center px-8">

        <p className="mb-2 font-bold">What are you looking for?</p>

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
