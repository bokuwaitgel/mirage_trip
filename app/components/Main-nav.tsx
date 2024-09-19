import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './Toggle';


export default function MainNav() {
  return (
    <div className='hidden md:flex w-full '>
      <div className='flex justify-between w-full '>
        <Link className="py-2 pl-10" href="/">
            <div className='flex justify-center items-center'>
                <Image 
                    className="rounded-full"
                    // check dark mode
                    src={ "/logo.jpg"}
                    alt="logo" 
                    width="60"
                    height="60"
                    sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                />
                <h1 className='text-2xl text-[#585858] dark:text-white font-bold pl-3'>Mirage Trip</h1>
            </div>
        </Link>
        <nav className='flex justify-end items-center gap-3 lg:gap-4 ml-8 '>
            <Link  className='hover:text-blue-600 dark:hover:text-blue-600 font-bold dark:text-[#8b8b8b]'  href='/#viza'>ХӨТӨЛБӨРҮҮД</Link>
            <Link  className='hover:text-blue-600 dark:hover:text-blue-600 font-bold dark:text-[#8b8b8b]' href='/#contact'>ХОЛБОО БАРИХ</Link>
            <Link  className='hover:text-blue-600 dark:hover:text-blue-600 font-bold dark:text-[#8b8b8b]' href='/#home'>БИДНИЙ ТУХАЙ</Link>
            <ModeToggle />
        </nav>
      </div>
    </div>
  );
}