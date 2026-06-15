import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Staff = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Meet Our Team</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Our Staff</h1>
        </div>


        {/* Other Staff Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-umc-red mx-auto mb-4 font-bold text-2xl">
              N
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Nancy Drumright</h3>
            <p className="text-umc-red font-medium">Music Director</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-umc-red mx-auto mb-4 font-bold text-2xl">
              F
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Fred Testa</h3>
            <p className="text-umc-red font-medium">Church Administrator</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-umc-red mx-auto mb-4 font-bold text-2xl">
              L
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Linda Razzano</h3>
            <p className="text-umc-red font-medium">Lay Leader</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Staff;
