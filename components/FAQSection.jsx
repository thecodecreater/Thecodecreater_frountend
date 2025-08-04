import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/faqs`;

export default function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(null);

  useEffect(() => {
  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setFaqs(data);
    } catch (err) {
      setFaqs([]);
    }
    setLoading(false);
  };
  fetchFaqs();
  // Removed interval polling for FAQ fetch
}, []);

  return (
    <section id="faq" className="py-20 px-4  vignette">
      <h2 className="text-3xl md:text-5xl font-bold text-center font-extrabold text-white mb-2">
        Frequently Asked <span className="text-accent-blue">Questions</span>
      </h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-accent-blue via-primary-dark to-accent-blue mb-12"></div>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {loading ? (
          <div className="text-center text-white/70">Loading FAQs...</div>
        ) : faqs.length === 0 ? (
          <div className="text-center text-white/60">No FAQs found.</div>
        ) : faqs.map((faq, idx) => (
          <div key={idx} className="glass-card border-2 border-accent-blue shadow-neon-blue">
            <button
              className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="text-lg md:text-xl font-semibold text-white">
                {faq.question}
              </span>
              <span className="text-accent-blue ml-4">
                {open === idx ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out px-6 ${open === idx ? 'max-h-[1000px] py-2' : 'max-h-0 py-0'}`}
              style={{ color: '#b0b0b0' }}
            >
              {open === idx && (
                <p className="subtext-premium text-base md:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}