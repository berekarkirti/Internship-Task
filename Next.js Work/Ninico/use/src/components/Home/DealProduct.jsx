"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import floded1 from "../../../public/Home/floded1.png";

const DealProduct = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const targetTime = new Date("2025-04-10T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-14">
      <div className="px-12">
        <div className="flex flex-wrap items-center">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src={floded1}
                alt="dealproduct-thumb"
                width={473.10}
                height={410}
                className="mx-auto"
              />
              <div className="absolute top-16 left-72 bg-[var(--color-quick)] text-white px-7 py-5 rounded-full text-center">
                <h5 className="text-lg font-semibold">
                  <span className="text-sm block">From</span> $49
                </h5>
              </div>
            </div>
          </div>

          {/* Right Details Section */}
          <div className="w-full md:w-1/2 pt-6 md:pt-0 -ml-8">
            <div>
              {/* Price */}
              <div className="mb-3">
                <span className="text-[23px] font-bold text-[var(--color-quick)]">$49.00</span>
                <del className="text-gray-400 ml-3 text-lg">$59.00</del>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h4 className="text-[52px] font-bold mb-2">
                  <Link href="/shop-details">Pro2 Abstract Folded Pots</Link>
                </h4>
                <p className="text-gray-600 text-[17px]">
                  Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.


                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="bg-white rounded-full h-1.5 relative w-[650px]">
                  <div className="bg-[var(--color-quick)] h-1.5 rounded-full w-[500px]"></div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex space-x-4 items-center">
                {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow">
                    <span className="text-3xl font-bold text-black">
                      {Object.values(timeLeft)[index]}
                    </span>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                ))}
                <p className="ml-5 text-gray-500 text-[16px]">Remains until the <br />end of the offer</p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealProduct;
