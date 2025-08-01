import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPreview() {

  return (
    <>
      <Head>
        <title>Portfolio Preview | Moer Nunie Agency</title>
        <meta name="description" content="Portfolio page preview is coming soon!" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#10182a] via-[#181c40] to-[#0a0f1b] px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="glass-card rounded-3xl p-10 flex flex-col items-center max-w-lg w-full border-2 border-cyan-400/80 shadow-[0_0_32px_8px_#00FFFF44,0_0_8px_2px_#0ff] bg-white/10 backdrop-blur-lg"
        >
          <svg className="mb-6 text-cyan-400 drop-shadow-neon-blue" width="70" height="70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white neon-text mb-4 text-center drop-shadow-neon-blue">Portfolio Page Preview</h1>
          <p className="text-lg md:text-xl text-cyan-100 mb-8 text-center font-medium">This page is <span className='text-cyan-400 font-bold'>under construction</span>.<br/>Page preview is <span className="text-pink-400 font-bold">coming soon</span>!<br/>Stay tuned for <span className="text-yellow-300 font-bold">amazing updates</span>.</p>
          <Link href="/" className="neon-btn px-10 py-3 text-xl font-extrabold bg-white text-accent-blue border-2 border-accent-blue rounded-2xl shadow-[0_0_8px_2px_#00FFFF44] hover:bg-accent-blue hover:text-white hover:shadow-[0_0_16px_4px_#00FFFF88] hover:scale-105 transition-all duration-300 mt-4">Back to Home</Link>
        </motion.div>
      </div>
    </>
  );
}
