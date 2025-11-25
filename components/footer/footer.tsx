import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center py-24 bg-amber-50'>
             {/* Company Name */}
        <Link href={'/'} className="text-2xl font-bold text-blue-400 cursor-pointer">
         <span className="text-blue-800">M</span><span className="text-blue-700">T</span><span className="text-blue-600">S</span>-<span>TECH</span>
        </Link>
         <p>MTS Tech delivers reliable web solutions, innovative design, strong support, and professional service to help businesses grow with digital technology.</p>
         <div className='flex gap-5'>
            <Link href={"https://web.facebook.com/mdtawhidkhan.khan.7"}><Facebook /></Link>
         <Link href={"https://web.facebook.com/mdtawhidkhan.khan.7"}><X/></Link>
         <Link href={"https://web.facebook.com/mdtawhidkhan.khan.7"}><Instagram/></Link>
         <Link href={"https://www.linkedin.com/in/md-touhed-sorker-a993b617b"}><Linkedin/></Link>
         </div>
        </div>
    );
};

export default Footer;