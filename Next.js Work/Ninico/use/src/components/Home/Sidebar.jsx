import { useState } from "react";
import { Menu, X, Heart, Gift, ShoppingCart, Crown, Droplet} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="relative p-3 ">
      <nav className="flex items-center justify-between w-52 px-6 py-3 bg-[#d61142] text-white rounded-t-lg">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
          <Menu size={24} />
          <span className="ml-2 font-semibold ">Categories</span>
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-3 left-3 w-52 px-6 py-3 h-auto  text-white shadow-sm p-4 transition-transform transform ease-in-out duration-300 rounded-t-lg">
          <button onClick={() => setIsOpen(false)} className="mb-4 flex items-center gap-2">
          <Menu size={24} />
          <span className="ml-2 font-semibold ">Categories</span>
          </button>
          <ul className="space-y-4">
            <li className="flex items-center text-black text-[14px] mb-5 mt-8">
              <Heart size={17} className="mr-2 text-[#d61142]" />
              Candles
            </li>
            <li className="flex items-center text-black text-[14px] mb-5">
              <Gift size={17} className="mr-2 text-[#d61142]" />
              Handmade
            </li>
            <li className="flex items-center text-black text-[14px] mb-5">
              <ShoppingCart size={17} className="mr-2 text-[#d61142]" />
              Gift Sets
            </li>
            <li className="flex items-center text-black text-[14px] mb-5">
              <ShoppingCart size={17} className="mr-2 text-[#d61142]" />
              Plastic Gifts
            </li>
            <li className="flex items-center text-black text-[14px] mb-5">
              <Crown size={17} className="mr-2 text-[#d61142]" />
              Cosmetic
            </li>
            <li className="flex items-center text-black text-[14px] mb-5">
              <Droplet size={17} className="mr-2 text-[#d61142]" />
              Silk Accessories
            </li>
          </ul>

          <div className="mt-6 text-lg font-semibold text-black text-[14px] " >
            <h3 className="mb-3">Value of the Day</h3>
            <h3 className="mb-3">Top 100 Offers</h3>
            <h3 className="mb-3">New Arrivals</h3>
          </div>
        </div>
      )}
    </header>
  );
}
