import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function About() {
  const [counts, setCounts] = useState({
    events: 0,
    clients: 0,
    years: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [fadeInElements, setFadeInElements] = useState({
    title: false,
    subtitle: false,
    content: false,
    stats: false
  });
  const sectionRef = useRef(null);

  const targetCounts = useMemo(() => ({
    events: 500,
    clients: 50,
    years: 10
  }), []);

  const animateCounters = useCallback(() => {
    const duration = 3500; // 3.5 seconds
    const steps = 120;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      const easeOutCubic = 1 - Math.pow(1 - progress, 3); // Smoother easing function

      setCounts({
        events: Math.floor(targetCounts.events * easeOutCubic),
        clients: Math.floor(targetCounts.clients * easeOutCubic),
        years: Math.floor(targetCounts.years * easeOutCubic)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);
  }, [targetCounts]);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
            
            // Trigger fade-in animations with delays
            setTimeout(() => setFadeInElements(prev => ({ ...prev, title: true })), 200);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, subtitle: true })), 400);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, content: true })), 600);
            setTimeout(() => setFadeInElements(prev => ({ ...prev, stats: true })), 800);
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
  }, [hasAnimated, animateCounters]);

  // Parallax effect for background image
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate parallax offset based on section position
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + rect.height);
        const offset = scrollProgress * 100;
        
        setParallaxOffset(Math.max(0, Math.min(100, offset)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-12 md:py-20 px-4 md:px-6 relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/abstract-blurred-photo-conference-hall-seminar-room-with-speakers-stage.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: `center center ${parallaxOffset}%`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-screen py-8 md:py-0">
          {/* Left Column - Heading */}
          <div>
            <h2 
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 md:mb-8 transition-all duration-1000 ease-out ${
                fadeInElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} 
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
            About Us
          </h2>
            <div className={`w-16 md:w-24 h-1 bg-accent mb-6 md:mb-8 transition-all duration-1000 ease-out delay-200 ${
              fadeInElements.title ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
            <h3 
              className={`text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 md:mb-6 transition-all duration-1000 ease-out ${
                fadeInElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} 
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Welcome to 73 Dotts<br className="hidden md:block"></br>Where Wonders Come to Life
            </h3>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ease-out ${
            fadeInElements.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              At 73 Dotts, connection is our craft. We're storytellers, creators of immersive experiences, and curators of wonder — bringing your vision to life through the power of creative collaboration.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>Our Strength</h4>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  We're where creativity meets precision. Every idea, concept, and experience is thoughtfully designed to be visually stunning and deeply meaningful — because the extraordinary lies in the details.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>Our Philosophy</h4>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Every project is an opportunity to exceed expectations and spark a "wow" moment. Let's join the dotts together and break the mold.
            </p>
              </div>
            </div>

            {/* Statistics */}
            <div className={`grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 transition-all duration-1000 ease-out ${
              fadeInElements.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>{counts.events}+</div>
                <div className="text-xs md:text-sm text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>{counts.clients}+</div>
                <div className="text-xs md:text-sm text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>{counts.years}+</div>
                <div className="text-xs md:text-sm text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 