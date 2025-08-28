import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiCheck, FiMail, FiPhone, FiUser, FiGlobe, FiMessageSquare } from 'react-icons/fi';
import Header from '../components/Header';

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Backend configuration
  const API_URL = 'https://thecodecreater-backend.onrender.com/api/project-submissions';
  
  // Function to save form data to local storage
  const saveToLocalStorage = (data) => {
    try {
      const pendingSubmissions = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
      pendingSubmissions.push({
        ...data,
        timestamp: new Date().toISOString(),
        status: 'pending'
      });
      localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
      return true;
    } catch (error) {
      console.error('Error saving to local storage:', error);
      return false;
    }
  };

  const handleSuccess = () => {
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      projectType: '',
      budget: '',
      message: ''
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      // Basic validation
      if (!formData.name || !formData.email) {
        throw new Error('Name and email are required');
      }

      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || '',
        website: formData.website.trim() || '',
        projectType: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        message: formData.message.trim() || ''
      };

      // Try to submit to backend
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData)
        });

        if (!response.ok) {
          throw new Error('Server error');
        }
        
        handleSuccess();
        return;
      } catch (backendError) {
      
      
      Code
      
      SWE-1
        console.log('Backend submission failed, trying offline save...', backendError);
        // If backend fails, save to local storage
        const saved = saveToLocalStorage(submissionData);
        
        if (saved) {
          alert('We\'ve saved your information offline. We\'ll try to submit it later.');
          handleSuccess();
        } else {
          throw new Error('Failed to save your information. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solution',
    'Custom Software',
    'Other'
  ];

  const budgetRanges = [
    'Less than $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure'
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Start Your Project - The Code Creator</title>
        <meta name="description" content="Start your next project with us. Let's build something amazing together!" />
      </Head>
      
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">
              Start Your Project
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours to discuss your project.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-500/20 text-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-6">We've received your submission and will get back to you soon.</p>
                <Link href="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors">
                  <FiArrowLeft className="mr-2" /> Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name <span className="text-orange-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-orange-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website (if any)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiGlobe className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type <span className="text-orange-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none"
                    required
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget <span className="text-orange-400">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none"
                    required
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="h-5 w-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>We'll never share your information with anyone else. By submitting this form, you agree to our <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StartProject;
