
import React, { useState } from 'react';

interface ContactProps {
  onRequestForm: () => void;
}

const Contact: React.FC<ContactProps> = ({ onRequestForm }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-ssbe-purple focus:ring-offset-2 focus:bg-white focus:shadow-lg focus:-translate-y-0.5 placeholder-gray-400";

  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-500 font-medium">
            Whether you are a parent, carer, or professional, we are always happy to talk and answer your questions.
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black mb-8 border-l-4 border-ssbe-purple pl-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-ssbe-purple/10 rounded-full flex items-center justify-center text-ssbe-purple transition-transform group-hover:scale-110 duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                      <h5 className="font-bold text-gray-900">Email Address</h5>
                      <p className="text-gray-500">info@ssbe.co.uk</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-ssbe-purple/10 rounded-full flex items-center justify-center text-ssbe-purple transition-transform group-hover:scale-110 duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                   <div>
                      <h5 className="font-bold text-gray-900">Phone Number</h5>
                      <p className="text-gray-500">01922 333547</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-ssbe-purple/10 rounded-full flex items-center justify-center text-ssbe-purple transition-transform group-hover:scale-110 duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <div>
                      <h5 className="font-bold text-gray-900">Our Location</h5>
                      <p className="text-gray-500">Unit 13, Old Square, Walsall WS1 1PY</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-ssbe-dark rounded-[2.5rem] text-white transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-ssbe-purple/10 border border-ssbe-purple/20">
              <h4 className="text-xl font-black mb-4 text-ssbe-gold text-center uppercase tracking-widest italic">Referrals</h4>
              <p className="text-gray-400 text-sm mb-8 text-center leading-relaxed">
                Referrers are encouraged to contact SSBE directly to discuss suitability, availability and start dates.
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={onRequestForm}
                  className="bg-ssbe-purple text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-ssbe-gold hover:text-ssbe-dark transition-colors"
                >
                   Request Referral Form
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border border-gray-100 rounded-[3rem] p-10 shadow-2xl transition-all duration-500">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-[fadeIn_0.6s_ease-out]">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black">Thank You!</h3>
                <p className="text-gray-600">Your message has been received. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-ssbe-purple font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className={isSubmitting ? "opacity-40 pointer-events-none grayscale transition-all duration-500" : "transition-all duration-500"}>
                <h3 className="text-2xl font-black mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className={inputClasses} 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className={inputClasses} 
                        placeholder="name@email.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">I am a...</label>
                    <div className="relative">
                      <select className={`${inputClasses} appearance-none cursor-pointer`}>
                        <option>Professional / Commissioning Body</option>
                        <option>Parent or Carer</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">How can we help?</label>
                    <textarea 
                      required
                      rows={4} 
                      className={inputClasses} 
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`group relative w-full bg-ssbe-purple text-white py-4 rounded-2xl font-black tracking-[0.3em] uppercase text-xs shadow-xl transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-700 cursor-not-allowed scale-95' 
                        : 'hover:bg-ssbe-gold hover:text-ssbe-dark hover:scale-[1.02] active:scale-[0.98] shadow-ssbe-purple/20'
                    }`}
                  >
                    <span className={`flex items-center justify-center gap-2 ${isSubmitting ? 'animate-pulse' : ''}`}>
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </span>
                  </button>
                </form>
              </div>
            )}
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ssbe-purple/5 rounded-full blur-2xl transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
