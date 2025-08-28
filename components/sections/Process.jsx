import { motion } from 'framer-motion';
import { FaSearch, FaTasks, FaPalette, FaCode, FaVial, FaRocket } from 'react-icons/fa';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience to create a solid foundation for your project.',
    icon: <FaSearch className="text-2xl" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We create a detailed project plan with clear milestones, timelines, and deliverables to ensure smooth execution.',
    icon: <FaTasks className="text-2xl" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers craft beautiful, user-centric interfaces that perfectly align with your brand identity.',
    icon: <FaPalette className="text-2xl" />,
    color: 'from-amber-500 to-orange-500'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our expert developers bring designs to life with clean, efficient, and scalable code.',
    icon: <FaCode className="text-2xl" />,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    number: '05',
    title: 'Testing',
    description: 'We rigorously test every aspect to ensure top-notch quality, performance, and security.',
    icon: <FaVial className="text-2xl" />,
    color: 'from-rose-500 to-pink-500'
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support to ensure everything runs smoothly.',
    icon: <FaRocket className="text-2xl" />,
    color: 'from-indigo-500 to-purple-600'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.svg')] bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We follow a proven 6-step process to transform your ideas into exceptional digital experiences that drive results.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/20 via-orange-500/70 to-orange-500/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                className={`group flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/2 md:px-8 mb-6 md:mb-0">
                  <motion.div 
                    className={`bg-gradient-to-br ${step.color} p-0.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gray-900 p-6 rounded-xl h-full">
                      <div className="flex items-start">
                        <div className={`bg-gradient-to-br ${step.color} p-3 rounded-lg mr-4 flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold z-10 shadow-lg`}>
                  {step.number}
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
