
import React from 'react';

const Parents: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-ssbe-gold py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-ssbe-dark mb-6">
              Supporting Your Child's Journey
            </h1>
            <p className="text-xl text-ssbe-dark/80 font-bold leading-relaxed">
              We understand that when a young person struggles in education, it can be worrying and overwhelming for families. We're here to help.
            </p>
          </div>
        </div>
      </header>

      <section id="parents-approach" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black mb-6">A Different Approach</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our Ambition in Mind (AIM) programme provides a calmer, more supportive environment where your child can feel safe, understood and motivated to move forward.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6">What Your Child Will Experience:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>Small group learning or 1:1 support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>Positive relationships with consistent staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>Vocational skills like Music, Photography and Enterprise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>A calm and respectful environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>Clear routines without pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ssbe-gold font-bold">✓</span>
                    <span>Opportunities to talk and be listened to</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="parents-suitability" className="space-y-8 scroll-mt-24">
              <div className="p-8 bg-ssbe-dark text-white rounded-3xl relative overflow-hidden">
                <h3 className="text-2xl font-black mb-4 text-ssbe-gold">Is AIM Right For My Child?</h3>
                <p className="mb-6 text-gray-300">AIM may be suitable if your child is:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold">
                  <li className="flex items-center gap-2">• Anxious or unhappy in school</li>
                  <li className="flex items-center gap-2">• Stopped attending regularly</li>
                  <li className="flex items-center gap-2">• At risk of exclusion</li>
                  <li className="flex items-center gap-2">• Struggling with motivation</li>
                  <li className="flex items-center gap-2">• Overwhelmed by classrooms</li>
                  <li className="flex items-center gap-2">• Unsure about their future</li>
                </ul>
              </div>

              <div id="parents-safeguarding" className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm scroll-mt-24">
                <h3 className="text-2xl font-black mb-4">Safety First</h3>
                <p className="text-gray-600 text-sm mb-6">Your child’s safety is our priority. We work closely with schools and local authorities to keep young people safe.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">DBS Checked Staff</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">Robust Safeguarding</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">Risk Assessments</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">Regular Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parents-partnership" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-16">Working in Partnership With Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-ssbe-gold rounded-full mx-auto mb-4 flex items-center justify-center text-ssbe-dark font-bold">1</div>
              <h4 className="font-bold mb-2">Progress Updates</h4>
              <p className="text-gray-500 text-sm">We share regular progress updates so you know exactly how your child is doing.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-ssbe-gold rounded-full mx-auto mb-4 flex items-center justify-center text-ssbe-dark font-bold">2</div>
              <h4 className="font-bold mb-2">Open Communication</h4>
              <p className="text-gray-500 text-sm">We believe in honest, transparent dialogue between staff and families.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-ssbe-gold rounded-full mx-auto mb-4 flex items-center justify-center text-ssbe-dark font-bold">3</div>
              <h4 className="font-bold mb-2">Future Planning</h4>
              <p className="text-gray-500 text-sm">We support transition planning to ensure your child has clear next steps after AIM.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;
