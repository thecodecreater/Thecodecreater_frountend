import Head from 'next/head';
import { FaBuilding, FaRocket, FaBriefcase, FaMobileAlt, FaChartLine, FaPaintBrush, FaVideo, FaStar, FaUsers, FaLightbulb, FaAward, FaHandshake } from 'react-icons/fa';
import AboutTeamCard from '../components/AboutTeamCard';
import Header from '../components/Header';

const servicesList = [
  {
    icon: <FaChartLine className="text-[#D4AF37] text-3xl" />,
    title: 'Full-stack Web Development',
    desc: 'Next.js, React.js, Node.js, MongoDB',
    color: 'from-[#2C2C2E] to-[#3A3A3C]',
  },
  {
    icon: <FaMobileAlt className="text-[#D4AF37] text-3xl" />,
    title: 'Mobile App Development',
    desc: 'iOS & Android',
    color: 'from-[#3A3A3C] to-[#1C1C1E]',
  },
  {
    icon: <FaChartLine className="text-[#D4AF37] text-3xl" />,
    title: 'Digital Marketing & SEO',
    desc: 'Grow your brand online',
    color: 'from-[#1C1C1E] to-[#3A3A3C]',
  },
  {
    icon: <FaPaintBrush className="text-[#D4AF37] text-3xl" />,
    title: 'Graphic Designing',
    desc: 'Logos, social media, branding',
    color: 'from-[#3A3A3C] to-[#2C2C2E]',
  },
  {
    icon: <FaVideo className="text-[#D4AF37] text-3xl" />,
    title: 'Video Editing',
    desc: 'Reels, ads, promo videos',
    color: 'from-[#2C2C2E] to-[#1C1C1E]',
  },
];

const valuesList = [
  {
    icon: <FaStar className="text-[#D4AF37] text-2xl" />,
    title: 'Excellence',
    desc: 'We strive for perfection in every project',
    color: 'from-[#2C2C2E] to-[#3A3A3C]',
  },
  {
    icon: <FaUsers className="text-[#D4AF37] text-2xl" />,
    title: 'Collaboration',
    desc: 'Working together to achieve greatness',
    color: 'from-[#3A3A3C] to-[#1C1C1E]',
  },
  {
    icon: <FaLightbulb className="text-[#D4AF37] text-2xl" />,
    title: 'Innovation',
    desc: 'Pushing boundaries with creative solutions',
    color: 'from-[#1C1C1E] to-[#3A3A3C]',
  },
  {
    icon: <FaAward className="text-[#D4AF37] text-2xl" />,
    title: 'Quality',
    desc: 'Delivering premium results consistently',
    color: 'from-[#3A3A3C] to-[#2C2C2E]',
  },
  {
    icon: <FaHandshake className="text-[#D4AF37] text-2xl" />,
    title: 'Trust',
    desc: 'Building long-term partnerships',
    color: 'from-[#2C2C2E] to-[#1C1C1E]',
  },
];

export default function About() {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | thecodecreater Digital Agency</title>
        <meta name="description" content="Learn more about thecodecreater Digital Agency, our team, vision, and the full range of digital services we offer." />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        <meta property="og:title" content="About Us | thecodecreater Digital Agency" />
        <meta property="og:description" content="Learn more about thecodecreater Digital Agency, our team, vision, and the full range of digital services we offer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | thecodecreater Digital Agency" />
        <meta name="twitter:description" content="Learn more about thecodecreater Digital Agency, our team, vision, and the full range of digital services we offer." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
      </Head>
      <main className="min-h-screen bg-premium-gradient vignette pt-0 pb-16 flex flex-col items-center relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-premium-gradient rounded-b-3xl shadow-2xl mb-10 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-40 opacity-20" viewBox="0 0 1440 320"><path fill="#1a0000" fillOpacity="0.2" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L0,0Z"></path></svg>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-2xl opacity-40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center pt-32 pb-10 px-4">
            <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black/60 border-4 border-accent-blue shadow-neon-blue mb-4 animate-fade-in">
              <FaBuilding className="text-5xl text-accent-blue" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg animate-fade-in-slow">About Thecodecreater Digital Agency</h1>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-4 animate-grow"></div>
            <p className="text-lg subtext-premium text-center font-medium max-w-2xl animate-fade-in-slow">
              Empowering businesses with next-gen digital solutions. We're a team of passionate creators, developers, designers, and marketers committed to delivering results.
            </p>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center font-extrabold text-white mb-8 flex items-center justify-center gap-2">
            <FaBriefcase className="text-accent-blue text-2xl" /> What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <div key={i} className="flex flex-col items-center glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white text-center">{service.title}</h3>
                <p className="subtext-premium text-center text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Founders Section */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center font-extrabold text-white mb-8 flex items-center justify-center gap-2">
            <FaUsers className="text-accent-blue text-2xl" /> Meet the Founders
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent-blue/20 border-4 border-accent-blue flex items-center justify-center">
                  <FaUsers className="text-accent-blue text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vasim Belim</h3>
                <p className="text-accent-blue font-semibold mb-3">Founder & Full-Stack Developer</p>
                <p className="subtext-premium text-sm">
                  Passionate about building premium digital brands. Strong technical skills and a deep understanding of the modern digital landscape.
                </p>
              </div>
            </div>
            <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent-blue/20 border-4 border-accent-blue flex items-center justify-center">
                  <FaUsers className="text-accent-blue text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hardik Ranka</h3>
                <p className="text-accent-blue font-semibold mb-3">Founder & Full-Stack Developer</p>
                <p className="subtext-premium text-sm">
                  Creative, scalable, and affordable tech solutions for businesses and startups. Committed to digital growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center font-extrabold text-white mb-8 flex items-center justify-center gap-2">
            <FaStar className="text-accent-blue text-2xl" /> Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {valuesList.map((value, i) => (
              <div key={i} className="flex items-center gap-4 glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div>{value.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{value.title}</h3>
                  <p className="subtext-premium text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Vision Section */}
        <section className="w-full max-w-4xl mx-auto px-4">
          <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <FaRocket className="text-4xl text-accent-blue" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-lg subtext-premium max-w-2xl">
                To become a trusted digital growth partner for <span className="text-accent-blue font-bold">10,000+</span> businesses by blending creativity with technology.
              </p>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 0.7s both; }
        .animate-fade-in-slow { animation: fade-in 1.2s both; }
        @keyframes grow { from { width: 0; } to { width: 6rem; } }
        .animate-grow { animation: grow 1s both; }
      `}</style>
    </>
  );
}
