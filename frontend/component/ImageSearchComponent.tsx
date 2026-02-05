"use client";
import ButtonAtom from "@/atoms/ButtonAtom";
import React, { useRef } from "react";



type ImageUploadBoxProps = {
  file: File | null;
  setFile: (file: File | null) => void;
  title?: string;
  visible?: boolean;
};


export default function ImageSearchComponent(ImageUploadBoxProps: ImageUploadBoxProps) {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { file, setFile,visible} = ImageUploadBoxProps;



if (file) {
    console.log(file.name);
    console.log(file.type);
  }

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md">

      {/* Upload Area */}
      <div
        onClick={handleClick}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed py-14 text-center transition
          ${
            file
              ? "border-green-500 bg-green-50"
              : "border-gray-300 hover:border-yellow-500"
          }`}
      >

        {/* Icon */}
        <div
          className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full
            ${
              file
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
        >
          {file ? "✅" : "⬆️"}
        </div>

        {/* Text */}
        {!file ? (
          <>
            <p className="text-base font-semibold text-gray-800">
              Drag and drop your image here
            </p>
            <p className="text-sm text-gray-500">or click to browse</p>
          </>
        ) : (
          <>
            <p className="text-base font-semibold text-green-700">
              Upload completed
            </p>
            <p className="text-sm text-gray-600">{file.name}</p>
          </>
        )}

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
      {visible && <ButtonAtom />}
    </div>
  );
}
