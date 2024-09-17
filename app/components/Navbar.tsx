import React from "react";
import Image from "next/image";
import { ModeToggle } from "./Toggle";
import { useTheme } from "next-themes";

export default function Navbar() {

    return (
        <div className="fixed w-full  backdrop-filter backdrop-blur-3xl">
            <div className="flex justify-between items-center max-width:100% border-b-[1px] px-4 sm:p-2">
                <div className="text-2xl font-bold pl-16">
                    <Image
                        className="rounded-full"
                        // check dark mode
                        src={ "/logo.jpg"}
                        alt="logo" 
                        width="0"
                        height="0"
                        sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                        style={{ width: '20%', height: 'auto' }}  
                    />
                    
                </div>
                <div className="flex items-center">
                    <div className="space-x-4">
                        <a href="#home" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">НҮҮР</a>
                        <a href="#viza" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">ВИЗ</a>
                        <a href="#contact" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">ХОЛБОО БАРИХ</a>
                        <a href="#about_us" className="text-sm  invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">БИДНИЙ ТУХАЙ</a>
                    </div>
                    <div className="py-1 px-2">
                        <ModeToggle  />
                    </div>
                </div>
            </div>

        </div>
    )
}