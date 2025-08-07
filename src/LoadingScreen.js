import React, { useState, useEffect } from 'react';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-[9999] flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 opacity 100" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/dots.webp)`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="bg-gray-100 rounded-lg p-4 inline-block mb-6 animate-pulse shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logo/logo.webp`} 
              alt="73 Dotts Logo" 
              className="h-16 md:h-20"
            />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 font-light" style={{ fontFamily: "Raleway, sans-serif" }}>
          Connecting the dotts
          <span className="text-accent">{dots}</span>
        </h2>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-accent to-orange-400 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-gray-600 text-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          {Math.round(progress)}% Complete
        </p>

        {/* Floating Balls Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-ping ${
                i % 3 === 0 ? 'w-3 h-3 bg-accent' : 
                i % 3 === 1 ? 'w-2 h-2 bg-orange-400' : 
                'w-1 h-1 bg-white/60'
              }`}
              style={{
                left: `${10 + (i % 4) * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1.5 + (i % 3) * 0.5}s`
              }}
            ></div>
          ))}
          
          {/* Additional floating circles with different animations */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`circle-${i + 12}`}
              className={`absolute rounded-full ${
                i % 2 === 0 ? 'bg-accent/40' : 'bg-orange-300/40'
              } animate-bounce`}
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                left: `${15 + (i % 5) * 15}%`,
                top: `${60 + (i % 4) * 10}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 2)}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen; 