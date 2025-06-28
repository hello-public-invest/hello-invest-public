
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center">
      <div className="text-center animate-pulse">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-2xl font-bold text-white">₹</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Hello Public</h1>
        <h2 className="text-xl text-yellow-400 font-semibold">Invest</h2>
        <div className="mt-8">
          <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
