

export default function AdminTestimonialsCRUD({ token }) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', content: '', avatar: '', rating: 5 });
  const [editId, setEditId] = useState(null);

  const fetchTestimonials = () => {
    setLoading(true);
    fetch('https://thecodecreater-backend.onrender.com/api/admin/testimonials', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.testimonials) setTestimonials(data.testimonials);
        else setError(data.message || 'Failed to fetch testimonials');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load testimonials');
        setLoading(false);
      });
  };

  useEffect(() => { if (token) fetchTestimonials(); }, [token]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `https://thecodecreater-backend.onrender.com/api/admin/testimonials/${editId}` : 'https://thecodecreater-backend.onrender.com/api/admin/testimonials';
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      setForm({ name: '', content: '', avatar: '', rating: 5 });
      setEditId(null);
      fetchTestimonials();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = testimonial => {
    setForm({
      name: testimonial.name,
      content: testimonial.content,
      avatar: testimonial.avatar || '',
      rating: testimonial.rating || 5
    });
    setEditId(testimonial._id);
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this testimonial?')) return;
    try {
      const res = await fetch(`https://thecodecreater-backend.onrender.com/api/admin/testimonials/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      fetchTestimonials();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#1e293b]/90 rounded-2xl p-6 shadow-2xl border border-pink-400/30 flex flex-col mb-8">
      <h3 className="text-xl font-bold text-pink-400 mb-4">Testimonials CRUD</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="rounded p-2 bg-[#0f172a] text-white border border-cyan-900/40" />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required className="rounded p-2 bg-[#0f172a] text-white border border-cyan-900/40" />
        <input type="text" name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar URL" className="rounded p-2 bg-[#0f172a] text-white border border-cyan-900/40" />
        <input type="number" name="rating" value={form.rating} min="1" max="5" onChange={handleChange} placeholder="Rating (1-5)" className="rounded p-2 bg-[#0f172a] text-white border border-cyan-900/40" />
        <button type="submit" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-2 rounded-full hover:scale-105 transition-all">{editId ? 'Update' : 'Add'} Testimonial</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ name: '', content: '', avatar: '', rating: 5 }); }} className="text-yellow-400 mt-1">Cancel Edit</button>}
        {error && <div className="text-red-400 mt-1">{error}</div>}
      </form>
      {loading ? <div className="text-white">Loading...</div> : testimonials.length === 0 ? <div className="text-slate-400">No testimonials found.</div> : (
        <table className="w-full text-white text-sm">
          <thead>
            <tr className="text-cyan-400 border-b border-cyan-900/40">
              <th className="py-2">Name</th>
              <th className="py-2">Content</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map(t => (
              <tr key={t._id} className="border-b border-cyan-900/20 hover:bg-cyan-900/10">
                <td className="py-2">{t.name}</td>
                <td className="py-2">{t.content.substring(0, 30)}...</td>
                <td className="py-2">{t.rating}</td>
                <td className="py-2 flex gap-2">
                  <button onClick={() => handleEdit(t)} className="text-yellow-400">Edit</button>
                  <button onClick={() => handleDelete(t._id)} className="text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
