'use client'
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./Toggle";
import { useTheme } from "next-themes";
import { FiMenu } from 'react-icons/fi'
import Link from "next/link";

export default function Navbar() {
    const [  open, setOpen ] = useState( false )
    return (
        <div className="fixed w-full  backdrop-filter backdrop-blur-3xl">
        <div className="flex justify-between items-center max-width:100% border-b-[1px] px-4 sm:p-4">
            <div className="text-2xl font-bold sm:pl-5 pl-10 lg:px-5 py-2">
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
                {/* <div className="flex items-center">
                    <div className="space-x-4">
                        <a href="/#viza" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">ВИЗ</a>
                        <a href="" className="text-sm invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">ХОЛБОО БАРИХ</a>
                        <a href="/#home" className="text-sm  invisible sm:visible sm:text-lg dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">БИДНИЙ ТУХАЙ</a>
                    </div>
                    <div className="py-1 px-2">
                        <ModeToggle  />
                    </div>
                </div> */}
                <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
                <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                    <ul className="text-base dark:text-white text-gray-600 lg:flex lg:justify-between">
                        <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                            <Link href="/#viza">ВИЗ</Link>

                        </li>
                        <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                            <Link href="/#contact">ХОЛБОО БАРИХ</Link>
            

                        </li>
                        <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                            <Link href="/#home">БИДНИЙ ТУХАЙ</Link>

                        </li>
                        <li className="lg:px-5 sm:py-0 py-2">
                                <ModeToggle  />
                        </li>
                        
                    </ul>
                </nav>
                {/* <div className="py-1 px-2">
                    <ModeToggle  />
                </div> */}
            </div>

        </div>
    )
}