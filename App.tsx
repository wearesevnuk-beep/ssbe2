
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';
import Home from './pages/Home';
import About from './pages/About';
import AIM from './pages/AIM';
import Parents from './pages/Parents';
import Referrals from './pages/Referrals';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      const parts = fullHash.split('-');
      const pageCandidate = parts[0] as Page;
      const sectionId = fullHash;

      const validPages: Page[] = ['home', 'about', 'aim', 'parents', 'referrals', 'contact'];
      
      if (validPages.includes(pageCandidate)) {
        setCurrentPage(pageCandidate);
        
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'aim': return <AIM />;
      case 'parents': return <Parents />;
      case 'referrals': return <Referrals onRequestForm={() => setIsReferralModalOpen(true)} />;
      case 'contact': return <Contact onRequestForm={() => setIsReferralModalOpen(true)} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      <ReferralModal 
        isOpen={isReferralModalOpen} 
        onClose={() => setIsReferralModalOpen(false)} 
      />
    </div>
  );
};

export default App;
