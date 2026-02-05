"use client";
import React from "react";

import ImageSearchComponent from "@/component/ImageSearchComponent";
import AddJewelryMetadata from "@/component/AddJewelryMetadata";

import { useAdminInputStore } from "@/store/AdminInputStore";

export default function Page() {

  const UploadedImage = useAdminInputStore((state) => state.uploadedImage);
  const setUploadedImage = useAdminInputStore((state) => state.setUploadedImage,);

  return (
    <div>
      <div className="bg-amber-200 h-18 w-full shadow-md"></div>
      <div className="">

        <center className="mt-10">
          <ImageSearchComponent
            file={UploadedImage}
            setFile={setUploadedImage}
            visible={false}
          />
        </center>

        <center className="mt-1">
          <AddJewelryMetadata />
        </center>

      </div>
    </div>
  );
}
