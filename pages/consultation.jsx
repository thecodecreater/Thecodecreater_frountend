import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: '',
    meeting: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Free Consultation | TheCodeCreater Digital Agency</title>
        <meta name="description" content="Book your free consultation with TheCodeCreater. Get expert advice for your project with a premium, multi-step experience." />
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-transparent pt-8 pb-16">
        <section className="w-full max-w-2xl bg-[#151e34]/80 rounded-2xl shadow-xl backdrop-blur p-8 mt-8 mb-8 border border-[#243354]">
          <h1 className="text-4xl font-extrabold text-white text-center mb-2 tracking-tight drop-shadow-lg">Book Your Free Consultation</h1>
          <p className="text-lg text-gray-300 text-center mb-8">Get expert advice for your website, app, or branding — absolutely free, no commitment.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <label className="block text-gray-200 mb-2">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4 outline-none" />
                  <label className="block text-gray-200 mb-2">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4 outline-none" />
                  <label className="block text-gray-200 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4 outline-none" />
                  <button type="button" onClick={handleNext} className="w-full py-3 mt-2 bg-[#7be0f6] text-[#101c3a] font-bold rounded-lg shadow hover:bg-[#5fc9e6] transition">Next</button>
                </div>
              )}
              {step === 2 && (
                <div>
                  <label className="block text-gray-200 mb-2">Project Type</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4">
                    <option value="">Select...</option>
                    <option value="Website">Website</option>
                    <option value="App">Mobile App</option>
                    <option value="Branding">Branding/Logo</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="block text-gray-200 mb-2">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4">
                    <option value="">Select...</option>
                    <option value="Below 10k">Below ₹10,000</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                  <div className="flex justify-between">
                    <button type="button" onClick={handleBack} className="py-2 px-6 bg-[#222b43] text-gray-200 rounded-lg shadow hover:bg-[#243354]">Back</button>
                    <button type="button" onClick={handleNext} className="py-2 px-6 bg-[#7be0f6] text-[#101c3a] font-bold rounded-lg shadow hover:bg-[#5fc9e6]">Next</button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <label className="block text-gray-200 mb-2">Brief Project Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4 outline-none" placeholder="Tell us about your project, goals, or any special requirements..."></textarea>
                  <label className="block text-gray-200 mb-2">Preferred Meeting Mode</label>
                  <select name="meeting" value={form.meeting} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#222b43] text-white mb-4">
                    <option value="">Select...</option>
                    <option value="Call">Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="Email">Email</option>
                  </select>
                  <div className="flex justify-between">
                    <button type="button" onClick={handleBack} className="py-2 px-6 bg-[#222b43] text-gray-200 rounded-lg shadow hover:bg-[#243354]">Back</button>
                    <button type="submit" className="py-2 px-6 bg-[#7be0f6] text-[#101c3a] font-bold rounded-lg shadow hover:bg-[#5fc9e6]">Submit</button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-[#7be0f6] mb-4">Thank you!</h2>
              <p className="text-lg text-gray-200 mb-2">Your consultation request has been received. Our team will contact you soon to schedule your free session.</p>
              <p className="text-md text-gray-400">Want a faster response? <a href="https://wa.me/919351901225" target="_blank" rel="noopener noreferrer" className="text-[#7be0f6] underline">WhatsApp us now</a>.</p>
            </div>
          )}
        </section>
        <div className="max-w-2xl mx-auto text-center mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">Why Book a Consultation?</h3>
          <ul className="text-gray-300 text-md mb-4 space-y-1 list-disc list-inside text-left inline-block">
            <li>Personalized project advice from experts</li>
            <li>Clarity on pricing, timelines, and process</li>
            <li>Ideas to maximize your business growth</li>
            <li>No obligation, 100% free</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
