

export default function AdminUsersList({ token }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch('https:thecodecreater-backend.onrender.com/api/admin/users', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.users) setUsers(data.users);
        else setError(data.message || 'Failed to fetch users');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, [token]);

  return (
    <div className="bg-[#1e293b]/90 rounded-2xl p-6 shadow-2xl border border-pink-400/30 flex flex-col">
      <h3 className="text-xl font-bold text-pink-400 mb-4">All Users</h3>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : error ? (
        <div className="text-red-400">{error}</div>
      ) : users.length === 0 ? (
        <div className="text-slate-400">No users found.</div>
      ) : (
        <table className="w-full text-white text-sm">
          <thead>
            <tr className="text-cyan-400 border-b border-cyan-900/40">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Joined</th>
              <th className="py-2">Last Login</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} className="border-b border-cyan-900/20 hover:bg-cyan-900/10">
                <td className="py-2">{u.name}</td>
                <td className="py-2">{u.email}</td>
                <td className="py-2">{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : ''}</td>
                <td className="py-2">{u.lastLogin ? new Date(u.lastLogin).toLocaleString() : 'Never'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
