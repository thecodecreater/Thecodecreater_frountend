import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4  vignette">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2"
      >
        <span className="text-accent-blue">Contact</span> Us
      </motion.h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-8"></div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto glass-card flex flex-col gap-6 p-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded-lg px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded-lg px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-lg px-4 py-3 bg-black/40 text-white placeholder:text-gray-400 border border-accent-blue focus:border-accent-blue outline-none transition-all"
        />
        <button
          type="submit"
          className="neon-btn w-full text-lg"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="text-accent-blue text-center">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
      </form>
      <div className="h-1 w-32 mx-auto mt-8 rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue"></div>
    </section>
  );
}
