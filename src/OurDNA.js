import React, { useState, useEffect, useRef } from 'react';

function OurDNA() {
  const [fadeInElements, setFadeInElements] = useState({
    firstLine: false,
    design: false,
    secondLine: false,
    execute: false,
    description: false
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger fade-in animations with delays
            setTimeout(() => setFadeInElements(prev => ({ ...prev, firstLine: true })), 200);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, design: true })), 400);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, secondLine: true })), 600);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, execute: true })), 800);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, description: true })), 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/backgrounds/MALAYSIYA-Year--2017-04-.webp'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* Main Statement */}
        <div className="text-center mb-12 md:mb-20">
          <div className="space-y-2 md:space-y-4">
            <p className={`text-lg md:text-2xl text-gray-300 font-normal transition-all duration-1000 ease-out ${
              fadeInElements.firstLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ fontFamily: "Raleway, sans-serif" }}>
              We don't just
            </p>
            <h3 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-accent mb-4 md:mb-8 transition-all duration-1000 ease-out ${
              fadeInElements.design ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} style={{ fontFamily: "Raleway, sans-serif" }}>
              DESIGN.
            </h3>
            <p className={`text-lg md:text-2xl text-gray-300 font-normal transition-all duration-1000 ease-out ${
              fadeInElements.secondLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ fontFamily: "Raleway, sans-serif" }}>
              We don't just
            </p>
            <h3 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-accent transition-all duration-1000 ease-out ${
              fadeInElements.execute ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} style={{ fontFamily: "Raleway, sans-serif" }}>
              EXECUTE.
            </h3>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className={`max-w-4xl mx-auto space-y-4 md:space-y-6 text-center px-4 transition-all duration-1000 ease-out ${
          fadeInElements.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
            <span className="text-gray-300">We see what others miss</span>
            <span className="font-bold text-white"> - and we create what others can't imagine.</span>
          </p>
          
          <p className="text-base md:text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
            <span className="text-gray-300">We create</span>
            <span className="font-bold text-white"> wonders</span>
            <span className="text-gray-300"> - using insight, instinct, and imagination.</span>
          </p>
          
          <p className="text-base md:text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
            <span className="text-gray-300">We connect people, ideas, emotions, and experiences</span>
            <span className="font-bold text-white"> - one dot at a time.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurDNA; 