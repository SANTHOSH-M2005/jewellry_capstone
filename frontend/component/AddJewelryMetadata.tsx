"use client";
import React from "react";
import { useAdminInputStore } from "@/store/AdminInputStore";

export default function AddJewelryMetadata() {
  const { details, setDetail } = useAdminInputStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetail(name as keyof typeof details, value);
  };

  const handleSubmit = () => {
    console.log("Jewelry Metadata from Store:", details);
  };

  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md text-black">
      <h2 className="mb-4 text-lg font-semibold">Add Jewelry Metadata</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="name"
          value={details.name}
          onChange={handleChange}
          placeholder="Jewelry Name"
          className="rounded-lg border px-4 py-2"
        />

        <input
          name="material"
          value={details.material}
          onChange={handleChange}
          placeholder="Material"
          className="rounded-lg border px-4 py-2"
        />

        <input
          name="price"
          value={details.price}
          onChange={handleChange}
          placeholder="Price"
          className="rounded-lg border px-4 py-2"
        />

        <select
          name="occasion"
          value={details.occasion}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">Select Occasion</option>
          <option value="wedding">Wedding</option>
          <option value="casual">Casual</option>
          <option value="party">Party</option>
        </select>

        <input
          name="weight"
          value={details.weight}
          onChange={handleChange}
          placeholder="Weight"
          className="rounded-lg border px-4 py-2"
        />

        <select
          name="type"
          value={details.type}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">Select Type</option>
          <option value="ring">Ring</option>
          <option value="necklace">Necklace</option>
          <option value="earring">Earring</option>
          <option value="bracelet">Bracelet</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-semibold"
      >
        Save Jewelry
      </button>
    </div>
  );
}
