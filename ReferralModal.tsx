
import React, { useState } from 'react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // In a production environment, this would call a Google Apps Script or Formspree endpoint.
    // This endpoint would: 
    // 1. Append the data to a Google Sheet.
    // 2. Send an email notification to gavin@ssbe.co.uk.
    
    console.log('Sending referral request for:', formData);
    
    // Simulate API latency
    setTimeout(() => {
      setStatus('success');
      // Reset form after success
      setFormData({ name: '', email: '', phone: '' });
    }, 1800);
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-ssbe-purple focus:bg-white placeholder-gray-400";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-ssbe-purple transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-ssbe-purple/10 text-ssbe-purple rounded-full flex items-center justify-center mx-auto animate-bounce">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black">Request Sent</h3>
            <p className="text-gray-500 leading-relaxed">
              Thank you. We have notified Gavin of your enquiry. We will send the referral pack to <span className="text-ssbe-purple font-bold">your email</span> shortly.
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-ssbe-dark text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-ssbe-purple transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2">Request Referral Form</h3>
              <p className="text-gray-500 text-sm">Please provide your details and we will send the formal referral pack to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={inputClasses}
                  placeholder="07123 456 789"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full bg-ssbe-purple text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-ssbe-purple/20 transition-all ${
                    status === 'submitting' ? 'opacity-50 cursor-not-allowed scale-95' : 'hover:bg-ssbe-gold hover:text-ssbe-dark hover:scale-[1.02]'
                  }`}
                >
                  {status === 'submitting' ? 'Processing Notification...' : 'Request Referral Pack'}
                </button>
              </div>

              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-6">
                Direct Notification will be sent to Gavin
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralModal;
