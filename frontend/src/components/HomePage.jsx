import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Play, Info, Gamepad2, Trophy, Star, Zap } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';

export const HomePage = ({ currentLang, translations, onPageChange }) => {
  const t = translations[currentLang] || translations.en;

  const features = [
    {
      icon: <AnimatedEmoji emoji="🎁" animation="bounce" />,
      title: "Безкоштовний NFT",
      description: "Отримай свого першого бійця безкоштовно та почни пригоди в арені"
    },
    {
      icon: <AnimatedEmoji emoji="⚔️" animation="pulse" />,
      title: "Епічні бої",
      description: "Бийся проти ботів та інших гравців за нагороди та рейтинг"
    },
    {
      icon: <AnimatedEmoji emoji="💰" animation="float" />,
      title: "Заробляй BP",
      description: "Конвертуй свої BP поінти в реальні нагороди через Telegram Stars"
    }
  ];

  const gameStats = [
    { label: "Активних гравців", value: "12,847", icon: <Gamepad2 className="w-6 h-6" /> },
    { label: "NFT у грі", value: "3,420", icon: <Star className="w-6 h-6" /> },
    { label: "Боїв проведено", value: "89,234", icon: <Trophy className="w-6 h-6" /> },
    { label: "Нагород виплачено", value: "₴45,890", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                <AnimatedEmoji emoji="🌟" animation="pulse" className="text-2xl" />
                <span className="text-[#00FFD1] font-semibold tracking-wider uppercase">Play2Earn</span>
                <AnimatedEmoji emoji="🚀" animation="bounce" className="text-2xl" />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">{t.hero.title}</span>
                <br />
                <span className="text-[#00FFD1]">Battle Arena</span>
                <AnimatedEmoji emoji="⚡" animation="pulse" className="ml-3 text-3xl lg:text-5xl" />
              </h1>
              
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold text-lg px-8 py-4"
                  onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t.hero.play_now}
                  <AnimatedEmoji emoji="🎮" animation="bounce" className="ml-2" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-none font-bold text-lg px-8 py-4"
                  onClick={() => onPageChange('game_info')}
                >
                  <Info className="w-5 h-5 mr-2" />
                  {t.hero.learn_more}
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00FFD1]/20 blur-3xl rounded-full animate-pulse"></div>
                <img 
                  src="https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png"
                  alt="NFT Battle Character"
                  className="relative z-10 w-full max-w-md lg:max-w-lg object-contain animate-pulse hover:animate-bounce transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Stats */}
      <section className="py-16 bg-black/40 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {gameStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center mb-3 text-[#00FFD1]">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Чому обирають NFT Battle Arena
              <AnimatedEmoji emoji="🔥" animation="bounce" className="ml-3" />
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Унікальна комбінація NFT колекціонування, динамічних боїв та можливостей заробітку
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-center hover:bg-black/60 transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black/60 to-[#00FFD1]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Готовий почати пригоду?
            <AnimatedEmoji emoji="🚀" animation="bounce" className="ml-3" />
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Приєднуйся до тисяч гравців у NFT Battle Arena та почни заробляти разом з нами!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold text-lg px-12 py-4"
              onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Почати гру зараз
              <AnimatedEmoji emoji="🎯" animation="pulse" className="ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-none font-bold text-lg px-8 py-4"
              onClick={() => onPageChange('battle_demo')}
            >
              Дивитись демо бою
              <AnimatedEmoji emoji="👀" animation="bounce" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};