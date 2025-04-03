// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaDribbble, FaTwitter, FaBehance, FaYoutube } from "react-icons/fa";
import logo from '../../../public/Header/logo.png';
import fbrandicon01 from '../../../public/Footer/fbrandicon01.png';
import fapp from '../../../public/Footer/fapp.jpg';
import fgoogle from '../../../public/Footer/fgoogle.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-8 border-gray-200">
      <div className="pt-3 pl-3 pr-3">
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image src={logo} alt="logo" width={115} height={27} />
            <p className="text-gray-600 text-[15px] mt-4 ">
              Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor.
            </p>
          </div>

          {/* Information Section */}
          <div className="col-span-1 pl-10 ">
            <h3 className="text-sm font-bold underline ">Information</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 font-[500]">
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  CUSTOM SERVICE
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  ORDERING TRACKING
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  CONTACTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-quick)]">
                  TERMS & CONDITION
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold underline">My Account</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 font-[500]">
              <li>
                <Link href="#" className=" hover:text-[var(--color-quick)]">
                  DELIVERY INFORMATION
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-[var(--color-quick)]">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-[var(--color-quick)]">
                  DISCOUNT
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-[var(--color-quick)]">
                  CUSTOM SERVICE
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Network Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold underline ">Social Network</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 font-[500]">
              <li>
                <Link href="#" className="flex items-center hover:text-[var(--color-quick)]">
                  <FaFacebookF className="mr-2" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-[var(--color-quick)]">
                  <FaDribbble className="mr-2" /> Dribbble
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-[var(--color-quick)]">
                  <FaTwitter className="mr-2" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-[var(--color-quick)]">
                  <FaBehance className="mr-2" /> Behance
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-[var(--color-quick)]">
                  <FaYoutube className="mr-2" /> Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold underline">Get Newsletter</h3>
            <p className="text-gray-400 font-[500] text-md mt-4">
              Get on the list and get 10% off your first order!
            </p>
            <div className="mt-4 ">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-2 border border-white rounded-l-md  focus:ring-2 focus:outline-none mb-2"
              />
              <button className=" text-white text-sm px-7 py-4 rounded-md bg-[var(--color-quick)]">
                Subscribe Now →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">📞</span>
            <span className="text-black text-lg font-bold">
              980. 029. 666. 99 <br />
              <span className="text-gray-600 text-sm font-medium">Working 8:00 - 22:00</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <p className="text-gray-600 text-sm">
              <span className="text-black font-bold text-lg">Download App on Mobile</span><br />
              15% Discount App on Mobile
            </p>
            <div className="flex space-x-2">
              <Link href="#">
                <Image
                  src={fgoogle}
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <Link href="#">
                <Image
                  src={fapp}
                  alt="App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center bg-[#ededed] p-5">
        <p className="text-gray-600 text-md">
          Copyright 2025 <span className="text-black font-bold">©Ninico.</span>. All rights reserved. Developed by{" "}
          <span className="text-black font-bold">ALIThemes.</span>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Image
            src={fbrandicon01}
            alt="Amazon"
            className="object-contain w-full h-7"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;