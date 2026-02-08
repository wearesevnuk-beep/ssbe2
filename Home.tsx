
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleNavClick = (page: Page) => {
    window.location.hash = page;
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ssbe-dark text-white py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1/1920/1080?grayscale" 
            alt="Students in a creative environment" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Engagement <br/>
              <span className="text-ssbe-gold">Before</span> Attainment.
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
              Alternative Provision in Walsall supporting young people who need a different approach to learning. 
              We focus on trauma-informed pathways that rebuild foundations and rediscover ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavClick('referrals')}
                className="bg-ssbe-purple text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-ssbe-purple/30"
              >
                Refer a Young Person
              </button>
              <button 
                onClick={() => handleNavClick('aim')}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-ssbe-gold px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
              >
                Our AIM Programme
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-ssbe-gold py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 sm:gap-16">
          <span className="text-ssbe-dark font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Walsall Council Approved
          </span>
          <span className="text-ssbe-dark font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            NCFE Accredited
          </span>
          <span className="text-ssbe-dark font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Trauma Informed
          </span>
        </div>
      </div>

      {/* Overview Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Rebuilding Foundations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">We provide a supportive, trauma-informed environment for young people (Aged 14-19) who are struggling in mainstream education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-3xl border-b-4 border-ssbe-purple group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-ssbe-purple/10 flex items-center justify-center rounded-xl mb-6 text-ssbe-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Relationship Led</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We prioritise trust, consistency, and positive adult relationships, creating an environment where young people can re-engage at their own pace.</p>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border-b-4 border-ssbe-purple group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-ssbe-purple/10 flex items-center justify-center rounded-xl mb-6 text-ssbe-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Real-World Skills</h3>
              <p className="text-gray-500 text-sm leading-relaxed">From Business Enterprise to Music, Photography and Hair & Beauty, our pathways are focused on practical employability and personal confidence.</p>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border-b-4 border-ssbe-purple group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-ssbe-purple/10 flex items-center justify-center rounded-xl mb-6 text-ssbe-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Safe & Supportive</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Delivered in calm, non-institutional settings with robust safeguarding and quality assurance processes aligned with local authority standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programme Teaser */}
      <section className="bg-ssbe-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ssbe-purple/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <img 
              src="https://picsum.photos/id/6/800/600" 
              alt="Ambition in Mind Programme" 
              className="rounded-[3rem] shadow-2xl border-2 border-ssbe-purple/30 relative z-10"
            />
          </div>
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-ssbe-gold font-black uppercase tracking-[0.3em] text-xs mb-6">Flagship Programme</h3>
            <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-tight italic">Ambition in Mind</h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              AIM combines NCFE-accredited Business qualifications with practical vocational pathways like music and photography. 
              We provide the space for young people to re-engage with learning at their own pace.
            </p>
            <button 
              onClick={() => handleNavClick('aim')}
              className="group bg-ssbe-purple text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all hover:bg-ssbe-gold hover:text-ssbe-dark"
            >
              Learn more about AIM
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-ssbe-gold text-ssbe-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black italic mb-10 leading-tight">
            "We believe every young person has potential, but not every young person has had access to the environments needed to realise it."
          </h2>
          <button 
            onClick={() => handleNavClick('about')}
            className="bg-ssbe-dark text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl"
          >
            Our Vision
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
