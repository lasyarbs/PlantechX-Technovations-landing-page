import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { submitDemoRequest } from '../services/demoRequestService';

const DemoModal: React.FC = () => {
  const { isModalOpen, closeModal } = useDemoModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitDemoRequest(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', institution: '', message: '' });
        closeModal();
      }, 2000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Failed to submit demo request. Please try again.');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="backdrop-blur-lg border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
        {!isSubmitted ? (
          <>
            <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}>
              <div>
                <h2 className="text-2xl font-inter font-bold text-white">Request a Demo</h2>
                <p className="mt-1" style={{ color: '#C7C7C7' }}>
                  See PlantechX in action. We'll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} style={{ color: '#C7C7C7' }} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#C7C7C7' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 bg-white/5 text-white"
                    style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#C7C7C7' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 bg-white/5 text-white"
                    style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-2" style={{ color: '#C7C7C7' }}>
                  Institution/Organization *
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 bg-white/5 text-white"
                  style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}
                  placeholder="Enter your institution name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#C7C7C7' }}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 resize-vertical bg-white/5 text-white"
                  style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}
                  placeholder="Tell us about your specific requirements or questions..."
                />
              </div>

              <div className="backdrop-blur-lg p-4 rounded-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
                <p className="text-sm" style={{ color: '#C7C7C7' }}>
                  By submitting this form, you agree to receive communications from PlantechX about our 
                  products and services. We respect your privacy and will never share your information 
                  with third parties.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border text-white rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
                  style={{ borderColor: '#C7C7C7' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(to right, #800020, #A00030)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Request Demo
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)' }}>
              <CheckCircle size={40} style={{ color: '#800020' }} />
            </div>
            <h2 className="text-2xl font-inter font-bold text-white mb-4">
              Demo Request Submitted!
            </h2>
            <p className="text-lg mb-6" style={{ color: '#C7C7C7' }}>
              Thank you for your interest in PlantechX. Our team will contact you within 24 hours 
              to schedule your personalized demo.
            </p>
            <div className="backdrop-blur-lg p-4 rounded-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)' }}>
              <p className="text-sm" style={{ color: '#C7C7C7' }}>
                In the meantime, feel free to explore our features section or contact us directly
                at <a href="mailto:demo@plantechx.com" className="hover:underline" style={{ color: '#800020' }}>demo@plantechx.com</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;