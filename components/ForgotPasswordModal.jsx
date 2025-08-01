import { useState } from 'react';

export default function ForgotPasswordModal({ open, onClose }) {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!open) return null;
  
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res = await fetch('https://thecodecreater-backend.onrender.com/api/users/forgot-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send OTP');
      setStep(2); setSuccess('OTP sent to your email!');
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res = await fetch('https://thecodecreater-backend.onrender.com/api/users/verify-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Invalid OTP');
      setStep(3); setSuccess('OTP verified! Set your new password.');
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match'); setLoading(false); return;
    }
    try {
      const res = await fetch('https://thecodecreater-backend.onrender.com/api/users/reset-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, otp, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to reset password');
      setSuccess('Password changed! You can now login.');
      setTimeout(() => { onClose(); }, 1800);
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{background:'rgba(255,255,255,0.40)',backdropFilter:'blur(8px)'}}>
      <div className="relative rounded-2xl p-8 w-full max-w-md shadow-xl border-b-4 overflow-hidden" style={{background:'rgba(255,255,255,0.95)',borderColor:'#EFCFA0',boxShadow:'0 8px 32px 0 rgba(239,207,160,0.12)'}}>
        <svg className="absolute -top-8 -left-12 w-40 h-40 z-0 opacity-25 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#d4e9e2" d="M47.8,-61.2C62.7,-56.6,75.2,-46.2,77.7,-33.7C80.2,-21.2,72.7,-6.6,67.2,8.7C61.7,24,58.1,40.1,48.5,51.5C38.9,62.9,23.2,69.6,7.3,68.2C-8.6,66.7,-17.2,57.1,-29.2,50.2C-41.2,43.3,-56.6,39.1,-67.1,29.3C-77.5,19.5,-83,4.1,-78.7,-8.6C-74.4,-21.2,-60.2,-31.2,-47.6,-35.9C-35,-40.6,-23.9,-39.9,-13.6,-50.1C-3.2,-60.2,6.5,-81.3,18.7,-84.8C30.9,-88.3,45.5,-74.3,47.8,-61.2Z" transform="translate(100 100)" /></svg>
        <svg className="absolute bottom-0 right-0 w-28 h-28 z-0 opacity-20 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#EFCFA0" d="M46.6,-67.5C61.7,-61.2,73.2,-46.7,75.5,-31.2C77.8,-15.7,70.9,0.8,65.2,17.7C59.5,34.6,55,51.9,44.2,62.7C33.3,73.4,16.2,77.6,2.3,74.7C-11.6,71.8,-23.2,61.7,-35.2,53.3C-47.2,44.9,-59.7,38.1,-69.7,26.7C-79.7,15.2,-87.2,-0.9,-82.4,-13.9C-77.6,-26.9,-60.5,-36.8,-46.4,-42.5C-32.3,-48.2,-21.1,-49.7,-9.9,-58.2C1.3,-66.7,12.7,-82.3,25.7,-83.1C38.7,-83.9,53.2,-69.8,46.6,-67.5Z" transform="translate(100 100)" /></svg>
        <h2 className="relative text-2xl font-extrabold mb-4 font-serif z-10" style={{color:'#00754A',letterSpacing:'-1px'}}>Forgot Password
          <span className="absolute left-0 -bottom-2 w-28 h-1 rounded-full" style={{background:'linear-gradient(90deg,#EFCFA0 0%,#d4e9e2 100%)'}}></span>
        </h2>
        <form className="flex flex-col gap-4 z-10" onSubmit={step===1?handleSendOtp:step===2?handleVerifyOtp:handleResetPassword}>
          {step===1 && (
            <input type="email" className="rounded-xl p-3 bg-white border" style={{borderColor:'#EFCFA0',color:'#00754A'}} placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} required />
          )}
          {step===2 && (
            <input type="text" className="rounded-xl p-3 bg-white border" style={{borderColor:'#EFCFA0',color:'#00754A'}} placeholder="Enter OTP" value={otp} onChange={e=>setOtp(e.target.value)} required />
          )}
          {step===3 && (
            <>
              <input type="password" className="rounded-xl p-3 bg-white border" style={{borderColor:'#EFCFA0',color:'#00754A'}} placeholder="New Password" value={password} onChange={e=>setPassword(e.target.value)} required />
              <input type="password" className="rounded-xl p-3 bg-white border" style={{borderColor:'#EFCFA0',color:'#00754A'}} placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required />
            </>
          )}
          {error && <div className="text-orange-600 text-center font-bold mt-2">{error}</div>}
          {success && <div className="text-green-600 text-center font-bold mt-2">{success}</div>}
          <div className="flex gap-2 mt-2">
            <button type="submit" className="flex-1 py-3 rounded-full font-bold shadow-lg text-lg transition-all duration-300" style={{background:'linear-gradient(90deg,#00754A 0%,#EFCFA0 100%)',color:'#fff',border:'none'}} disabled={loading}>
              {loading ? (step===1?'Sending...':step===2?'Verifying...':'Saving...') : (step===1?'Send OTP':step===2?'Verify OTP':'Change Password')}
            </button>
            <button type="button" className="flex-1 py-3 rounded-full font-bold text-lg transition-all duration-300" style={{background:'#EFCFA0',color:'#00754A'}} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
