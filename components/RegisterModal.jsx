import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterModal({ open, onClose, onRegisterSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      setSuccess('Registration successful!');
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      setLoading(false);
      if (onRegisterSuccess) onRegisterSuccess();
      onClose();
      router.push('/user-dashboard');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0f172a] rounded-2xl shadow-2xl p-8 w-full max-w-sm border-2 border-cyan-800 relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-3 right-3 text-cyan-400 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
    </div>
  );
}
