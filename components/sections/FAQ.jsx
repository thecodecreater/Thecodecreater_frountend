import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FAQ = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We specialize in custom web development, mobile apps, UI/UX design, and digital marketing. Our comprehensive solutions are tailored to help your business grow online with a strong digital presence.'
    },
    {
      question: 'How much does a website cost?',
      answer: 'The cost of a website depends on your goals, features, and complexity. A simple portfolio site and a full-scale e-commerce platform have very different requirements. Thats why we dont believe in one-size-fits-all pricing. Once we understand your business needs, we’ll provide you with a tailored, transparent quote that fits your budget. You can also request a free consultation to get clarity on the best option for you.'
    },
    {
      question: 'How long does development take?',
      answer: 'The timeline depends on the scope and complexity of your project. Simple websites can be ready quickly, while larger, custom solutions take more time. After understanding your requirements, we’ll provide a clear schedule tailored to your needs.'
    },
    {
      question: 'Do you offer website maintenance?',
      answer: 'Yes, we provide comprehensive maintenance plans including updates, security patches, and performance optimization to keep your website running smoothly.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like React, Next.js, Node.js, and Python/Django to build fast, secure, and scalable web applications.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Just contact us for a free consultation. We\'ll discuss your project and provide a customized plan to bring your ideas to life.'
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index, event) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading FAQs...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/5 to-amber-500/5"
            style={{
              width: Math.random() * 400 + 200 + 'px',
              height: Math.random() * 400 + 200 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(60px)',
              opacity: 0.15
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Need Help?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <button
                  onClick={(e) => toggleFAQ(index, e)}
                  className="flex justify-between items-center w-full p-6 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {openIndex === index ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-2xl border border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                  <FaQuestionCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
                <p className="text-gray-300">
                  Can't find what you're looking for? Our team is here to help you 24/7.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:9462185555"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>Call Us Now</span>
                </a>
                <a 
                  href="mailto:info@yourdomain.com"
                  className="flex items-center justify-center gap-2 border border-gray-600 hover:border-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
