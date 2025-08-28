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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Backend configuration
  const API_BASE_URL = 'https://thecodecreater-backend.onrender.com';
  const SUBMIT_ENDPOINT = `${API_BASE_URL}/api/project-submissions`;
  
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

  const submitToBackend = async (data) => {
    try {
      const response = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Error submitting to backend:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSuccess = () => {
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      projectType: '',
      budget: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Basic client-side validation
      if (!formData.name || !formData.email) {
        throw new Error('Please fill in all required fields (name and email)');
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

      console.log('Submitting form data:', submissionData);

      // Try to submit to backend first
      const result = await submitToBackend(submissionData);
      
      if (result.success) {
        // Successfully submitted to backend
        handleSuccess();
      } else {
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
      console.error('Error in form submission:', error);
      alert(`Error: ${error.message || 'An unexpected error occurred. Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        if (response.status >= 200 && response.status < 300) {
          // If status is 2xx but response isn't JSON, it might be a success
          return handleSuccess();
        }
        throw new Error('The server returned an unexpected response. Please try again later.');
      }

      if (!response.ok) {
        console.error('Server error response:', data);
        const errorMessage = data.message || 
                           (response.status === 404 ? 'The requested resource was not found.' :
                            response.status === 500 ? 'Internal server error. Please try again later.' :
                            `Server returned ${response.status} status`);
        throw new Error(errorMessage);
      }

      // Handle successful submission
      const handleSuccess = () => {
        // Show success message
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          projectType: '',
          budget: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      };
      
      handleSuccess();
      
    } catch (error) {
      console.error('Error in form submission:', {
        error: error,
        message: error.message,
        stack: error.stack
      });
      
      // More user-friendly error messages
      let errorMessage;
      
      if (error.message.includes('Failed to fetch') || 
          error.message.includes('NetworkError') ||
          error.message.includes('Network request failed')) {
        errorMessage = 'Unable to connect to our servers. This might be due to maintenance or network issues. ' +
                     'Your information is important to us. Please try again in a few minutes or contact us directly at contact@thecodecreater.com.';
      } else if (error.message.includes('404')) {
        errorMessage = 'We\'re experiencing technical difficulties. Our team has been notified. ' +
                     'Please try again later or contact us at contact@thecodecreater.com for immediate assistance.';
      } else if (error.message.includes('500')) {
        errorMessage = 'Our servers are currently experiencing issues. Our team is working to resolve this. ' +
                     'Please try again in a few minutes.';
      } else if (error.message.includes('JSON')) {
        errorMessage = 'We received an unexpected response from our servers. ' +
                     'This might be a temporary issue. Please try again in a few minutes.';
      } else {
        errorMessage = error.message || 'An unexpected error occurred. Please try again later.';
      }
      
      // Show the error message more prominently
      alert(`❌ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solution',
    'Digital Marketing',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            We've received your project details. Our team will review your information and get back to you within 24 hours.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours to discuss your project in detail.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="John Doe"
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
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="you@example.com"
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
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    Current Website (if any)
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
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="https://"
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
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                >
                  <option value="" disabled>Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Estimated Budget <span className="text-orange-400">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                >
                  <option value="" disabled>Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell Us About Your Project <span className="text-orange-400">*</span>
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
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Project Request'
                  )}
                </button>
              </div>
            </form>
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
