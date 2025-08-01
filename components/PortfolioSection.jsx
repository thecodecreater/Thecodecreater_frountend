import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load portfolio');
        setLoading(false);
      });
  }, []);

  return (
    <section id="portfolio" className="py-20 px-4  vignette">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2"
      >
        Our <span className="text-accent-blue">Portfolio</span>
      </motion.h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-12"></div>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full text-center text-accent-blue/60 text-lg">Loading...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-400 text-lg">{error}</div>
        ) : projects.length === 0 ? (
          <div className="col-span-full text-center text-accent-blue/60 text-lg">No projects found.</div>
        ) : (
          projects.map((proj, i) => (
            <Link href="/portfolio-preview" passHref legacyBehavior>
              <motion.a
                key={proj.id}
                className="group glass-card border-2 border-accent-blue shadow-neon-blue rounded-xl overflow-hidden text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-[110%] h-64 ml-[-5%]">
                  {proj.image && (
                    <Image
                      src={
                        proj.image.startsWith('http')
                          ? proj.image
                          : proj.image.startsWith('/')
                          ? proj.image
                          : '/' + proj.image.replace(/^\\|^\//, '').replace(/\\/g, '/')
                      }
                      alt={proj.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top center"
                      className="group-hover:scale-110 transition-transform duration-500"
                      priority={i === 0}
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold heading-glow mb-2 group-hover:text-accent-blue transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {proj.tags && proj.tags.map(tag => (
                      <span key={tag} className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
