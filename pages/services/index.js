import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiSmartphone, FiSearch, FiBarChart2, FiShoppingCart, FiLayers } from 'react-icons/fi';
import Header from '../../components/Header';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: <FiCode className="w-8 h-8 text-orange-400" />,
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Web Application Development',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    icon: <FiSmartphone className="w-8 h-8 text-orange-400" />,
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'UI/UX Design',
      'App Store Optimization',
      'Backend Integration',
      'Maintenance & Support'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    icon: <FiSearch className="w-8 h-8 text-orange-400" />,
    description: 'Improve your online visibility and drive targeted traffic to your website with our proven SEO strategies.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Link Building',
      'Content Strategy',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <FiBarChart2 className="w-8 h-8 text-orange-400" />,
    description: 'Data-driven digital marketing strategies to grow your brand and reach your target audience effectively.',
    features: [
      'Social Media Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Content Marketing',
      'Influencer Marketing',
      'Conversion Optimization'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    icon: <FiShoppingCart className="w-8 h-8 text-orange-400" />,
    description: 'Complete e-commerce solutions to help you sell products and services online with ease.',
    features: [
      'Shopify Development',
      'WooCommerce Solutions',
      'Payment Gateway Integration',
      'Inventory Management',
      'Mobile Commerce',
      'Performance Optimization'
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: <FiLayers className="w-8 h-8 text-orange-400" />,
    description: 'Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'UI Design',
      'User Testing',
      'Design Systems',
      'Responsive Design'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Our Services - Digital Agency</title>
        <meta name="description" content="Explore our comprehensive range of digital services to grow your business online" />
      </Head>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-orange-400">Services</span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We offer a comprehensive range of digital services to help your business thrive in the online world.
              Our expertise covers all aspects of digital presence and growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expert services.
          </p>
          <Link 
            href="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Get Free Consultation
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
