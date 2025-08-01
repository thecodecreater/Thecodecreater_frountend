import { useState } from 'react';

export default function ProfileUpdateModal({ user, token, open, onClose, onUpdate }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const body = { name, email };
    if (password && newPassword) {
      body.password = password;
      body.newPassword = newPassword;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Profile updated!');
        onUpdate(data.user);
      } else {
        setError(data.message || 'Update failed');
      }
    } catch {
      setError('Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* Abstract SVG blob bg */}
        <svg className="absolute -top-8 -left-12 w-40 h-40 z-0 opacity-25 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#d4e9e2" d="M47.8,-61.2C62.7,-56.6,75.2,-46.2,77.7,-33.7C80.2,-21.2,72.7,-6.6,67.2,8.7C61.7,24,58.1,40.1,48.5,51.5C38.9,62.9,23.2,69.6,7.3,68.2C-8.6,66.7,-17.2,57.1,-29.2,50.2C-41.2,43.3,-56.6,39.1,-67.1,29.3C-77.5,19.5,-83,4.1,-78.7,-8.6C-74.4,-21.2,-60.2,-31.2,-47.6,-35.9C-35,-40.6,-23.9,-39.9,-13.6,-50.1C-3.2,-60.2,6.5,-81.3,18.7,-84.8C30.9,-88.3,45.5,-74.3,47.8,-61.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-28 h-28 z-0 opacity-20 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EFCFA0" d="M46.6,-67.5C61.7,-61.2,73.2,-46.7,75.5,-31.2C77.8,-15.7,70.9,0.8,65.2,17.7C59.5,34.6,55,51.9,44.2,62.7C33.3,73.4,16.2,77.6,2.3,74.7C-11.6,71.8,-23.2,61.7,-35.2,53.3C-47.2,44.9,-59.7,38.1,-69.7,26.7C-79.7,15.2,-87.2,-0.9,-82.4,-13.9C-77.6,-26.9,-60.5,-36.8,-46.4,-42.5C-32.3,-48.2,-21.1,-49.7,-9.9,-58.2C1.3,-66.7,12.7,-82.3,25.7,-83.1C38.7,-83.9,53.2,-69.8,46.6,-67.5Z" transform="translate(100 100)" />
        </svg>
        <h2 className="relative text-2xl font-extrabold mb-4 neon-glow heading-glow z-10">Update Profile
          <span className="absolute left-0 -bottom-2 w-28 h-1 rounded-full bg-accent-blue/70"></span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 z-10">
          <input type="text" className="rounded-xl p-3 bg-black/40 text-white border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" className="rounded-xl p-3 bg-black/40 text-white border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" className="rounded-xl p-3 bg-black/40 text-white border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm" placeholder="Old Password (for password change)" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="password" className="rounded-xl p-3 bg-black/40 text-white border border-accent-blue focus:border-accent-blue outline-none transition-all shadow-sm backdrop-blur-sm" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <div className="flex gap-2 mt-2">
            <button type="submit" className="flex-1 neon-btn py-3 text-lg" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
            <button type="button" className="flex-1 py-3 rounded-full font-bold text-lg transition-all duration-300 bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/40 hover:text-white" onClick={onClose}>Cancel</button>
          </div>
          {success && <div className="text-green-600 text-center font-bold mt-2">{success}</div>}
          {error && <div className="text-orange-600 text-center font-bold mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}
