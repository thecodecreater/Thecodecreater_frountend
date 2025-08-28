import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ end, label, suffix = '+', duration = 2.5, color = 'from-orange-500 to-amber-500' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden bg-gray-800/50 p-6 rounded-2xl text-center hover:bg-gray-800/70 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${color} mb-3`}>
          {inView ? (
            <CountUp 
              end={end} 
              duration={duration} 
              separator="," 
              className="inline-block"
            />
          ) : (
            '0'
          )}
          {suffix}
        </div>
        <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  );
};

const Counters = () => {
  const colors = [
    'from-orange-500 to-amber-500',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500'
  ];

  const counters = [
    { end: 150, label: 'Projects Completed' },
    { end: 95, label: 'Happy Clients', suffix: '%' },
    { end: 50, label: 'Team Members', suffix: '+' },
    { end: 10, label: 'Years Experience', suffix: '+' }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering excellence and driving success through innovative solutions and dedicated service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <CounterItem 
              key={index}
              end={counter.end}
              label={counter.label}
              suffix={counter.suffix || ''}
              color={colors[index % colors.length]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
