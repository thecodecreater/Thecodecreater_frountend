import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`)
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(() => setTestimonials([]));
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActive(a => (a + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  return (
    <section id="testimonials" className="py-20 px-4  vignette">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2"
      >
        What <span className="text-accent-blue">Clients Say</span>
      </motion.h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-12"></div>
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {testimonials.length > 0 && (
            <motion.div
              key={testimonials[active]._id || active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-10 flex flex-col items-center text-center min-w-[320px] relative"
            >
              {/* Quote Icon */}
              <svg width="32" height="32" fill="none" className="absolute left-4 top-4 opacity-30" xmlns="http://www.w3.org/2000/svg"><path d="M12 17c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5-5-2.239-5-5z" fill="#00FFFF"/></svg>

              <div className="mb-4 rounded-full overflow-hidden border-4 md:border-8 border-accent-blue shadow-[0_0_32px_8px_#00FFFF99] bg-black/40" style={{width:104,height:104}}>
                <Image
                  src={
                    testimonials[active]?.avatar
                      ? testimonials[active].avatar.startsWith('http')
                        ? testimonials[active].avatar
                        : testimonials[active].avatar.startsWith('/')
                        ? testimonials[active].avatar
                        : '/' + testimonials[active].avatar.replace(/^\\|^\//, '').replace(/\\/g, '/')
                      : '/avatar-default.png'
                  }
                  alt={testimonials[active].name}
                  width={104}
                  height={104}
                  className="rounded-full object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Star Rating */}
              <div className="flex gap-1 mb-2">
                {[...Array(testimonials[active].rating || 5)].map((_, idx) => (
                  <svg key={idx} width="20" height="20" fill="#00FFFF" viewBox="0 0 20 20"><polygon points="10,1 12.59,6.87 19,7.64 14,12.26 15.18,18.02 10,15 4.82,18.02 6,12.26 1,7.64 7.41,6.87"/></svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold heading-glow mb-2 group-hover:text-accent-blue transition-colors">
                {testimonials[active].name}
              </h3>
              <p className="subtext-premium text-base mb-4">
                {testimonials[active].content}
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(testimonials[active].rating || 5)].map((_, i) => (
                  <span key={i} className="text-accent-blue text-xl">★</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === active ? 'bg-accent-blue' : 'bg-gray-400/40'}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
