import { FaFacebook, FaTwitter, FaInstagram, FaUser, FaEnvelope, FaClock } from "react-icons/fa";

export const topHeaderData = [
    {
        icon: <FaEnvelope />,
        text: "info@example.com",
        link: "mailto:info@example.com",
    },
    {
        icon: <FaClock />,
        text: "Open Hours: Mon - Fri 8.00 am - 6.00 pm",
        link: "mailto:info@example.com",

    },
];

// Social links data
export const socialLinks = [
    { icon: <FaFacebook />, link: "/" },
    { icon: <FaTwitter />, link: "/" },
    { icon: <FaInstagram />, link: "/" },
];

// Navigation links data
export const navigationLinks = [
    {
        text: "Home",
        link: "/",
        subLinks: [
            { text: "Home 1", link: "/sub-home-1" },
            { text: "Home 2", link: "/sub-home-2" },
        ],
    },
    {
        text: "About Us",
        link: "/about",
        subLinks: [
            { text: "About 1", link: "/sub-about-1" },
            { text: "About 2", link: "/sub-about-2" },
        ],
    },
    { text: "Services", link: "/services" },
    { text: "Pages", link: "/pages" },
    { text: "Blog", link: "/blog" },
    { text: "Contact", link: "/contact" },
];