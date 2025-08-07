import React, { useState, useEffect } from 'react';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setCookiePreferences(preferences);
  };

  const acceptNecessary = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setCookiePreferences(preferences);
  };

  const savePreferences = () => {
    const preferences = {
      ...cookiePreferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showConsent && !showSettings) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999] p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  We use cookies to enhance your experience
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  We use cookies to analyze site traffic, personalize content, and provide social media features. 
                  By clicking "Accept All", you consent to our use of cookies. 
                  <a href="/cookie-policy" className="text-orange-500 hover:text-orange-600 underline ml-1">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Cookie Settings
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Necessary Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200 rounded"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[10000] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Cookie Settings
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Necessary Cookies
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Essential for the website to function properly
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.necessary}
                        disabled
                        className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
                    These cookies are essential for the website to function and cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Analytics Cookies
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Help us understand how visitors interact with our website
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
                    These cookies help us analyze website traffic and improve our services.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Marketing Cookies
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Used to deliver personalized advertisements
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Functional Cookies
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        Enable enhanced functionality and personalization
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
                    These cookies allow the website to remember choices you make and provide enhanced features.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={savePreferences}
                  className="flex-1 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200 rounded"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent; 