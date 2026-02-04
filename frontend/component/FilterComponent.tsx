"use client";
import React, { useState } from "react";

export default function FilterSidebar() {
  const [price, setPrice] = useState(1000000);

  return (
    <div className="w-65 rounded-2xl bg-white p-5 shadow-md">
      {/* Title */}
      <h2 className="mb-4 text-lg font-bold">Filters</h2>

      {/* Price Range */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold">Price Range</p>

        <input
          type="range"
          min={0}
          max={10000000}
          step={50000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-yellow-500"
        />

        <p className="mt-2 text-sm text-gray-600">
          Up to ₹{price.toLocaleString()}
        </p>
      </div>

      {/* Material */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold">Material</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Gold
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Silver
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Platinum
          </label>
        </div>
      </div>

      {/* Occasion */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold">Occasion</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Wedding
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Casual
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Party
          </label>
        </div>
      </div>

      {/* Type */}
      <div>
        <p className="mb-2 text-sm font-semibold">Type</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Rings
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Necklaces
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Earrings
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Bracelets
          </label>
        </div>
      </div>
    </div>
  );
}
