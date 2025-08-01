import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Create your account at TheCodeCreater to access premium digital services, web development, SEO, and more." />
        <meta name="keywords" content="Register, Sign Up, Digital Agency, Web Development, SEO, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecodecreater.com/register" />
        <meta property="og:title" content="Register | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Create your account at TheCodeCreater to access premium digital services, web development, SEO, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/register" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Create your account at TheCodeCreater to access premium digital services, web development, SEO, and more." />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      setSuccess('Registration successful!');
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      router.push('/user-dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
      <form onSubmit={handleSubmit} className="bg-[#0f172a] p-8 rounded-2xl shadow-2xl w-full max-w-sm border-2 border-cyan-800 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-slate-800 text-white border border-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-slate-800 text-white border border-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-3 rounded bg-slate-800 text-white border border-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error && <div className="text-red-400 text-center text-sm">{error}</div>}
        {success && <div className="text-green-400 text-center text-sm">{success}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
