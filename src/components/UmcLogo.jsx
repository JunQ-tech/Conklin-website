import React from 'react';

const UmcLogo = ({ className = "h-16 w-auto" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Stylized Cross and Flame SVG */}
    <div className="relative h-12 md:h-16 aspect-[1/1.5] shrink-0">
      <svg 
        viewBox="0 0 100 150" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The Flame (Red) */}
        <path 
          d="M20 130C20 130 50 110 55 70C55 40 40 25 30 40C40 30 55 50 50 80C45 110 20 130 20 130Z" 
          fill="#E4002B" 
        />
        <path 
          d="M25 135C25 135 65 115 70 65C70 30 50 15 35 35C50 20 70 45 65 85C60 120 25 135 25 135Z" 
          fill="#E4002B" 
          fillOpacity="0.8"
        />
        {/* The Cross (Black) */}
        <path 
          d="M38 15V140M20 45H65" 
          stroke="black" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>
    </div>
    
    {/* Text Section */}
    <div className="flex flex-col justify-center">
      <span 
        className="text-4xl md:text-5xl text-black leading-none pb-1"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Conklin
      </span>
      <span className="text-[9px] md:text-[11px] font-bold tracking-[0.15em] text-gray-800 leading-none uppercase">
        United Methodist Church
      </span>
    </div>
  </div>
);

export default UmcLogo;
