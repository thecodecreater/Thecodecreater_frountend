import { useRouter } from 'next/router';
import Head from 'next/head';
// SEO meta tags enhanced by Cascade AI
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/blogs`)
        .then(res => res.json())
        .then(data => setBlog(data.find(b => b._id === id)));
    }
  }, [id]);

  if (!blog) return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    <>
      <Head>
        <title>{blog.title} | Blog | Moer Nunie Agency</title>
        <meta name="description" content={blog.content?.slice(0, 150) + '...'} />
        <meta name="keywords" content={blog.tags?.join(', ') || 'Blog, Digital Agency, Moer Nunie'} />
        <meta name="author" content={blog.author || 'Moer Nunie'} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourwebsite.com/blog/${blog._id}`} />
        <meta property="og:title" content={`${blog.title} | Blog | Moer Nunie Agency`} />
        <meta property="og:description" content={blog.content?.slice(0, 150) + '...'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourwebsite.com/blog/${blog._id}`} />
        <meta property="og:image" content={blog.image || 'https://yourwebsite.com/og-image.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | Blog | Moer Nunie Agency`} />
        <meta name="twitter:description" content={blog.content?.slice(0, 150) + '...'} />
        <meta name="twitter:image" content={blog.image || 'https://yourwebsite.com/og-image.jpg'} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full bg-[#1e293b]/90 rounded-2xl shadow-xl p-8">
          <Image src={blog.image || '/blog-default.jpg'} alt={blog.title} width={700} height={400} className="rounded-xl mb-6" />
          <h1 className="text-3xl font-bold text-white mb-2">{blog.title}</h1>
          <div className="flex gap-2 mb-4">
            {blog.tags?.map(tag => (
              <span key={tag} className="text-xs bg-pink-900/40 text-pink-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-slate-300 mb-6">{blog.content}</p>
          <button onClick={() => router.back()} className="px-6 py-2 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-700 transition">Back to Blog</button>
        </div>
      </div>
    </>
  );
}
