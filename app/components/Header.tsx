import MainNav from './Main-nav';
import MobileNav from './Mobile-nav';

export default function Header() {
  return (
    <header className="fixed w-full backdrop-filter backdrop-blur-3xl z-50">
        <div className="flex justify-between marker:max-width:100% border-b-[1px] px-4">
      {/* <div className='h-14 container flex items-center'> */}
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
      </div>
    </header>
  );
}