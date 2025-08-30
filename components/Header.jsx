import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const servicesRef = useRef(null);
  const dropdownRef = useRef(null);

  // Services data
  const services = [
    { id: 'web-development', name: 'Web Development', href: '/services/web-development' },
    { id: 'mobile-apps', name: 'Mobile App Development', href: '/services/mobile-apps' },
    { id: 'seo', name: 'SEO & Digital Marketing', href: '/services/seo' },
    { id: 'digital-marketing', name: 'Digital Marketing', href: '/services/digital-marketing' },
    { id: 'ecommerce', name: 'E-commerce Solutions', href: '/services/ecommerce' },
    { id: 'ui-ux', name: 'UI/UX Design', href: '/services/ui-ux' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${sectionId}`);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'About', href: '/about', isPage: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '/contact', isPage: true },
  ];

  return (
    <>
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full relative group">
              <div className="relative flex items-center">
                <div style={{ transform: 'scaleY(1.1)', transformOrigin: 'left center', marginLeft: '10px' }}>
                  <img src="/images/logo.png" alt="TheCodeCreater Logo" className="h-16 w-auto object-contain" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">CodeCreater</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {navLinks.slice(0, 1).map(link => link.isPage ? (
                <Link key={link.name} href={link.href} className="px-4 py-2.5 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200 hover:bg-white/10">{link.name}</Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href.substring(1))} className="px-4 py-2.5 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200 hover:bg-white/10">{link.name}</a>
              ))}

              {/* Services Dropdown */}
              <div className="relative group" ref={servicesRef} onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center px-4 py-2.5 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200 hover:bg-white/10 group-hover:text-orange-300 group-hover:bg-white/10">
                  Services
                  <FiChevronDown className={`ml-1 w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 10, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.95 }} transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }} ref={dropdownRef} className="absolute left-0 w-72 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50">
                      <div className="py-2">
                        {services.map((service, index) => (
                          <motion.div key={service.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 }}>
                            <Link href={service.href} className="group flex items-center px-6 py-3.5 text-gray-200 hover:bg-gray-700/50 hover:text-white transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-orange-400" onClick={() => setIsServicesOpen(false)}>
                              <span className="mr-3 text-orange-400 group-hover:translate-x-1 transition-transform duration-200"><FiArrowRight /></span>
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <div className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-t border-gray-700">
                        <Link href="/services" className="text-sm font-semibold text-orange-400 hover:text-white flex items-center justify-between" onClick={() => setIsServicesOpen(false)}>
                          View all services
                          <FiArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Navigation Links */}
              {navLinks.slice(1).map(link => link.isPage ? (
                <Link key={link.name} href={link.href} className="px-4 py-2.5 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200 hover:bg-white/10">{link.name}</Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href.substring(1))} className="px-4 py-2.5 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200 hover:bg-white/10">{link.name}</a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:text-orange-300 focus:outline-none" aria-label="Toggle menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }} className="fixed top-0 left-0 h-full w-72 bg-gray-900 shadow-2xl z-50 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <img src="/images/logo.png" alt="TheCodeCreater Logo" className="h-10 w-auto" />
                  </Link>
                  <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-orange-300 p-2" aria-label="Close menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-2 mt-8">
                  {navLinks.slice(0, 1).map(link => link.isPage ? (
                    <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-colors duration-200">{link.name}</Link>
                  ) : (
                    <a key={link.name} href={link.href} onClick={(e) => { scrollToSection(e, link.href.substring(1)); setIsMenuOpen(false); }} className="block px-4 py-3 text-lg text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-colors duration-200">{link.name}</a>
                  ))}

                  {/* Mobile Services Dropdown */}
                  <div className="mb-2">
                    <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full flex justify-between items-center px-4 py-3 text-lg text-left text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-colors duration-200">
                      Services
                      {isServicesOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="pl-6 py-2 space-y-1">
                            {services.map(service => (
                              <Link key={service.id} href={service.href} onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-base">{service.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other Navigation Links (FAQ hidden in mobile) */}
                  {navLinks.slice(1).map(link => {
                    if(link.name === 'FAQ') return null;
                    return link.isPage ? (
                      <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-colors duration-200">{link.name}</Link>
                    ) : (
                      <a key={link.name} href={link.href} onClick={(e) => { scrollToSection(e, link.href.substring(1)); setIsMenuOpen(false); }} className="block px-4 py-3 text-lg text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-colors duration-200">{link.name}</a>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
