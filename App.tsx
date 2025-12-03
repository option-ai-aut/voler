import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import SpecsSection from './components/SpecsSection';
import Roadmap from './components/Roadmap';
import { IMAGES, LAUNCH_DATE, DICTIONARY } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'DE'>('EN');
  
  // Retrieve the correct content based on language state
  const content = DICTIONARY[lang];

  // Format the date for display based on locale
  const dateObj = new Date(LAUNCH_DATE);
  const formattedDate = dateObj.toLocaleDateString(lang === 'DE' ? 'de-DE' : 'en-US', { 
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
        <section id="vision" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
          
          {/* HERO CONTENT CONTAINER */}
          <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-8 md:mt-0">
            
            {/* LEFT: Typography & Countdown */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Internal Tag */}
              <div className="mb-6 animate-fade-in-up">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
                          {content.hero.internalTag}
                      </span>
                  </div>
              </div>

              <div className="animate-fade-in-up delay-100">
                <span className="inline-block border-b border-voler-gold/50 pb-1 text-[10px] font-bold tracking-[0.3em] text-voler-gold uppercase mb-8">
                  {content.hero.est}
                </span>
              </div>

              <h1 className="text-6xl md:text-9xl font-serif font-bold text-white tracking-tight mb-12 drop-shadow-2xl leading-none">
                VOLER
              </h1>
              
              {/* Countdown Glass Box */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 w-full max-w-md shadow-2xl shadow-black/50 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                 
                 <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">{content.hero.launchLabel}</span>
                    <span className="text-xl font-serif italic text-white mb-6">{formattedDate}</span>
                    
                    <div className="w-12 h-[1px] bg-voler-gold/30 mb-6"></div>
                    
                    <Countdown labels={content.countdown} />
                 </div>
              </div>
            </div>

            {/* RIGHT: Floating Portrait Image (3:4) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
               {/* Floating Glass Image Container */}
               <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group transform hover:-translate-y-2 transition-transform duration-700">
                  
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
                          <p className="text-white font-serif italic text-xl">{content.hero.materialValue}</p>
                        </div>
                        <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
                           <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* SPECS / TECH STACK */}
        <SpecsSection content={content.specs} />

        {/* ROADMAP */}
        <Roadmap content={content.roadmap} />

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="bg-black/40 backdrop-blur-md py-20 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h4 className="text-3xl font-serif font-bold text-white tracking-widest">VOLER</h4>
            </div>
            
            <div className="flex flex-col items-start md:items-end space-y-4">
              <p className="text-voler-gold text-xs tracking-widest uppercase">{content.footer.inquiries}</p>
              <a href="mailto:contact@option-ai.at" className="text-gray-300 hover:text-white transition-colors text-xl font-serif italic border-b border-transparent hover:border-white pb-1">
                contact@option-ai.at
              </a>
              <p className="text-gray-700 text-xs mt-4">
                © 2024 Dennis Kral e.U.. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;