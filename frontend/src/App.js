import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { GameInfo } from "./components/GameInfo";
import { Marketplace } from "./components/Marketplace";
import { BattleDemo } from "./components/BattleDemo";
import { translations } from "./data/mock";

function App() {
  const [currentLang, setCurrentLang] = useState('ua');
  const [currentPage, setCurrentPage] = useState('home');

  // SEO метатеги
  useEffect(() => {
    const t = translations[currentLang] || translations.ua;
    
    // Основні метатеги
    document.title = `NFT Battle Arena - ${t.hero?.subtitle || 'Play2Earn гра в Telegram'}`;
    
    // Description
    const description = t.hero?.description || 'Отримай свій перший NFT, бийся на арені з суперниками та збирай унікальну колекцію. Це не просто гра – це битва за нагороди, престиж і справжню силу!';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'NFT Battle Arena, NFT гра, Telegram Mini App, Play2Earn, blockchain gaming, NFT бійці, крипто ігри, NFT колекція, GameFi, battle arena';

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = `NFT Battle Arena - ${t.hero?.subtitle || 'Play2Earn гра в Telegram'}`;
    if (!document.querySelector('meta[property="og:title"]')) document.head.appendChild(ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.content = description;
    if (!document.querySelector('meta[property="og:description"]')) document.head.appendChild(ogDesc);

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = 'https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png';
    if (!document.querySelector('meta[property="og:image"]')) document.head.appendChild(ogImage);

    // Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = `NFT Battle Arena - ${t.hero?.subtitle || 'Play2Earn гра в Telegram'}`;
    if (!document.querySelector('meta[name="twitter:title"]')) document.head.appendChild(twitterTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDesc.name = 'twitter:description';
    twitterDesc.content = description;
    if (!document.querySelector('meta[name="twitter:description"]')) document.head.appendChild(twitterDesc);

    // Viewport and other important meta tags
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Charset
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Language
    document.documentElement.lang = currentLang;

    // Robots
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow';
      document.head.appendChild(robots);
    }

  }, [currentLang]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            currentLang={currentLang}
            translations={translations}
            onPageChange={setCurrentPage}
          />
        );
      case 'game_info':
        return (
          <GameInfo
            currentLang={currentLang}
            translations={translations}
            onPageChange={setCurrentPage}
          />
        );
      case 'marketplace':
        return (
          <Marketplace
            currentLang={currentLang}
            translations={translations}
          />
        );
      case 'battle_demo':
        return (
          <BattleDemo
            currentLang={currentLang}
            translations={translations}
          />
        );
      default:
        return (
          <HomePage
            currentLang={currentLang}
            translations={translations}
            onPageChange={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App bg-black min-h-screen text-white">
      <Navigation
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        translations={translations}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main className="relative">
        {renderCurrentPage()}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "NFT Battle Arena",
            "url": window.location.origin,
            "image": "https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png",
            "description": translations[currentLang]?.hero?.description || "NFT Battle Arena — грай, збирай NFT та бийся на арені. Почни з першого NFT і розвивай армію воїнів.",
            "author": {
              "@type": "Organization",
              "name": "NFT Battle Arena Team"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "NFT Battle Arena"
            },
            "applicationCategory": "Game",
            "operatingSystem": "Web, Android, iOS",
            "genre": ["Blockchain Game", "P2E", "NFT", "Battle Arena"],
            "inLanguage": [currentLang, "uk", "en", "es"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}

export default App;
