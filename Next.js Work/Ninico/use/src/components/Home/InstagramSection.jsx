import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import instagram01 from "../../../public/Home/instagram01.jpg";
import instagram02 from "../../../public/Home/instagram02.jpg";
import instagram03 from "../../../public/Home/instagram03.jpg";
import instagram04 from "../../../public/Home/instagram04.jpg";
import instagram05 from "../../../public/Home/instagram05.jpg";
import instagram06 from "../../../public/Home/instagram06.jpg";
import Link from "next/link";

const InstagramSection = () => {
    return (
        <div className="py-24 text-center">
            <h2 className="text-[var(--color-quick)] text-lg font-[500]">Follow On</h2>
            <div className="flex justify-center items-center gap-2 mt-">
                <FaInstagram className="text-4xl text-black" />
                <h1 className="text-4xl font-bold text-black -mt-0 mb-3">ninico-shop</h1>
            </div>
            <div className="mt-6 flex justify-center gap-7 px-4">
                {[instagram01, instagram02, instagram03, instagram04, instagram05, instagram06].map((imgSrc, index) => (
                    <div key={index} className="w-[207px] h-[207px] rounded-lg overflow-hidden shadow-lg">
                        <Image src={imgSrc} className="object-cover w-full h-full" alt={`Instagram post ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button className="fixed bottom-6 right-6 bg-[var(--color-quick)] text-white h-[40px] w-[40px] rounded-full shadow-lg flex items-center justify-center">
                <Link href="/">
                    ↑
                </Link>
            </button>

        </div>
    );
};

export default InstagramSection;
