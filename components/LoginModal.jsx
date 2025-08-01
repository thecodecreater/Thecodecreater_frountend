import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginModal({ open, onClose, onLoginSuccess }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      setLoading(false);
      if (onLoginSuccess) onLoginSuccess();
      onClose();
      router.push('/user-dashboard');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-accent-blue hover:text-white neon-glow text-2xl font-bold transition"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-6 text-center neon-glow heading-glow">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="glass-card border-2 border-accent-blue px-4 py-3 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-blue placeholder:text-accent-blue/80 neon-glow transition-all duration-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="glass-card border-2 border-accent-blue px-4 py-3 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-blue placeholder:text-accent-blue/80 neon-glow transition-all duration-300"
            required
          />
          {error && <div className="text-red-400 text-sm mt-4 text-center">{error}</div>}
          <button
            type="submit"
            className="neon-btn py-3 rounded-lg font-bold text-lg transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
