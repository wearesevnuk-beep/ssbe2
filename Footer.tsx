
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: Page) => {
    window.location.hash = page;
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-ssbe-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col items-start">
               <span className="text-3xl font-black tracking-tighter text-ssbe-purple">SSBE</span>
               <span className="text-[8px] uppercase font-bold tracking-[0.15em] text-ssbe-gold mt-1">
                 Sevn School of Business & Entrepreneurship
               </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Alternative Provision provider in Walsall supporting young people to rebuild confidence, rediscover ambition and move forward positively.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-ssbe-gold">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-ssbe-gold transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-ssbe-gold transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('aim')} className="hover:text-ssbe-gold transition-colors">AIM Programme</button></li>
              <li><button onClick={() => handleNavClick('parents')} className="hover:text-ssbe-gold transition-colors">Parents & Carers</button></li>
              <li><button onClick={() => handleNavClick('referrals')} className="hover:text-ssbe-gold transition-colors">Referrals</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-ssbe-gold">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ssbe-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@ssbe.co.uk
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ssbe-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                01922 333547
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-ssbe-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Unit 13, Old Square,<br/>Walsall WS1 1PY
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-ssbe-gold">Safeguarding</h4>
            <p className="text-gray-400 text-sm mb-4">
              The safety and wellbeing of young people is central to everything we do at SSBE.
            </p>
            <div className="w-12 h-1 bg-ssbe-purple rounded-full"></div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 mt-8 text-center text-gray-600 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} The Sevn School of Business and Entrepreneurship (SSBE). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
