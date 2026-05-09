import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, BookOpen, ShoppingBag, Users, Clock } from 'lucide-react';
import godsClosetImg from '../assets/gods-closet.jpg';
import bibleStudyImg from '../assets/bible-study.jpg';
import churchMain from '../assets/church-main.jpg';
import newspaperClipping from '../assets/newspaper-clipping.jpg';

const Ministries = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">Get Involved</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Discover Our Ministries</h1>
          <p className="text-xl font-light text-gray-600 mt-4 max-w-2xl mx-auto">
            Rooted in nearly a century of history, Conklin UMC is dedicated to serving our community today.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* God's Closet */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={godsClosetImg} alt="God's Closet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-umc-red mb-6">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">God's Closet Thrift Shop</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Run entirely by volunteers, God's Closet provides affordable clothing, household goods, and a welcoming smile to everyone in South River.
              </p>
              <a href="/gods-closet" className="text-umc-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Bible Study */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={bibleStudyImg} alt="Bible Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-umc-red mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Weekly Bible Study</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Join us every Tuesday at 7:00 PM for a relaxed, welcoming space where we dive into scripture, ask questions, and support one another in faith.
              </p>
              <a href="/bible-study" className="text-umc-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Join the Discussion &rarr;
              </a>
            </div>
          </div>

          {/* Sunday Worship */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={churchMain} alt="Church Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-umc-red mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sunday Worship</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                The heart of our community. We gather every Sunday morning at 9:00 AM to worship together, hear the Word of God, and celebrate Holy Communion.
              </p>
              <a href="/" className="text-umc-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Plan a Visit &rarr;
              </a>
            </div>
          </div>

          {/* Prayer Ministry */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-48 bg-umc-red relative overflow-hidden flex items-center justify-center">
              <Heart size={64} className="text-white opacity-20 absolute" />
              <Heart size={32} className="text-white relative z-10" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-umc-red mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Prayer Ministry</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                We believe in the power of prayer. Our pastoral team is dedicated to lifting up the needs of our congregation and our neighbors.
              </p>
              <a href="/prayer" className="text-umc-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Submit a Request &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Newspaper History Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 border-r border-gray-200 p-8 flex items-start justify-center overflow-hidden">
              <img 
                src={newspaperClipping} 
                alt="Newspaper clipping from the 98th Anniversary of Conklin Methodist Church" 
                className="w-full max-w-sm object-contain shadow-md rounded-sm border border-gray-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-umc-red/5 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <span className="text-umc-red font-bold tracking-widest text-sm uppercase mb-2 block">From the Archives</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b border-gray-100 pb-4 leading-tight">Reading the History of Conklin</h2>
                
                <div className="prose prose-lg text-gray-700 font-light max-w-none space-y-6">
                  <p>
                    <span className="font-semibold text-gray-900 uppercase">South River</span> — The history of Conklin Methodist Church goes far into the last century. In 1842 the Rev. J. N. Dobbins was appointed the first pastor. Other pastors who served the early church were the Rev. Charles S. Downs (1842-1846), Stacy W. Hilliard (1846-1851), and Thomas S. Wilson (1851-1858). 
                  </p>
                  <p>
                    During these early years, an old schoolhouse on Main Street, and later a building formerly occupied by the late Dr. S. E. Selover, served as houses of worship.
                  </p>
                  
                  <h3 className="font-bold text-gray-900 text-2xl pt-2">Named for Mrs. Conklin</h3>
                  <p>
                    In 1858, the present lot at the corner of Main and Gordon streets was purchased from Hercules Weston as a site for a new church. The cornerstone was laid August 4, 1858, and the Conklin M. E. Church was dedicated October 18, 1859. 
                  </p>
                  <p>
                    The church was named for Mrs. Nancy Conklin, a faithful member who was honored because her generous gifts and heartfelt bequest made the building of the church possible. Her profound legacy provided a lasting spiritual home for the congregation.
                  </p>

                  <h3 className="font-bold text-gray-900 text-2xl pt-2">A Legacy of Growth</h3>
                  <p>
                    Following the dedication, the old church building was converted into a parsonage. In 1891, when the town of Washington became known as South River, many improvements were made. Between 1899-1902, beautiful stained glass windows were placed in the sanctuary to inspire worshipers for generations to come. 
                  </p>
                  <p>
                    As the congregation grew, plans were drawn for a new church in 1930. The magnificent new building was dedicated with appropriate ceremonies on September 13, 1931. Built through faith and perseverance, it stood as a testament to the community's dedication even in the face of the Great Depression.
                  </p>
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

export default Ministries;
