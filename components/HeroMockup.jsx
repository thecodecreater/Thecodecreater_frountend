import Image from 'next/image';

export default function HeroMockup() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-8 mb-4 px-2">
      {/* Abstract SVG background */}
      <div className="absolute -z-10 w-full flex justify-center">
        <Image src="/hero-abstract.svg" alt="Abstract" width={1200} height={300} className="opacity-60" />
      </div>
      {/* Laptop Mockup */}
      <div className="gradient-bg-box border-2 border-accent-blue shadow-neon-blue animate-float">
        <div className="rounded-2xl shadow-inner p-2 flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md h-[220px] md:h-[280px]">
          <div className="bg-black/50 rounded-t-xl h-6 w-full flex items-center px-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-lg md:text-2xl font-bold gradient-logo mb-2">Your Dream Website</span>
            <span className="text-xs md:text-sm subtext-premium">Modern, Fast, & Responsive</span>
          </div>
        </div>
      </div>
      {/* Animated Arrow */}
      <div className="mt-6 animate-bounce">
        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4v24m0 0l-8-8m8 8l8-8" stroke="#00FFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
