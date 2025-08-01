import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa';

export default function Header() {
  const router = useRouter();
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [services, setServices] = useState([]);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header`)
      .then(res => res.json())
      .then(data => {
        setHeaderData(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load header');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] pointer-events-auto glass-card border-b-2 border-accent-blue shadow-neon-blue backdrop-blur rounded-none border-4 border-pink-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1 md:py-2">
        {/* Logo - neon glass style */}
        <div className="flex flex-col justify-center py-2">
          <Link href="/" passHref legacyBehavior>
            <a className="block">
              {loading ? (
                <span className="text-2xl font-extrabold neon-glow heading-glow tracking-tight cursor-pointer transition-transform duration-300 hover:scale-110 font-serif">...</span>
              ) : error ? (
                <span className="text-2xl font-extrabold neon-glow heading-glow tracking-tight cursor-pointer transition-transform duration-300 hover:scale-110 font-serif">Error</span>
              ) : (headerData?.logo && (headerData.logo.startsWith('data:image') || headerData.logo.match(/\.(jpg|jpeg|png|gif|svg)$/i))) && !error ? (
                logoLoaded ? (
                  <img
                    src={headerData.logo}
                    alt="Logo"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-accent-blue object-cover shadow-neon-blue bg-black/60 hover:scale-110 transition-transform duration-300"
                    style={{display:'block'}}
                    onLoad={() => setLogoLoaded(true)}
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <img
                    src={headerData.logo}
                    alt="Logo"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-accent-blue object-cover shadow-neon-blue bg-black/60 hidden"
                    style={{display:'none'}}
                    onLoad={() => setLogoLoaded(true)}
                    onError={() => setLogoLoaded(false)}
                  />
                )
              ) : (
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-accent-blue object-cover shadow-neon-blue bg-black/60 hover:scale-110 transition-transform duration-300"
                  style={{display:'block'}}
                />
              )}
            </a>
          </Link>
        </div>
        {/* Hamburger at far right (mobile only) */}
        <div className="md:hidden flex items-center ml-2">
          <Sidebar />
        </div>
        {/* Desktop Nav at far right */}
        <nav className="hidden md:flex gap-6 subtext-premium font-semibold text-lg items-center">
          {loading ? (
            <span className="text-accent-blue/60">Loading...</span>
          ) : error ? (
            <span className="text-red-400">Error loading menu</span>
          ) : (
            <>
              {(() => {
                const fallbackMenuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'Portfolio', link: '/portfolio' },
  { label: 'Blog', link: '/blog' },
  { label: 'Contact', link: '/contact' },
  { label: 'Get Started', link: '/get-started' },
];
const menuItems = headerData?.menuItems && !error && headerData.menuItems.length > 0 ? headerData.menuItems : fallbackMenuItems;
                const hasAbout = menuItems.some(item => item.label === 'About');
                const homeIndex = menuItems.findIndex(item => item.label === 'Home');
                
                // Create navigation items array
                const navItems = [];
                
                menuItems.forEach((item, idx) => {
                  // Add Home first
                  if (item.label === 'Home') {
                    navItems.push(
                      <Link key={`home-${idx}`} href={item.link || '#'} className="relative group hover:text-accent-blue transition-colors duration-300">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-blue rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    );
                    
                    // Add About right after Home if it doesn't exist in menuItems
                    if (!hasAbout) {
                      navItems.push(
                        <Link key="about-after-home" href="/about" className="relative group hover:text-accent-blue transition-colors duration-300">
                          About
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-blue rounded-full transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      );
                    }
                  }
                  // Add Services with dropdown
                  else if (item.label === 'Services') {
                    navItems.push(
                      <div key={`services-${idx}`} className="relative group" ref={dropdownRef}>
                        <button
                          className="relative group hover:text-accent-blue transition-colors duration-300 flex items-center gap-1"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setTimeout(() => setServicesOpen(false), 200)}
                          onClick={e => { e.preventDefault(); setServicesOpen(v => !v); }}
                          aria-haspopup="true"
                          aria-expanded={servicesOpen}
                        >
                          {item.label}
                          <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className={`absolute left-0 top-full min-w-[260px] mt-2 glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl py-2 z-50 transition-all duration-300 origin-top scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto ${servicesOpen ? 'scale-100 opacity-100 pointer-events-auto' : ''}`}
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="px-6 py-2 text-xs font-bold text-accent-blue/80 tracking-widest uppercase border-b border-accent-blue/10 mb-1 select-none">Our Services</div>
                          {services.length === 0 ? (
                            <div className="px-6 py-3 text-accent-blue/60 text-base">No services found.</div>
                          ) : (
                            services.map((srv, i) => {
                              const IconComp = srv.icon && FaIcons[srv.icon] ? FaIcons[srv.icon] : FaIcons['FaCode'];
                              return (
                                <Link
                                  key={srv._id || srv.title}
                                  href={`/services/${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center gap-3 px-6 py-3 text-white hover:bg-accent-blue/10 hover:text-accent-blue transition-all text-base font-semibold border-l-4 border-transparent hover:border-accent-blue rounded-xl mb-1 last:mb-0"
                                  style={{letterSpacing:'0.01em'}}
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <span className="text-xl text-accent-blue/80">
                                    {srv.icon && FaIcons[srv.icon] ? <IconComp /> : <FaIcons.FaCode />}
                                  </span>
                                  <span>{srv.title}</span>
                                </Link>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  }
                  // Add other menu items (except About if it's already in menuItems)
                  else if (item.label !== 'About' || !hasAbout) {
                    navItems.push(
                      <Link key={`other-${idx}`} href={item.link || '#'} className="relative group hover:text-accent-blue transition-colors duration-300">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-blue rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    );
                  }
                });
                
                return navItems;
              })()}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
