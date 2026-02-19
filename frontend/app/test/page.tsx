"use client";
import React from "react";
import JewelryCard from "@/component/JewelryProductCard";
import Navbar from "@/component/Navbar";
import { ImageInputStore } from "@/store/ImageInputStore";
import { TestInputStore } from "@/store/TextInputStore";
import { HandwrittenImageStore } from "@/store/HandwrittenImageStore";
import { DrawingImageStore } from "@/store/DrawingImageStore";
import { selectInputStore } from "@/store/InputRouteStore";

export default function SearchResultsPage() {
  const inputType = selectInputStore((state) => state.inputType);
  
  const textRecommended = TestInputStore((state) => state.recommended);
  const imageRecommended = ImageInputStore((state) => state.recommended);
  const drawingRecommended = DrawingImageStore((state) => state.DrawingImageRecommended);
  const handRecommended = HandwrittenImageStore((state) => state.HandWrittenRecommended);

  let recommended: any[] = [];
  let title = "Search Results";

  if (inputType === "text") {
    recommended = textRecommended;
    title = "Text Search Results";
  } else if (inputType === "image") {
    recommended = imageRecommended;
    title = "Image Search Results";
  } else if (inputType === "sketch") {
    recommended = drawingRecommended;
    title = "Sketch Search Results";
  } else if (inputType === "hand") {
    recommended = handRecommended;
    title = "Handwritten Search Results";
  }

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#2c2c2c] mb-8">{title}</h1>
        
        {recommended.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No results found. Try a different search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recommended.map((item: any) => (
              <JewelryCard
                key={item.id}
                imageUrl={item.imageUrl}
                category={item.category || "Jewelry"}
                name={item.name}
                material={item.material || "Gold"}
                price={item.price || "₹ 0"}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
