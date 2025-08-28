import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';

const projects = {
  1: {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
    client: 'Fashion Retail Chain',
    year: '2023',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    challenge: 'The client needed a scalable e-commerce solution to replace their outdated platform and handle increasing traffic during peak seasons.',
    solution: 'We developed a modern, responsive e-commerce platform with a focus on performance and user experience. The solution included advanced product filtering, one-click checkout, and seamless payment integration.',
    results: [
      'Increased conversion rate by 35%',
      'Reduced page load time by 60%',
      'Handled 10,000+ concurrent users during Black Friday sales',
      'Achieved 99.9% uptime'
    ],
    website: 'https://example-ecommerce.com',
    images: [
      '/images/portfolio/ecommerce-1.jpg',
      '/images/portfolio/ecommerce-2.jpg',
      '/images/portfolio/ecommerce-3.jpg'
    ]
  },
  2: {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/images/portfolio/banking.jpg',
    description: 'Secure mobile banking application with biometric authentication and transaction management.',
    client: 'National Bank',
    year: '2023',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    challenge: 'The bank needed a secure and user-friendly mobile banking solution to serve their growing customer base.',
    solution: 'We built a cross-platform mobile app with bank-level security, including biometric authentication, real-time notifications, and comprehensive transaction management.',
    results: [
      '100,000+ downloads in the first month',
      '4.8/5 rating on app stores',
      'Reduced customer support queries by 40%',
      '99.99% security compliance'
    ],
    website: 'https://banking-app.com',
    images: [
      '/images/portfolio/banking-1.jpg',
      '/images/portfolio/banking-2.jpg',
      '/images/portfolio/banking-3.jpg'
    ]
  },
  3: {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/portfolio/corporate.jpg',
    description: 'Modern and responsive corporate website with CMS integration.',
    client: 'Tech Solutions Inc.',
    year: '2023',
    technologies: ['Next.js', 'Tailwind CSS', 'Contentful', 'Framer Motion'],
    challenge: 'The client needed a modern, fast, and easy-to-update website to showcase their services and attract new clients.',
    solution: 'We designed and developed a performant website with a custom CMS integration, allowing the marketing team to easily update content without developer assistance.',
    results: [
      'Improved page speed score from 45 to 98',
      'Increased organic traffic by 120%',
      'Reduced bounce rate by 35%',
      'Streamlined content updates'
    ],
    website: 'https://techsolutions.com',
    images: [
      '/images/portfolio/corporate-1.jpg',
      '/images/portfolio/corporate-2.jpg',
      '/images/portfolio/corporate-3.jpg'
    ]
  },
  4: {
    id: 4,
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: '/images/portfolio/food-delivery.jpg',
    description: 'Food ordering and delivery application with real-time tracking.',
    client: 'QuickBite',
    year: '2023',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
    challenge: 'The client needed a scalable food delivery solution with real-time order tracking and efficient delivery management.',
    solution: 'We developed a cross-platform mobile app with features like real-time order tracking, in-app chat, and an admin dashboard for restaurant partners.',
    results: [
      '50,000+ active users',
      'Average order time reduced by 25%',
      '4.7/5 rating on app stores',
      'Expanded to 5 new cities'
    ],
    website: 'https://quickbite.app',
    images: [
      '/images/portfolio/food-1.jpg',
      '/images/portfolio/food-2.jpg',
      '/images/portfolio/food-3.jpg'
    ]
  },
  5: {
    id: 5,
    title: 'Fitness Tracker',
    category: 'Web App',
    image: '/images/portfolio/fitness.jpg',
    description: 'Comprehensive fitness tracking application with workout plans and progress analytics.',
    client: 'FitLife',
    year: '2023',
    technologies: ['React', 'GraphQL', 'MongoDB', 'Node.js', 'Chart.js'],
    challenge: 'The client wanted a web application to help users track their fitness journey with personalized workout plans and progress tracking.',
    solution: 'We built a feature-rich fitness platform with workout planning, progress tracking, and data visualization to help users achieve their fitness goals.',
    results: [
      '30,000+ active users',
      'Average session duration: 12 minutes',
      'User retention rate of 65% after 3 months',
      'Integrated with popular fitness wearables'
    ],
    website: 'https://fitlife.app',
    images: [
      '/images/portfolio/fitness-1.jpg',
      '/images/portfolio/fitness-2.jpg',
      '/images/portfolio/fitness-3.jpg'
    ]
  },
  6: {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Design',
    image: '/images/portfolio/portfolio.jpg',
    description: 'Modern portfolio website with smooth animations and dark mode.',
    client: 'Creative Studio',
    year: '2023',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Contentful'],
    challenge: 'The client needed a visually stunning portfolio to showcase their creative work and attract new clients.',
    solution: 'We designed and developed a modern, interactive portfolio with smooth animations, dark mode, and easy content management.',
    results: [
      'Increased lead generation by 40%',
      '95+ mobile performance score',
      'Featured on Awwwards',
      'Streamlined content updates'
    ],
    website: 'https://creativestudio.com',
    images: [
      '/images/portfolio/portfolio-1.jpg',
      '/images/portfolio/portfolio-2.jpg',
      '/images/portfolio/portfolio-3.jpg'
    ]
  }
};

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{project.title} - Project Details | Digital Agency</title>
        <meta name="description" content={project.description} />
      </Head>
      
      <Header />

      {/* Project Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full mb-4 bg-gradient-to-r from-orange-500 to-amber-500">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Client</span>
                  <span>{project.client}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Year</span>
                  <span>{project.year}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Category</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Solution</h3>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Results</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800/50 rounded-xl p-6 sticky top-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Client</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Year</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Category</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.website && (
                    <div className="pt-4">
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
                      >
                        Visit Website
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden bg-gray-800/50">
                  <img 
                    src={image} 
                    alt={`${project.title} - Screenshot ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
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

export default ProjectDetail;
