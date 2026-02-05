"use client";

import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-[100]
        bg-[rgba(250,248,243,0.95)]
        backdrop-blur-md
        border-b border-[#e8e6e1]
        shadow-[0_2px_8px_rgba(0,0,0,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer text-[#2c2c2c]">
            ✨ Jewelry AI
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Discover", href: "/discover" },
              { name: "About", href: "/about" },
              { name: "Admin", href: "/admin" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
                    relative text-[#6b6b6b]
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[#d4af37]
                    after:transition-all after:duration-300
                    hover:text-[#2c2c2c]
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6 text-[#6b6b6b]">
            <button
              onClick={() => alert("Wishlist feature coming soon!")}
              className="hover:text-[#d4af37] transition"
            >
              <Heart size={18} />
            </button>

            <button
              onClick={() => alert("Cart feature coming soon!")}
              className="hover:text-[#d4af37] transition"
            >
              <ShoppingBag size={18} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
