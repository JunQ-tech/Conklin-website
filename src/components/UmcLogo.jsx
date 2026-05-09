import React from 'react';

const UmcLogo = ({ className = "h-10 w-auto" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Simple Cross Icon */}
    <svg 
      viewBox="0 0 100 100" 
      className="h-8 w-8 text-umc-red" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="42" y="10" width="16" height="80" rx="2" />
      <rect x="20" y="35" width="60" height="16" rx="2" />
    </svg>
    
    {/* Clean Text Sign */}
    <div className="flex flex-col">
      <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900 leading-none">
        CONKLIN
      </span>
      <span className="text-[10px] md:text-xs font-bold tracking-widest text-umc-red leading-none uppercase mt-1">
        Methodist Church
      </span>
    </div>
  </div>
);

export default UmcLogo;
