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

        {/* Pastor - Featured */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16 max-w-4xl mx-auto">
          <div className="p-8 md:p-14">
            <div className="mb-8">
              <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Pastor B.</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">Byounghwan "B" Choi</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                <strong className="font-semibold text-gray-900">Byounghwan Choi</strong> was born and raised in South Korea and currently serves as the Associate Pastor at Ridgewood UMC. Called to be a servant of the Lord and committed to the path of the Good Shepherd, he earned his B.Th. and M.Th. from the Methodist Theological University in Korea, followed by an M.Div. from Drew Theological School.
              </p>
              <p>
                He is a devoted disciple of Christ who finds strength in prayer and the study of Scripture. His ministry is deeply influenced by Wesleyan values, focusing on putting faith into action. He is truly excited to join Conklin UMC and Mt. Horeb UMC, where he hopes to work hand-in-hand with members to share God’s love and the Good News.
              </p>
              <p>
                He also personally enjoys cooking and sharing meals with others, and he is an avid traveler who delights in observing and meditating on God’s creation through his journeys.
              </p>
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
