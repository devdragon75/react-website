import React, { useState } from 'react';
import TypewriterLink from './TypewriterLink';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      className="flex items-center justify-between px-4 md:px-8 py-4 mb-4 fixed top-0 left-0 right-0 w-full z-[1000] box-border bg-white shadow-lg border-b border-gray-200"
      style={{
        opacity: 1,
      }}
    >
      <div className="flex items-center">
        <img src={process.env.PUBLIC_URL + '/images/logo/logo.webp'} alt="Logo" className="h-16 md:h-20 flex-shrink-0" />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: "Raleway, sans-serif" }}>
        <div className="relative group">
          <TypewriterLink text="About" href="#about" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>
        <div className="relative group">
          <TypewriterLink text="Services" href="#services" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>
        <div className="relative group">
          <TypewriterLink text="Gallery" href="#gallery" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>
        <div className="relative group">
          <TypewriterLink text="Contact Us" href="#contact" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          <a href="#about" className="px-6 py-3 text-black hover:bg-gray-100 transition-colors duration-200" onClick={(e) => handleMobileNavClick(e, 'about')}>About</a>
          <a href="#services" className="px-6 py-3 text-black hover:bg-gray-100 transition-colors duration-200" onClick={(e) => handleMobileNavClick(e, 'services')}>Services</a>
          <a href="#gallery" className="px-6 py-3 text-black hover:bg-gray-100 transition-colors duration-200" onClick={(e) => handleMobileNavClick(e, 'gallery')}>Gallery</a>
          <a href="#contact" className="px-6 py-3 text-black hover:bg-gray-100 transition-colors duration-200" onClick={(e) => handleMobileNavClick(e, 'contact')}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 