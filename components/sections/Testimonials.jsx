import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'CEO, TechNova Solutions',
    content: 'TheCodeCreater transformed our digital presence completely. Their innovative approach and attention to detail helped us increase our online engagement by 200%.',
    image: '/images/testimonial4.png',
    rating: 5,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Founder, DigitalEdge',
    content: 'Working with TheCodeCreater was a game-changer for our startup. They delivered our e-commerce platform ahead of schedule and under budget.',
    image: '/images/testimonial1.png',
    rating: 5,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Marketing Head, StyleHub',
    content: 'The team at TheCodeCreater understood our vision perfectly. Their creative solutions helped us achieve a 150% increase in online sales within just three months.',
    image: '/images/testimonial2.jpg',
    rating: 5,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 4,
    name: 'Vikram Malhotra',
    role: 'Director, FinTech Plus',
    content: 'Exceptional service and technical expertise. TheCodeCreater built our mobile banking app with top-notch security features and a seamless user experience.',
    image: '/images/testimonial3.jpg',
    rating: 5,
    color: 'from-green-500 to-emerald-500'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const threshold = 50;
    const diff = touchStart - touchEnd;
    
    if (diff > threshold) {
      nextTestimonial();
    } else if (diff < -threshold) {
      prevTestimonial();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${testimonials[currentIndex].color}/10 p-1 rounded-2xl`}>
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 md:p-10">
                    <FaQuoteLeft className="text-4xl opacity-20 mb-6 text-white" />
                    
                    <blockquote className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 mr-4">
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                          <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-500' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div 
          className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="h-10 w-24 md:h-12 md:w-32 bg-gray-800 rounded-lg flex items-center justify-center p-2">
                <span className="text-gray-500 text-xs md:text-sm font-medium">Client {item}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
