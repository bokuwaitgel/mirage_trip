import React from "react";
import Image from "next/image";
import { ModeToggle } from "./Toggle";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme } = useTheme()

    return (
        <div className="fixed w-full  backdrop-filter backdrop-blur-3xl">
            <div className="flex justify-between items-center max-width:100% border-b-[1px] px-4 sm:p-4">
                <div className="text-2xl font-bold">
                    <Image
                        // check dark mode
                        src={theme !== "dark" ? "/image.png" : "/image.png"}
                        alt="logo" 
                        width="0"
                        height="0"
                        sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                        style={{ width: '5%', height: 'auto' }}  
                    />
                    
                </div>
                <div className="flex items-center">
                    <div className="space-x-4">
                        <a href="#home" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">About us</a>
                        <a href="#product" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Products</a>
                        <a href="#contact" className="text-sm  invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Contact</a>
                    </div>
                    <div className="py-1 px-2">
                        <ModeToggle  />
                    </div>
                </div>
            </div>

        </div>
    )
}