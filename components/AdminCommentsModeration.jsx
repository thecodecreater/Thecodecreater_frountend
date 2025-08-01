

export default function AdminCommentsModeration({ token }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchComments = () => {
    setLoading(true);
    fetch('https://thecodecreater-backend.onrender.com/api/admin/comments', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.comments) setComments(data.comments);
        else setError(data.message || 'Failed to fetch comments');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load comments');
        setLoading(false);
      });
  };

  useEffect(() => { if (token) fetchComments(); }, [token]);

  const handleDelete = async id => {
    if (!window.confirm('Delete this comment?')) return;
    try {
      const res = await fetch(`https://thecodecreater-backend.onrender.com/api/admin/comments/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      fetchComments();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#1e293b]/90 rounded-2xl p-6 shadow-2xl border border-yellow-400/30 flex flex-col mb-8">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">Comments Moderation</h3>
      {loading ? <div className="text-white">Loading...</div> : error ? <div className="text-red-400">{error}</div> : comments.length === 0 ? <div className="text-slate-400">No comments found.</div> : (
        <ul className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2">
          {comments.map(c => (
            <li key={c._id} className="bg-[#0f172a]/80 rounded-xl p-4 border border-cyan-900/40">
              <div className="font-semibold text-cyan-300 mb-1">{c.user || 'Anonymous'} on <span className="text-pink-400">{c.blog?.title || 'Blog'}</span></div>
              <div className="text-white">{c.content}</div>
              <div className="text-xs text-yellow-400 mt-2">{new Date(c.createdAt).toLocaleString()}</div>
              <button onClick={() => handleDelete(c._id)} className="text-red-400 mt-2">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
