import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <Select value={currentLang} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-[140px] bg-black/20 backdrop-blur-md border-white/10 text-white rounded-none">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue>
          {currentLanguage ? (
            <span className="flex items-center gap-2">
              <span>{currentLanguage.flag}</span>
              <span className="hidden sm:inline">{currentLanguage.name}</span>
            </span>
          ) : 'Language'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-black/90 backdrop-blur-md border-white/10 rounded-none">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="text-white hover:bg-white/10 focus:bg-white/10 rounded-none"
          >
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};