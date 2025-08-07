import React from 'react';

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 md:py-12 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Cookie Policy
          </h1>
          <div className="w-16 md:w-24 h-1 bg-orange-500 mb-4"></div>
          <p className="text-lg text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="prose prose-lg max-w-none" style={{ fontFamily: "Raleway, sans-serif" }}>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies can be "session" cookies (which are deleted when you close your browser) or "persistent" cookies (which remain on your device for a set period of time).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used for advertising and marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Necessary Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are essential for the website to function and cannot be disabled. They include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Session management cookies</li>
              <li>Cookie consent preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Google Analytics cookies to track page views and user behavior</li>
              <li>Performance monitoring cookies</li>
              <li>Error tracking cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Functional Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies enable enhanced functionality and personalization. They include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Language preference cookies</li>
              <li>Theme and display preference cookies</li>
              <li>Form data cookies to remember your inputs</li>
              <li>User experience enhancement cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Marketing Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are used to track visitors across websites to display relevant advertisements. They include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Social media cookies for sharing content</li>
              <li>Advertising network cookies</li>
              <li>Retargeting cookies</li>
              <li>Conversion tracking cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some cookies on our website are set by third-party services that we use, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
              <li><strong>Advertising Networks:</strong> For relevant advertising</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
              <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
              <li><strong>Third-Party Opt-outs:</strong> Visit third-party websites to opt out of their cookies</li>
              <li><strong>Device Settings:</strong> Some devices have built-in cookie management</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies on our website have different lifespans:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (usually 30 days to 2 years)</li>
              <li><strong>Essential Cookies:</strong> May persist for longer periods for security purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>73 Dotts</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Email: privacy@73dotts.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Phone: +91 120-4941-031 | +91 9891480008
              </p>
              <p className="text-gray-700 leading-relaxed">
                Address: Suite 104, First Floor, BSI Business Park C51<br />
                C Block, Phase 2, Industrial Area, Sector 62, Noida, (UP) 201309
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default CookiePolicy; 