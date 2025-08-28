import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/ecommerce.jpg',
    url: '/portfolio/ecommerce'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/images/mobilebanking.jpg',
    url: '/portfolio/banking-app'
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/corporet.jpg',
    url: '/portfolio/corporate-site'
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: '/images/fooddelivery.jpg',
    url: '/portfolio/food-app'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'Web App',
    image: '/images/fitness.jpg',
    url: '/portfolio/fitness-tracker'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Design',
    image: '/images/portfolio.jpg',
    url: '/portfolio/portfolio-site'
  },
];

const categoryColors = {
  'Web Development': 'from-blue-500 to-blue-600',
  'Mobile App': 'from-purple-500 to-pink-500',
  'Web Design': 'from-green-500 to-teal-500',
  'Web App': 'from-amber-500 to-orange-500'
};

const Portfolio = () => {
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="portfolio" className="pt-0 pb-12 -mt-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Explore our latest projects and see how we've helped businesses grow with our digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span 
                        className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 bg-gradient-to-r ${
                          categoryColors[project.category] || 'from-blue-500 to-blue-600'
                        }`}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href={project.url} 
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/portfolio"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
