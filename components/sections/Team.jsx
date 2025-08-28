import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Vasim Belim',
    role: 'Founder',
    image: '/images/founder1.png',
    social: [
      { platform: 'twitter', url: '#', icon: <FaTwitter /> },
      { platform: 'linkedin', url: '#', icon: <FaLinkedinIn /> },
      { platform: 'github', url: '#', icon: <FaGithub /> }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Hardik Ranka',
    role: 'Founder',
    image: '/images/founde2.jpg',
    social: [
      { platform: 'twitter', url: '#', icon: <FaTwitter /> },
      { platform: 'linkedin', url: '#', icon: <FaLinkedinIn /> },
      { platform: 'dribbble', url: '#', icon: <FaDribbble /> }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Lucky Agrwaal',
    role: 'Founder',
    image: '/images/founder3.jpeg',
    social: [
      { platform: 'twitter', url: '#', icon: <FaTwitter /> },
      { platform: 'linkedin', url: '#', icon: <FaLinkedinIn /> },
      { platform: 'github', url: '#', icon: <FaGithub /> }
    ],
    color: 'from-orange-500 to-amber-500'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet The <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Founders</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to bringing your vision to life with creativity and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative overflow-hidden bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-80 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-x-3">
                    {member.social.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                        aria-label={`${member.name}'s ${social.platform}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
