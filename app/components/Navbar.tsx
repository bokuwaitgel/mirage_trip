'use client'
import React from "react";
import Image from "next/image";

import { ModeToggle } from "./Toggle";
import { Menu } from "lucide-react"
import Link from "next/link";

export default function Navbar() {

    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/your-path" },
        { title: "Blog", path: "/your-path" },
        { title: "About Us", path: "/your-path" },
        { title: "Contact Us", path: "/your-path" },
    ]
    return (
        <div className="fixed w-full  backdrop-filter backdrop-blur-3xl">
            <div className="flex justify-between items-center max-width:100% border-b-[1px] px-4">
                    <div className="flex items-center justify-between  md:py-5 md:block">
                            <Link href="/#home">
                            <Image
                                            className="rounded-full"
                                            // check dark mode
                                            src={ "/logo.jpg"}
                                            alt="logo" 
                                            width="0"
                                            height="0"
                                            sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                                            style={{ width: '60px', height: '60px' }}  
                                        />
                            </Link>
                            <div className="md:hidden">
                            <button
                                className="text-gray-700 outline-none  rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                            </div>
                        </div>
                        <div
                            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                            state ? "block" : "hidden"
                            }`}
                        >
                            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menus.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                            <li className="text-gray-600 hover:text-indigo-600">
                                <ModeToggle />
                            </li>
                            </ul>
                        </div>
                
            </div>

        </div>
    )
}