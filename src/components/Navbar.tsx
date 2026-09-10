import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Using lucide-react for the hamburger icon

const navItems = [
  { path: '/', label: 'Home' },
  { 
    path: '/extracurriculars', 
    label: 'Extracurriculars'
  },
  { 
    path: '/independent-projects', 
    label: 'Independent Projects'
  },
  { 
    path: '/resources', 
    label: 'College Resources',
    subItems: [
      { label: 'Platforms', desc: 'Application portals and scholarship databases' },
      { label: 'Mentors', desc: 'Top YouTube, Instagram, and Telegram channels' },
      { label: 'Universities', desc: 'Institutions meeting 100% of demonstrated need' }
    ]
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setHoveredTab(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredTab(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setHoveredTab(null);
    }, 150); // slight delay to allow moving mouse to the dropdown
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold font-sans tracking-tight flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary">public</span>
          Praxis
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div 
              key={item.path} 
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive || hoveredTab === item.label
                      ? 'bg-white text-black shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
                {item.subItems && (
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                )}
              </NavLink>

              {/* Megamenu Dropdown */}
              <AnimatePresence>
                {item.subItems && hoveredTab === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[22rem] bg-zinc-900 border border-white/10 rounded-3xl p-3 shadow-2xl backdrop-blur-2xl overflow-hidden"
                  >
                    <div className="flex flex-col gap-1">
                      {item.subItems.map((sub, idx) => (
                        <NavLink
                          key={idx}
                          to={item.path}
                          onClick={() => setHoveredTab(null)}
                          className="flex flex-col gap-0.5 p-3 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer"
                        >
                          <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                            {sub.label}
                          </span>
                          <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-1">
                            {sub.desc}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.path} className="flex flex-col gap-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `text-lg font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-white/10 ml-2">
                      {item.subItems.map((sub, idx) => (
                        <NavLink
                          key={idx}
                          to={item.path}
                          className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
