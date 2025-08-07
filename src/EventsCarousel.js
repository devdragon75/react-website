import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const eventImages = [
  '/images/SLIDER/_DSC8913.webp',
  '/images/SLIDER/DSC05824.webp',
  '/images/SLIDER/GDSL0236.webp',
  '/images/SLIDER/GDSL9644.webp',
  '/images/SLIDER/IEW-1.webp',
  '/images/SLIDER/IEW-2.webp',
  '/images/SLIDER/IEW-3.webp',
  '/images/SLIDER/IMG_0534.webp',
  '/images/SLIDER/IMG_0565.webp',
  '/images/SLIDER/IMG_7984.webp',
  '/images/SLIDER/IMG_8139.webp',
  '/images/SLIDER/IMG_8924.webp',
  '/images/SLIDER/IMG_9045 2.webp'
];

function EventsCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="pt-6 md:pt-10 pb-12 md:pb-20 bg-gray-50 relative">
        <div className="relative z-10">
          {/* Section Header */}
          

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="events-carousel max-w-8xl mx-auto"
          >
            {eventImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[800px] cursor-pointer bg-black flex items-center justify-center"
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={process.env.PUBLIC_URL + image} 
                    alt={`Event ${index + 1}`} 
                    className="w-full h-full transition-all duration-700 ease-out hover:scale-105"
                    style={{
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-3">Event {index + 1}</h3>
                    <p className="text-base opacity-90">Capturing moments that last forever</p>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Navigation Buttons */}
            <div className="swiper-button-prev !text-white !bg-transparent !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 hover:!text-accent transition-colors duration-200"></div>
            <div className="swiper-button-next !text-white !bg-transparent !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 hover:!text-accent transition-colors duration-200"></div>
            
            {/* Pagination */}
            <div className="swiper-pagination !bottom-6"></div>
          </Swiper>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <img 
              src={process.env.PUBLIC_URL + selectedImage} 
              alt="Full size event" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              loading="eager"
            />
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L6 6M6 6l12 12" />
              </svg>
            </button>
            {/* Download button */}
            <a 
              href={process.env.PUBLIC_URL + selectedImage} 
              download
              className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default EventsCarousel; 