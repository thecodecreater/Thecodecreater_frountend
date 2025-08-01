import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGlobe, FaMobile, FaChartLine, FaPaintBrush, FaVideo, FaCheck, FaArrowRight, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';

const projectTypes = [
  {
    id: 'website',
    icon: <FaGlobe className="text-2xl" />,
    title: 'Website Development',
    description: 'Custom websites, e-commerce, landing pages',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
  },
  {
    id: 'mobile',
    icon: <FaMobile className="text-2xl" />,
    title: 'Mobile App Development',
    description: 'iOS & Android applications',
    features: ['Cross Platform', 'Native Performance', 'App Store Ready', 'Push Notifications']
  },
  {
    id: 'marketing',
    icon: <FaChartLine className="text-2xl" />,
    title: 'Digital Marketing & SEO',
    description: 'Grow your online presence',
    features: ['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Content Strategy']
  },
  {
    id: 'design',
    icon: <FaPaintBrush className="text-2xl" />,
    title: 'Graphic Design',
    description: 'Logos, branding, social media',
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Materials']
  },
  {
    id: 'video',
    icon: <FaVideo className="text-2xl" />,
    title: 'Video Editing',
    description: 'Promo videos, reels, ads',
    features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design']
  }
];

const budgetRanges = [
  { value: 'under-10k', label: 'Under ₹10,000' },
  { value: '10k-25k', label: '₹10,000 - ₹25,000' },
  { value: '25k-50k', label: '₹25,000 - ₹50,000' },
  { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
  { value: '100k+', label: '₹1,00,000+' }
];

const timelines = [
  { value: '1-2-weeks', label: '1-2 Weeks' },
  { value: '2-4-weeks', label: '2-4 Weeks' },
  { value: '1-2-months', label: '1-2 Months' },
  { value: '2-3-months', label: '2-3 Months' },
  { value: '3+months', label: '3+ Months' }
];

export default function GetStarted() {
  const [selectedProject, setSelectedProject] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [step, setStep] = useState(1);

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project-consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectType: selectedProject,
          ...formData
        }),
      });

      if (response.ok) {
        setStep(3);
      }
    } catch (error) {
      // handle error
    }
  };

  return (
    <>
      <Head>
        <title>Get Started | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Start your project with TheCodeCreater. Web development, SEO, marketing, and creative solutions for your business." />
        <meta name="keywords" content="Get Started, Digital Agency, Web Development, SEO, Marketing, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecodecreater.com/get-started" />
        <meta property="og:title" content="Get Started | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Start your project with TheCodeCreater. Web development, SEO, marketing, and creative solutions for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/get-started" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Started | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Start your project with TheCodeCreater. Web development, SEO, marketing, and creative solutions for your business." />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <title>Get Started | thecodecreater Digital Agency</title>
        <meta name="description" content="Start your project with thecodecreater Digital Agency. Get a free consultation and quote for your digital needs." />
        <link rel="canonical" href="https://yourwebsite.com/get-started" />
        <meta property="og:title" content="Get Started | thecodecreater Digital Agency" />
        <meta property="og:description" content="Start your project with thecodecreater Digital Agency. Get a free consultation and quote for your digital needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/get-started" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Started | thecodecreater Digital Agency" />
        <meta name="twitter:description" content="Start your project with thecodecreater Digital Agency. Get a free consultation and quote for your digital needs." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
      </Head>
      <Header />

      <main className="min-h-screen bg-premium-gradient vignette pt-0 pb-16">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[400px] bg-premium-gradient rounded-b-3xl shadow-2xl mb-10 overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-2xl opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center pt-32 pb-10 px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black/60 border-4 border-accent-blue shadow-neon-blue mb-4"
            >
              <FaRocket className="text-5xl text-accent-blue" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center"
            >
              Let's Start Your Project
            </motion.h1>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-4"></div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg subtext-premium text-center font-medium max-w-2xl"
            >
              Tell us about your project and we'll provide you with a customized solution
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4">
          {/* Step 1: Project Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-center font-extrabold text-white mb-8">
                What type of project do you need?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectTypes.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleProjectSelect(project.id)}
                    className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-accent-blue mb-4">{project.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="subtext-premium text-sm mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <FaCheck className="text-accent-blue text-xs" />
                          <span className="subtext-premium text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Details Form */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 mb-8"
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setStep(1)}
                  className="text-accent-blue hover:text-white transition-colors"
                >
                  ← Back to Project Types
                </button>
                <div className="text-sm subtext-premium">
                  Step 2 of 2
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center font-extrabold text-white mb-8">
                Tell us more about your project
              </h2>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none placeholder:text-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none placeholder:text-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium subtext-premium mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium subtext-premium mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 text-white border border-accent-blue rounded-lg focus:border-accent-blue focus:outline-none placeholder:text-gray-400"
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="neon-btn px-8 py-4 text-lg flex items-center gap-2"
                  >
                    Submit Project Details
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Success/Thank You */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-3xl p-8 mb-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <FaCheck className="text-3xl text-accent-blue" />
              </div>
              <h2 className="text-3xl font-bold font-extrabold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-lg subtext-premium mb-8 max-w-2xl mx-auto">
                We've received your project details. Our team will review your requirements and get back to you within 24 hours with a customized proposal.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-4 glass-card border border-accent-blue rounded-lg">
                  <FaWhatsapp className="text-2xl text-accent-blue mb-2" />
                  <span className="text-sm font-medium text-white">WhatsApp</span>
                  <span className="text-xs subtext-premium">+91 93519 01225</span>
                </div>
                <div className="flex flex-col items-center p-4 glass-card border border-accent-blue rounded-lg">
                  <FaEnvelope className="text-2xl text-accent-blue mb-2" />
                  <span className="text-sm font-medium text-white">Email</span>
                  <span className="text-xs subtext-premium">thecodecreater964@gmail.com</span>
                </div>
                <div className="flex flex-col items-center p-4 glass-card border border-accent-blue rounded-lg">
                  <FaPhone className="text-2xl text-accent-blue mb-2" />
                  <span className="text-sm font-medium text-white">Call</span>
                  <span className="text-xs subtext-premium">+91 94621 85555</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
} 