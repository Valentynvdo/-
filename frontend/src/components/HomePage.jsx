import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Play, Info, Gamepad2, Trophy, Star, Zap, Users, Eye } from 'lucide-react';
import { Emoji } from './AnimatedEmoji';

export const HomePage = ({ currentLang, translations, onPageChange }) => {
  const t = translations[currentLang] || translations.en;

  const gameStats = [
    { 
      label: t.stats?.active_players || "Active Players", 
      value: "12,847", 
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "text-blue-400"
    },
    { 
      label: t.stats?.nft_in_game || "NFTs in Game", 
      value: "3,420", 
      icon: <Star className="w-5 h-5" />,
      color: "text-yellow-400"
    },
    { 
      label: t.stats?.battles_fought || "Battles Fought", 
      value: "89,234", 
      icon: <Trophy className="w-5 h-5" />,
      color: "text-green-400"
    },
    { 
      label: t.stats?.rewards_paid || "Rewards Paid", 
      value: "₴45,890", 
      icon: <Zap className="w-5 h-5" />,
      color: "text-purple-400"
    }
  ];

  const features = [
    {
      icon: <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
        <Emoji emoji="🎁" />
      </div>,
      title: t.features?.free_nft_title || "Free NFT",
      description: t.features?.free_nft_desc || "Get your first fighter for free and start adventures in the arena"
    },
    {
      icon: <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
        <Emoji emoji="⚔️" />
      </div>,
      title: t.features?.epic_battles_title || "Epic Battles",
      description: t.features?.epic_battles_desc || "Fight against bots and other players for rewards and ranking"
    },
    {
      icon: <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
        <Emoji emoji="💰" />
      </div>,
      title: t.features?.earn_bp_title || "Earn BP",
      description: t.features?.earn_bp_desc || "Convert your BP points into real rewards through Telegram Stars"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-glass">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card">
                <Emoji emoji="🌟" />
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Play2Earn</span>
                <Emoji emoji="🚀" />
              </div>
              
              <h1 className="text-display">
                <span className="text-white">{t.hero?.title || "NFT Battle Arena"}</span>
                <br />
                <span className="text-blue-400">Battle Arena</span>
              </h1>
              
              <p className="text-body max-w-xl mx-auto lg:mx-0 text-lg">
                {t.hero?.description || "Get your first NFT, fight in arena against opponents and collect unique collection."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="glass-button-accent px-8 py-4 text-lg"
                  onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t.hero?.play_now || "Play Now"}
                </Button>
                
                <Button 
                  size="lg"
                  className="glass-button-primary px-8 py-4 text-lg"
                  onClick={() => onPageChange('game_info')}
                >
                  <Info className="w-5 h-5 mr-2" />
                  {t.hero?.learn_more || "Learn More"}
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png"
                  alt="NFT Battle Character"
                  className="relative z-10 w-full max-w-md lg:max-w-lg object-contain rounded-3xl scale-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Stats */}
      <section className="section-glass">
        <div className="container-glass">
          <div className="grid-glass grid-glass-4">
            {gameStats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className={`flex justify-center items-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-title text-white mb-2">{stat.value}</div>
                <div className="text-caption">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-glass">
        <div className="container-glass">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-title">
              {t.features?.why_choose_title || "Why Choose NFT Battle Arena"}
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              {t.features?.why_choose_subtitle || "Unique combination of NFT collecting, dynamic battles and earning opportunities"}
            </p>
          </div>
          
          <div className="grid-glass grid-glass-3">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 text-center scale-hover">
                <CardHeader className="space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-glass">
        <div className="container-glass">
          <Card className="glass-card-strong text-center p-12">
            <CardContent className="space-y-6">
              <h2 className="text-title">
                {t.cta?.ready_title || "Ready to Start Adventure?"} <Emoji emoji="🚀" />
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                {t.cta?.ready_subtitle || "Join thousands of players in NFT Battle Arena and start earning with us!"}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="glass-button-accent px-12 py-4 text-lg"
                  onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  {t.cta?.start_now || "Start Game Now"}
                </Button>
                
                <Button 
                  size="lg"
                  className="glass-button-primary px-8 py-4 text-lg"
                  onClick={() => onPageChange('battle_demo')}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  {t.cta?.watch_demo || "Watch Battle Demo"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};