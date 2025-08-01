import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaServicestack, FaBriefcase, FaBlogger, FaStar, FaEnvelope, FaUserTie, FaChevronDown } from 'react-icons/fa';

const menu = [
  { label: 'Home', icon: <FaHome />, href: '/' },
  { label: 'About', icon: <FaUserTie />, href: '/about' },
  { label: 'Services', icon: <FaServicestack />, href: '#services' },
  { label: 'Portfolio', icon: <FaBriefcase />, href: '#portfolio' },
  { label: 'Blog', icon: <FaBlogger />, href: '#blog' },
  { label: 'Testimonials', icon: <FaStar />, href: '#testimonials' },
  { label: 'Contact', icon: <FaEnvelope />, href: '/contact' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));
  }, []);

  return (
    <>
      {/* Toggle Button (mobile only) */}
      {!open ? (
        <button
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white text-primary shadow-lg border-2 border-gold md:hidden hover:scale-110 transition-all"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <FaBars size={23} />
        </button>
      ) : null}

      {/* Sidebar Overlay & Panel (mobile) */}
      {/* Overlay (always rendered) */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      ></div>
      {/* Close Button OUTSIDE Sidebar (always rendered) */}
      <button
        className={`fixed top-4 right-4 p-2 rounded-full bg-white text-cyan-500 shadow-lg border-2 border-cyan-400 hover:scale-110 transition-all z-[100] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-label="Close sidebar"
        style={{transition: 'opacity 0.3s'}}
      >
        <FaTimes size={21} />
      </button>
      {/* Sidebar Panel (always rendered) */}
      <div className={`fixed top-0 left-0 bottom-0 h-screen w-64 bg-gradient-to-br from-[#181924cc] via-[#23232fbb] to-[#181824dd] border-r-2 border-neutral-800 shadow-2xl rounded-r-3xl flex flex-col z-50 backdrop-blur-xl glassmorphism transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`} style={{willChange: 'transform'}}>

  {/* Menu List */}
  <nav className="flex-1 flex flex-col gap-4 px-2 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400/60 scrollbar-track-cyan-900/10 scroll-smooth">
    {menu.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.label}>
                  <button
                    className={`flex items-center gap-2 h-10 px-4 w-full rounded-xl text-sm font-bold shadow transition-all text-cyan-300 bg-cyan-800/20 hover:bg-cyan-700/70 hover:text-white focus:outline-none backdrop-blur-sm`}
                    onClick={() => setServicesOpen((v) => !v)}
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="sidebar-services-list"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                    <FaChevronDown className={`ml-auto transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div id="sidebar-services-list" className={`pl-8 flex flex-col gap-2 mt-1 transition-all duration-400 origin-top transform
  ${servicesOpen && services.length > 0 ? 'scale-y-100 opacity-100 max-h-96' : 'scale-y-0 opacity-0 max-h-0 pointer-events-none'}`}
  style={{willChange: 'transform, opacity, maxHeight'}}
>
                      {services.map((srv) => (
                        <Link
                          key={srv._id || srv.title}
                          href={`/services/${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                          passHref legacyBehavior
                        >
                          <a
                            className="flex items-center gap-2 h-9 px-2 rounded-lg text-sm font-medium text-cyan-200 bg-cyan-800/10 hover:bg-cyan-400/40 hover:text-cyan-900 transition-all backdrop-blur-sm"
                            onClick={() => setOpen(false)}
                          >
                            {srv.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
              );
            }
            return (
              <Link key={item.label} href={item.href} passHref legacyBehavior>
                <a
                  className={`flex items-center gap-2 h-10 px-4 rounded-xl text-sm font-bold shadow transition-all text-cyan-200 bg-cyan-800/20 hover:bg-cyan-700/70 hover:text-white backdrop-blur-sm`}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 h-screen w-64 bg-gradient-to-br from-[#101522cc] via-[#23272fbb] to-[#1a1a24dd] border-r-2 border-cyan-400 shadow-2xl rounded-r-3xl z-40 backdrop-blur-xl glassmorphism transition-all duration-300">
        <nav className="flex-1 flex flex-col gap-4 px-2 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400/60 scrollbar-track-cyan-900/10 scroll-smooth">
          {menu.map((item) => (
            <Link key={item.label} href={item.href} passHref legacyBehavior>
              <a
                className="flex items-center gap-2 h-10 px-2 rounded-lg text-sm font-semibold text-cyan-200 bg-cyan-800/20 hover:bg-cyan-400/40 hover:text-cyan-900 transition-all shadow-md backdrop-blur-sm"
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
