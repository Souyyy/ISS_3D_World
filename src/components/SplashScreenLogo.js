import React from 'react';
import '../styles/SplashScreenLogo.css';

const SplashScreenLogo = () => {
  return (
    <div className="body">
      <div className="animate-pulse">
        <img src="/sigle.png" alt="Site Logo" className="w-32 h-32 text-white" />
      </div>
    </div>
  );
};

export default SplashScreenLogo;