import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../components/Header';

// Import all sections with SSR disabled for better performance
const Hero = dynamic(() => import('../components/sections/Hero'), { ssr: false });
const Services = dynamic(() => import('../components/sections/Services'), { ssr: false });
const WhyChooseUs = dynamic(() => import('../components/sections/WhyChooseUs'), { ssr: false });
const Portfolio = dynamic(() => import('../components/sections/Portfolio'), { ssr: false });
const Process = dynamic(() => import('../components/sections/Process'), { ssr: false });
const TechStack = dynamic(() => import('../components/sections/TechStack'), { ssr: false });
const Industries = dynamic(() => import('../components/sections/Industries'), { ssr: false });
const Counters = dynamic(() => import('../components/sections/Counters'), { ssr: false });
const Team = dynamic(() => import('../components/sections/Team'), { ssr: false });
const Testimonials = dynamic(() => import('../components/sections/Testimonials'), { ssr: false });
const FAQ = dynamic(() => import('../components/sections/FAQ'), { ssr: false });
const CTA = dynamic(() => import('../components/sections/CTA'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>TheCodeCreater - Digital Agency</title>
        <meta name="description" content="Digital Agency Website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="overflow-hidden">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20">
          <Services />
        </section>
        
        <section id="about">
          <WhyChooseUs />
        </section>
        
        <section id="portfolio" className="bg-gray-900">
          <Portfolio />
        </section>
        
        <section className="bg-gray-900">
          <Process />
        </section>
        
        <section className="bg-gray-900">
          <TechStack />
        </section>
        
        <section className="bg-gray-900">
          <Industries />
        </section>
        
        <section className="bg-gray-900">
          <Counters />
        </section>
        
        <section id="team" className="bg-gray-900">
          <Team />
        </section>
        
        <section className="bg-gray-900">
          <Testimonials />
        </section>
        
        <section className="bg-gray-900">
          <FAQ />
        </section>
        
        <section className="bg-gray-900">
          <CTA />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
