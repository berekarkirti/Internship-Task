import { MapPin, Mail, Phone } from "lucide-react";
import FooterData from "../data/FooterData";

const Footer = () => {
  return (
    <div className="relative ">
      {/* Footer Section with Background */}
      <footer
        className="relative text-white py-28 px-20"
        style={{
          backgroundImage: "url('src/assets/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <img
              src={FooterData.logo.logoImage}
              alt="Logo"
              className="mb-8 h-12"
            />
            <p className="mt-4 text-white text-xl">{FooterData.logo.description}</p>
          </div>

          {/* Dynamic Sections */}
          {FooterData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-8">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-white text-xl hover:text-primary transition-all ease-in-out duration-200 cursor-pointer"
                  >
                    {section.title === "Contact" && section.icons ? (
                      <div className="flex items-center space-x-2">
                        {section.icons[idx] === "map-pin" && <MapPin size={16} />}
                        {section.icons[idx] === "mail" && <Mail size={16} />}
                        {section.icons[idx] === "phone" && <Phone size={16} />}
                        <span>{link}</span>
                      </div>
                    ) : (
                      link
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-black pt-4 text-center text-white py-10">
        <p className="mt-10">{FooterData.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
