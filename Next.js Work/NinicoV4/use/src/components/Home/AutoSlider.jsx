'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import banner1 from '../../../public/Home/banner1.jpg';
import banner2 from '../../../public/Home/banner2.jpg';
import banner3 from '../../../public/Home/banner3.jpg';

const banners = [
    {
        id: 1,
        title: 'Accessories',
        discount: '45% Off',
        description: 'Latest Creations',
        image: banner1,
    },
    {
        id: 2,
        title: 'Trendy Fashion',
        discount: '50% Off',
        description: 'New Arrivals',
        image: banner2,
    },
    {
        id: 3,
        title: 'Exclusive Deals',
        discount: '30% Off',
        description: 'Limited Time Offer',
        image: banner3,
    },
];

export default function AutoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => 
    {
        const interval = setInterval(() => 
        {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lg:col-span-2 bg-gray-200 p-6 rounded-lg relative w-full overflow-hidden">
           
            <div className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out">
                <Image 
                    src={banners[currentIndex].image} 
                    alt="Banner Image" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-md"
                />
            </div>

       
            <div className="relative z-10 text-left text-white p-6 py-14">
                <h2 className="text-[20px] font-semibold text-[#d61142]">{banners[currentIndex].title}</h2>
                <h1 className="text-5xl font-bold mt-2 text-black">
                    Up to <span className="text-[#d61142] ">{banners[currentIndex].discount}</span><br /> {banners[currentIndex].description}
                </h1>
                <button className="mt-4 text-bold text-black bg-white px-8 py-3 rounded shadow hover:bg-[#d61142] hover:text-white">Shop Now →</button>
            </div>

          
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {banners.map((_, index) => (
                    <div key={index} onClick={() => setCurrentIndex(index)} className={`w-6 h-1 rounded-lg cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-[#d61142]' : 'bg-gray-400'}`}></div>
                ))}
            </div>
        </div>
    );
}
