import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiCheck, FiCode, FiSmartphone, FiSearch, FiBarChart2, FiShoppingCart, FiLayers } from 'react-icons/fi';
import Header from '../../components/Header';

const services = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    icon: <FiCode className="w-8 h-8 text-orange-400" />,
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    overview: 'Our web development services are designed to create powerful, scalable, and secure web solutions that drive business growth. We leverage the latest technologies and best practices to deliver exceptional digital experiences.',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Web Application Development',
      'API Integration',
      'Performance Optimization'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We start by understanding your business goals, target audience, and project requirements.'
      },
      {
        title: 'Planning',
        description: 'Our team creates a detailed project plan with timelines, milestones, and deliverables.'
      },
      {
        title: 'Design',
        description: 'We design intuitive user interfaces that align with your brand identity.'
      },
      {
        title: 'Development',
        description: 'Our developers bring the design to life using modern web technologies.'
      },
      {
        title: 'Testing',
        description: 'We conduct thorough testing to ensure quality and performance.'
      },
      {
        title: 'Launch & Support',
        description: 'We deploy your website and provide ongoing support and maintenance.'
      }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Tailwind CSS'],
    faqs: [
      {
        question: 'How long does it take to build a custom website?',
        answer: 'The timeline depends on the complexity of your project. A basic website typically takes 4-6 weeks, while more complex web applications can take 3-6 months.'
      },
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes, we offer ongoing maintenance and support packages to keep your website updated and secure.'
      },
      {
        question: 'Can you help with website hosting?',
        answer: 'Absolutely! We can recommend and set up reliable hosting solutions tailored to your needs.'
      }
    ]
  },
  'mobile-apps': {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    icon: <FiSmartphone className="w-8 h-8 text-orange-400" />,
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    overview: 'We create high-performance mobile applications that engage users and drive business growth. Our mobile solutions are built with scalability and user experience in mind.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'UI/UX Design',
      'App Store Optimization',
      'Backend Integration',
      'Maintenance & Support'
    ],
    process: [
      {
        title: 'Strategy',
        description: 'We define your app\'s purpose, target audience, and key features.'
      },
      {
        title: 'Design',
        description: 'Our designers create intuitive and engaging user interfaces.'
      },
      {
        title: 'Development',
        description: 'We build your app using the latest mobile technologies.'
      },
      {
        title: 'Testing',
        description: 'Rigorous testing across multiple devices and platforms.'
      },
      {
        title: 'Deployment',
        description: 'We help you launch on the App Store and Google Play.'
      },
      {
        title: 'Growth',
        description: 'We provide analytics and updates to keep your app successful.'
      }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'GraphQL'],
    faqs: [
      {
        question: 'How much does it cost to develop a mobile app?',
        answer: 'The cost varies based on features, complexity, and platform. We provide detailed quotes after understanding your requirements.'
      },
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'A basic app takes 3-4 months, while more complex applications can take 6+ months to develop.'
      },
      {
        question: 'Do you develop both iOS and Android apps?',
        answer: 'Yes, we develop for both platforms using cross-platform technologies or native development when needed.'
      }
    ]
  },
  'seo': {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    icon: <FiSearch className="w-8 h-8 text-orange-400" />,
    description: 'Improve your online visibility and drive targeted traffic to your website with our proven SEO strategies.',
    overview: 'Our data-driven SEO strategies help businesses increase their organic search visibility, drive qualified traffic, and generate more leads and sales.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Link Building',
      'Content Strategy',
      'Analytics & Reporting'
    ],
    process: [
      {
        title: 'Audit',
        description: 'We analyze your current website and identify optimization opportunities.'
      },
      {
        title: 'Strategy',
        description: 'We develop a customized SEO strategy based on your business goals.'
      },
      {
        title: 'Implementation',
        description: 'Our team implements on-page and technical SEO improvements.'
      },
      {
        title: 'Content',
        description: 'We create high-quality, optimized content that ranks well in search engines.'
      },
      {
        title: 'Link Building',
        description: 'We build high-quality backlinks to improve your domain authority.'
      },
      {
        title: 'Reporting',
        description: 'We provide regular reports and insights on your SEO performance.'
      }
    ],
    technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Moz'],
    faqs: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy. You may see initial improvements in 3-6 months, with significant results typically appearing after 6-12 months.'
      },
      {
        question: 'What makes your SEO services different?',
        answer: 'We focus on sustainable, white-hat SEO techniques that deliver long-term results, not quick fixes that might harm your site.'
      },
      {
        question: 'Do you offer local SEO services?',
        answer: 'Yes, we specialize in local SEO to help businesses rank higher in local search results and Google My Business.'
      }
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <FiBarChart2 className="w-8 h-8 text-orange-400" />,
    description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
    overview: 'Our digital marketing services help businesses establish a strong online presence, engage with their audience, and drive conversions through data-driven strategies.',
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'PPC Advertising',
      'Influencer Marketing',
      'Analytics & Reporting'
    ],
    process: [
      {
        title: 'Strategy',
        description: 'We develop a customized digital marketing strategy based on your business goals.'
      },
      {
        title: 'Implementation',
        description: 'Our team executes the strategy across multiple digital channels.'
      },
      {
        title: 'Content Creation',
        description: 'We create engaging content that resonates with your target audience.'
      },
      {
        title: 'Campaign Management',
        description: 'We manage and optimize your digital marketing campaigns.'
      },
      {
        title: 'Analysis',
        description: 'We track and analyze campaign performance to ensure optimal results.'
      },
      {
        title: 'Optimization',
        description: 'We continuously optimize campaigns based on data and performance.'
      }
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'Google Analytics'],
    faqs: [
      {
        question: 'How long does it take to see results from digital marketing?',
        answer: 'Some strategies like PPC can show immediate results, while others like SEO and content marketing may take 3-6 months to show significant impact.'
      },
      {
        question: 'What makes your digital marketing services unique?',
        answer: 'We focus on data-driven strategies tailored to your specific business goals and target audience.'
      },
      {
        question: 'Do you offer social media management?',
        answer: 'Yes, we provide comprehensive social media management services including content creation, posting, and community engagement.'
      }
    ]
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    icon: <FiShoppingCart className="w-8 h-8 text-orange-400" />,
    description: 'Complete e-commerce solutions to help you sell products and services online effectively.',
    overview: 'We build powerful e-commerce platforms that provide seamless shopping experiences and drive sales for your business.',
    features: [
      'E-commerce Website Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Shopping Cart Solutions',
      'Mobile Commerce',
      'Security & Compliance'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We analyze your business requirements and target market.'
      },
      {
        title: 'Planning',
        description: 'We create a detailed e-commerce strategy and project plan.'
      },
      {
        title: 'Design',
        description: 'We design an intuitive and conversion-focused user interface.'
      },
      {
        title: 'Development',
        description: 'Our team builds a robust e-commerce platform with all necessary features.'
      },
      {
        title: 'Testing',
        description: 'We thoroughly test all functionalities including payments and security.'
      },
      {
        title: 'Launch & Support',
        description: 'We deploy your store and provide ongoing support and maintenance.'
      }
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe', 'PayPal'],
    faqs: [
      {
        question: 'Which e-commerce platform do you recommend?',
        answer: 'We recommend platforms based on your specific business needs, budget, and scalability requirements.'
      },
      {
        question: 'How do you handle payment gateway integration?',
        answer: 'We integrate secure payment gateways like Stripe, PayPal, and others based on your requirements.'
      },
      {
        question: 'Do you provide inventory management solutions?',
        answer: 'Yes, we can integrate inventory management systems to help you track and manage your products efficiently.'
      }
    ]
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: <FiLayers className="w-8 h-8 text-orange-400" />,
    description: 'Beautiful and intuitive user interfaces that enhance user experience and drive engagement.',
    overview: 'Our UI/UX design services focus on creating seamless, user-centered designs that not only look great but also provide exceptional user experiences.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'UI Design',
      'User Testing',
      'Interaction Design',
      'Design Systems'
    ],
    process: [
      {
        title: 'Research',
        description: 'We conduct user research to understand your audience and their needs.'
      },
      {
        title: 'Wireframing',
        description: 'We create wireframes to establish the basic structure of your interface.'
      },
      {
        title: 'Prototyping',
        description: 'We develop interactive prototypes to test and refine the user flow.'
      },
      {
        title: 'Visual Design',
        description: 'We apply visual elements that align with your brand identity.'
      },
      {
        title: 'User Testing',
        description: 'We test the designs with real users to gather feedback.'
      },
      {
        title: 'Handoff',
        description: 'We provide all necessary design assets and documentation for development.'
      }
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Framer', 'Zeplin'],
    faqs: [
      {
        question: 'What is the difference between UI and UX design?',
        answer: 'UI (User Interface) focuses on the visual elements users interact with, while UX (User Experience) focuses on the overall feel and usability of the product.'
      },
      {
        question: 'How long does the design process take?',
        answer: 'The timeline varies based on project complexity, but most projects take 4-8 weeks from research to final design delivery.'
      },
      {
        question: 'Do you provide design assets for development?',
        answer: 'Yes, we provide all necessary design assets, specifications, and documentation needed for development.'
      }
    ]
  },
  // Other services would follow the same pattern
};

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const service = services[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/services" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{service.title} - Digital Agency</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/services" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">{service.overview}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">{service.overview}</p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Our Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">{step.title}</h4>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-12 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-800 pb-4">
                        <h4 className="font-medium text-gray-200">{faq.question}</h4>
                        <p className="text-gray-400 mt-1">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-800/50 rounded-xl p-6 sticky top-6">
                  <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <FiCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link 
                        href="/contact"
                        className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        Get Started
                      </Link>
                      <p className="text-xs text-gray-400 text-center mt-2">No obligation, 100% satisfaction guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started with {service.title}?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Get Free Consultation
                <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link 
              href="tel:+1234567890"
              className="group relative overflow-hidden border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Call Us Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
