import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const HeaderWelcome = () => {
  return (
    <div className="w-full">
      <div className="text-start bg-[#f2ede6] p-1.5 px-3 flex items-center">
        <span className="text-[#050505] font-semibold text-[16px]">
          Welcome to our international shop! Enjoy free shipping on orders $100 up.
        </span>
        <Link href="/shop" className=" ml-2 text-[#d61142] flex items-center font-semibold text-[18px] underline " >
          Shop Now
          <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2 transform transition-all ease-in-out duration-500 hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderWelcome;
