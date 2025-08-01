import * as FaIcons from 'react-icons/fa';
import Header from '../../components/Header';

const featuresList = [
  {
    icon: <FaIcons.FaStar className="text-accent-blue text-2xl" />,
    text: 'Expert team with years of experience',
  },
  {
    icon: <FaIcons.FaLock className="text-accent-blue text-2xl" />,
    text: 'Modern, scalable & secure solutions',
  },
  {
    icon: <FaIcons.FaUserCheck className="text-accent-blue text-2xl" />,
    text: 'Client-focused approach & transparent process',
  },
  {
    icon: <FaIcons.FaClock className="text-accent-blue text-2xl" />,
    text: 'On-time delivery & dedicated support',
  },
  {
    icon: <FaIcons.FaMoneyBillWave className="text-accent-blue text-2xl" />,
    text: 'Affordable pricing with premium quality',
  },
];

const processList = [
  {
    icon: <FaIcons.FaSearch className="text-accent-blue text-xl" />,
    title: 'Discovery',
    desc: 'Understanding your business needs',
  },
  {
    icon: <FaIcons.FaProjectDiagram className="text-accent-blue text-xl" />,
    title: 'Strategy',
    desc: 'Planning & strategy discussion',
  },
  {
    icon: <FaIcons.FaPencilRuler className="text-accent-blue text-xl" />,
    title: 'Design & Build',
    desc: 'Design & development with regular updates',
  },
  {
    icon: <FaIcons.FaCheckCircle className="text-accent-blue text-xl" />,
    title: 'Launch',
    desc: 'Testing, feedback & launch',
  },
  {
    icon: <FaIcons.FaChartLine className="text-accent-blue text-xl" />,
    title: 'Growth',
    desc: 'Ongoing support & growth',
  },
];

function ServiceDetails({ service }) {
  if (!service) return <div className="min-h-screen flex items-center justify-center text-2xl text-red-500">Service not found</div>;
  const IconComp = FaIcons[service.icon] || FaIcons['FaCode'];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-premium-gradient vignette pt-0 pb-16 flex flex-col items-center relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[340px] md:min-h-[400px] bg-premium-gradient rounded-b-3xl shadow-2xl mb-10 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-40 opacity-20" viewBox="0 0 1440 320"><path fill="#1a0000" fillOpacity="0.2" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L0,0Z"></path></svg>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-2xl opacity-40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center pt-32 pb-10 px-4">
            <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black/60 border-4 border-accent-blue shadow-neon-blue mb-4 animate-fade-in">
              {service.image ? (
                <img src={service.image} alt={service.title} className="w-14 h-14 object-contain rounded-full bg-primary-dark/10" />
              ) : (
                <IconComp className="text-5xl text-accent-blue" />
              )}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg animate-fade-in-slow">{service.title}</h1>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-4 animate-grow"></div>
            <p className="text-lg subtext-premium text-center font-medium max-w-xl animate-fade-in-slow">{service.description}</p>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12 px-4">
          {featuresList.map((f, i) => (
            <div key={i} className="flex items-center gap-4 glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"> 
              {f.icon}
              <span className="text-lg font-semibold text-white drop-shadow-sm">{f.text}</span>
            </div>
          ))}
        </section>
        {/* Process Section */}
        <section className="w-full max-w-4xl mx-auto glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 flex flex-col gap-8 mb-12 px-4">
          <h2 className="text-2xl font-bold font-extrabold text-white mb-4">How We Work</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processList.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 glass-card border border-accent-blue rounded-2xl shadow-md animate-fade-in relative overflow-hidden"> 
                <div className="absolute left-0 top-0 h-full w-2 bg-accent-blue/20 rounded-l-2xl z-0"></div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border-2 border-accent-blue mb-2 text-2xl z-10">{step.icon}</div>
                <div className="font-bold text-white mb-1 z-10">{step.title}</div>
                <div className="subtext-premium text-sm z-10">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="w-full max-w-2xl mx-auto flex flex-col items-center mt-8">
          <a href="/contact" className="neon-btn px-10 py-4 text-xl tracking-wide">Get Started with {service.title}</a>
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

export default ServiceDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
  const services = await res.json();
  const paths = services.map(s => ({
    params: { slug: s.title.toLowerCase().replace(/\s+/g, '-') }
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
  const services = await res.json();
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug) || null;
  if (!service) {
    return { notFound: true };
  }
  return { props: { service } };
}