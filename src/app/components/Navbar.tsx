'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent bg-black text-white  bg-cover shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold ">
          <Link href="/">
           
              <Image src="/logo.png" alt="Company Logo" height={50} width={50} />
    
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-serif text-lg text-white">
          <li><Link href="/" className=" hover:text-green-700 ">Home</Link></li>
          <li><Link href="/about" className=" hover:text-green-700 ">About Us</Link></li>
          <li><Link href="/products" className="  hover:text-green-700">Products</Link></li>
          <li><Link href="/industries" className="  hover:text-green-700">Industries</Link></li>

          <li><Link href="/blog" className=" hover:text-green-700 ">Insights</Link></li>
          <li><Link href="/contact" className=" hover:text-green-700 ">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">
          
              Get in Touch
        
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-800">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black`}>
        <ul className="space-y-4 px-6 py-4 font-serif">
          <li><Link href="/" className=" ">Home</Link></li>
          <li><Link href="/about" className=" ">About Us</Link></li>
          <li><Link href="/products" className=" ">Products</Link></li>
          <li><Link href="/industries" className=" ">Industries</Link></li>
         
          <li><Link href="/blog" className=" ">Insights</Link></li>
          <li><Link href="/contact" className=" ">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
