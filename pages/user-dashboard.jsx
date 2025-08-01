
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import UserSidebar from '../components/UserSidebar';
import UserTopbar from '../components/UserTopbar';
import UserMessagesSection from '../components/UserMessagesSection';
import ProfileUpdateModal from '../components/ProfileUpdateModal';

export default function UserDashboard() {
  return (
    <>
      <Head>
        <title>User Dashboard | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Access your personalized dashboard at TheCodeCreater. Manage your projects, profile, and more with our digital agency." />
        <meta name="keywords" content="User Dashboard, Profile, Projects, Digital Agency, TheCodeCreater" />
        <meta name="author" content="TheCodeCreater Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://thecodecreater.com/user-dashboard" />
        <meta property="og:title" content="User Dashboard | TheCodeCreater Digital Agency" />
        <meta property="og:description" content="Access your personalized dashboard at TheCodeCreater. Manage your projects, profile, and more with our digital agency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecodecreater.com/user-dashboard" />
        <meta property="og:image" content="https://thecodecreater.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="User Dashboard | TheCodeCreater Digital Agency" />
        <meta name="twitter:description" content="Access your personalized dashboard at TheCodeCreater. Manage your projects, profile, and more with our digital agency." />
        <meta name="twitter:image" content="https://thecodecreater.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    const t = localStorage.getItem('token');
    if (!stored || !t) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(stored));
    setToken(t);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>User Dashboard | Moer Nunie Agency</title>
        <meta name="description" content="User dashboard for managing your profile, messages, and activity at Moer Nunie Digital Agency." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Moer Nunie Digital Agency" />
        <meta property="og:title" content="User Dashboard | Moer Nunie Agency" />
        <meta property="og:description" content="User dashboard for managing your profile, messages, and activity at Moer Nunie Digital Agency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/user-dashboard" />
      </Head>
      <div className="min-h-screen flex flex-col bg-premium-gradient vignette">
        <div className="flex flex-1 min-h-screen">
          {/* Sidebar */}
          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <UserTopbar user={user} onLogout={handleLogout} />
            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Profile Widget */}
                <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent-blue shadow-neon-blue mb-2">
                    <img src="/avatar-default.png" alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-1 break-words flex items-center gap-2 font-serif neon-glow heading-glow">
                    {user.name}
                  </h2>
                  <div className="text-lg sm:text-xl text-accent-blue text-center break-words flex items-center gap-2 font-medium">
                    {user.email}
                  </div>
                  <div className="text-sm text-accent-blue text-center flex items-center gap-2 mt-2">
                    <button
                      className="mt-2 neon-btn px-4 py-2 text-sm"
                      onClick={() => setShowProfileModal(true)}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                {/* Stats Widget */}
                <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2 font-serif neon-glow heading-glow">
                    My Stats
                  </h3>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2 text-accent-blue">
                      <span className="font-bold">Total Messages:</span> <span className="font-bold text-white">0</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-blue">
                      <span className="font-bold">Last Login:</span> <span className="font-bold text-white">Today</span>
                    </div>
                  </div>
                </div>
                {/* Activity Feed Widget (dummy) */}
                <div className="glass-card border-2 border-accent-blue shadow-neon-blue rounded-2xl p-6 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2 font-serif neon-glow heading-glow">
                    Recent Activity
                  </h3>
                  <ul className="text-accent-blue text-base sm:text-lg flex flex-col gap-3 font-medium">
                    <li className="flex items-center gap-2"><span className="text-accent-blue">•</span> Logged in successfully</li>
                    <li className="flex items-center gap-2"><span className="text-accent-blue">•</span> Registered account</li>
                    <li className="flex items-center gap-2"><span className="text-accent-blue/70">•</span> No recent activity</li>
                  </ul>
                </div>
              </div>
            </main>
            {/* My Messages Section (full width) */}
            <div className="mt-8">
              <UserMessagesSection user={user} token={token} />
            </div>
            {/* Real-time Chat Section */}
            <div className="mt-8">
              {/* Chat Section Placeholder */}
            </div>
          </div>
        </div>
        <ProfileUpdateModal
          user={user}
          token={token}
          open={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onUpdate={updatedUser => {
            setUser({ ...user, ...updatedUser });
            setShowProfileModal(false);
          }}
        />
      </div>
    </>
  );
}
