
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-ssbe-dark mb-4">
            The Sevn School of Business <br/>
            & Entrepreneurship
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-medium">
            Walsall's premier Alternative Provision focusing on engagement, confidence, and employability.
          </p>
        </div>
      </header>

      <section id="about-purpose" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-ssbe-dark mb-6">Our Purpose</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    We believe every young person has potential, but not every young person has had access to the environments, opportunities or support needed to realise it.
                  </p>
                  <p>
                    Many of the young people we work with have experienced disrupted education, emotional or mental health challenges, care experience or sustained disadvantage. These experiences can affect confidence, motivation and belief in future possibilities.
                  </p>
                  <p className="font-bold text-ssbe-dark">
                    Our role is to rebuild those foundations — helping young people feel safe, capable and hopeful about what comes next.
                  </p>
                </div>
              </div>

              <div id="about-approach" className="scroll-mt-24">
                <h2 className="text-3xl font-black text-ssbe-dark mb-6">Our Approach</h2>
                <p className="text-xl font-bold text-ssbe-gold mb-4 italic">"At SSBE, engagement comes before attainment."</p>
                <ul className="space-y-4">
                  {[
                    "Trauma-informed and relationship-led",
                    "Delivered in calm, non-institutional settings",
                    "Flexible to meet individual needs",
                    "Focused on real-world vocational skills (Music, Photography, Media)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-gray-700">
                      <div className="w-2 h-2 bg-ssbe-gold rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="about-differentiation" className="bg-ssbe-dark p-8 rounded-3xl text-white relative overflow-hidden group scroll-mt-24">
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-8 text-ssbe-gold">What Makes Us Different</h2>
                <p className="mb-10 text-gray-300">SSBE focuses on progression, not just placement. Through AIM, young people are supported to:</p>
                <div className="space-y-4">
                  {[
                    "Re-engage with learning",
                    "Build confidence and self-belief",
                    "Develop skills in Music, Photography & Hair & Beauty",
                    "Achieve accredited outcomes",
                    "Identify realistic and positive next steps"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-ssbe-gold font-bold">0{idx + 1}</div>
                      <div className="font-bold">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-ssbe-gold/5 rounded-full blur-3xl group-hover:bg-ssbe-gold/10 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-partnership" className="py-20 bg-gray-50 border-y border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Working in Partnership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We value open communication and shared responsibility to ensure placements are safe, appropriate and effective.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
            <span className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">Schools & Academies</span>
            <span className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">Local Authority Inclusion Teams</span>
            <span className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">Social Care</span>
            <span className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">Youth Justice Services</span>
            <span className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">Virtual School</span>
          </div>
        </div>
      </section>

      <section id="about-vision" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-12">Our Vision</h2>
          <p className="text-2xl text-ssbe-dark max-w-4xl mx-auto italic font-medium leading-relaxed">
            "Our vision is to ensure young people who have been disengaged, overlooked or underestimated are given the opportunity to rebuild confidence, rediscover ambition and move forward positively."
          </p>
          <div className="mt-12 flex justify-center">
             <div className="w-24 h-1 bg-ssbe-gold rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
