import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import UmcLogo from './UmcLogo';

const Navbar = ({ forceSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isSolid = true;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Ministries', href: '/ministries' },
    { name: "God's Closet", href: '/gods-closet' },
    { name: 'Bible Study', href: '/bible-study' },
    { name: 'Event', href: '/event' },
    { name: 'Our Staff', href: '/staff' },
    { name: 'Prayer Request', href: '/prayer' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center hover:scale-105 transition-transform">
              <UmcLogo className="h-16 md:h-20 w-auto" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-bold transition-colors hover:text-umc-red ${
                  location.pathname === link.href ? 'text-umc-red' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-umc-red ${
                  location.pathname === link.href ? 'text-umc-red bg-red-50' : 'text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
