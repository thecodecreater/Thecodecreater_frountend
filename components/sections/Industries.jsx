import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHospital, FaCreditCard, FaShoppingCart, FaGraduationCap, FaHome, FaTruck, FaHotel, FaRocket } from 'react-icons/fa';

const industries = [
  {
    id: 1,
    name: 'Healthcare',
    description: 'Innovative digital solutions for healthcare providers and medical institutions.',
    icon: <FaHospital className="text-3xl" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Finance',
    description: 'Secure and compliant fintech solutions for the financial sector.',
    icon: <FaCreditCard className="text-3xl" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'E-commerce',
    description: 'Custom e-commerce platforms that drive sales and enhance user experience.',
    icon: <FaShoppingCart className="text-3xl" />,
    color: 'from-purple-500 to-fuchsia-500'
  },
  {
    id: 4,
    name: 'Education',
    description: 'E-learning platforms and educational technology solutions.',
    icon: <FaGraduationCap className="text-3xl" />,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 5,
    name: 'Real Estate',
    description: 'Property management and real estate listing platforms.',
    icon: <FaHome className="text-3xl" />,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 6,
    name: 'Logistics',
    description: 'Supply chain and logistics management solutions.',
    icon: <FaTruck className="text-3xl" />,
    color: 'from-indigo-500 to-violet-500'
  }
];

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const totalItems = industries.length;

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) { // Mobile
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setItemsPerView(2);
      } else { // Desktop
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Get visible industries for the current view
  const getVisibleIndustries = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % industries.length;
      visible.push(industries[index]);
    }
    return visible;
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % (industries.length - itemsPerView + 1);
      setCurrentIndex(nextIndex >= 0 ? nextIndex : 0);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleIndustries = getVisibleIndustries();

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We have experience working with businesses across various industries, delivering tailored solutions to meet their unique needs.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="w-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleIndustries.map((industry, index) => (
                      <motion.div
                        key={`${industry.id}-${index}`}
                        className="group relative overflow-hidden bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-transparent hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4`}>
                            {industry.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                            {industry.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {industry.description}
                          </p>
                          <button className="inline-flex items-center text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">
                            Learn more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, industries.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 w-6 sm:w-8' 
                    : 'bg-gray-600 w-4 sm:w-5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
