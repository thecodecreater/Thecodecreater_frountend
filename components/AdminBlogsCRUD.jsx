

export default function AdminBlogsCRUD({ token }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', content: '', image: '', author: '', tags: '' });
  const [editId, setEditId] = useState(null);

  const fetchBlogs = () => {
    setLoading(true);
    fetch('https://thecodecreater-backend.onrender.com/api/admin/blogs', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.blogs) setBlogs(data.blogs);
        else setError(data.message || 'Failed to fetch blogs');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load blogs');
        setLoading(false);
      });
  };

  useEffect(() => { if (token) fetchBlogs(); }, [token]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `https://thecodecreater-backend.onrender.com/api/admin/blogs/${editId}` : 'https://thecodecreater-backend.onrender.com/api/admin/blogs';
    const body = { ...form, tags: form.tags.split(',').map(t => t.trim()) };
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      setForm({ title: '', content: '', image: '', author: '', tags: '' });
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = blog => {
    setForm({
      title: blog.title,
      content: blog.content,
      image: blog.image || '',
      author: blog.author || '',
      tags: blog.tags ? blog.tags.join(', ') : ''
    });
    setEditId(blog._id);
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this blog?')) return;
    try {
      const res = await fetch(`https://thecodecreater-backend.onrender.com/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      fetchBlogs();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-cream/90 rounded-2xl p-6 shadow-xl border border-gold/40 flex flex-col mb-8">
      <h3 className="text-2xl font-extrabold text-primary mb-1 font-serif tracking-tight">Blogs CRUD</h3>
      <div className="w-10 h-1 mb-6 rounded-full bg-gradient-to-r from-gold via-gold/80 to-gold/40"></div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="rounded p-2 bg-white text-primary border border-gold/30 focus:border-gold outline-none" />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required className="rounded p-2 bg-white text-primary border border-gold/30 focus:border-gold outline-none" />
        <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="rounded p-2 bg-white text-primary border border-gold/30 focus:border-gold outline-none" />
        <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Author" className="rounded p-2 bg-white text-primary border border-gold/30 focus:border-gold outline-none" />
        <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="rounded p-2 bg-white text-primary border border-gold/30 focus:border-gold outline-none" />
        <button type="submit" className="bg-gradient-to-r from-gold to-primary text-white font-bold py-2 rounded-full hover:scale-105 hover:shadow-gold/40 transition-all">{editId ? 'Update' : 'Add'} Blog</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ title: '', content: '', image: '', author: '', tags: '' }); }} className="text-gold mt-1">Cancel Edit</button>}
        {error && <div className="text-red-400 mt-1">{error}</div>}
      </form>
      {loading ? <div className="text-primary">Loading...</div> : blogs.length === 0 ? <div className="text-slate-400">No blogs found.</div> : (
        <table className="w-full bg-white/80 text-primary text-sm rounded-xl overflow-hidden">
          <thead>
            <tr className="text-gold border-b border-gold/30 bg-white/90">
              <th className="py-2">Title</th>
              <th className="py-2">Author</th>
              <th className="py-2">Created</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id} className="border-b border-gold/10 hover:bg-gold/10">
                <td className="py-2">{blog.title}</td>
                <td className="py-2">{blog.author}</td>
                <td className="py-2">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="py-2 flex gap-2">
                  <button onClick={() => handleEdit(blog)} className="text-gold hover:underline">Edit</button>
                  <button onClick={() => handleDelete(blog._id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
