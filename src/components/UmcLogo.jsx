import React from 'react';
import logo from '../assets/logo.png';

const UmcLogo = ({ className = "w-10 h-10" }) => (
  <img src={logo} alt="Conklin UMC Logo" className={`${className} object-contain`} />
);

export default UmcLogo;
