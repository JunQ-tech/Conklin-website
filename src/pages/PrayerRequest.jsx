import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Send, ShieldCheck } from 'lucide-react';

const PrayerRequest = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar forceSolid={true} />

      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-umc-red/10 p-4 rounded-full">
              <Heart className="text-umc-red w-10 h-10" />
            </div>
          </div>
          <span className="text-umc-red font-bold tracking-widest text-sm uppercase">How can we pray for you?</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Send a Prayer Request</h1>
          <p className="text-xl font-light text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe in the power of prayer. Whatever you are going through, our pastoral team would love to pray with you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-umc-red to-red-800"></div>
          
          <div className="p-8 md:p-12">
            <form 
              action="https://formsubmit.co/pastorjun2025@gmail.com" 
              method="POST" 
              className="space-y-8"
            >
              {/* Formsubmit Configuration */}
              <input type="hidden" name="_subject" value="New Prayer Request from Church Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for sharing your prayer request with Conklin UMC. We are praying for you." />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-umc-red focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-umc-red focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-umc-red focus:border-transparent transition-all outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="request" className="block text-sm font-bold text-gray-700 mb-2">Your Prayer Request</label>
                <textarea 
                  id="request" 
                  name="request" 
                  required 
                  rows="6"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-umc-red focus:border-transparent transition-all outline-none resize-none"
                  placeholder="How can we pray for you today?"
                ></textarea>
              </div>

              <div className="flex items-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <input 
                  type="checkbox" 
                  id="confidential" 
                  name="confidential" 
                  value="Yes, keep this confidential"
                  className="w-5 h-5 text-umc-red border-gray-300 rounded focus:ring-umc-red cursor-pointer"
                />
                <label htmlFor="confidential" className="text-gray-700 font-medium flex items-center gap-2 cursor-pointer select-none">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  Keep this request confidential (Pastors only)
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full flex justify-center items-center gap-3 bg-umc-red text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl focus:ring-4 focus:ring-red-200"
                >
                  <Send className="w-6 h-6" />
                  Submit Prayer Request
                </button>
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Your request will be securely sent directly to pastorjun2025@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrayerRequest;
