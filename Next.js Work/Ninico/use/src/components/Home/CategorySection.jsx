"use client";

import Image from "next/image";
import Link from "next/link";
import cat01 from "../../../public/Home/cat01.svg";
import cat02 from "../../../public/Home/cat02.svg";
import cat03 from "../../../public/Home/cat03.svg";
import cat04 from "../../../public/Home/cat04.svg";
import cat05 from "../../../public/Home/cat05.svg";
import cat06 from "../../../public/Home/cat06.svg";

const CategorySection = () => {
  return (
    <section className="pt-16 p-3 text-center">
      <div className="w-full mb-10 text-left">
        <h4 className="text-3xl font-bold">
          Top <span className="text-[var(--color-quick)] font-light">Categories</span>
        </h4>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-14 border-b pb-12 border-gray-200">
        {/* Category 1 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat01} alt="Driftwood Table Decor" width={35} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              20
            </span>

          </div>
          <h5 className="mt-8 text-lg font-[400]  hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Driftwood <br /> Table Decor</Link>
          </h5>
        </div>

        {/* Category 2 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat02} alt="Floor Driftwood Sculpture" width={45} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              12
            </span>
          </div>
          <h5 className="mt-8 text-lg font-[400] hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Floor Driftwood <br /> Sculpture</Link>
          </h5>
        </div>

        {/* Category 3 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat03} alt="Driftwood Christmas Tree" width={50} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              03
            </span>
          </div>
          <h5 className="mt-8 text-lg font-[400]  hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Driftwood <br /> Christmas Tree</Link>
          </h5>
        </div>

        {/* Category 4 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat04} alt="Wooden Bluetooth Speaker" width={45} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              09
            </span>
          </div>
          <h5 className="mt-8 text-lg font-[400] hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Wooden <br /> Bluetooth Speaker</Link>
          </h5>
        </div>

        {/* Category 5 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat05} alt="Receivers Amplifiers" width={35} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              10
            </span>
          </div>
          <h5 className="mt-8 text-lg font-[400]  hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Receivers <br /> Amplifiers</Link>
          </h5>
        </div>

        {/* Category 6 */}
        <div className="flex flex-col items-center text-center px-6 pb-9">
          <div className="relative rounded-full bg-gray-100 p-6 w-32 h-32 flex items-center justify-center">
            <Image src={cat06} alt="Appetizer Plate Set" width={35} height={45} />
            <span className="absolute -top-1 -right-1 bg-white text-[var(--color-quick)] hover:text-white hover:bg-[var(--color-quick)] rounded-full h-10 w-10 flex items-center justify-center text-[15px] font-bold shadow-md transition">
              05
            </span>
          </div>
          <h5 className="mt-8 text-lg font-[400]  hover:underline hover:underline-1 hover:underline-gray-200">
            <Link href="/shop">Appetizer <br /> Plate Set</Link>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;


