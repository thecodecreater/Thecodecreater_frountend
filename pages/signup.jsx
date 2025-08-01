import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Sign up for TheCodeCreater and unlock premium digital agency services, web development, SEO, and more." />
        <meta name="keywords" content="Signup, Register, Digital Agency, Web Development, SEO, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecodecreater.com/signup" />
        <meta property="og:title" content="Sign Up | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Sign up for TheCodeCreater and unlock premium digital agency services, web development, SEO, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/signup" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Sign up for TheCodeCreater and unlock premium digital agency services, web development, SEO, and more." />
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
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #d4e9e2 0%, #fff 60%, #EFCFA0 100%)'}}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 rounded-2xl shadow-xl flex flex-col gap-5" style={{background: 'rgba(255,255,255,0.95)', borderBottom: '5px solid #EFCFA0', boxShadow: '0 8px 32px 0 rgba(239,207,160,0.1)'}}>
        <h2 className="text-3xl font-extrabold text-center font-serif mb-1" style={{color: '#00754A', letterSpacing: '-1px'}}>Sign Up</h2>
        <div className="w-12 h-1 mb-5 mx-auto rounded-full" style={{background: 'linear-gradient(90deg, #EFCFA0 0%, #d4e9e2 100%)'}}></div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-xl bg-white border" style={{borderColor: '#EFCFA0', color: '#000'}}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-xl bg-white border" style={{borderColor: '#EFCFA0', color: '#000'}}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-3 rounded-xl bg-white border" style={{borderColor: '#EFCFA0', color: '#000'}}
          required
        />
        {error && <div className="text-red-500 text-center text-sm">{error}</div>}
        {success && <div className="text-green-600 text-center text-sm">{success}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-full font-bold shadow-lg text-lg transition-all duration-300"
          style={{background: 'linear-gradient(90deg, #00754A 0%, #EFCFA0 100%)', color: '#fff', border: 'none'}}
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
