import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* SVG Wave Divider Above Footer */}
      <div className="w-full -mb-2 pointer-events-none select-none bg-premium-gradient">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#1a0000" />
        </svg>
        {/* Neon blue divider below wave */}
        <div className="h-1 w-32 mx-auto -mt-2 mb-2 rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue"></div>
      </div>
      <footer className="relative bg-premium-gradient vignette py-10 border-t-4 border-accent-blue shadow-[0_-8px_32px_0_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
          <div className="text-xl font-extrabold heading-glow tracking-tight drop-shadow-md">The Code Creater</div>
          <div className="flex gap-6">
            <a href="#services" className="subtext-premium hover:text-accent-blue transition-colors duration-300 font-medium relative group">Services</a>
            <a href="#portfolio" className="subtext-premium hover:text-accent-blue transition-colors duration-300 font-medium relative group">Portfolio</a>
            <a href="#blog" className="subtext-premium hover:text-accent-blue transition-colors duration-300 font-medium relative group">Blog</a>
            <a href="#contact" className="subtext-premium hover:text-accent-blue transition-colors duration-300 font-medium relative group">Contact</a>
          </div>
          <div className="flex gap-4">
            {/* Social Icons with neon blue hover */}
            <a href="https://www.facebook.com/share/19QytzRmei/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white text-2xl transition-colors duration-300"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white text-2xl transition-colors duration-300"><FaTwitter /></a>
            <a href="https://instagram.com/thecodecreater" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white text-2xl transition-colors duration-300"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white text-2xl transition-colors duration-300"><FaLinkedin /></a>
          </div>
        </div>
        <div className="text-center subtext-premium text-sm mt-6">&copy; {new Date().getFullYear()} TheCodeCreater. All rights reserved.</div>
      </footer>
    </>
  );
}
