import React from 'react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 md:py-12 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Terms of Service
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the 73 Dotts website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of our website and services. Please read them carefully before using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              73 Dotts provides event management, brand development, digital marketing, and exhibition design services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Event planning and management</li>
              <li>Brand strategy and development</li>
              <li>Digital marketing campaigns</li>
              <li>Exhibition and trade show design</li>
              <li>Creative design services</li>
              <li>Consultation and advisory services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account information</li>
              <li>Use our services for lawful purposes only</li>
              <li>Respect intellectual property rights</li>
              <li>Not interfere with the proper functioning of our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms for our services are as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Payment schedules will be agreed upon before project commencement</li>
              <li>All prices are subject to change with prior notice</li>
              <li>Late payments may result in service suspension</li>
              <li>Refunds are handled on a case-by-case basis</li>
              <li>All payments are non-refundable unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of 73 Dotts and is protected by copyright laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For projects completed for clients:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Final deliverables become client property upon full payment</li>
              <li>73 Dotts retains the right to showcase work in portfolios</li>
              <li>Source files and working materials remain 73 Dotts property</li>
              <li>Usage rights are specified in individual project agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              73 Dotts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party, whether in an action in contract or tort, even if the other party has been advised of the possibility of such damages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability to you for any claims arising from the use of our services shall not exceed the amount paid by you for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property rights</li>
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy of information provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may simply discontinue using the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>73 Dotts</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Email: legal@73dotts.com
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

export default TermsOfService; 