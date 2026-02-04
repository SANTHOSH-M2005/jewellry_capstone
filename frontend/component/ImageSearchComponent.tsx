"use client";
import ButtonAtom from "@/atoms/ButtonAtom";
import React, { useRef } from "react";

export default function ImageSearchComponent() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md">
      {/* Upload Area */}
      <div
        onClick={handleClick}
        className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 py-14 text-center transition hover:border-yellow-500"
      >
        {/* Icon */}
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          ⬆️
        </div>

        <p className="text-base font-semibold text-gray-800">
          Drag and drop your image here
        </p>
        <p className="text-sm text-gray-500">or click to browse</p>

        {/* Hidden Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Search Button */}
      <ButtonAtom/>
    </div>
  );
}
