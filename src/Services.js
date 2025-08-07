import React, { useState, useEffect, useRef } from 'react';

function Services() {
  const [fadeInElements, setFadeInElements] = useState({
    header: false,
    services: Array(6).fill(false)
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger header animation first
            setTimeout(() => setFadeInElements(prev => ({ ...prev, header: true })), 200);
            
            // Trigger service cards animations with staggered delays
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index === 0 ? true : false)
            })), 400);
            
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index <= 1 ? true : false)
            })), 600);
            
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index <= 2 ? true : false)
            })), 800);
            
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index <= 3 ? true : false)
            })), 1000);
            
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index <= 4 ? true : false)
            })), 1200);
            
            setTimeout(() => setFadeInElements(prev => ({ 
              ...prev, 
              services: prev.services.map((_, index) => index <= 5 ? true : false)
            })), 1400);
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
const services = [
  {
      icon: "/images/logo/icon/DESIGN.svg",
      title: "CREATIVE STRATEGY",
      description: "At 73 Dotts, we blend creativity with strategy to craft purposeful brand experiences. Our insight-driven creative strategies are built to resonate with your audience, spark engagement, and deliver measurable results. From ideation to execution, we turn ideas into impactful brand stories.",
    },
    {
      icon: "/images/logo/icon/Brand-Developement.svg",
      title: "BRAND DEVELOPMENT",
      description: "We go beyond just logos and visuals. At 73 Dotts, our brand development services focus on building strong brand identities through strategic storytelling, consistent messaging, and standout design. Whether launching a new brand or revamping an existing one, we ensure your brand connects, stands out, and endures.",
    },
    {
      icon: "/images/logo/icon/MICE.svg",
      title: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
      description: "We specialize in crafting seamless, memorable MICE experiences — from corporate events and incentive tours to international conferences and exhibitions. Our end-to-end execution ensures that every event is purpose-driven, engaging, and impactful.",
    },
    {
      icon: "/images/logo/icon/Exhibition.svg",
      title: "EXHIBITIONS",
      description: "Our exhibition design and fabrication services are built to attract, engage, and deliver results. At 73 Dotts, we create stalls and spaces that combine creative concepts with strategic messaging to ensure your brand gets the attention it deserves — and wins awards while doing so.",
    },
    {
      icon: "/images/logo/icon/Audio-Visual.svg",
      title: "AUDIO VISUAL SOLUTIONS",
      description: "We specialize in visual storytelling that leaves a lasting impression. From corporate films and event AV setups to immersive digital presentations, we combine creativity with cutting-edge tech to craft captivating audio-visual experiences.",
    },
    {
      icon: "/images/logo/icon/DIGITAL.svg",
      title: "DIGITAL MARKETING & DESIGN",
      description: "Your digital presence deserves more than likes — it deserves loyalty. Our digital marketing solutions cover everything from website design, social media management, to content creation and performance marketing. At 73 Dotts, we help you connect the digital dotts to grow your brand online.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative"
        style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/IMG_9954.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Simple overlay div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Simple Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          fadeInElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
            Our Services
          </h2>
          <div className={`w-24 h-1 bg-orange-500 mx-auto mb-6 transition-all duration-1000 ease-out delay-200 ${
            fadeInElements.header ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto" style={{ fontFamily: "Raleway, sans-serif" }}>
            Where dots become dimensions
          </p>
        </div>

        {/* Simple Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`text-center relative transition-all duration-1000 ease-out ${
                fadeInElements.services[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={process.env.PUBLIC_URL + service.icon} 
                    alt={service.title}
                    className="w-12 h-12 md:w-14 md:h-14"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-200 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {service.description}
                </p>
              </div>

              {/* Divider Line */}
              {index < services.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-0.5 h-32 bg-white/80"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 