"use client";

import { Search} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-[#faf8f3] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Perfect Jewelry Instantly
        </h1>

        <p className="text-[#6b6b6b] max-w-2xl mx-auto mb-10">
          Search by text, image, sketch. Our AI finds
          exactly what you&apos;re looking for.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/discover")}
            className="flex items-center gap-2 bg-[#d4af37] text-white px-6 py-3 rounded-md font-medium hover:bg-[#c19b2e] transition"
          >
            <Search size={18} />
            Search Jewelry
          </button> 
        </div>
      </div>
    </section>
  );
}
