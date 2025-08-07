import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using a simple email service (Formspree as an example)
      const response = await fetch('https://formspree.io/f/xvgqajaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-12 md:py-20 relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/IMG_7985.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 md:mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
            Get in Touch
          </h2>
          <div className="w-16 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
          
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Enter subject"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-white font-semibold mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project or inquiry..."
                style={{ fontFamily: "Raleway, sans-serif" }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-accent hover:bg-primary hover:shadow-xl hover:scale-105'
                } text-white`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 text-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 text-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        
        

          

          
        
      </div>
    </section>
  );
}

export default Contact; 