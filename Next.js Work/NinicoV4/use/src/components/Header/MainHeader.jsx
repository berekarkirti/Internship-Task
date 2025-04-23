import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import logo from '../../../public/Header/logo.png';
import langflag from '../../../public/Header/langflag.png';
import LanguageDropdown from './LanguageDropdown';

const MainHeader = () => {
  return (
    <div className="mt-4 hidden xl:block p-3">
      <div className="mx-auto flex justify-between items-center gap-6">
        <div className="flex items-center w-full">
        
          <div className="w-1/8 xl:w-1/6 lg:w-1/4">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" width={115} height={27} />
              </Link>
            </div>
          </div>

  
          <div className="xl:w-5/6 lg:w-3/4 flex items-center justify-between gap-10">

            <div className="header-search-bar flex-1">
              <form action="#">
                <div className="relative pl-5">
                  <button className="absolute pl-3 header-search-icon p-3">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    placeholder="Search products..."
                    type="text"
                    className="pl-10 py-3 border border-[#f2f4f7] bg-[#f2f4f7] rounded w-full focus:outline-none"
                  />
                </div>
              </form>
            </div>


            <div className="flex items-center space-x-6 ">
              <LanguageDropdown />


              <div className="header-meta__value">
                <select className="p-3 border border-gray-300 rounded focus:outline-none">
                  <option>USD</option>
                  <option>YEAN</option>
                  <option>EURO</option>
                </select>
              </div>


              <div className="header-meta__social flex items-center space-x-6">

                <button className="relative p-2">
                  <FontAwesomeIcon icon={faShoppingCart} className='text-xl' />
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>

                <Link href="/sign-in">
                  <FontAwesomeIcon icon={faUser} className="p-2 text-xl" />
                </Link>

                <Link href="/wishlist">
                  <FontAwesomeIcon icon={faHeart} className="relative p-2 text-xl"   >
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
