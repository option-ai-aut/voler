import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import SpecsSection from './components/SpecsSection';
import Roadmap from './components/Roadmap';
import StrategySection from './components/StrategySection';
import { IMAGES, LAUNCH_DATE, DICTIONARY } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'DE'>('EN');
  
  // Retrieve the correct content based on language state
  const content = DICTIONARY[lang];

  // Format the date for display (Always DD.MM.YYYY)
  const dateObj = new Date(LAUNCH_DATE);
  const formattedDate = dateObj.toLocaleDateString('de-DE', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  });

  return (
    <div className="min-h-screen font-sans selection:bg-voler-gold selection:text-voler-dark relative overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND: Dark Blue -> Black Gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-[#172554] via-[#020617] to-black"></div>
      
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} />

        {/* HERO SECTION */}
        <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20">
          
          <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-20">
              
              {/* Internal Tag - Top */}
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="mb-12"
              >
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase whitespace-nowrap">
                          {content.hero.internalTag}
                      </span>
                  </div>
              </motion.div>

              {/* LOGO - CENTERPIECE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 relative w-full flex justify-center"
              >
                <img 
                  src={IMAGES.LOGO_FULL_WHITE} 
                  alt="VOLER PRIVÉ" 
                  className="h-32 sm:h-48 md:h-80 lg:h-[28rem] w-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Slogan */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="text-gray-300 font-sans font-light tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-base uppercase mb-16 whitespace-nowrap"
              >
                {content.hero.slogan}
              </motion.p>
              
              {/* Countdown Group */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                 className="flex flex-col items-center gap-8"
              >
                 {/* Countdown */}
                 <div className="flex flex-col items-center mt-2 w-full">
                    <div className="flex items-center gap-4 mb-6 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400">{content.hero.launchLabel}</span>
                        <div className="h-3 w-[1px] bg-white/20"></div>
                        <span className="text-[10px] md:text-xs font-sans text-white tracking-wider">{formattedDate}</span>
                    </div>
                    
                    <Countdown labels={content.countdown} />
                 </div>
              </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY / VISION SECTION */}
        <section className="py-24 md:py-32 relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-voler-gold text-xs font-bold tracking-[0.2em] uppercase block mb-6 font-sans">{content.hero.visionTitle}</span>
                <p className="text-white text-xl md:text-3xl font-sans font-light leading-[1.8] max-w-3xl mx-auto">
                  "{content.hero.visionText}"
                </p>
              </motion.div>

              {/* VALUES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-12">
                 {content.hero.values.map((val, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex flex-col items-center"
                    >
                       <div className="w-1 h-8 bg-gradient-to-b from-voler-gold to-transparent mb-4 opacity-50"></div>
                       <span className="text-white font-sans text-lg md:text-xl tracking-wider">{val}</span>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* SPECS / TECH PACK */}
        <div id="specs">
          <SpecsSection content={content.specs} />
        </div>

        {/* BRAND STRATEGY (INVESTOR BRIEF) */}
        <div id="strategy">
          <StrategySection content={content.strategy} />
        </div>

        {/* ROADMAP */}
        <div id="roadmap">
          <Roadmap content={content.roadmap} />
        </div>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="bg-black/40 backdrop-blur-md py-20 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-12 md:mb-0">
              <img src={IMAGES.LOGO_FULL_WHITE} alt="VOLER PRIVÉ" className="h-64 md:h-96 w-auto mb-8" />
            </div>
            
            <div className="flex flex-col items-start md:items-end space-y-4">
              <p className="text-voler-gold text-xs tracking-widest uppercase">{content.footer.inquiries}</p>
              <a href="mailto:voler.office@gmx.at" className="text-gray-300 hover:text-white transition-colors text-xl font-sans border-b border-transparent hover:border-white pb-1">
                voler.office@gmx.at
              </a>
              <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mt-4">Based in Vienna</p>
              <p className="text-gray-700 text-xs mt-2">
                © 2025 Voler Privé eUG. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
