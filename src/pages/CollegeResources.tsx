import { motion, AnimatePresence } from 'framer-motion';
import { applicationResources } from '../data/resources';
import { fullRideUniversities } from '../data/fullRide';

const resources = applicationResources.filter(r => r.category === 'Platform');
const mentors = applicationResources.filter(r => r.category !== 'Platform' && r.category !== 'Test Prep');
const testPrep = applicationResources.filter(r => r.category === 'Test Prep');
import { useState, useMemo } from 'react';

// Generates a profile image URL, prioritizing high-resolution sources without hitting rate limits
const getHighResImage = (unavatarPath?: string, domain?: string) => {
  if (unavatarPath) {
    if (unavatarPath.startsWith('youtube/')) {
       const u = unavatarPath.split('/')[1];
       return `/mentors/youtube_${u}.jpg`;
    }
    if (unavatarPath.startsWith('telegram/')) {
       const u = unavatarPath.split('/')[1];
       return `/mentors/telegram_${u}.jpg`;
    }
    if (unavatarPath.includes('/')) {
      return `https://unavatar.io/${unavatarPath}`;
    }
  }
  const targetDomain = domain || unavatarPath;
  if (targetDomain) {
    return `https://www.google.com/s2/favicons?domain=${targetDomain}&sz=256`;
  }
  return '';
};

export default function CollegeResources() {
  const [activeCategory, setActiveCategory] = useState<'Platforms' | 'Mentors' | 'Universities' | 'Test Prep'>('Test Prep');
  const [activeGender, setActiveGender] = useState<'All' | 'Co-ed' | 'Women'>('All');
  const [activeCountry, setActiveCountry] = useState<string>('All');
  
  const countries = useMemo(() => ['All', ...Array.from(new Set(fullRideUniversities.map(u => u.country)))], []);
  
  const filteredUniversities = useMemo(() => {
    return fullRideUniversities.filter(u => {
      const genderMatch = activeGender === 'All' || u.gender === activeGender;
      const countryMatch = activeCountry === 'All' || u.country === activeCountry;
      return genderMatch && countryMatch;
    });
  }, [activeGender, activeCountry]);

  return (
    <main className="min-h-screen bg-transparent text-white relative z-20 font-sans selection:bg-white selection:text-black pb-40">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-semibold tracking-tighter mb-6"
        >
          College Resources
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 font-medium max-w-3xl"
        >
          A master list of application platforms, YouTube mentors, Telegram channels, test prep guides, and full-ride university profiles to help you prepare your international application.
        </motion.p>
      </section>

      {/* Sticky Segmented Control (Apple Style) */}
      <div className="sticky top-24 z-50 flex justify-center mb-16 px-6">
        <div className="flex p-1.5 bg-[#1c1c1e]/80 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl">
          {['Platforms', 'Test Prep', 'Mentors', 'Universities'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab as any)}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeCategory === tab ? 'text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeCategory === tab && (
                <motion.div 
                  layoutId="activeTabSegment"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 tracking-wide">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* PLATFORMS */}
        {activeCategory === 'Platforms' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources.map(platform => (
              <a key={platform.id} href={platform.link} target="_blank" rel="noreferrer" className="group relative aspect-[4/3] rounded-[32px] bg-[#0a0a0a] border border-white/10 overflow-hidden block">
                <div className="absolute inset-0 p-10 flex flex-col items-center justify-center transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:opacity-0 group-hover:scale-95">
                  <img loading="lazy" src={getHighResImage(platform.unavatar)} alt="" className="w-32 h-32 object-contain opacity-80" />
                </div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-between opacity-0 scale-105 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:scale-100 bg-[#111]">
                  <div className="flex justify-between items-start">
                    <img loading="lazy" src={getHighResImage(platform.unavatar)} alt="" className="w-12 h-12 object-contain" />
                    <span className="text-zinc-500 material-symbols-outlined">arrow_outward</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-4 tracking-tight">{platform.name}</h3>
                    <p className="text-zinc-400 font-medium leading-relaxed">{platform.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        )}

        {/* TEST PREP */}
        {activeCategory === 'Test Prep' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testPrep.map(item => (
              <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group relative aspect-[4/3] rounded-[32px] bg-[#0a0a0a] border border-white/10 overflow-hidden block hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 p-10 flex flex-col justify-between transition-all duration-700 ease-[0.16,1,0.3,1] bg-[#111] group-hover:bg-[#1a1a1c]">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                       <span className="material-symbols-outlined text-zinc-400 group-hover:text-white transition-colors">
                         {item.platform === 'youtube' ? 'smart_display' : item.platform === 'telegram' ? 'send' : 'link'}
                       </span>
                    </div>
                    <span className="text-zinc-500 material-symbols-outlined group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 tracking-tight text-white">{item.name}</h3>
                    <p className="text-zinc-400 font-medium leading-relaxed line-clamp-4">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        )}

        {/* MENTORS */}
        {activeCategory === 'Mentors' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mentors.map(mentor => (
              <a key={mentor.id} href={mentor.link} target="_blank" rel="noreferrer" className="group relative aspect-[4/5] rounded-[32px] bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 hover:border-white/30 transition-all duration-500">
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                 
                 <div className="relative z-10 flex flex-col items-center justify-center w-full mt-4">
                    <img loading="lazy"
                      src={mentor.platform === 'instagram' ? 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' : getHighResImage(mentor.unavatar)} 
                      alt="" 
                      className={`w-32 h-32 mb-8 shadow-2xl transition-transform duration-500 group-hover:scale-110 ${mentor.platform === 'instagram' ? 'object-contain opacity-70' : 'object-cover rounded-full'}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.dataset.failed) {
                          target.style.display = 'none';
                          return;
                        }
                        target.dataset.failed = 'true';
                        target.className = 'w-24 h-24 mb-8 object-contain opacity-70 transition-transform duration-500 group-hover:scale-110';
                        if (mentor.platform === 'youtube') target.src = 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';
                        else if (mentor.platform === 'telegram') target.src = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg';
                        else target.style.display = 'none';
                      }}
                   />
                   <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{mentor.platform} &bull; {mentor.category}</span>
                   <h3 className="text-2xl font-semibold tracking-tight text-white text-center">{mentor.name}</h3>
                 </div>
              </a>
            ))}
          </motion.div>
        )}

        {/* UNIVERSITIES */}
        {activeCategory === 'Universities' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            
            {/* Minimal Filters */}
            <div className="flex flex-wrap gap-4 mb-16 justify-center">
              <div className="flex p-1 bg-[#111] rounded-full border border-white/5">
                {['All', 'Co-ed', 'Women'].map(gender => (
                  <button
                    key={gender}
                    onClick={() => setActiveGender(gender as any)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeGender === gender ? 'bg-[#333] text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {gender === 'Women' ? "Women's" : gender}
                  </button>
                ))}
              </div>
              
              <div className="flex p-1 bg-[#111] rounded-full border border-white/5 flex-wrap">
                {countries.map(country => (
                  <button
                    key={country}
                    onClick={() => setActiveCountry(country)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCountry === country ? 'bg-[#333] text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Grouped Universities */}
            <div>
              {['US National Universities', 'US Liberal Arts Colleges', 'Special Cases', 'International'].map(cat => {
                const unies = filteredUniversities.filter(u => (u as any).category === cat);
                if (unies.length === 0) return null;
                return (
                  <div key={cat} className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-b border-white/10 pb-4 tracking-tight">{cat}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      <AnimatePresence mode="popLayout">
                        {unies.map((uni) => (
                          <motion.div
                            key={uni.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative aspect-square"
                          >
                            {/* Base Icon State */}
                            <div className="absolute inset-0 rounded-[24px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
                              <img 
                                src={getHighResImage(undefined, uni.domain)} 
                                alt={uni.name}
                                className="w-full h-full object-contain opacity-70 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                  (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-3xl font-medium text-white">${uni.name.charAt(0)}</span>`;
                                }}
                              />
                            </div>
                            
                            {/* Wide Popover State (Centers over the icon and expands) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] rounded-[32px] bg-[#111] border border-white/20 p-8 shadow-2xl opacity-0 scale-90 pointer-events-none transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50 flex flex-col">
                              
                              <div className="flex justify-between items-start mb-6">
                                 <img 
                                   src={getHighResImage(undefined, uni.domain)} 
                                   alt=""
                                   className="w-12 h-12 object-contain"
                                   onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                 />
                                 <span className="text-2xl opacity-50" title={uni.country}>
                                   {uni.country === 'USA' ? '🇺🇸' : uni.country === 'Qatar' ? '🇶🇦' : uni.country === 'UAE' ? '🇦🇪' : uni.country === 'Canada' ? '🇨🇦' : '🌍'}
                                 </span>
                              </div>

                              <div>
                                {uni.strategy && (
                                  <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                                    {uni.strategy}
                                  </span>
                                )}
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                                  {uni.name}
                                </h3>
                                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                                  {uni.description}
                                </p>
                              </div>

                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
