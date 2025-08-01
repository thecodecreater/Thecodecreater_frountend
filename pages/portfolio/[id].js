import { useRouter } from 'next/router';
import Head from 'next/head';
// SEO meta tags enhanced by Cascade AI
import Image from 'next/image';

// Dummy data for demo; replace with API fetch if needed
const projects = [
  {
    id: '1',
    title: 'Brand Website',
    image: '/portfolio1.jpg',
    desc: 'A modern, animated brand website with custom UI and smooth transitions.',
    tags: ['Web', 'Brand', 'UI/UX']
  },
  {
    id: '2',
    title: 'SEO Boost',
    image: '/portfolio2.jpg',
    desc: 'SEO campaign that ranked client in top 3 for 10+ keywords.',
    tags: ['SEO', 'Marketing']
  },
  {
    id: '3',
    title: 'Promo Video',
    image: '/portfolio3.jpg',
    desc: 'High-impact promo video for product launch.',
    tags: ['Video', 'Promo']
  },
  {
    id: '4',
    title: 'Creative Design',
    image: '/portfolio4.jpg',
    desc: 'Branding and design system for a startup.',
    tags: ['Design', 'Brand']
  },
  {
    id: '5',
    title: 'E-commerce',
    image: '/portfolio5.jpg',
    desc: 'Full-featured e-commerce platform with payment integration.',
    tags: ['Web', 'Shop']
  }
];

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    <>
      <Head>
        <title>{project.title} | Portfolio | Moer Nunie Agency</title>
        <meta name="description" content={project.desc?.slice(0, 150) + '...'} />
        <meta name="keywords" content={project.tags?.join(', ') || 'Portfolio, Digital Agency, Moer Nunie'} />
        <meta name="author" content="Moer Nunie" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourwebsite.com/portfolio/${project.id}`} />
        <meta property="og:title" content={`${project.title} | Portfolio | Moer Nunie Agency`} />
        <meta property="og:description" content={project.desc?.slice(0, 150) + '...'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourwebsite.com/portfolio/${project.id}`} />
        <meta property="og:image" content={project.image || 'https://yourwebsite.com/og-image.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Portfolio | Moer Nunie Agency`} />
        <meta name="twitter:description" content={project.desc?.slice(0, 150) + '...'} />
        <meta name="twitter:image" content={project.image || 'https://yourwebsite.com/og-image.jpg'} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full bg-[#1e293b]/90 rounded-2xl shadow-xl p-8">
          <Image src={project.image} alt={project.title} width={700} height={400} className="rounded-xl mb-6" />
          <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
          <div className="flex gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-slate-300 mb-6">{project.desc}</p>
          <button onClick={() => router.back()} className="px-6 py-2 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-700 transition">Back to Portfolio</button>
        </div>
      </div>
    </>
  );
}
