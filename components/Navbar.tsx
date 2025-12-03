import React, { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'EN' | 'DE';
  setLang: (lang: 'EN' | 'DE') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-voler-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-[0.2em] text-white">
          VOLER
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8 text-xs font-medium text-gray-300 tracking-[0.2em] uppercase">
                <a href="#vision" className="hover:text-voler-gold transition-colors cursor-pointer">Vision</a>
                <a href="#specs" className="hover:text-voler-gold transition-colors cursor-pointer">Tech Pack</a>
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

        <div className="md:hidden text-white flex gap-4">
             <span className="text-xs font-bold text-voler-gold">{lang}</span>
            <span className="text-xs border border-white/30 px-2 py-1">MENU</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;