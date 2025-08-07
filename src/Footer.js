import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/dots.webp)`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-white rounded-lg p-3 inline-block">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/logo/logo.webp`} 
                  alt="73 Dotts Logo" 
                  className="h-12 md:h-16"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              Where wonders come to life. We connect people, ideas, emotions, and experiences - one dot at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/73-dotts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/73dotts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-accent transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Event Management
                </span>
              </li>
              <li>
                <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Brand Development
                </span>
              </li>
              <li>
                <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Exhibition Design
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 md:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>Phone</p>
                <p className="text-white" style={{ fontFamily: "Raleway, sans-serif" }}>+91 120-4941-031 | +91 9891480008</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>Email</p>
                <p className="text-white" style={{ fontFamily: "Raleway, sans-serif" }}>info@73dotts.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                <svg className="w-10 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 25 25">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>Location</p>
                <p className="text-white" style={{ fontFamily: "Raleway, sans-serif" }}>Suite 104, First Floor, BSI Business Park C51
                C Block, Phase 2, Industrial Area, Sector 62, Noida, (UP) 201309</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: "Raleway, sans-serif" }}>
              © {currentYear} 73 Dotts. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/PrivacyPolicy" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 