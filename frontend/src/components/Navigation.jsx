import React, { useState } from 'react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';

export const Navigation = ({ currentLang, onLanguageChange, translations, currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const t = translations[currentLang]?.nav || translations.en.nav;

  const menuItems = [
    { key: 'home', label: t.home, icon: '🏠' },
    { key: 'game_info', label: t.game_info, icon: '📖' },
    { key: 'marketplace', label: t.marketplace, icon: '🏪' },
    { key: 'battle_demo', label: t.battle_demo, icon: '⚔️' }
  ];

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handlePageChange('home')}
          >
            <Gamepad2 className="w-8 h-8 text-[#00FFD1]" />
            <span className="font-bold text-xl text-white">NFT Battle Arena</span>
            <AnimatedEmoji emoji="🚀" animation="float" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handlePageChange(item.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-none transition-all duration-300 ${
                  currentPage === item.key 
                    ? 'text-[#00FFD1] bg-white/10' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={onLanguageChange} 
            />
            
            <Button 
              className="hidden lg:flex bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
              onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
            >
              <AnimatedEmoji emoji="📱" animation="bounce" className="mr-2" />
              {t.connect_telegram}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handlePageChange(item.key)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-none transition-all duration-300 ${
                    currentPage === item.key 
                      ? 'text-[#00FFD1] bg-white/10' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              
              <Button 
                className="mt-4 bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
              >
                <AnimatedEmoji emoji="📱" animation="bounce" className="mr-2" />
                {t.connect_telegram}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};