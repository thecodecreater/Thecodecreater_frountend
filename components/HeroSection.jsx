import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroMockup from './HeroMockup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched headerData:', data);
        setHeaderData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Header fetch error:', err);
        setError('Failed to load hero content');
        setLoading(false);
      });
  }, []);

  console.log('RENDER HeroSection', {headerData, loading, error});
  return (
    <section id="hero"
      className="relative z-0 flex flex-col items-center justify-center min-h-screen h-screen pt-[72px] md:pt-[64px] pb-0 overflow-hidden bg-premium-gradient vignette px-4">
      {/* Background image slider */}
      {/* Slider background (z-0), overlay (z-10), content (z-20) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#10182a]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="w-full h-full hero-bg-swiper"
        >
          {["/poster.jpg", "/poster2.jpg", "/poster3.jpg"].map((src, idx) => (
            <SwiperSlide key={src}>
              <div className="relative w-full h-full">
                <img src={src} alt={`Hero Background ${idx+1}`} className="object-cover w-full h-full opacity-80 scale-110" style={{position:'absolute',inset:0,objectPosition:'center'}} draggable={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {loading ? (
        <>
          <div className="h-12 w-80 bg-primary-dark/50 rounded animate-pulse mb-6"></div>
          <div className="h-6 w-96 bg-primary-dark/40 rounded animate-pulse mb-8"></div>
          <div className="flex gap-6">
            <div className="h-12 w-36 bg-primary-dark/30 rounded animate-pulse"></div>
            <div className="h-12 w-36 bg-primary-dark/30 rounded animate-pulse"></div>
          </div>
        </>
      ) : error ? (
        <div className="text-red-400 text-2xl font-bold mb-2">{error}</div>
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={false}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-center"
              style={{opacity:1,visibility:'visible',zIndex:30}}
            >
              {headerData?.heading || 'Elevate Your Digital Presence'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={false}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto subtext-premium mb-8"
              style={{opacity:1,visibility:'visible',zIndex:30}}
            >
              {headerData?.paragraph || 'We craft stunning, high-converting digital experiences for agencies, startups, and businesses. Let’s build something extraordinary together.'}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.7, type: 'spring' }}
              className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center mx-auto z-40 relative w-full max-w-xs md:max-w-none"
            >
              <a
                href="/get-started"
                className="w-full md:w-auto px-6 md:px-10 py-2 md:py-3 text-base md:text-xl font-extrabold bg-white text-black border-2 border-accent-blue rounded-2xl shadow-[0_0_8px_2px_#00FFFF44] hover:bg-accent-blue hover:text-white hover:shadow-[0_0_16px_4px_#00FFFF88] hover:scale-105 transition-all duration-300 z-40"
              >
                {headerData?.buttonText || 'Get Started'}
              </a>
              {headerData?.button2Text ? (
                <a
                  href="/#portfolio"
                  className="w-full md:w-auto px-6 md:px-10 py-2 md:py-3 text-base md:text-xl font-extrabold bg-white text-black border-2 border-accent-blue rounded-2xl shadow-[0_0_8px_2px_#00FFFF44] hover:bg-accent-blue hover:text-white hover:shadow-[0_0_16px_4px_#00FFFF88] hover:scale-105 transition-all duration-300 z-40"
                >
                  {headerData.button2Text}
                </a>
              ) : (
                <a
                  href="#portfolio"
                  className="w-full md:w-auto px-6 md:px-10 py-2 md:py-3 text-base md:text-xl font-extrabold bg-white text-black border-2 border-accent-blue rounded-2xl shadow-[0_0_8px_2px_#00FFFF44] hover:bg-accent-blue hover:text-white hover:shadow-[0_0_16px_4px_#00FFFF88] hover:scale-105 transition-all duration-300 z-40"
                >
                  View Portfolio
                </a>
              )}
            </motion.div>
          </div>

        </div>
      )}
      {/* Overlay for text readability, always as last child and never above text */}
      <div className="absolute inset-0 w-full h-full bg-black/60 pointer-events-none"></div>
    </section>
  );
}
