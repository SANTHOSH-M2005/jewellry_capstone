"use client";
import React, { useState } from "react";

export default function AddJewelryMetadata() {
  const [form, setForm] = useState({
    name: "",
    material: "",
    price: "",
    weight: "",
    occasion: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Jewelry Metadata:", form);
  };

  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Add Jewelry Metadata</h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Jewelry Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="text"
          name="material"
          placeholder="Material (e.g., 18K Gold)"
          value={form.material}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={form.price}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 focus:border-yellow-500 focus:outline-none"
        />

        <select
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 text-gray-600 focus:border-yellow-500 focus:outline-none"
        >
          <option value="">Select Occasion</option>
          <option value="wedding">Wedding</option>
          <option value="casual">Casual</option>
          <option value="party">Party</option>
        </select>

        <input
          type="number"
          name="weight"
          placeholder="Weight (g)"
          value={form.weight}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 focus:border-yellow-500 focus:outline-none"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 text-gray-600 focus:border-yellow-500 focus:outline-none"
        >
          <option value="">Select Type</option>
          <option value="ring">Ring</option>
          <option value="necklace">Necklace</option>
          <option value="earring">Earring</option>
          <option value="bracelet">Bracelet</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-600"
      >
        Save Jewelry
      </button>
    </div>
  );
}
