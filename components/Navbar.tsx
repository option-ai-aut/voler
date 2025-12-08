import React, { useState, useEffect } from 'react';

import { IMAGES } from '../constants';

interface NavbarProps {
  lang: 'EN' | 'DE';
  setLang: (lang: 'EN' | 'DE') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Mobile Menu und deaktiviere Scrollen im Hintergrund
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-voler-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO - Click schließt auch das Menu */}
        <a href="#" onClick={closeMenu} className="z-[102] relative flex items-center">
          <img 
            src={IMAGES.LOGO_TEXT_WHITE} 
            alt="VOLER PRIVÉ" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </a>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8 text-xs font-medium text-gray-300 tracking-[0.2em] uppercase">
                <a href="#vision" className="hover:text-voler-gold transition-colors cursor-pointer">Vision</a>
                <a href="#specs" className="hover:text-voler-gold transition-colors cursor-pointer">Tech Pack</a>
                <a href="#strategy" className="hover:text-voler-gold transition-colors cursor-pointer">Strategy</a>
                <a href="#roadmap" className="hover:text-voler-gold transition-colors cursor-pointer">Timeline</a>
                <a href="#contact" className="hover:text-voler-gold transition-colors cursor-pointer">Contact</a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-xs tracking-widest border-l border-white/20 pl-6">
                <button 
                    onClick={() => setLang('EN')}
                    className={`transition-colors ${lang === 'EN' ? 'text-voler-gold font-bold' : 'text-gray-500 hover:text-white'}`}
                >
                    EN
                </button>
                <span className="text-gray-600">|</span>
                <button 
                    onClick={() => setLang('DE')}
                    className={`transition-colors ${lang === 'DE' ? 'text-voler-gold font-bold' : 'text-gray-500 hover:text-white'}`}
                >
                    DE
                </button>
            </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden z-[102] flex items-center gap-4">
             <span className="text-xs font-bold text-voler-gold">{lang}</span>
             <button onClick={toggleMenu} className="text-white focus:outline-none z-[102] relative w-8 h-8 flex items-center justify-center">
                {isMobileMenuOpen ? (
                    // X Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Burger Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
             </button>
        </div>

        {/* MOBILE MENU OVERLAY (SLIDE IN FROM RIGHT) */}
        <div 
            className={`fixed inset-0 bg-black z-[101] h-screen w-screen flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col space-y-10 text-center w-full px-8">
                <a href="#vision" onClick={closeMenu} className="text-4xl text-white hover:text-voler-gold transition-colors font-light tracking-widest uppercase">Vision</a>
                <a href="#specs" onClick={closeMenu} className="text-4xl text-white hover:text-voler-gold transition-colors font-light tracking-widest uppercase">Tech Pack</a>
                <a href="#strategy" onClick={closeMenu} className="text-4xl text-white hover:text-voler-gold transition-colors font-light tracking-widest uppercase">Strategy</a>
                <a href="#roadmap" onClick={closeMenu} className="text-4xl text-white hover:text-voler-gold transition-colors font-light tracking-widest uppercase">Timeline</a>
                <a href="#contact" onClick={closeMenu} className="text-4xl text-white hover:text-voler-gold transition-colors font-light tracking-widest uppercase">Contact</a>
                
                <div className="w-24 h-[1px] bg-white/20 mx-auto my-12"></div>
                
                <div className="flex justify-center space-x-16">
                    <button onClick={() => { setLang('EN'); closeMenu(); }} className={`text-xl tracking-widest ${lang === 'EN' ? 'text-voler-gold font-bold' : 'text-gray-500 hover:text-white'}`}>EN</button>
                    <button onClick={() => { setLang('DE'); closeMenu(); }} className={`text-xl tracking-widest ${lang === 'DE' ? 'text-voler-gold font-bold' : 'text-gray-500 hover:text-white'}`}>DE</button>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;