"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const currentPath=usePathname() ;
   
    return (
         <nav className="bg-white shadow-md fixed w-full mx-aut0 top-0 px-10">
     <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Company Name */}
        <Link href={'/'} className="text-2xl font-bold text-blue-400 cursor-pointer">
         <span className="text-blue-800">M</span><span className="text-blue-700">T</span><span className="text-blue-600">S</span>-<span>TECH</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href={'/'} className={currentPath==='/'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Home</Link>
          <Link href={'/about'} className={currentPath==='/about'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>About</Link>
          <Link href={'/services'} className={currentPath==='/services'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Our Service</Link>
          <Link href={'/contact'} className={currentPath==='/contact'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Contact Us</Link>
        </ul>
        </div>
        </nav>
    );
};

export default Navbar;