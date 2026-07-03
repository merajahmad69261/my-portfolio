import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';

// Map certificates to categories statically for clean filtering
const certCategories = {
  "Programming In Java": ["Programming", "Java"],
  "Python for Data Science": ["Programming", "Python", "Data Analytics"],
  "Data Analytics Job Simulation": ["Data Analytics", "Forensic Technology"],
  "BGI Hackathon 2026": ["Hackathons", "AgriTech"],
  "Tech Sageathon 2K26": ["Hackathons"]
};

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories
  const categories = ["All", "Programming", "Data Analytics", "Hackathons"];

  // Filtered certificates
  const filteredCerts = certificates.featured.filter(cert => {
    if (selectedCategory === "All") return true;
    const tags = certCategories[cert.name] || [];
    return tags.includes(selectedCategory);
  });

  return (
    <section id="certificates" className="bg-[#c1b1a1] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Certifications
          </h2>
          <p className="text-[#3e342a] text-base md:text-lg font-bold max-w-lg mx-auto">
            Professional qualifications demonstrating specialized technical expertise.
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs md:text-sm font-bold rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-black text-white border-black shadow-lg scale-105'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-black hover:text-black/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid - Interactive Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-12 min-h-[300px]">
          {filteredCerts.map((cert, index) => (
            <div 
              key={cert.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setActiveCert(cert)}
              className="bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.03] hover:bg-black/35 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                    {cert.icon}
                  </span>
                  <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 group-hover:border-white/30 transition-colors">
                    Interactive PDF
                  </span>
                </div>

                <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#e0d5cb] transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                  {cert.issuer}
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-medium mb-6">
                  {cert.desc}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(certCategories[cert.name] || []).map(t => (
                  <span key={t} className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-[#f2eae1] bg-[#3e342a]/40 rounded border border-[#c1b1a1]/20">
                    {t}
                  </span>
                ))}
              </div>

              {/* View/Hover Visual Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#d5c7b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  Launch Viewer Panel
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Certificate Component */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex justify-center items-center p-4 backdrop-blur-lg animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          {/* Modal Container */}
          <div 
            className="bg-zinc-900 border border-white/10 max-w-4xl w-full rounded-3xl p-6 md:p-8 relative flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10 hover:rotate-90 transition-all duration-300 z-50"
              onClick={() => setActiveCert(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Meta */}
            <div className="text-center mb-4 mt-2 max-w-2xl">
              <h3 className="text-white text-2xl font-black tracking-tight">{activeCert.name}</h3>
              <p className="text-[#d5c7b8] text-xs font-mono font-bold uppercase tracking-widest mt-1">Issued by {activeCert.issuer}</p>
            </div>

            {/* Interactive Local PDF Preview */}
            <div className="w-full aspect-[4/3] max-h-[480px] bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-inner relative">
              <iframe 
                src={activeCert.link} 
                className="w-full h-full border-0" 
                title={`${activeCert.name} PDF Preview`}
              />
            </div>

            {/* Action buttons in modal */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {activeCert.verifyLink && (
                <a 
                  href={activeCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#c1b1a1] text-white font-bold hover:bg-[#b0a090] transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,177,161,0.4)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Verify Credential Online
                </a>
              )}
              
              <a 
                href={activeCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 border border-white/15 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full PDF / Download
              </a>

              <button 
                onClick={() => setActiveCert(null)}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-bold border border-white/10 transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
