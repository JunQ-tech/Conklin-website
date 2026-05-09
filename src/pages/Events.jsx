import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">What's Happening</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Church Calendar</h1>
          <p className="text-xl font-light text-gray-600 mt-4 max-w-2xl mx-auto">Stay up to date with everything going on at Conklin UMC.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2 sm:p-6 md:p-8">
          <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] relative rounded-xl overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" 
              style={{ border: "solid 1px #e5e7eb", width: "100%", height: "100%" }} 
              frameBorder="0" 
              scrolling="no"
              title="Church Calendar"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 italic">
              Note: This is currently showing US Holidays as a placeholder. If you have a Google Calendar for the church, we can easily plug it in here!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
