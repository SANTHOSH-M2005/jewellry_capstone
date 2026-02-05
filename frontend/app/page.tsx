"use client"
import JewelryProductCard from "@/component/JewelryProductCard";
import Navbar from "@/component/Navbar";
import {CartStore} from "@/store/useCartStore";
import ButtonAtoms from "@/atoms/ButtonAtoms";
import About from "@/app/about/page";
import Hero from "@/component/Hero";
export default function Home() {
  const {name, price, material, category } = CartStore();

  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        
      </div>
      <section className="px-6 py-5 bg-[#faf8f3]">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Featured Collections
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-4">
          <JewelryProductCard
            category={category}
            name={name}
            material={material}
            price={price.toString()}
          />
           <JewelryProductCard
            category={category}
            name={name}
            material={material}
            price={price.toString()}
          />
           <JewelryProductCard
            category={category}
            name={name}
            material={material}
            price={price.toString()}
          />
           <JewelryProductCard
            category={category}
            name={name}
            material={material}
            price={price.toString()}
          />

          {/* You can map multiple cards here */}
        </div>

      </section>
      
    </div>  
  );
}
