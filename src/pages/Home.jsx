import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import heroBg from '../assets/church-main.jpg';
import { Clock, MapPin, BookOpen, ShoppingBag, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full aspect-video flex items-start justify-center pt-16 md:pt-28 mt-24 bg-black overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 origin-center">
          <Slideshow />
          {/* Dark Overlay to make text pop */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-widest mb-4 sm:mb-6 uppercase shadow-sm animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            Welcome Home
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
            You Belong Here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light drop-shadow-md leading-relaxed hidden sm:block animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
            A community of faith, hope, and love in South River. Join us this Sunday morning at 9:00 AM as we worship together.
          </p>
        </div>
      </section>

      {/* Info Bar Section */}
      <section className="bg-white py-8 md:py-12 border-b border-gray-100 relative z-20 -mt-8 md:-mt-12 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 px-4 md:px-8">
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center text-umc-red shrink-0">
              <Clock size={20} md={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-0.5 md:mb-1">Worship</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium">9:00 AM</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start text-center md:text-left border-l md:border-l-0 border-gray-100 pl-4 md:pl-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center text-umc-red shrink-0">
              <BookOpen size={20} md={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-0.5 md:mb-1">Bible Study</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium">Tue 7:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start text-center md:text-left border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center text-umc-red shrink-0">
              <ShoppingBag size={20} md={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-0.5 md:mb-1">God's Closet</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium leading-tight">Thu/Sat 10am</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start text-center md:text-left border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 border-l md:border-l pl-4 md:pl-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center text-umc-red shrink-0">
              <MapPin size={20} md={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-0.5 md:mb-1">South River</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium">82 Main St</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-umc-red font-bold tracking-wider text-sm mb-3 block uppercase">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Welcome to Conklin UMC</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are so glad you found us! Conklin United Methodist Church is a place where you can belong before you believe. Our mission is to make disciples of Jesus Christ for the transformation of the world.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Whether you're exploring faith for the first time or looking for a new church home, there is a place for you here. We invite you to experience our vibrant worship, engaging ministries, and loving community.
            </p>
            <Link to="/ministries" className="text-umc-red font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all pb-1 border-b-2 border-transparent hover:border-umc-red inline-flex w-max">
              Discover Our Ministries <span>&rarr;</span>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square rounded-3xl bg-gray-200 overflow-hidden shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-umc-red/20 to-transparent mix-blend-multiply z-10"></div>
               <img src={heroBg} alt="Church Building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block z-30 border border-gray-100">
              <div className="flex gap-5 items-center">
                <div className="text-5xl font-extrabold text-umc-red">150+</div>
                <div className="text-base font-bold text-gray-700 leading-tight">Years of <br/> Ministry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Banner Section */}
      <section className="bg-umc-red py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern or overlay */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">We Pray For You</h2>
          <p className="text-xl text-red-100 mb-10 leading-relaxed font-light">
            No matter what you are going through, you don't have to face it alone. Our pastoral team is here to support you in prayer. Let us know how we can pray for you today.
          </p>
          <Link 
            to="/prayer" 
            className="inline-flex items-center gap-3 bg-white text-umc-red px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Heart className="w-6 h-6 fill-current text-umc-red" />
            Send a Prayer Request
          </Link>
        </div>
      </section>

      {/* Worship Bulletin Section */}
      <section className="py-24 bg-stone-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-umc-red font-bold tracking-wider text-sm mb-3 block uppercase">This Week</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Worship Bulletin</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Follow along with our Sunday service. Read this week's bulletin below.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <img 
                  src="/bulletin-outside.png" 
                  alt="Worship Bulletin Outside" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <img 
                  src="/bulletin-inside.png" 
                  alt="Worship Bulletin Inside" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="w-full h-96 relative border-t border-gray-200">
        <iframe 
          src="https://maps.google.com/maps?q=Conklin%20United%20Methodist%20Church,%20South%20River,%20NJ&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Conklin UMC Location"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
