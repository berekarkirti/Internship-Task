"use client";

import { Heart } from 'lucide-react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import productdet1 from '../../../public/ProudctDetail/productdet1.png';
import productdet2 from '../../../public/ProudctDetail/productdet2.png';
import productdet3 from '../../../public/ProudctDetail/productdet3.png';
import productdet4 from '../../../public/ProudctDetail/productdet4.png';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import products from '@/data/products';
import { useRouter } from 'next/router';

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    // const router = useRouter();
    const { id } = useParams();



    const product = products.find((p) => p.id === Number(id));
    console.log("Products Data:", products);
    console.log("Parsed ID:", Number(id), "Type:", typeof Number(id));


    if (!product) {
        return <h1>Product Not Found</h1>;
    }


    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="flex py-20">
            {/* Left Section - Product Image */}
            <div className="w-full md:w-1/2 p-4">
            <Image src={product.img1} alt="Product det" width={500} height={500} />

            </div>

            {/* Right Section - Product Details */}
            <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
                {/* Category and Reviews */}
                <div className="flex gap-5 items-center">
                    <span className="text-[var(--color-quick)] text-sm font-bold bg-pink-50 w-12 h-7 p-1">Dress</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-xl">★★★</span>
                        <span className="text-gray-500 text-sm">10 Reviews</span>
                    </div>
                </div>

                {/* Product Title and Stock */}
                <div className="flex gap-5 items-center">
                    <h2 className="text-[28px] font-bold text-gray-800">{product.name}</h2>
                    <span className=" text-[var(--color-quick)] text-sm font-bold w-[62px] h-6 p-[2.3px] border-1 border-gray-300 rounded-xs">In Stock</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                    <span className="text-gray-300 line-through text-2xl font-bold">$9.35</span>
                    <span className="text-[var(--color-quick)] text-4xl font-bold">$ {product.price}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-relaxed">
                    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a completely modern design and you feel comfortable to put on this hijab.<br /> Buy it at the best price.
                </p>

                {/* Quantity Selector and Add to Cart */}
                <div className="flex items-center space-x-4 py-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border rounded h-[60px] w-[230px] border-gray-300 px-3">
                        <span className="text-xl font-semibold text-gray-800">{quantity}</span>
                        <div className="flex flex-col ml-auto">
                            <button
                                onClick={handleIncrement}
                                className="text-gray-400 px-2 py-1 hover:bg-gray-100 text-[10px]"
                            >
                                ▲
                            </button>
                            <button
                                onClick={handleDecrement}
                                className="text-gray-400 px-2 py-1 hover:bg-gray-100 text-[10px]"
                            >
                                ▼
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-[var(--color-quick)] text-white rounded hover:bg-black w-[150px] h-[60px] text-extrabold flex justify-evenly items-center">
                        <FaShoppingCart /> Add To Cart
                    </button>

                    {/* Wishlist Button */}
                    <button className="text-gray-400 border rounded border-gray-300 hover:bg-[var(--color-quick)] w-[70px] h-[60px] flex justify-center items-center">
                        <Heart className="text-gray-300 text-lg hover:text-white" />
                    </button>
                </div>


                {/* Color Options */}
                <div className="flex space-x-2 py-3">
                    <div className="relative w-3 h-3 rounded-full transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:w-5 hover:after:h-5 hover:after:border-2 hover:after:border-[#99c4ff] hover:after:rounded-full hover:after:-top-1 hover:after:-left-1">
                        <div className="w-full h-full bg-[#99c4ff] rounded-full transition-transform ease-in-out duration-1000 hover:scale-75"></div>
                    </div>
                    <div className="relative w-3 h-3 rounded-full transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:w-5 hover:after:h-5 hover:after:border-2 hover:after:border-[#d61142] hover:after:rounded-full hover:after:-top-1 hover:after:-left-1">
                        <div className="w-full h-full bg-[#d61142] rounded-full transition-transform ease-in-out duration-1000 hover:scale-75"></div>
                    </div>
                    <div className="relative w-3 h-3 rounded-full transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:w-5 hover:after:h-5 hover:after:border-2 hover:after:border-[#ff7373] hover:after:rounded-full hover:after:-top-1 hover:after:-left-1">
                        <div className="w-full h-full bg-[#ff7373] rounded-full transition-transform ease-in-out duration-1000 hover:scale-75"></div>
                    </div>
                    <div className="relative w-3 h-3 rounded-full transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:w-5 hover:after:h-5 hover:after:border-2 hover:after:border-[#bd99ff] hover:after:rounded-full hover:after:-top-1 hover:after:-left-1">
                        <div className="w-full h-full bg-[#bd99ff] rounded-full transition-transform ease-in-out duration-1000 hover:scale-75"></div>
                    </div>
                </div>

                {/* SKU */}
                <p className="text-gray-500 text-md">
                    <span className="font-bold text-black">SKU:</span> BO1DOMX8SJ
                </p>

                {/* Categories and Tags */}
                <p className="text-gray-500 text-md">
                    <span className="font-bold text-black">Categories:</span> T-Shirts,  Tops,  Women
                </p>
                <p className="text-gray-500 text-md">
                    <span className="font-bold text-black">Tags:</span> fashion, t-shirts, women
                </p>

                {/* Share Options */}
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-black text-md">Share:</span>
                    <div className="flex space-x-3 text-gray-500">
                        <Link href="#" className="text-gray-400 hover:text-[#d61142] transition duration-300"><FaFacebookF /></Link>
                        <Link href="#" className="text-gray-400 hover:text-[#d61142] transition duration-300"><FaTwitter /></Link>
                        <Link href="#" className="text-gray-400 hover:text-[#d61142] transition duration-300"><FaBehance /></Link>
                        <Link href="#" className="text-gray-400 hover:text-[#d61142] transition duration-300"><FaYoutube /></Link>
                        <Link href="#" className="text-gray-400 hover:text-[#d61142] transition duration-300"><FaLinkedinIn /></Link>
                    </div>
                </div>

            </div>

            {/* Right Sidebar - Additional Info */}
            <div className="hidden md:block w-1/4 p-4 ">
                <ul className="space-y-4 text-gray-600 text-sm">
                    <li className="group flex items-center space-x-4 border rounded h-[75.46px] w-[263.66px] border-gray-200 px-5 mb-5">
                        <Image
                            src={productdet1}
                            alt="Product det"
                            className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-2"
                        />
                        <span className='text-[13px] pb-2 text-gray-500 font-semibold'>Free Shipping apply to all orders over $100</span>
                    </li>
                    <li className="group flex items-center space-x-4 border rounded h-[75.46px] w-[263.66px] border-gray-200 px-5 mb-5">
                        <Image
                            src={productdet2}
                            alt="Product det"
                            className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-2"
                        />
                        <span className='text-[13px] pb-2 text-gray-500 font-semibold'>Guarantee 100% Organic from natural farms</span>
                    </li>
                    <li className="group flex items-center space-x-4 border rounded h-[75.46px] w-[263.66px] border-gray-200 px-5 mb-5">
                        <Image
                            src={productdet3}
                            alt="Product det"
                            className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-2"
                        />
                        <span className='text-[13px] pb-2 text-gray-500 font-semibold'>1 Day Returns if you<br /> change <br />your mind</span>
                    </li>
                    <li className="group flex items-center space-x-4 border rounded h-[75.46px] w-[263.66px] border-gray-200 px-5 mb-5">
                        <Image
                            src={productdet4}
                            alt="Product det"
                            className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-2"
                        />
                        <span className='text-[13px] pb-2 text-gray-500 font-semibold'>Covid-19 Info: We keep delivering.</span>
                    </li>
                </ul>

            </div>
        </div>
    );
}