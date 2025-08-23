import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navigation = ({ currentLang, onLanguageChange, translations, currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const t = translations[currentLang]?.nav || translations.en.nav;

  const menuItems = [
    { key: 'home', label: t.home },
    { key: 'game_info', label: t.game_info },
    { key: 'marketplace', label: t.marketplace },
    { key: 'battle_demo', label: t.battle_demo }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-glass">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handlePageChange('home')}
          >
            <div className="p-2 glass-card">
              <Gamepad2 className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-headline hidden md:block">NFT Battle Arena</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handlePageChange(item.key)}
                className={`px-4 py-2 rounded-xl transition-all duration-200 text-body ${
                  currentPage === item.key 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={onLanguageChange} 
            />
            
            <Button 
              className="hidden lg:flex glass-button-accent text-sm px-4 py-2"
              onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
            >
              {t.connect_telegram}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden p-2 rounded-xl hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="glass-card mt-4 p-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handlePageChange(item.key)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentPage === item.key 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                className="w-full mt-4 glass-button-accent"
                onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
              >
                {t.connect_telegram}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};