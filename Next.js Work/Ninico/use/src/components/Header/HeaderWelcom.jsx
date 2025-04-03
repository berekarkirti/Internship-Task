"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

// Account and Order Links
const accountLinks = [
  { href: "/account", icon: <MdOutlineAccountCircle className="mr-1 text-[15px]" />, label: "Account" },
  { href: "/orders", icon: <TbTruckDelivery className="mr-1 text-[15px]" />, label: "Track Your Order" },
];

// Social Media Links
const socialLinks = [
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaTwitter /> },
  { href: "/", icon: <FaBehance /> },
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaLinkedinIn /> },
];

const HeaderWelcome = () => {
  const pathname = usePathname(); // 
  const showRightSide = pathname.startsWith("/shop/"); 

  return (
    <div className="w-full bg-[#f2ede6] px-4 py-2 flex justify-between items-center text-[#050505]">
      {/* Left Side */}
      <div className="flex items-center">
        <span className="font-semibold text-[16px]">
          Welcome to our international shop! Enjoy free shipping on orders $100 up.
        </span>
        <Link href="/shop" className="ml-2 text-[#d61142] flex items-center font-semibold text-[16px] underline hover:text-[#b30c36] transition duration-300">
          Shop Now
          <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2 transform transition-all ease-in-out duration-300 hover:translate-x-2" />
        </Link>
      </div>

      {/* Right Side  */}
      {showRightSide && (
        <div className="flex items-center space-x-9">
          {accountLinks.map((link, index) => (
            <Link key={index} href={link.href} className="flex items-center font-semibold hover:text-[#d61142] transition duration-300 text-[15px]">
              {link.icon}
              {link.label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-3 text-[15px]">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="hover:text-[#d61142] transition duration-300">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWelcome;
