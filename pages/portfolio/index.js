import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/images/mobilebanking.jpg',
    description: 'Secure mobile banking application with biometric authentication and transaction management.',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/corporate.jpg',
    description: 'Modern and responsive corporate website with CMS integration.',
    tags: ['Next.js', 'Tailwind CSS', 'Contentful']
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: '/images/fooddelivery.jpg',
    description: 'Food ordering and delivery application with real-time tracking.',
    tags: ['Flutter', 'Firebase', 'Google Maps API']
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'Web App',
    image: '/images/fitness.jpg',
    description: 'Comprehensive fitness tracking application with workout plans and progress analytics.',
    tags: ['React', 'GraphQL', 'MongoDB']
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Design',
    image: '/images/portfolio.jpg',
    description: 'Modern portfolio website with smooth animations and dark mode.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS']
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Our Portfolio - Digital Agency</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies" />
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
              Our <span className="text-orange-400">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our collection of successful projects and see how we've helped businesses transform their digital presence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden bg-gray-800 rounded-2xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 bg-gradient-to-r from-orange-500 to-amber-500">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch with our team to discuss your project ideas.
          </p>
          <Link 
            href="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Get In Touch
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

export default PortfolioPage;
