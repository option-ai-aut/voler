import React, { useState, useEffect } from 'react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-voler-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO - Click schließt auch das Menu */}
        <a href="#" onClick={closeMenu} className="text-2xl font-serif font-bold tracking-[0.2em] text-white z-50 relative">
          VOLER PRIVÉ
        </a>
        
        {/* DESKTOP MENU */}
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

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden z-50 flex items-center gap-4">
             <span className="text-xs font-bold text-voler-gold">{lang}</span>
             <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMobileMenuOpen ? (
                    <span className="text-xs border border-white/30 px-2 py-1">CLOSE</span>
                ) : (
                    <span className="text-xs border border-white/30 px-2 py-1">MENU</span>
                )}
             </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-voler-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col space-y-8 text-center">
                <a href="#vision" onClick={closeMenu} className="text-2xl font-serif text-white hover:text-voler-gold transition-colors">Vision</a>
                <a href="#specs" onClick={closeMenu} className="text-2xl font-serif text-white hover:text-voler-gold transition-colors">Tech Pack</a>
                <a href="#roadmap" onClick={closeMenu} className="text-2xl font-serif text-white hover:text-voler-gold transition-colors">Timeline</a>
                <a href="#contact" onClick={closeMenu} className="text-2xl font-serif text-white hover:text-voler-gold transition-colors">Contact</a>
                
                <div className="w-12 h-[1px] bg-white/20 mx-auto my-8"></div>
                
                <div className="flex justify-center space-x-8">
                    <button onClick={() => { setLang('EN'); closeMenu(); }} className={`text-sm tracking-widest ${lang === 'EN' ? 'text-voler-gold font-bold' : 'text-gray-500'}`}>EN</button>
                    <button onClick={() => { setLang('DE'); closeMenu(); }} className={`text-sm tracking-widest ${lang === 'DE' ? 'text-voler-gold font-bold' : 'text-gray-500'}`}>DE</button>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;