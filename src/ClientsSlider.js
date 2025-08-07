import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

  const clientLogos = [
    '/images/logo/clients/AVIZVA.webp',
    '/images/logo/clients/KBR.webp',
    '/images/logo/clients/KN.webp',
    '/images/logo/clients/KRBL.webp',
    '/images/logo/clients/Maruti.webp',
    '/images/logo/clients/NIPPON.webp',
    '/images/logo/clients/PAN.webp',
    '/images/logo/clients/Paras.webp',
    '/images/logo/clients/PTC.webp',
    '/images/logo/clients/Ramboll.webp',
    '/images/logo/clients/Sujata.webp',
    '/images/logo/clients/Untitled-4.webp',
    '/images/logo/clients/UPidea.webp',
    '/images/logo/clients/VELVO.webp',
    '/images/logo/clients/JKCement New Logo F (Color).png (2).webp'
  ];

function ClientsSlider() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: 'rgb(2, 46, 66)' }}>
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 md:mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
            Our Clients
          </h2>
          <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto" style={{ fontFamily: "Raleway, sans-serif" }}>
            Trusted by leading brands across industries
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000}
            loop={true}
            className="clients-swiper"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-32 md:h-40 w-64 md:w-80 bg-white rounded-lg p-4">
                  <img
                    src={process.env.PUBLIC_URL + logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxHeight: '120px', maxWidth: '280px' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
}

export default ClientsSlider; 