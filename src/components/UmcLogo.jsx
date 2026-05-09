import React from 'react';

const UmcLogo = ({ className = "h-12 w-auto" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* UMC Cross and Flame SVG */}
    <svg 
      viewBox="0 0 100 120" 
      className="h-full w-auto drop-shadow-sm" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The Cross */}
      <path 
        d="M35 10H45V110H35V10Z" 
        fill="#E4002B" 
      />
      <path 
        d="M15 35H65V45H15V35Z" 
        fill="#E4002B" 
      />
      {/* The Dual Flame */}
      <path 
        d="M50 110C50 110 85 95 85 65C85 45 70 35 60 50C70 40 75 55 70 70C65 85 50 90 50 110Z" 
        fill="#E4002B" 
        fillOpacity="0.9"
      />
      <path 
        d="M50 110C50 110 75 100 75 75C75 60 65 50 55 60C60 55 65 65 62 75C59 85 50 95 50 110Z" 
        fill="#E4002B"
      />
    </svg>
    
    {/* Church Name */}
    <div className="flex flex-col">
      <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 leading-none">
        CONKLIN
      </span>
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-umc-red leading-none uppercase mt-1">
        United Methodist Church
      </span>
    </div>
  </div>
);

export default UmcLogo;
