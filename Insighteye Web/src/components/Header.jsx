import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaUser, FaEnvelope, FaClock } from "react-icons/fa";
import { topHeaderData, socialLinks, navigationLinks } from "../data/HeaderData";
import Button from "../cva/button";

const Header = () => {
  return (
    <header className="main-header">

      {/* Top Header */}
      <div className="bg-black py-3 h-14">
        <div className="container mx-auto flex justify-between items-center">

          {/* Top Header Data */}
          <ul className="flex items-center space-x-11 text-white font-semibold text-lg">
            {topHeaderData.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                {item.icon === "email" && <FaEnvelope className="text-primary" />}
                {item.icon === "clock" && <FaClock className="text-primary" />}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center space-x-16 text-white font-semibold text-lg">
            <a href="/" className="text-white hover:text-primary transition ease-in-out duration-700 flex items-center text-xl space-x-3">
              <FaUser className="text-primary" />
              <span>Login</span>
            </a>
            <ul className="flex space-x-7 text-white">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-primary transition ease-in-out duration-700 text-xl">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>

      {/* Lower Header */}
      <div className="bg-secondary font-ibaraBold shadow-md items-center">
        <div className="relative">
          <div className="container mx-auto flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center">
              <img src="src/assets/behindlogo.png" alt="Logo" className="relative -ml-28 max-w-96" />
              <img src="src/assets/logo.png" alt="Logo" className="h-11 absolute -ml-3" />
            </div>

            {/* Navigation Links */}
            <nav className="md:flex space-x-8 text-gray-700 font-medium">
              {navigationLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <a href={link.link} className="hover:text-primary transition ease-in-out duration-500 text-xl">
                    {link.text}
                  </a>
                  {link.subLinks && (
                    <div className="absolute left-0 hidden group-hover:block  bg-white shadow-md rounded-md mt-2 w-28">
                      {link.subLinks.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {subLink.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img src="src/assets/phone.png" alt="Phone Icon" className="h-10" />
                <a href="tel:2395432170108" className=" text-theme text-lg">
                  (239)-543-217-0108
                </a>
              </div>

              <Button
                  as="a"
                  href="/"
                  variant="gradient"
                  size="md"
                  className="space-x-4"
                >
                  Let’s Contact
                  <i className="fas fa-arrow-right"></i>
                </Button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
