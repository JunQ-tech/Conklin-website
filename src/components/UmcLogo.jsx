import React from 'react';
import logo from '../assets/logo.png';

const UmcLogo = ({ className = "h-14 w-auto" }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src={logo} 
      alt="Conklin UMC Logo" 
      className="h-full w-auto object-contain" 
    />
  </div>
);

export default UmcLogo;
