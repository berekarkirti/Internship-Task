"use client";

import { useState } from "react";
import { Menu, Heart, Gift, ShoppingCart, Crown, Droplet, CopyIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  
  const pathname = usePathname();
  const isProductDetailPage = pathname.startsWith("/shop/");
  const [isOpen, setIsOpen] = useState(!isProductDetailPage);


  const productCategories = [
    { name: "Furniture", icon: <Heart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Cooking", icon: <Gift size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Accessories", icon: <ShoppingCart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Fashion", icon: <ShoppingCart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Clocks", icon: <Crown size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Lighting", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Toys", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Hand Made", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Minimalism", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Electronics", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Cars", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
  ];

  const homepageCategories = [
    { name: "Candles", icon: <Heart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Handmade", icon: <Gift size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Gift Sets", icon: <ShoppingCart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Plastic Gifts", icon: <ShoppingCart size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Cosmetic", icon: <Crown size={17} className="mr-2 text-[#d61142]" /> },
    { name: "Silk Accessories", icon: <Droplet size={17} className="mr-2 text-[#d61142]" /> },
  ];

  return (
    <header className="relative p-3">
      <nav className="flex items-center justify-between w-52 px-6 py-3 bg-[#d61142] text-white rounded-t-lg">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
          <Menu size={24} />
          <span className="ml-2 font-semibold">Categories</span>
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-3 left-3 w-52 px-6 py-3 h-auto text-white shadow-sm p-4 transition-transform transform ease-in-out duration-300 rounded-t-lg">
          <button onClick={() => setIsOpen(false)} className="mb-4 flex items-center gap-2">
            <Menu size={24} />
            <span className="ml-2 font-semibold">Categories</span>
          </button>

          <ul className="space-y-4">
            {(isProductDetailPage ? productCategories : homepageCategories).map((item, index) => (
              <li key={index} className="flex items-center text-black text-[14px] mb-5">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>

          {isProductDetailPage ? (
            <div className="p-0 text-lg font-semibold bg-black text-black text-[14px] flex justify-around items-center">
              <div>
                <h3 className="text-[#778787] text-16px">Coupon:</h3>
                <h3 className="mb-3 text-white underline text-15px">Offers50</h3>
              </div>
              <CopyIcon size={17} className="mr-2 text-[#778787]" />
            </div>
          ) : (
            <div className="mt-6 text-lg font-semibold text-black text-[14px]">
              <h3 className="mb-3">Value of the Day</h3>
              <h3 className="mb-3">Top 100 Offers</h3>
              <h3 className="mb-3">New Arrivals</h3>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
