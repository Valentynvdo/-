import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const languages = [
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <Select value={currentLang} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-[120px] glass-input text-sm border-0 bg-white/5 backdrop-blur-md">
        <Globe className="w-4 h-4 mr-2 text-white/70" />
        <SelectValue>
          {currentLanguage ? (
            <span className="flex items-center gap-1">
              <span className="text-sm">{currentLanguage.flag}</span>
              <span className="hidden sm:inline text-sm">{currentLanguage.code.toUpperCase()}</span>
            </span>
          ) : 'Lang'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="glass-card-strong border-0 min-w-[140px]">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="text-white hover:bg-white/10 focus:bg-white/10 rounded-lg cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};