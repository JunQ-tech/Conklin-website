import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bibleStudyImg from '../assets/bible-study.jpg';
import { Clock, BookOpen } from 'lucide-react';

const BibleStudy = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Grow in Faith</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Weekly Bible Study</h1>
          <p className="text-2xl font-light text-gray-600 mt-4 max-w-2xl mx-auto">Discovering God's Word Together</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 bg-gray-200 aspect-[4/3]">
              <img 
                src={bibleStudyImg} 
                alt="Bible Study Group" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Join Our Discussion</h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p className="font-medium text-gray-900 text-xl border-b border-gray-100 pb-6">
                  Come as you are! Our weekly Bible study is a relaxed, welcoming space where we dive into scripture, ask questions, and support one another.
                </p>
                
                <p className="pt-2">
                  Whether you are a lifelong believer or just starting to explore faith, you will find a place at our table. We enjoy fellowship, good conversation, and learning how God's word applies to our daily lives.
                </p>

                <div className="flex items-start gap-4 pt-4 mt-6 border-t border-gray-100">
                  <Clock className="text-umc-red shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">When We Meet</h3>
                    <p>Every Tuesday at 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <BookOpen className="text-umc-red shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">What to Bring</h3>
                    <p>Just bring yourself! Bibles and study materials are provided, but feel free to bring your own favorite Bible if you have one.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BibleStudy;
