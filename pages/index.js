import Head from 'next/head';
import Header from '../components/Header';
import StarfieldBg from '../components/StarfieldBg';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TheCodeCreater Digital Agency | Web, SEO, Marketing, Design</title>
        <meta name="description" content="TheCodeCreater is a modern digital agency offering web development, SEO, marketing, branding, and creative design solutions. Grow your business with us!" />
        <meta name="keywords" content="Digital Agency, Web Development, SEO, Marketing, Branding, Creative Design, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecodecreater.com/" />
        <meta property="og:title" content="TheCodeCreater Digital Agency | Web, SEO, Marketing, Design" />
        <meta property="og:description" content="TheCodeCreater is a modern digital agency offering web development, SEO, marketing, branding, and creative design solutions. Grow your business with us!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheCodeCreater Digital Agency | Web, SEO, Marketing, Design" />
        <meta name="twitter:description" content="TheCodeCreater is a modern digital agency offering web development, SEO, marketing, branding, and creative design solutions. Grow your business with us!" />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'TheCodeCreater Digital Agency',
            'url': 'https://thecodecreater.com/',
            'logo': 'https://thecodecreater.com/og-image.jpg',
            'image': 'https://thecodecreater.com/og-image.jpg',
            'description': 'TheCodeCreater is a modern digital agency offering web development, SEO, marketing, branding, and creative design solutions.',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Jodhpur',
              'addressLocality': 'Jodhpur',
              'addressRegion': 'Rajasthan',
              'postalCode': '342001',
              'addressCountry': 'IN'
            },
            'telephone': '+91-9351901225',
            'email': 'thecodecreater964@gmail.com',
            'sameAs': [
              'https://www.facebook.com/share/19QytzRmei/',
              'https://instagram.com/codecreater_1'
            ]
          })
        }}
      />
      <StarfieldBg starCount={60} starColor="rgba(255,255,255,0.7)" />
      <main className="gradient-bg-box min-h-screen overflow-x-hidden">
        <Header />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        {/* Website Solutions & Pricing Section - Agency Style */}
        <section className="py-16 px-4 md:px-12 lg:px-28 rounded-2xl mt-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 tracking-tight drop-shadow-lg">Website Solutions & Pricing</h2>
          <p className="text-lg md:text-xl text-gray-200 text-center mb-12 max-w-2xl mx-auto">The perfect website solution for every business — creative design, fast performance, and full support. Start your growth journey here!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Launchpad */}
            <div className="bg-[#151e34]/80 rounded-2xl border border-[#243354] shadow-md backdrop-blur p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
              <span className="text-5xl mb-4">🚀</span>
              <h3 className="text-2xl font-bold text-white mb-2">Brand Launchpad</h3>
              <p className="text-gray-300 mb-4 text-center">Perfect for new businesses or startups looking for a modern and impactful online presence.</p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1 list-disc list-inside">
                <li>1-5 Pages, Custom Design</li>
                <li>Mobile Responsive</li>
                <li>Contact/Query Form</li>
                <li>Fast Loading, SEO Ready</li>
                <li>Social Links Integration</li>
              </ul>
              <div className="text-2xl font-bold text-[#7be0f6] mb-2">Starting at ₹7,999</div>
            </div>
            {/* Growth Accelerator */}
            <div className="bg-[#151e34]/80 rounded-2xl border border-[#243354] shadow-md backdrop-blur p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
              <span className="text-5xl mb-4">📈</span>
              <h3 className="text-2xl font-bold text-white mb-2">Growth Accelerator</h3>
              <p className="text-gray-300 mb-4 text-center">For SMEs and professionals who need advanced features and lead generation tools.</p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1 list-disc list-inside">
                <li>6-12 Pages, Unique Layouts</li>
                <li>Blog/Portfolio Section</li>
                <li>WhatsApp/Email Integration</li>
                <li>Basic Analytics Setup</li>
                <li>Speed & Security Optimized</li>
              </ul>
              <div className="text-2xl font-bold text-[#7be0f6] mb-2">Starting at ₹14,999</div>
            </div>
            {/* E-Commerce Suite */}
            <div className="bg-[#151e34]/80 rounded-2xl border border-[#243354] shadow-md backdrop-blur p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
              <span className="text-5xl mb-4">🛒</span>
              <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Suite</h3>
              <p className="text-gray-300 mb-4 text-center">Your complete online store solution — product catalog, secure payments, and easy management.</p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1 list-disc list-inside">
                <li>Product Listings & Cart</li>
                <li>Secure Payments (UPI/Card)</li>
                <li>Order & Inventory Management</li>
                <li>Offers & Coupons</li>
                <li>Admin Dashboard</li>
              </ul>
              <div className="text-2xl font-bold text-[#7be0f6] mb-2">Starting at ₹24,999</div>
            </div>
            {/* Enterprise Presence */}
            <div className="bg-[#151e34]/80 rounded-2xl border border-[#243354] shadow-md backdrop-blur p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
              <span className="text-5xl mb-4">🏢</span>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Presence</h3>
              <p className="text-gray-300 mb-4 text-center">High-performance, scalable, and custom solutions for large businesses and enterprises.</p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1 list-disc list-inside">
                <li>Unlimited Pages, Custom Features</li>
                <li>Team/Employee Modules</li>
                <li>Role-based Access</li>
                <li>API Integrations</li>
                <li>Priority Support</li>
              </ul>
              <div className="text-2xl font-bold text-[#7be0f6] mb-2">Starting at ₹39,999</div>
            </div>
            {/* Custom Experience */}
            <div className="bg-[#151e34]/80 rounded-2xl border border-[#243354] shadow-md backdrop-blur p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200 md:col-span-2 lg:col-span-1">
              <span className="text-5xl mb-4">✨</span>
              <h3 className="text-2xl font-bold text-white mb-2">Custom Experience</h3>
              <p className="text-gray-300 mb-4 text-center">Need something unique? Get fully custom design and features tailored to your business vision.</p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1 list-disc list-inside">
                <li>Completely Bespoke UI/UX</li>
                <li>Special Integrations</li>
                <li>Animation & Interactivity</li>
                <li>Consultation & Planning</li>
                <li>Dedicated Project Manager</li>
              </ul>
              <div className="text-2xl font-bold text-[#7be0f6] mb-2">Custom Quote</div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/consultation" className="inline-block px-8 py-3 bg-[#7be0f6] text-[#101c3a] font-bold rounded-full shadow-lg hover:bg-[#5fc9e6] transition-colors">Get Free Consultation</a>
          </div>
        </section>
        <BlogPreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
