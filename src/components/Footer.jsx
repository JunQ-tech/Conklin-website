import React from 'react';
import UmcLogo from './UmcLogo';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <UmcLogo className="h-14 w-auto" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Making disciples of Jesus Christ for the transformation of the world. Join us at South River!
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/conklinchurch" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-colors font-medium flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Follow us on Facebook</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100/50">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Scan to visit on mobile</p>
              <div className="bg-white p-2 rounded-xl border border-gray-100 inline-block shadow-sm">
                <img src="/qrcode-conklin.png" alt="Website QR Code" className="w-20 h-20" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/ministries" className="text-gray-600 hover:text-umc-red transition-colors">Ministries</a></li>
              <li><a href="/gods-closet" className="text-gray-600 hover:text-umc-red transition-colors">God's Closet</a></li>
              <li><a href="/bible-study" className="text-gray-600 hover:text-umc-red transition-colors">Bible Study</a></li>
              <li><a href="/event" className="text-gray-600 hover:text-umc-red transition-colors">Event</a></li>
              <li><a href="/staff" className="text-gray-600 hover:text-umc-red transition-colors">Our Staff</a></li>
              <li><a href="/prayer" className="text-gray-600 hover:text-umc-red transition-colors">Prayer Request</a></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900">Weekly Schedule</h3>
            <ul className="space-y-4">
              <li className="text-gray-600">
                <span className="block text-gray-900 font-medium mb-1">Sunday Worship</span>
                9:00 AM &bull; In Person
              </li>
              <li className="text-gray-600">
                <span className="block text-gray-900 font-medium mb-1">Bible Study</span>
                7:00 PM &bull; Tuesday
              </li>
              <li className="text-gray-600">
                <span className="block text-gray-900 font-medium mb-1">God's Closet</span>
                Thu 10am-1pm <br/> 1st & 3rd Sat 10am-1pm
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={22} className="shrink-0 mt-0.5 text-umc-red" />
                <span>82 Main Street,<br/>South River, NJ 08882</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone size={22} className="text-umc-red" />
                <span>(732) 254-5062</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail size={22} className="text-umc-red" />
                <a href="mailto:pastorjun2025@gmail.com" className="hover:text-umc-red transition-colors">pastorjun2025@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Conklin United Methodist Church. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
