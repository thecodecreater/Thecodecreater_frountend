import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminUsersList from '../components/AdminUsersList';
import AdminMessagesList from '../components/AdminMessagesList';
import AdminBlogsCRUD from '../components/AdminBlogsCRUD';
import AdminTestimonialsCRUD from '../components/AdminTestimonialsCRUD';
import AdminCommentsModeration from '../components/AdminCommentsModeration';


import Head from 'next/head';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Admin dashboard to manage users, projects, and content for TheCodeCreater digital agency website." />
        <meta name="keywords" content="Admin Dashboard, Admin Panel, Digital Agency, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://thecodecreater.com/admin-dashboard" />
        <meta property="og:title" content="Admin Dashboard | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Admin dashboard to manage users, projects, and content for TheCodeCreater digital agency website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/admin-dashboard" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admin Dashboard | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Admin dashboard to manage users, projects, and content for TheCodeCreater digital agency website." />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    setToken(token);
    fetch('http://localhost:5000/api/admin/users', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.users) {
          setUsers(data.users);
          setSelectedUser(data.users[0]);
        }
      });
    fetch('http://localhost:5000/api/admin/messages', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.messages) {
          setMessages(data.messages);
        }
      });
    fetch('http://localhost:5000/api/admin/blogs', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.blogs) {
          setBlogs(data.blogs);
        }
      });
    fetch('http://localhost:5000/api/admin/testimonials', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.testimonials) {
          setTestimonials(data.testimonials);
        }
      });
    fetch('http://localhost:5000/api/admin/comments', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.comments) {
          setComments(data.comments);
        }
      });
  }, []);

  if (!token) return null;

  return (
    <>
      <Head>
        <title>Admin Dashboard | Moer Nunie Agency</title>
        <meta name="description" content="Admin panel for managing users, messages, blogs, testimonials, and comments at Moer Nunie Digital Agency." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Moer Nunie Digital Agency" />
        <meta property="og:title" content="Admin Dashboard | Moer Nunie Agency" />
        <meta property="og:description" content="Admin panel for managing users, messages, blogs, testimonials, and comments at Moer Nunie Digital Agency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/admin-dashboard" />
      </Head>
      <div className="min-h-screen flex flex-col bg-cream p-8 gap-8">
      <h1 className="text-3xl font-extrabold text-center text-primary mb-1 font-serif tracking-tight">Admin Dashboard</h1>
      <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-gold via-gold/80 to-gold/40"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/90 rounded-2xl p-4 shadow-xl border border-gold/30">
          <AdminUsersList token={token} users={users} />
        </div>
        <div className="bg-white/90 rounded-2xl p-4 shadow-xl border border-gold/30">
          <AdminMessagesList token={token} messages={messages} />
        </div>
      </div>
      <AdminBlogsCRUD token={token} blogs={blogs} />
      <AdminTestimonialsCRUD token={token} testimonials={testimonials} />
      <AdminCommentsModeration token={token} comments={comments} />
      {/* Real-time User-Admin Chat */}
      <div className="my-8">
        <h2 className="text-2xl text-primary font-bold mb-2 font-serif">Chat with Users</h2>
        <div className="flex gap-4">
          <div className="w-1/4 bg-white/80 rounded-xl p-3 border border-gold/30 h-[500px] overflow-y-auto shadow-md">
            <h3 className="text-lg text-primary mb-2">Users</h3>
            {users.length === 0 ? <div className="text-slate-400">No users</div> : (
              <ul className="flex flex-col gap-2">
                {users.map(u => (
                  <li key={u._id}>
                    <button onClick={() => setSelectedUser(u)}
                      className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gold/10 ${selectedUser && selectedUser._id === u._id ? 'bg-gold/20 text-gold font-bold' : 'text-primary'}`}>{u.name || u.email}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 bg-white/80 rounded-xl border border-gold/30 shadow-md p-2">
            {selectedUser && <div className="text-slate-400">Chat feature coming soon.</div>}
          </div>
        </div>
      </div>
    </div>
  </>);
}
