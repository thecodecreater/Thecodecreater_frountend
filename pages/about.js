import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { FiAward, FiUsers, FiLayers, FiCode, FiGlobe, FiTrendingUp, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const About = () => {
  const stats = [
    { id: 1, value: '150+', label: 'Projects Completed', icon: <FiLayers className="w-8 h-8" /> },
    { id: 2, value: '95%', label: 'Happy Clients', icon: <FiUsers className="w-8 h-8" /> },
    { id: 3, value: '50+', label: 'Team Members', icon: <FiUsers className="w-8 h-8" /> },
    { id: 4, value: '10+', label: 'Years Experience', icon: <FiAward className="w-8 h-8" /> },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace creativity and are constantly exploring new ideas to deliver cutting-edge solutions.',
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
      icon: <FiAward className="w-6 h-6" />
    },
    {
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and building trust with our clients.',
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and bring it to life.',
      icon: <FiUsers className="w-6 h-6" />
    },
  ];

  const team = [
    {
      name: 'Vasim Belim',
      role: 'Founder',
      image: '/images/founder1.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Hardik Ranka',
      role: 'Founder',
      image: '/images/founde2.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Lucky Agrwaal',
      role: 'Founder',
      image: '/images/founder3.jpeg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  // Add state for header scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>About Us - Digital Agency</title>
        <meta name="description" content="Learn about our digital agency, our team, and our mission to deliver exceptional digital experiences." />
      </Head>

      {/* Page Header */}
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative">
                <img 
                  src="/images/logo.png" 
                  alt="TheCodeCreater Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                CodeCreater
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-1">
              <Link 
                href="/"
                className="px-4 py-2 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="px-4 py-2 bg-white/10 text-orange-300 font-medium rounded-lg"
              >
                About Us
              </Link>
              <a 
                href="#services"
                className="px-4 py-2 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200"
              >
                Services
              </a>
              <a 
                href="#portfolio"
                className="px-4 py-2 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200"
              >
                Portfolio
              </a>
              <a 
                href="#contact"
                className="px-4 py-2 text-white hover:text-orange-300 font-medium rounded-lg transition-all duration-200"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button - Hidden for now as we have the main header */}
            <button className="lg:hidden text-white hover:text-orange-300 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                    <span className="text-sm font-medium text-orange-400">About Us</span>
                  </div>
                </li>
              </ol>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Our Company</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We're a team of passionate creators dedicated to building amazing digital experiences
            </motion.p>
          </div>
        </div>
      </div>


      {/* Our Story */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <Image 
                    src="/images/office.jpg" 
                    alt="Our Office" 
                    width={800} 
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-2xl shadow-xl">
                  <span className="text-4xl font-bold text-white">10+</span>
                  <p className="text-white font-medium">Years Experience</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-orange-400">Story</span></h2>
              <p className="text-gray-300 mb-6">
                Founded in 2018, our digital agency was born out of a shared passion for creating meaningful digital experiences. What started as a small team of three has grown into a full-service agency with a diverse portfolio of successful projects.
              </p>
              <p className="text-gray-300 mb-8">
                We believe that great design and cutting-edge technology should be accessible to businesses of all sizes. Our mission is to help our clients navigate the digital landscape and achieve their goals through innovative solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <FiGlobe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Global Reach</h4>
                    <p className="text-gray-400 text-sm">Serving clients worldwide with remote expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <FiAward className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Award Winning</h4>
                    <p className="text-gray-400 text-sm">Recognized for excellence in design and development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <div className="text-orange-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core <span className="text-orange-400">Values</span></h2>
            <p className="text-gray-300">These principles guide everything we do and shape the way we work with our clients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet The <span className="text-orange-400">Founders</span></h2>
            <p className="text-gray-300">The talented individuals behind our success</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                      <p className="text-orange-400">{member.role}</p>
                      <div className="flex space-x-3 mt-3">
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-gray-300 hover:text-orange-400 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-gray-300 hover:text-orange-400 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="text-gray-300 hover:text-orange-400 transition-colors">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {member.social.dribbble && (
                          <a href={member.social.dribbble} className="text-gray-300 hover:text-orange-400 transition-colors">
                            <span className="sr-only">Dribbble</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.418 25.418 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-orange-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">Let's work together to bring your ideas to life. Our team is ready to help you create something amazing.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/start-project" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
