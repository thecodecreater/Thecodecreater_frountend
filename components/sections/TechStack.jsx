import { FaReact, FaNodeJs, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: <FaReact className="text-blue-500 text-2xl" />
    },
    {
      title: 'Backend',
      tech: ['Node.js', 'Express', 'REST APIs', 'Microservices'],
      icon: <FaNodeJs className="text-green-500 text-2xl" />
    },
    {
      title: 'Database',
      tech: ['MongoDB', 'Mongoose', 'Database Design', 'Data Modeling'],
      icon: <FaDatabase className="text-yellow-500 text-2xl" />
    },
    {
      title: 'DevOps',
      tech: ['Docker', 'AWS', 'CI/CD', 'Git'],
      icon: <FaMobileAlt className="text-purple-500 text-2xl" />
    }
  ];

  return (
    <section id="tech-stack" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Tech Stack
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use the latest technologies to build amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.tech.map((tech, i) => (
                  <li key={i} className="text-gray-300">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
