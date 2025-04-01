'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';
import bannerslider01 from '../../../public/Home/bannerslider01.jpg';
import bannerslider02 from '../../../public/Home/bannerslider02.jpg';
import AutoSlider from './AutoSlider';

export default function MainMenu() {
  return (
    <div className="flex w-full">
     
      <Sidebar className="rounded-t-lg" />

      <main className="p-6 w-full">

        <header className="flex justify-between items-center pb-4">

          <nav className="flex space-x-6">
            <Link href="/home" className="text-[14px] font-bold hover:text-[#d61142] flex items-center">Home <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs text-gray-400 hover:text-[#d61142]" /></Link>
            <Link href="/shop" className="text-[14px] font-bold hover:text-[#d61142] flex items-center">Shop <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs text-gray-400 hover:text-[#d61142]" /></Link>
            <Link href="/pages" className="text-[14px] font-bold hover:text-[#d61142] flex items-center">Pages <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs text-gray-400 hover:text-[#d61142]" /></Link>
            <Link href="/blog" className="text-[14px] font-bold hover:text-[#d61142] flex items-center">Blog <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs text-gray-400 hover:text-[#d61142]" /></Link>
            <Link href="/contact" className="text-[14px] font-bold hover:text-[#d61142] flex items-center">Contact <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs text-gray-400 hover:text-[#d61142]" /></Link>
          </nav>

          <div className="flex items-center gap-4 text-[14px] font-bold">
            <FontAwesomeIcon icon={faPhone} className="text-[#d61142]" /> 908.408.501.89
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#d61142]" /> Find Store
          </div>

        </header>

        <section className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">

          <AutoSlider />

          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg relative overflow-hidden">
              <Image src={bannerslider01} alt="Hand Made" className="w-full h-[190px] object-cover rounded-md" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-md">
                <h3 className="text-[#d61142] font-semibold">Hand Made</h3>
                <p className="font-bold">New Modern Stylist Crafts</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg relative overflow-hidden">
              <Image src={bannerslider02} alt="Popular" className="w-full h-[187px] object-cover rounded-md" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-md">
                <h3 className="text-[#d61142] font-semibold">Popular</h3>
                <p className="font-bold">Energy with our newest collection</p>
              </div>
            </div>

          </div>

        </section>

      </main>
      
    </div>
  );
}
