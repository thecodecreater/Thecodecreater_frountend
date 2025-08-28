import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    // Smooth scroll to section when hash changes
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    router.events.on('hashChangeComplete', handleHashChange);
    return () => {
      router.events.off('hashChangeComplete', handleHashChange);
    };
  }, [router.events]);
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        }}></div>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              background: i % 3 === 0 ? 'rgba(234, 88, 12, 0.1)' : i % 3 === 1 ? 'rgba(249, 115, 22, 0.1)' : 'rgba(253, 186, 116, 0.1)',
              width: `${Math.random() * 600 + 200}px`,
              height: `${Math.random() * 600 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              animation: `float ${30 + Math.random() * 40}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Elevate Your Brand with <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Digital Excellence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We craft stunning digital experiences that drive growth and leave lasting impressions. Let's build something amazing together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            <Link 
              href="/start-project" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 flex items-center"
            >
              <span className="relative z-10 flex items-center text-lg">
                Start Your Project
                <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <Link 
              href="#portfolio" 
              className="group relative overflow-hidden border-2 border-white/10 text-white hover:text-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:border-white/20 backdrop-blur-sm flex items-center hover:bg-white/5"
            >
              <span className="relative z-10 flex items-center text-lg">
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Our Work
              </span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto mb-12"
          >
            <div className="w-full bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div 
                        key={item} 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 shadow-lg transform transition-transform hover:scale-110"
                        style={{
                          backgroundImage: `url(https://i.pravatar.cc/150?img=${30 + item})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">Trusted by 500+ Businesses</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-300">5.0 (1k+ Reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <div className="flex -space-x-1">
                    {['🇺🇸', '🇬🇧', '🇦🇪', '🇮🇳'].map((flag, i) => (
                      <span key={i} className="text-lg transform hover:scale-110 transition-transform">{flag}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-300 font-medium ml-2">15+ Countries</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
