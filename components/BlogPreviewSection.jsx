import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreviewSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0, 3)))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <section id="blog" className="py-20 px-4  vignette">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2"
      >
        Latest <span className="text-accent-blue">Blog Posts</span>
      </motion.h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-12"></div>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => {
          console.log('BLOG IMAGE:', blog.image);
          return (
            <Link href="/blog-preview" passHref legacyBehavior>
              <motion.a
                key={blog._id}
                className="group glass-card border-2 border-accent-blue shadow-neon-blue rounded-xl overflow-hidden text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={
                      blog.image
                        ? blog.image.startsWith('http')
                          ? blog.image
                          : blog.image.startsWith('/')
                          ? blog.image
                          : '/' + blog.image.replace(/^\\|^\//, '').replace(/\\/g, '/')
                        : '/blog-default.jpg'
                    }
                    alt={blog.title}
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                    priority={i === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold heading-glow mb-2 group-hover:text-accent-blue transition-colors">
                    {blog.title}
                  </h3>
                  <p className="subtext-premium text-sm line-clamp-3 mb-2">
                    {blog.content?.slice(0, 110) || ''}...
                  </p>
                  <span className="text-xs text-accent-blue">{blog.author || 'Admin'}</span>
                </div>
              </motion.a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
