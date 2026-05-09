import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide3 from '../assets/slide3.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.png';
import slide7 from '../assets/slide7.jpg';
import slide8 from '../assets/slide8.jpg';
import slide9 from '../assets/slide9.jpg';
import slide10 from '../assets/slide10.jpg';
import slide11 from '../assets/slide11.jpg';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide8, slide10, slide7, slide9, slide11, slide3, slide5, slide6];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Church community slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out ${
            index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-umc-red/20 to-transparent mix-blend-multiply z-20 pointer-events-none"></div>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
