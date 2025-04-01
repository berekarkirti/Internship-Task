"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import langflag from '../../../public/Header/langflag.png';

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => 
    {
        setIsOpen(!isOpen);
    };

    return (
        <ul>
            <li className="relative">
                <div className="flex items-center space-x-3 cursor-pointer p-1 border border-gray-300 rounded" onClick={toggleDropdown} >
                    <Image src={langflag} alt="flag" className="w-9 h-9" />
                    <span>English</span>

                    <FontAwesomeIcon icon={faAngleDown} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-xs text-gray-400`} style={{ color: isOpen ? '#d61142' : '' }} />
                </div>

                {isOpen && (
                    <div className="absolute left-0 mt-2 p-3 border border-gray-300 rounded w-32 bg-white shadow-lg">
                        <div className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => console.log("Arabic selected")}>
                            Arabic
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => console.log("Spanish selected")}>
                            Spanish
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => console.log("Mandarin selected")}>
                            Mandarin
                        </div>
                    </div>
                )}
            </li>
        </ul>
    );
};

export default LanguageDropdown;
