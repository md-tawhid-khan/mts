"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const Navbar = () => {
    const currentPath=usePathname() ;
    const [open, setOpen] = useState(false);
   
    return (
         <nav className="bg-white shadow-md fixed w-full mx-aut0 top-0 px-10 z-40">
     <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Company Name */}
        <Link href={'/'} className="text-2xl font-bold text-blue-400 cursor-pointer">
         <span className="text-blue-800">M</span><span className="text-blue-700">T</span><span className="text-blue-600">S</span>-<span>TECH</span>
        </Link>
        {/* ---------------- */}

        <div className="md:hidden">
          {open ? (
            <X size={28} className="cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} className="cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href={'/'} className={currentPath==='/'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Home</Link>
          <Link href={'/about'} className={currentPath==='/about'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>About</Link>
          <Link href={'/services'} className={currentPath==='/services'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Our Service</Link>
          <Link href={'/contact'} className={currentPath==='/contact'?"text-blue-600":"hover:text-blue-600 cursor-pointer"}>Contact Us</Link>
        </ul>

        </div>

        
     

        {
           open && <div className= "md:hidden bg-white shadow-md px-4 py-3">
            <div className='flex items-center justify-between gap-4 text-gray-700 font-medium text-sm'>
                  <Link
            href="/"
            onClick={() => setOpen(false)}
            className={currentPath === "/" ? "text-blue-600 font-semibold" : ""}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={currentPath === "/about" ? "text-blue-600 font-semibold" : ""}
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className={currentPath === "/services" ? "text-blue-600 font-semibold" : ""}
          >
            Our Service
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={currentPath === "/contact" ? "text-blue-600 font-semibold" : ""}
          >
            Contact Us
          </Link>

            </div>
          
          </div>
        
        }
        </nav>
    );
};

export default Navbar;