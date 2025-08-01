import Head from 'next/head';
import Header from '../components/Header';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    title: 'Address',
    value: '123 Main St, Anytown, USA',
    icon: <FaMapMarkerAlt />,
    color: 'bg-accent-blue',
  },
  {
    title: 'Phone',
    value: '+91 93519 01225, +91 94621 85555',
    icon: <FaPhoneAlt />,
    color: 'bg-accent-blue',
  },
  {
    title: 'Email',
    value: 'thecodecreater964@gmail.com',
    icon: <FaEnvelope />,
    color: 'bg-accent-blue',
  },
  {
    title: 'WhatsApp',
    value: '+91 93519 01225',
    icon: <FaWhatsapp />,
    color: 'bg-accent-blue',
  },
];

const socialLinks = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/thecodecreater',
    icon: <FaPaperPlane />,
    color: 'text-facebook',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/thecodecreater',
    icon: <FaPaperPlane />,
    color: 'text-twitter',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/thecodecreater',
    icon: <FaPaperPlane />,
    color: 'text-instagram',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thecodecreater',
    icon: <FaPaperPlane />,
    color: 'text-linkedin',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Contact TheCodeCreater for web development, SEO, digital marketing, and creative solutions. Reach out for a free consultation!" />
        <meta name="keywords" content="Contact, Digital Agency, Web Development, SEO, Marketing, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecodecreater.com/contact" />
        <meta property="og:title" content="Contact Us | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Contact TheCodeCreater for web development, SEO, digital marketing, and creative solutions. Reach out for a free consultation!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/contact" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Contact TheCodeCreater for web development, SEO, digital marketing, and creative solutions. Reach out for a free consultation!" />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-premium-gradient vignette pt-0 pb-16 flex flex-col items-center relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-premium-gradient rounded-b-3xl shadow-2xl mb-10 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in flex items-center gap-3">
  <FaPaperPlane className="text-accent-blue" />
  Contact Us
</h1>
            <p className="text-lg subtext-premium text-center font-medium max-w-2xl animate-fade-in-slow">
              We'd love to hear from you! Reach out for any queries, projects, or just to say hello.
            </p>
          </div>
        </section>
        {/* Contact Info Section */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className={`glass-card p-6 flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br ${info.color}`}>
                <div className="mb-3 text-accent-blue">{info.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                <p className="subtext-premium text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Main Contact Section */}
        <section className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Contact Details Card */}
            <div className="flex-1 glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl opacity-40 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-accent-blue" /> Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <FaPhoneAlt className="text-accent-blue text-xl" />
                    <span>+91 93519 01225, +91 94621 85555</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <FaEnvelope className="text-accent-blue text-xl" />
                    <span>thecodecreater964@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <FaWhatsapp className="text-accent-blue text-xl" />
                    <span>+91 93519 01225</span>
                  </div>
                </div>
                <div className="border-t border-accent-blue/20 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-accent-blue ${social.color} transition-colors duration-300 hover:scale-110`}
                        title={social.title}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form Card */}
            <form onSubmit={handleSubmit} className="flex-1 glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl opacity-40 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaPaperPlane className="text-accent-blue" /> Send us a Message
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="neon-btn w-full text-lg py-3 mt-2"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && (
                    <p className="text-accent-blue text-center mt-2 animate-pulse">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}