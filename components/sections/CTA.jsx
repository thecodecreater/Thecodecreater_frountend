import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhoneAlt, FaCheck, FaArrowRight, FaRocket } from 'react-icons/fa';

const CTA = () => {
  const features = [
    { text: 'No hidden fees' },
    { text: 'Free consultation' },
    { text: 'Flexible engagement models' },
    { text: '24/7 support' },
  ];

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden animate-gradient-rotate">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Elevate</span> Your Business?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's turn your vision into reality. Our team is ready to help you build something amazing.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Start Your Project</h3>
                <p className="text-gray-300 mb-8 text-center">
                  Take the first step towards your digital transformation. Let's discuss how we can help you achieve your goals.
                </p>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact"
                    className="group relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <span>Get Free Consultation</span>
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <span>Or call us now</span>
                    <Link 
                      href="tel:9462185555"
                      className="flex items-center text-orange-400 hover:text-white transition-colors"
                    >
                      <FaPhoneAlt className="w-3 h-3 mr-1" />
                      <span>+91 9462185555</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors">
                    <FaCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.text}</h4>
                    <p className="text-sm text-gray-400">
                      {feature.description || 'Professional service with guaranteed satisfaction'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></div>
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></div>
              <span>Flexible Payment Options</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTA;
