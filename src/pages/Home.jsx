import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import heroBg from '../assets/church-main.jpg';
import { Clock, MapPin, BookOpen, ShoppingBag, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-umc-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden bg-black mt-20">
        {/* Background Slideshow with Slow Zoom */}
        <div className="absolute inset-0 z-0 origin-center animate-slow-zoom">
          <Slideshow />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none"></div>
        </div>

        {/* Content with Reveal Animation */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-hero-reveal">
          <span className="inline-block py-2 px-6 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold tracking-[0.2em] mb-8 uppercase shadow-2xl">
            Welcome Home
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
            You Belong <br/> Here
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow-lg leading-relaxed mb-12 opacity-90">
            A vibrant community of faith, hope, and love in the heart of South River.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/ministries" 
              className="px-10 py-5 bg-umc-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-umc-red/40 hover:-translate-y-1 w-full sm:w-auto"
            >
              Get Started
            </Link>
            <a 
              href="#welcome" 
              className="px-10 py-5 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Info Bar Section - Fancy Glass Style */}
      <section id="welcome" className="relative z-30 -mt-16 mx-4 md:mx-auto max-w-7xl">
        <div className="glass p-1 rounded-[2.5rem] shadow-2xl shadow-black/10">
          <div className="bg-white/80 rounded-[2.2rem] py-10 md:py-14 px-8 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div className="group flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-umc-red group-hover:bg-umc-red group-hover:text-white transition-colors duration-500 shadow-inner">
                  <Clock size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-1">Worship</h3>
                  <p className="text-gray-500 font-bold text-sm tracking-wide">SUNDAY 9:00 AM</p>
                </div>
              </div>
              
              <div className="group flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1 border-t sm:border-t-0 sm:border-l border-gray-100 pt-10 sm:pt-0 sm:pl-10">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-umc-red group-hover:bg-umc-red group-hover:text-white transition-colors duration-500 shadow-inner">
                  <BookOpen size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-1">Bible Study</h3>
                  <p className="text-gray-500 font-bold text-sm tracking-wide">TUE 7:00 PM</p>
                </div>
              </div>

              <div className="group flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1 border-t md:border-t-0 md:border-l border-gray-100 pt-10 md:pt-0 md:pl-10">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-umc-red group-hover:bg-umc-red group-hover:text-white transition-colors duration-500 shadow-inner">
                  <ShoppingBag size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-1">God's Closet</h3>
                  <p className="text-gray-500 font-bold text-sm tracking-wide uppercase">Thu & Sat 10-1</p>
                </div>
              </div>

              <div className="group flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1 border-t md:border-t-0 md:border-l border-gray-100 pt-10 md:pt-0 md:pl-10">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-umc-red group-hover:bg-umc-red group-hover:text-white transition-colors duration-500 shadow-inner">
                  <MapPin size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-1">South River</h3>
                  <p className="text-gray-500 font-bold text-sm tracking-wide">82 MAIN STREET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="animate-slide-up-fade">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-umc-red"></div>
              <span className="text-umc-red font-black tracking-[0.2em] text-xs uppercase">Since 1870</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1] tracking-tight">
              A Legacy of <br/> <span className="text-gradient">Love & Faith</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Conklin United Methodist Church is more than just a building; it's a home for anyone seeking purpose, community, and the transformative power of Jesus Christ.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe in open hearts, open minds, and open doors. Whether you are a lifelong believer or just starting your journey, there is a seat at the table for you.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-8">
               <Link to="/ministries" className="group flex items-center gap-4 text-gray-900 font-black text-lg">
                  Explore Ministries 
                  <span className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-umc-red group-hover:border-umc-red group-hover:text-white transition-all duration-300">
                    &rarr;
                  </span>
               </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] bg-gray-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative transform group-hover:scale-[1.02] transition-transform duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
               <img src={heroBg} alt="Church Building" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-30 border border-gray-50 hidden lg:block animate-float">
              <div className="flex gap-6 items-center">
                <div className="text-6xl font-black text-gradient">150+</div>
                <div className="text-sm font-black text-gray-400 uppercase tracking-widest leading-tight">Years of <br/> Ministry</div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-umc-red rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Prayer Banner Section - Premium Style */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900 rounded-[4rem] mx-4 mb-24">
        {/* Decorative background image with low opacity */}
        <div className="absolute inset-0 opacity-40">
           <img src={heroBg} alt="Prayer background" className="w-full h-full object-cover blur-sm scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-umc-red/90 to-black/80"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 animate-float">
              <Heart className="w-10 h-10 text-white fill-white/20" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">We Pray For You</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light italic">
            "For where two or three are gathered in my name, there am I among them."
          </p>
          <Link 
            to="/prayer" 
            className="group inline-flex items-center gap-4 bg-white text-gray-900 px-12 py-6 rounded-full font-black text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
          >
            <Heart className="w-6 h-6 text-umc-red fill-umc-red group-hover:scale-125 transition-transform" />
            Submit Prayer Request
          </Link>
        </div>
      </section>

      {/* Worship Bulletin Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-umc-red/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-umc-red font-black tracking-[0.2em] text-xs uppercase mb-4 block">Weekly Update</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">Worship Bulletin</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10">Follow along with our service. Digital version updated every week.</p>
            <a href="/bulletin-outside.png" download className="inline-flex bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all hover:scale-105 shadow-xl items-center gap-3">
               <FileText size={22} />
               Download PDF Version
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="group bg-white p-4 sm:p-6 rounded-[3rem] shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2">
              <div className="rounded-[2.2rem] overflow-hidden border border-gray-100 bg-gray-50 relative">
                <img 
                  src="/bulletin-outside.png" 
                  alt="Worship Bulletin Outside" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>

            <div className="group bg-white p-4 sm:p-6 rounded-[3rem] shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2">
              <div className="rounded-[2.2rem] overflow-hidden border border-gray-100 bg-gray-50 relative">
                <img 
                  src="/bulletin-inside.png" 
                  alt="Worship Bulletin Inside" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section - Full Width */}
      <section className="w-full h-[500px] relative mt-12 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://maps.google.com/maps?q=Conklin%20United%20Methodist%20Church,%20South%20River,%20NJ&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Conklin UMC Location"
        ></iframe>
        {/* Map Overlay Card */}
        <div className="absolute bottom-12 right-12 bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm hidden md:block border border-gray-50">
           <h3 className="text-2xl font-black text-gray-900 mb-2">Visit Us</h3>
           <p className="text-gray-500 mb-6 font-medium">82 Main Street, South River, NJ 08882</p>
           <a 
             href="https://www.google.com/maps/dir/?api=1&destination=Conklin+United+Methodist+Church" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-umc-red font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
           >
             Get Directions &rarr;
           </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
