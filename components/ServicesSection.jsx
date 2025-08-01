import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { useState, useEffect } from 'react';

import StarfieldBg from './StarfieldBg';

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load services');
        setLoading(false);
      });
  }, []);

  return (
    <section id="services" className="py-20 px-4 vignette relative overflow-hidden">
      
      {/* Remove old gold/green overlays */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2"
      >
        Our <span className="text-accent-blue">Services</span>
      </motion.h2>
      <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-12 shadow-lg"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
        {loading ? (
          <div className="col-span-full text-center text-accent-blue/60 text-lg">Loading...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-400 text-lg">{error}</div>
        ) : services.length === 0 ? (
          <div className="col-span-full text-center text-accent-blue/60 text-lg">No services found.</div>
        ) : (
          services.map((srv, i) => {
            const IconComp = FaIcons[srv.icon] || FaIcons['FaCode'];
            return (
              <motion.div
                key={srv._id || srv.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, type: 'spring' }}
                className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center hover:scale-110 hover:shadow-[0_0_32px_8px_#00FFFF88] transition-all duration-300 cursor-pointer group overflow-hidden min-w-0 w-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 rounded-full bg-accent-blue/20 border-2 sm:border-4 border-accent-blue flex items-center justify-center">
                  {srv.image ? (
                    <img src={srv.image} alt={srv.title} className="w-10 h-10 object-contain rounded-full bg-primary/10" />
                  ) : (
                    <IconComp className="text-3xl text-accent-blue drop-shadow" />
                  )}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white mb-1 sm:mb-2 neon-glow heading-glow break-words">{srv.title}</h3>
                <p className="subtext-premium text-center mb-4">{srv.description}</p>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
}
