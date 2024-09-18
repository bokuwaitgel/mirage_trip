import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from '@/components/ui/sheet';
  import { AlignJustify } from 'lucide-react';
  import Link from 'next/link';
  import Image from 'next/image';
  import { ModeToggle } from './Toggle';
  
  export default function MobileNav() {
    return (
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side='left'>
          <Link className="py-2" href="/">
            <Image 
                className="rounded-full"
                // check dark mode
                src={ "/logo.jpg"}
                alt="logo" 
                width="50"
                height="50"
                sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
            />
        </Link>
            <nav className='flex flex-col gap-3 lg:gap-4 mt-6'>
                <Link  className='hover:text-blue-600 font-bold' href='/#viza'>ХӨТӨЛБӨРҮҮД</Link>
                <Link  className='hover:text-blue-600 font-bold' href='/#contact'>ХОЛБОО БАРИХ</Link>
                <Link  className='hover:text-blue-600 font-bold' href='/#home'>БИДНИЙ ТУХАЙ</Link>
                <ModeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    );
  }