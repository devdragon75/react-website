import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import OurDNA from './OurDNA';
import Services from './Services';
import ClientsSlider from './ClientsSlider';
import EventsCarousel from './EventsCarousel';
import Contact from './Contact';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import AnimatedInteractiveDiagram from './AnimatedInteractiveDiagram';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import CookiePolicy from './CookiePolicy';
import CookieConsent from './CookieConsent';
import ImageProtection from './ImageProtection';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function HomePage({ heroFixed, isLoading }) {
  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Hero heroFixed={heroFixed} />
        <AnimatedInteractiveDiagram />
      </div>
      
      <div id="about"><About /></div>
      <OurDNA />
      <div id="services"><Services /></div>
      <ClientsSlider />
      <div id="gallery"><EventsCarousel /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

function AppContent({ heroFixed, isLoading }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className={`App min-h-screen bg-white overflow-x-hidden transition-opacity duration-1000 ${isHomePage && isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ImageProtection />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage heroFixed={heroFixed} isLoading={isLoading} />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}

function App() {
  const [heroFixed, setHeroFixed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowLoadingScreen(false);
  };

  useEffect(() => {
    function onScroll() {
      // Lock Hero for first 2 viewport heights on desktop, 1.5 on mobile
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? window.innerHeight * 1.5 : window.innerHeight * 2;
      
      if (window.scrollY < threshold) {
        setHeroFixed(true);
      } else {
        setHeroFixed(false);
      }
    }
    
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Router>
      {showLoadingScreen && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <AppContent heroFixed={heroFixed} isLoading={isLoading} />
    </Router>
  );
}

export default App;
