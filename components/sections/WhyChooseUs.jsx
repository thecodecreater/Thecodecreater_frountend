import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Seasoned professionals delivering excellence in every project.',
    icon: '👨‍💻'
  },
  {
    id: 2,
    title: 'Client-First',
    description: 'Your vision, our mission - working together for success.',
    icon: '🤝'
  },
  {
    id: 3,
    title: 'Quality Code',
    description: 'Clean, efficient, and maintainable solutions.',
    icon: '✨'
  },
  {
    id: 4,
    title: 'On Time',
    description: 'We respect deadlines and deliver as promised.',
    icon: '⏱️'
  },
  {
    id: 5,
    title: 'Transparent',
    description: 'Clear communication at every step.',
    icon: '🔍'
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'Always here when you need us.',
    icon: '🔧'
  }
];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Default for mobile
  const totalItems = features.length;

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

    // Set initial value
    updateItemsPerView();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateItemsPerView);
    
    // Clean up
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Calculate visible features based on screen size
  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % features.length;
      visible.push({
        ...features[index],
        id: `feature-${index}`,
        position: i
      });
    }
    return visible;
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % (features.length - itemsPerView + 1);
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, features.length, itemsPerView]);
  
  const visibleFeatures = getVisibleFeatures();

  return (
    <section id="about" className="relative pt-0 pb-12 bg-gray-900 -mt-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Right Choice For Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Business Growth</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
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
                    {visibleFeatures.map((feature, index) => (
                      <div key={`${feature.id}-${index}`} className="group relative overflow-hidden bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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

export default WhyChooseUs;
