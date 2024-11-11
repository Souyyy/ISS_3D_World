import React from 'react';
import '../styles/SplashScreenLogo.css';
import sigle from '../images/sigle.png';

const SplashScreenLogo = () => {
  return (
    <div className="body">
      <div className="animate-pulse">
        <img src={sigle} alt="Site Logo" className="w-32 h-32 text-white" />
      </div>
    </div>
  );
};

export default SplashScreenLogo;