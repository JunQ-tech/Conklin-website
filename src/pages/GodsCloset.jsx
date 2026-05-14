import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import godsClosetImg from '../assets/gods-closet.jpg';
import { Clock, MapPin } from 'lucide-react';

const GodsCloset = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Community Outreach</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">God's Closet Thrift Shop</h1>
          <p className="text-2xl font-light text-gray-600 mt-4 max-w-2xl mx-auto">A Conklin Church Outreach</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Main Info Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="w-full h-64 md:h-96 bg-gray-200">
              <img 
                src={godsClosetImg} 
                alt="God's Closet Thrift Shop" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Welcome to God's Closet</h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p className="font-medium text-gray-900 text-xl border-b border-gray-100 pb-6">
                  Thrift Shop Run by volunteers of Conklin United Methodist Church.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-umc-red shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-1">Location</h3>
                      <p>82 Main St<br/>South River, NJ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-umc-red shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Open Hours</h3>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-umc-red"></span> Every Thursday 10am - 1pm</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-umc-red"></span> 1st & 3rd Saturdays 10am - 1pm</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://www.facebook.com/conklingodscloset/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Follow God's Closet on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Feed Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full min-h-[800px] lg:min-h-[1000px] overflow-hidden">
            <div className="flex-grow flex justify-center items-start w-full bg-white rounded-xl overflow-hidden">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fconklingodscloset&tabs=timeline&width=500&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="100%" 
                height="1000" 
                style={{ border: 'none', overflow: 'hidden', minHeight: '1000px', maxWidth: '100%' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="God's Closet Facebook Feed"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GodsCloset;
