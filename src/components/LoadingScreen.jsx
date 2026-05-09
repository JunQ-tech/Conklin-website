import React, { useState, useEffect } from 'react';
import UmcLogo from './UmcLogo';

const LoadingScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade transition to finish before unmounting
      setTimeout(onComplete, 800); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-900 transition-opacity duration-[800ms] ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className={`flex flex-col items-center transition-transform duration-1000 ${isFadingOut ? 'scale-110' : 'scale-100'}`}>
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 animate-pulse">
          <UmcLogo className="w-auto h-24 sm:h-32" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
