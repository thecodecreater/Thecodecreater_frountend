import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPreview() {
  return (
    <>
      <Head>
        <title>Blog Preview | Moer Nunie Agency</title>
        <meta name="description" content="Blog page preview is coming soon!" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#10121a] via-[#0a0e1a] to-[#13132a] px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="glass-card bg-black/60 rounded-3xl p-10 flex flex-col items-center max-w-lg w-full border-2 border-accent-blue shadow-[0_0_32px_8px_#00FFFF99] backdrop-blur-lg"
        >
          <svg className="mb-6" width="70" height="70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-extrabold text-accent-blue heading-glow mb-4 text-center">Blog Page Preview</h1>
          <p className="text-lg text-white/80 mb-8 text-center subtext-premium">This page is <span className='text-accent-blue font-bold'>under construction</span>.<br/>Page preview is <span className="text-accent-blue font-bold">coming soon</span>!<br/>Stay tuned for amazing updates.</p>
          <Link href="/" className="neon-btn bg-white text-black border-2 border-accent-blue font-bold px-8 py-3 rounded-xl shadow-[0_0_16px_4px_#00FFFF88] hover:bg-accent-blue hover:text-white hover:shadow-[0_0_32px_8px_#00FFFF99] hover:scale-105 transition-all duration-300 mt-4 text-lg backdrop-blur-md">Back to Home</Link>
        </motion.div>
      </div>
    </>
  );
}
