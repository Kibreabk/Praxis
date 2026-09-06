import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SequentialText from '../components/SequentialText';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden flex flex-col font-sans text-white">
      {/* Dynamic Cosmic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[150px]" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px]" 
        />
      </div>

      <div className="relative z-10 flex-grow container mx-auto px-4 md:px-6 py-20 flex flex-col items-center justify-center text-center">
        
        {/* Hero Section */}
        <div className="w-full text-center max-w-4xl mx-auto mb-32 relative z-10 mt-10">
          <SequentialText />
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Praxis simplifies your journey to international high school programs, full-ride scholarships, and world-class extracurriculars.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="flex flex-wrap justify-center gap-6 perspective-1000"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotateZ: [0, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, y: -15, rotateZ: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/extracurriculars" className="glass hover:bg-white/20 text-white px-10 py-5 rounded-full text-xl font-medium transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                Explore Programs
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="material-symbols-outlined" 
                  style={{ fontFamily: 'Google Symbols' }}
                >
                  arrow_forward
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotateZ: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, y: 15, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/resources" className="bg-transparent border-2 border-white/20 hover:border-white/60 text-white px-10 py-5 rounded-full text-xl font-medium transition-colors backdrop-blur-md">
                Read the Guide
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* General Overview Section */}
        <motion.div style={{ y: y1 }} className="w-full max-w-5xl mx-auto mb-32 text-center perspective-1500 z-20">
          <motion.div 
            initial={{ rotateX: 90, opacity: 0, scale: 0.5, z: -500 }}
            whileInView={{ rotateX: 0, opacity: 1, scale: 1, z: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            style={{ transformOrigin: "bottom center" }}
            className="glass-dark rounded-3xl p-10 md:p-16 border border-white/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl -z-10"
            />
            
            <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 text-white tracking-tight">The Praxis Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Designed specifically for Ethiopian high school students, Praxis is your all-in-one command center. 
              We bridge the gap between local ambition and global access by curating verified high school opportunities, 
              providing actionable college application playbooks, and unlocking full-ride financial pathways. 
              Everything you need to compete globally, completely free of charge.
            </p>
          </motion.div>
        </motion.div>

        {/* Modular Card Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 z-30">
          
          {/* 1. College Resources */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-full">
              <Link to="/resources" className="group relative bg-[#0a0a0a] rounded-[32px] p-10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] h-full shadow-2xl block hover:-translate-y-2">
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 blur-2xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-zinc-400 group-hover:text-white transition-colors" style={{ fontFamily: 'Google Symbols' }}>school</span>
                  </div>
                  
                  <h3 className="text-3xl font-sans font-medium text-white mb-4 flex items-center justify-between tracking-tight">
                    College Resources
                    <span className="text-zinc-500 material-symbols-outlined group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ fontFamily: 'Google Symbols' }}>arrow_outward</span>
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed mt-auto">
                    A curated database of elite platforms, full-ride university lists, SAT prep materials, and top-tier admissions mentors.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
  
          {/* 2. Extracurriculars */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          >
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="h-full">
              <Link to="/extracurriculars" className="group relative bg-[#0a0a0a] rounded-[32px] p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] h-full shadow-2xl block hover:-translate-y-2">
                <motion.div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-blue-400 group-hover:text-blue-300 transition-colors" style={{ fontFamily: 'Google Symbols' }}>extension</span>
                  </div>
                  
                  <h3 className="text-3xl font-sans font-medium text-white mb-4 flex items-center justify-between tracking-tight">
                    Extracurriculars
                    <span className="text-zinc-500 material-symbols-outlined group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ fontFamily: 'Google Symbols' }}>arrow_outward</span>
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed mt-auto">
                    Discover impactful, globally accessible extracurricular activities, global competitions, and virtual research programs.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
  
          {/* 3. Independent Projects */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="h-full">
              <Link to="/independent-projects" className="group relative bg-[#0a0a0a] rounded-[32px] p-10 border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] h-full shadow-2xl block hover:-translate-y-2">
                <motion.div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-purple-400 group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Google Symbols' }}>rocket_launch</span>
                  </div>
                  
                  <h3 className="text-3xl font-sans font-medium text-white mb-4 flex items-center justify-between tracking-tight">
                    Independent Projects
                    <span className="text-zinc-500 material-symbols-outlined group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ fontFamily: 'Google Symbols' }}>arrow_outward</span>
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed mt-auto">
                    Launch meaningful, self-driven independent projects that stand out to admissions officers and build real-world skills.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
