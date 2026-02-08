
import React from 'react';

interface ReferralsProps {
  onRequestForm: () => void;
}

const Referrals: React.FC<ReferralsProps> = ({ onRequestForm }) => {
  return (
    <div className="animate-fade-in">
      <header className="bg-ssbe-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-6xl font-black mb-6">Professional <br/><span className="text-ssbe-gold">Referrals</span></h1>
              <p className="text-lg text-gray-400">
                A flexible, trauma-informed alternative for young people aged 14-19 (Years 10-13) in Walsall, offering pathways in Business, Music, Photography and Hair & Beauty.
              </p>
            </div>
            <div className="bg-ssbe-gold text-ssbe-dark p-6 rounded-2xl font-bold flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-widest mb-1 opacity-60">Status</span>
              <span className="text-lg">Placements Available</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-black mb-6">Who Can Refer?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Schools & Academies",
                  "Local Authority Inclusion",
                  "Social Workers",
                  "Youth Justice Services",
                  "Virtual School",
                  "Multi-Agency Panels"
                ].map((org, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl font-bold text-gray-700">
                    <div className="w-2 h-2 bg-ssbe-gold rounded-full"></div>
                    {org}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-ssbe-gold/5 p-8 rounded-3xl border border-ssbe-gold/20">
              <h3 className="text-xl font-black mb-4">Placement Commissioning</h3>
              <p className="text-gray-600 mb-6">
                SSBE is an approved provider on the <strong>Walsall Council Alternative Provision Framework</strong>. All placements are commissioned in line with local authority arrangements.
              </p>
              <div className="flex gap-4">
                <span className="bg-ssbe-dark text-white px-4 py-2 rounded-full text-xs font-bold">KS4 (Year 10-11)</span>
                <span className="bg-ssbe-dark text-white px-4 py-2 rounded-full text-xs font-bold">Post-16 (Year 12-13)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-black text-center mb-16">The Referral Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Enquiry", desc: "Contact us to discuss suitability, current availability and potential start dates." },
              { step: "02", title: "Information", desc: "Provide details on background, SEMH/SEND needs, and risk assessments." },
              { step: "03", title: "Review", desc: "Our team reviews the referral to ensure the placement is appropriate and safe." },
              { step: "04", title: "Agreement", desc: "Attendance patterns and review points are agreed with the commissioning body." }
            ].map((item, i) => (
              <div key={i} className="relative pt-12">
                <div className="absolute top-0 left-0 text-5xl font-black text-ssbe-gold/20">{item.step}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black mb-8">Suitable For</h3>
            <ul className="space-y-4">
              {[
                "Disengaged from mainstream education",
                "At risk of exclusion or becoming NEET",
                "SEMH needs affecting engagement",
                "Care-experienced or adverse experiences",
                "Benefit from reduced-pressure environment"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm font-semibold border-l-4 border-green-500">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-8">Not Suitable For</h3>
            <ul className="space-y-4">
              {[
                "Requiring specialist clinical or therapeutic provision",
                "Presenting high/unmanaged level of risk",
                "Requires secure or high-custody supervision"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm font-semibold border-l-4 border-red-500">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ssbe-gold text-ssbe-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6">Ready to discuss a referral?</h2>
          <p className="text-xl font-bold mb-10 opacity-80">Contact our team today to request a referral form or schedule an initial consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onRequestForm}
              className="bg-ssbe-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Request Referral Form
            </button>
            <a href="tel:01922333547" className="bg-white text-ssbe-dark px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform border border-ssbe-dark/10">
              Call 01922 333547
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referrals;
