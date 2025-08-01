import React, { useState, useEffect } from 'react';

const whatsappNumber = '919462185555'; // Country code + number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          right: '16px',
          bottom: '80px',
          zIndex: 1000,
          borderRadius: '50%',
          boxShadow: isHovered 
            ? '0 8px 32px rgba(37, 211, 102, 0.4), 0 4px 16px rgba(0,0,0,0.2)' 
            : '0 4px 16px rgba(0,0,0,0.18)',
          background: isHovered 
            ? 'linear-gradient(135deg, #25D366, #128C7E)' 
            : '#25D366',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible ? 1 : 0,
        }}
        className="group md:w-16 md:h-16 lg:w-16 lg:h-16"
      >
        {/* Pulse ring animation */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{
            background: 'rgba(37, 211, 102, 0.3)',
            animation: isHovered ? 'pulse-ring 1.5s infinite' : 'none'
          }}
        />
        
        {/* Main button content */}
        <div className="relative z-10 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            fill="white" 
            viewBox="0 0 24 24"
            className="md:w-8 md:h-8 lg:w-8 lg:h-8"
            style={{
              transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.21 1.6 6.05L0 24l6.17-1.61A12.06 12.06 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.84 0-3.64-.5-5.19-1.43l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.31c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.09-.17.18-.34.2-.62.07-.28-.14-1.18-.44-2.24-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.94 4.68 4.01.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.66-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.25-.18-.52-.32z"/>
          </svg>
        </div>

        {/* Floating text on hover - hidden on mobile */}
        {isHovered && (
          <div 
            className="absolute right-full mr-4 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap hidden md:block"
            style={{
              animation: 'slideIn 0.3s ease-out',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Chat with us! 💬
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        )}
      </a>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .group {
            right: 12px !important;
            bottom: 100px !important;
            width: 52px !important;
            height: 52px !important;
          }
        }

        @media (max-width: 480px) {
          .group {
            right: 8px !important;
            bottom: 90px !important;
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </>
  );
}
