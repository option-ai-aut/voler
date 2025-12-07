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
      
      {/* GLOBAL BACKGROUND: Radial Gradient Dark Blue -> Black */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-[#172554] via-[#020617] to-black"></div>
      
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} />

        {/* HERO SECTION */}
        <section id="vision" className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40 pb-12 lg:pb-0">
          {/* ... HERO CONTENT ... */}
          <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8 lg:mt-0 flex-grow">
            {/* LEFT: Typography & Countdown */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Internal Tag - Animated with Framer Motion */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="mb-6"
              >
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
                          {content.hero.internalTag}
                      </span>
                  </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="inline-block border-b border-voler-gold/50 pb-1 text-[10px] font-bold tracking-[0.3em] text-voler-gold uppercase mb-8">
                  {content.hero.est}
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12"
              >
                <img 
                  src={IMAGES.LOGO_FULL_WHITE} 
                  alt="VOLER PRIVÉ" 
                  className="h-64 md:h-96 lg:h-[28rem] w-auto object-contain"
                />
              </motion.div>
              
              {/* Countdown Glass Box */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                 className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 w-full max-w-md shadow-2xl shadow-black/50 relative overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                 
                 <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">{content.hero.launchLabel}</span>
                    <span className="text-xl font-sans font-medium text-white mb-6">{formattedDate}</span>
                    
                    <div className="w-12 h-[1px] bg-voler-gold/30 mb-6"></div>
                    
                    <Countdown labels={content.countdown} />
                 </div>
              </motion.div>
            </div>

            {/* RIGHT: Floating Portrait Image (3:4) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
               {/* Floating Glass Image Container */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group transform hover:-translate-y-2 transition-transform duration-700"
               >
                  
                  {/* Bild OHNE Filter und OHNE Noise */}
                  <img 
                    src={IMAGES.HERO_MODEL} 
                    alt="Voler Model" 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Bottom Floating Info */}
                  <div className="absolute bottom-8 left-6 right-6 z-30">
                    <div className="backdrop-blur-xl bg-black/60 border border-white/5 rounded-lg p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] text-voler-gold uppercase tracking-[0.2em] mb-1">{content.hero.materialLabel}</p>
                          <p className="text-white font-sans text-xl">{content.hero.materialValue}</p>
                        </div>
                        <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
                           <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
               </motion.div>
            </div>

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
                <p className="text-white text-2xl md:text-3xl font-sans font-light leading-[1.8] max-w-3xl mx-auto">
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
                       <span className="text-white font-sans text-xl tracking-wider">{val}</span>
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
