"use client";

import Image from "next/image";

type JewelryCardProps = {
  imageUrl?: string;
  category: string;
  name: string;
  material: string;
  price: string;
};

export default function JewelryCard(JewelryCardProps: JewelryCardProps) {
  
  const { imageUrl, category, name, material, price } = JewelryCardProps;

  return (
    <div
      className="
        flex-none w-70
        bg-white
        rounded-xl
        overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.08)]
        transition-all duration-300 ease-in-out
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      "
    >
      {/* Image */}
      <div
        className="
          w-full h-70
          bg-[linear-gradient(135deg,#f5f2ed_0%,#e8e6e1_100%)]
          flex items-center justify-center
          overflow-hidden
        "
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            width={140}
            height={140}
            className="object-contain"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-[#2c2c2c]">
        {/* Tag */}
        <div
          className="
            inline-block
            bg-[rgba(212,175,55,0.1)]
            text-[#d4af37]
            px-3 py-1
            rounded-full
            text-xs font-semibold
            mb-4
          "
        >
          {category}
        </div>

        {/* Name */}
        <h3 className="text-[1.1rem] font-semibold mb-2">{name}</h3>

        {/* Material */}
        <p className="text-sm text-[#6b6b6b] mb-2">{material}</p>

        {/* Price */}
        <p className="text-lg font-semibold text-[#d4af37] mb-4">{price}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            className="
              flex-1
              border border-[#e8e6e1]
              rounded-lg
              py-2 text-sm
              transition-colors
              hover:bg-[#faf8f3]
            "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
