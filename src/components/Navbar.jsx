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
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[-1] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <UmcLogo className="h-10 w-auto" />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 px-6 py-8 space-y-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-4 text-lg font-bold rounded-2xl transition-all ${
                  location.pathname === link.href 
                    ? 'bg-red-50 text-umc-red' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-umc-red'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slide-up-fade 0.5s ease-out forwards' : 'none',
                  opacity: 0
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <p className="text-sm text-gray-500 font-medium text-center">
              © 2026 Conklin UMC
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
