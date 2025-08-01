

export default function AdminMessagesList({ token }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch('https:thecodecreater-backend.onrender.com/api/admin/messages', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.messages) setMessages(data.messages);
        else setError(data.message || 'Failed to fetch messages');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load messages');
        setLoading(false);
      });
  }, [token]);

  return (
    <div className="bg-[#1e293b]/90 rounded-2xl p-6 shadow-2xl border border-yellow-400/30 flex flex-col">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">All Contact Messages</h3>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : error ? (
        <div className="text-red-400">{error}</div>
      ) : messages.length === 0 ? (
        <div className="text-slate-400">No messages found.</div>
      ) : (
        <ul className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2">
          {messages.map(msg => (
            <li key={msg._id} className="bg-[#0f172a]/80 rounded-xl p-4 border border-cyan-900/40">
              <div className="font-semibold text-cyan-300 mb-1">{msg.name} ({msg.email})</div>
              <div className="text-white">{msg.message}</div>
              <div className="text-xs text-yellow-400 mt-2">{new Date(msg.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
