
import React, { useState } from 'react';
import { Page, NavItem } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="flex flex-col items-start">
    <div className="flex items-baseline leading-none">
       <span className="text-3xl font-black tracking-tighter text-ssbe-purple" style={{ fontFamily: 'sans-serif' }}>SSBE</span>
    </div>
    <span className={`text-[8px] uppercase font-bold tracking-[0.15em] mt-0.5 ${light ? 'text-ssbe-gold' : 'text-ssbe-gold'}`}>
      Sevn School of Business & Entrepreneurship
    </span>
  </div>
);

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'AIM Programme', page: 'aim' },
    { label: 'Parents & Carers', page: 'parents' },
    { label: 'Referrals', page: 'referrals' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    window.location.hash = page;
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 flex items-center group py-2"
            >
              <Logo />
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-ssbe-purple ${
                  currentPage === item.page ? 'text-ssbe-purple' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('referrals')}
              className="bg-ssbe-purple text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-ssbe-purple/20 hover:scale-105 active:scale-95 transition-all"
            >
              Refer Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-ssbe-purple focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                  currentPage === item.page ? 'bg-ssbe-purple/10 text-ssbe-purple' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-3">
              <button 
                onClick={() => handleNavClick('referrals')}
                className="w-full bg-ssbe-purple text-white py-3 rounded-lg font-bold"
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
