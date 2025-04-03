import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import breadcrumb from '../../../public/ProudctDetail/breadcrumb.jpg';

const Breadcrumb = () => {
    return (
        <div className="relative w-full h-[220px] bg-gray-100 flex items-center">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src={breadcrumb}
                    alt="Breadcrumb"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                />
            </div>

            {/* Breadcrumb Text */}
            <div className="relative p-3 z-10 max-w-screen-xl w-full">
                <nav className="text-sm text-gray-600 flex items-center space-x-2">
                    <Link href="/">
                        <span className="text-black font-medium hover:underline cursor-pointer text-[17px]">
                            Home
                        </span>
                    </Link>
                    <span className="text-gray-300 border-1 w-7  "></span>
                    <span className="text-gray-400 text-[17px]">Shop Details</span>
                </nav>
                <h1 className="text-[42px] font-semibold text-black mt-2">Shop Details</h1>
            </div>
        </div>
    );
};

export default Breadcrumb;
