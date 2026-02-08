
import React from 'react';
import PathwayCarousel from '../components/PathwayCarousel';

const AIM: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-ssbe-dark text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h4 className="text-ssbe-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Flagship Alternative Provision Pathway</h4>
          <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">Ambition <br/>in Mind (AIM)</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            For young people aged 14–19 who are unable to engage successfully in mainstream education and require a flexible, trauma-informed environment.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none transform translate-y-1/4 translate-x-1/4">
          <span className="text-[20rem] font-black leading-none">AIM</span>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-6">What is AIM?</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Rather than replicating a traditional classroom model, AIM provides a calm, homely and relationship-led environment where young people can re-engage with learning at their own pace.
                </p>
                <p>
                  We recognise that engagement must come before attainment — and that confidence, trust and wellbeing are essential foundations for success.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-ssbe-gold block"></span>
                Who AIM Is For
              </h3>
              <ul className="space-y-3">
                {[
                  "Disengaged from mainstream education",
                  "At risk of exclusion or becoming NEET",
                  "SEMH needs impacting learning",
                  "Care-experienced or adverse childhood experiences",
                  "Supported by Inclusion, Social Care, or Youth Justice"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                    <svg className="w-5 h-5 text-ssbe-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">The Three Pillars of AIM</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-ssbe-gold/10 mb-6">01</div>
              <h3 className="text-2xl font-black mb-4">Accredited Learning</h3>
              <p className="text-gray-500 mb-6 text-sm">NCFE-accredited qualifications in Business and Enterprise.</p>
              <ul className="space-y-2 text-sm font-semibold text-gray-700">
                <li>• Employability & Workplace Skills</li>
                <li>• Enterprise Awareness</li>
                <li>• Financial Decision Making</li>
                <li>• Career Exploration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-ssbe-gold/10 mb-6">02</div>
              <h3 className="text-2xl font-black mb-4">Vocational Pathways</h3>
              <p className="text-gray-500 mb-6 text-sm">Practical pathways to increase engagement and creativity.</p>
              <ul className="space-y-2 text-sm font-semibold text-gray-700">
                <li>• Music Production</li>
                <li>• Photography & Creative Media</li>
                <li>• Hair and Beauty</li>
                <li>• Transferable Soft Skills</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-ssbe-gold/10 mb-6">03</div>
              <h3 className="text-2xl font-black mb-4">Emotional Support</h3>
              <p className="text-gray-500 mb-6 text-sm">Removing psychological barriers to engagement.</p>
              <ul className="space-y-2 text-sm font-semibold text-gray-700">
                <li>• Targeted 1:1 Counselling</li>
                <li>• Trauma-Informed Delivery</li>
                <li>• Consistent Adult Mentoring</li>
                <li>• Resilience Building</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 italic">Exploring Vocational Interests</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover the practical skills and creative environments that make our AIM programme unique.</p>
          </div>
          
          <PathwayCarousel />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black mb-10">Delivery Model</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-ssbe-dark text-white flex-shrink-0 flex items-center justify-center rounded-xl font-bold">A</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Personalised Environment</h4>
                  <p className="text-gray-500 text-sm">Small group learning and 1:1 support in a calm, non-institutional, homely setting.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-ssbe-dark text-white flex-shrink-0 flex items-center justify-center rounded-xl font-bold">B</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Flexible Timetables</h4>
                  <p className="text-gray-500 text-sm">Attendance options ranging from 2 days (re-engagement) to full-time Alternative Provision.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-ssbe-dark text-white flex-shrink-0 flex items-center justify-center rounded-xl font-bold">C</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Tailored Durations</h4>
                  <p className="text-gray-500 text-sm">Placements spanning 6 weeks (stabilisation), 12 weeks (standard), or 24 weeks (complex needs).</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-ssbe-gold/10 p-10 rounded-[3rem] border-4 border-white shadow-2xl">
             <h3 className="text-2xl font-black mb-6">Expected Outcomes</h3>
             <ul className="space-y-4">
                {[
                  "Improved attendance & engagement",
                  "Increased confidence & self-belief",
                  "Improved emotional regulation",
                  "NCFE Accredited Outcomes",
                  "Clear progression into Education/Employment"
                ].map((item, i) => (
                  <li key={i} className="bg-white p-4 rounded-2xl flex items-center gap-4 font-bold shadow-sm">
                    <div className="w-6 h-6 bg-ssbe-gold rounded-full flex items-center justify-center text-ssbe-dark">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIM;
