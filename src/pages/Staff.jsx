import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pastorJun from '../assets/pastor-jun.jpg';

const Staff = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Meet Our Team</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Our Staff</h1>
        </div>

        {/* Pastor Jun - Featured */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gray-200 relative aspect-[4/5] md:aspect-auto">
              <img 
                src={pastorJun} 
                alt="Pastor JunGyu Park" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Pastor</span>
                <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">JunGyu "Jun" Park</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  <strong className="font-semibold text-gray-900">JunGyu Park</strong> was born and raised in South Korea. He holds a B.Th. from Methodist Theological University in Seoul and is currently pursuing an M.Div. from Drew Theological School.
                </p>
                <p>
                  Since 2021, he has been serving as a student intern and youth pastor at Wesley UMC in Edison. He is passionate about sharing the love of God and building a community where everyone feels they belong.
                </p>
                <p>
                  In his free time, he enjoys playing the bass and acoustic guitar, skiing, and hiking. He also loves making drip coffee and uses his media skills to help people connect with God.
                </p>
              </div>
            </div>
          </div>
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
