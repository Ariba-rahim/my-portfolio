'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },

  ];

  return (
    <nav className= "shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl  text-blue-500 drop-shadow-[2px_2px_0px-blue] font-extrabold">
          MyPortfolio
        </Link>

    
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg hover:text-blue-500 transition ${
                pathname === link.href ? 'text-blue-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      
        <button
          className="md:hidden text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 border-b text-lg transition ${
                pathname === link.href ? 'text-blue-700 font-semibold' : 'text-gray-700'
              } hover:bg-blue-50 hover:text-blue-600`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

