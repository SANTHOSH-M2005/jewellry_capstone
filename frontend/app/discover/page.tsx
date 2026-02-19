"use client";
import React from "react";

import Navbar from "@/component/Navbar";
import QueryComponent from "@/component/QueryComponent";
import ImageSearchComponent from "@/component/ImageSearchComponent";
import DrawJewelryComponent from "@/component/DrawJewelryComponent";
import DiscoverInputRouteComponent from "@/component/DiscoverInputRouteCompopnent";

import { ImageInputStore } from "@/store/ImageInputStore";
import { selectInputStore } from "@/store/InputRouteStore";
import { HandwrittenImageStore } from "@/store/HandwrittenImageStore";

export default function Discover() {

  const inputType = selectInputStore((state) => state.inputType);

  const { handwrittenImageFile, setHandwrittenImageFile,setHandWrittenRecommended } = HandwrittenImageStore();
  const { imageFile, setImageFile , setRecommended} = ImageInputStore();

  
  return (
    <div>
      <Navbar/>

      {/* title of Discover page */}
      <center>
        <h1 className="text-2xl font-bold text-black mt-7 mb-7">
          Discover Jewelry
        </h1>
      </center>

      {/* routre outlet for the 4 input types */}
      <center>
        <DiscoverInputRouteComponent />
      </center>

      <center>
        {inputType === "text" && (
          <div className="mt-10">
            <QueryComponent />
          </div>
        )}
      </center>
      
      <center>
        {inputType === "image" && (
          <div className="mt-10">
            <ImageSearchComponent file={imageFile} setFile={setImageFile} visible={true} setRecommended={setRecommended}/>
          </div>
        )}
      </center>

      {inputType === "sketch" && (
        <div className="mt-10">
          <DrawJewelryComponent />
        </div>
      )}

      <center>
        {inputType === "hand" && (
          <div className="mt-10">
            <ImageSearchComponent  file={handwrittenImageFile} setFile={setHandwrittenImageFile} visible={true} setRecommended={setHandWrittenRecommended}/>
          </div>
        )}
      </center>

    </div>
  );
}
