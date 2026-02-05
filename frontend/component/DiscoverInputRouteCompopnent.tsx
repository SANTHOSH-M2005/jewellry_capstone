"use client";
import { useState } from "react";

import { selectInputStore } from "@/store/InputRouteStore";

const tabs = [
  { id: "text", label: "Text Search", icon: "⌨️" },
  { id: "image", label: "Image Upload", icon: "🖼️" },
  { id: "sketch", label: "Sketch Drawing", icon: "✏️" },
  { id: "hand", label: "Handwritten Text", icon: "🖊️" },
];

export default function SearchTabs() {
  const setInputType = selectInputStore(
    (state: { setInputType: (inputType: string) => void }) =>
      state.setInputType,
  );
  const inputType = selectInputStore(
    (state: { inputType: string }) => state.inputType,
  );

  return (
    <div className="w-[700px] bg-[#FBF8F2] border-b border-[#959595]">
      <div className="flex gap-10 px-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setInputType(tab.id)}
            className={`relative flex items-center gap-2 py-4 text-sm font-bold
              ${
                inputType === tab.id
                  ? "text-yellow-600"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            <span>{tab.icon}</span>
            {tab.label}

            {/* underline */}
            {inputType === tab.id && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
