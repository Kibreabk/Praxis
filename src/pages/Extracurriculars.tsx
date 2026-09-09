import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { officialPrograms, officialCategories, type Program } from '../data/extracurriculars';

const getDomain = (url: string) => {
  if (url === '#') return '';
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch {
    return '';
  }
};

const getLogoUrl = (url: string) => {
  if (url === '#') return '';
  return `https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=128`;
};

export default function Extracurriculars() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [fundingFilter, setFundingFilter] = useState<string>('All'); // 'All', '100% Funded', 'Available'
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredPrograms = useMemo(() => {
    return officialPrograms.filter(program => {
      // Category Filter (OR logic: if any selected category matches)
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.some(cat => program.category.includes(cat));
      
      // Funding Filter
      let matchesFunding = true;
      if (fundingFilter === '100% Funded') {
        matchesFunding = program.financialAid.includes('100%') || program.financialAid.includes('Free');
      } else if (fundingFilter === 'Available') {
        matchesFunding = program.financialAid.toLowerCase().includes('available') || program.financialAid.includes('100%');
      }

      return matchesCategory && matchesFunding;
    });
  }, [selectedCategories, fundingFilter]);

  return (
    <main className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center relative z-20">
      
      {/* Header Section */}
      <div className="w-full text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-sans font-medium text-white mb-6 tracking-tight">
          Explore Extracurriculars
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover programs, research opportunities, and camps. Filter by your interests and funding needs to find the perfect fit.
        </p>
      </div>

      {/* Top Filter Bar */}
      <div className="w-full max-w-6xl mx-auto mb-12 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Categories Filter (Multiple Select) */}
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Filter by Activity</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategories([])}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategories.length === 0 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(26,115,232,0.4)]' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All
              </button>
              {officialCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategories.includes(cat) 
                      ? 'bg-white text-black shadow-md' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Funding Filter */}
          <div className="md:w-64 flex-shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Funding</h3>
            <div className="flex flex-col gap-2">
              {['All', '100% Funded', 'Available'].map(fund => (
                <label key={fund} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${fundingFilter === fund ? 'border-primary bg-primary' : 'border-white/30 group-hover:border-primary'}`}>
                    {fundingFilter === fund && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{fund === 'All' ? 'Any Funding' : fund}</span>
                  <input type="radio" className="hidden" checked={fundingFilter === fund} onChange={() => setFundingFilter(fund)} />
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Programs Grid (3x3 Ratio) */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-6 text-sm font-medium text-gray-500">
          Showing {filteredPrograms.length} programs
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              <motion.div
                layout
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                style={{ '--brand-color': program.brandColor } as React.CSSProperties}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="group glass-dark rounded-3xl p-6 border border-white/10 hover:border-[var(--brand-color)] transition-all duration-300 flex flex-col h-full relative overflow-hidden hover:-translate-y-1 cursor-pointer"
              >
                {/* Background Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: 'var(--brand-color)' }}
                ></div>

                {/* Card Header (Logo & Name) */}
                <div className="flex items-start gap-4 mb-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-white/20 p-2 flex-shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_var(--brand-color)]">
                    <img 
                      src={getLogoUrl(program.link)} 
                      alt={`${program.name} logo`} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xl font-bold text-gray-800">${program.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-semibold text-white leading-tight mb-2 transition-colors duration-300"
                    >
                      {/* We use a span so the text changes color on hover */}
                      <span className="group-hover:text-[var(--brand-color)] transition-colors">{program.name}</span>
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {program.category.slice(0, 2).map(cat => (
                        <span key={cat} className="text-[9px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {program.financialAid.includes("100%") || program.financialAid.includes("Free") ? (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30">
                      💰 Fully Funded
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      💲 Aid Available
                    </span>
                  )}
                  {program.international.includes("Ethiopia") || program.international.includes("African") ? (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      🌍 Ethiopia Focus
                    </span>
                  ) : null}
                  {program.deadline && (
                    <div className="px-2.5 py-1 rounded-md text-xs font-bold bg-orange-500/10 text-orange-300 border border-orange-500/30 flex items-center gap-1.5 transition-all group-hover:bg-orange-500/20 group-hover:border-orange-500/50">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontFamily: 'Google Symbols' }}>event_upcoming</span>
                      <span className="text-orange-400/70 font-bold tracking-wider uppercase text-[9px]">Deadline:</span>
                      <span>{program.deadline}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-400 line-clamp-3 mb-6 flex-grow relative z-10">
                  {program.description}
                </p>

                {/* Requirements */}
                <div className="mb-6 bg-black/40 p-4 rounded-xl border border-white/5 relative z-10">
                  <div className="flex items-center gap-1.5 mb-3 w-fit">
                    <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      What You Need
                    </h4>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {program.requirements.map((req, i) => (
                       <li key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5 transition-colors">
                          <span className="w-1 h-1 rounded-full group-hover:bg-[var(--brand-color)] bg-white/30 transition-colors"></span>
                          {req}
                       </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-white/10 relative z-10 group-hover:border-[var(--brand-color)] transition-colors">
                  {program.link !== '#' ? (
                    <a 
                      href={program.link} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between gap-2 w-full text-sm font-medium text-gray-300 transition-colors group-hover:text-[var(--brand-color)]"
                    >
                      Visit Official Site
                      <span className="material-symbols-outlined text-[18px] transition-colors" style={{ fontFamily: 'Google Symbols' }}>open_in_new</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-2 w-full text-sm font-medium text-gray-400">
                      Self-Guided Activity
                      <span className="material-symbols-outlined text-[18px]" style={{ fontFamily: 'Google Symbols' }}>emoji_objects</span>
                    </div>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPrograms.length === 0 && (
          <div className="w-full py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-gray-600 mb-4" style={{ fontFamily: 'Google Symbols' }}>search_off</span>
            <h3 className="text-xl font-bold text-gray-400 mb-2">No programs found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setSelectedCategories([]); setFundingFilter('All'); }}
              className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-sm font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProgram && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProgram(null)}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{ '--brand-color': selectedProgram.brandColor } as React.CSSProperties}
                className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-5 sm:p-6 border-b border-white/5 relative overflow-hidden flex-shrink-0">
                  <div 
                    className="absolute inset-0 opacity-10 blur-3xl pointer-events-none"
                    style={{ backgroundColor: 'var(--brand-color)' }}
                  ></div>
                  <button 
                    onClick={() => setSelectedProgram(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors z-10"
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontFamily: 'Google Symbols' }}>close</span>
                  </button>
                  <div className="flex items-center gap-4 sm:gap-5 relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-white/20 p-2 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_var(--brand-color)]">
                      <img 
                        src={getLogoUrl(selectedProgram.link)} 
                        alt={`${selectedProgram.name} logo`} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-2xl font-bold text-gray-800">${selectedProgram.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2" style={{ color: 'var(--brand-color)' }}>
                        {selectedProgram.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProgram.category.map(cat => (
                          <span key={cat} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-grow">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProgram.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
                    {/* Deadline Box */}
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3 text-orange-400">
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontFamily: 'Google Symbols' }}>event_upcoming</span>
                        <h4 className="font-bold text-xs sm:text-sm tracking-wide uppercase">Application Timeline</h4>
                      </div>
                      <p className="text-white font-medium text-base sm:text-lg mb-2">{selectedProgram.deadline}</p>
                      <p className="text-orange-200/60 text-[11px] sm:text-xs leading-relaxed">
                        Applications typically open 1-3 months prior. Dates shift annually, so check the official site early!
                      </p>
                    </div>

                    {/* Requirements Box */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3 text-gray-300">
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontFamily: 'Google Symbols' }}>task_alt</span>
                        <h4 className="font-bold text-xs sm:text-sm tracking-wide uppercase">Prerequisites</h4>
                      </div>
                      <ul className="flex flex-col gap-1.5 sm:gap-2">
                        {selectedProgram.requirements.map((req, i) => (
                          <li key={i} className="text-xs sm:text-sm font-medium text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-color)]"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/5">
                        These are baseline requirements. Top applicants often submit additional portfolios.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProgram.financialAid.includes("100%") || selectedProgram.financialAid.includes("Free") ? (
                      <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-green-500/20 text-green-300 border border-green-500/30 flex items-center gap-1.5 sm:gap-2">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontFamily: 'Google Symbols' }}>payments</span> Fully Funded
                      </span>
                    ) : (
                      <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 sm:gap-2">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontFamily: 'Google Symbols' }}>payments</span> Aid Available
                      </span>
                    )}
                    {selectedProgram.international.includes("Ethiopia") || selectedProgram.international.includes("African") ? (
                      <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 sm:gap-2">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontFamily: 'Google Symbols' }}>public</span> Ethiopia Focus
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-5 sm:p-6 border-t border-white/5 bg-black/20 flex justify-end flex-shrink-0">
                  {selectedProgram.link !== '#' ? (
                    <a 
                      href={selectedProgram.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm sm:text-base"
                      style={{ backgroundColor: 'var(--brand-color)' }}
                    >
                      Visit Official Site
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontFamily: 'Google Symbols' }}>open_in_new</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-gray-400 bg-white/5 border border-white/10 text-sm sm:text-base">
                      Self-Guided Activity
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontFamily: 'Google Symbols' }}>emoji_objects</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}
