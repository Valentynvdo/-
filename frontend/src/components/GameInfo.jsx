import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Gift, Sword, Trophy, HelpCircle, Calendar, Users, Zap, Star, Target, Shield } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';

export const GameInfo = ({ currentLang, translations, onPageChange }) => {
  const t = translations[currentLang]?.game_info || translations.en.game_info;

  const howToGetNFT = [
    {
      icon: <Gift className="w-8 h-8 text-[#00FFD1]" />,
      title: "Безкоштовний стартовий NFT",
      description: "Кожен новий гравець отримує свого першого NFT-бійця абсолютно безкоштовно через Airdrop систему.",
      emoji: "🎁"
    },
    {
      icon: <Star className="w-8 h-8 text-[#00FFD1]" />,
      title: "Покупка за Telegram Stars",
      description: "Додаткові унікальні NFT та аксесуари можна придбати за Telegram Stars у внутрішньому магазині.",
      emoji: "⭐"
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#00FFD1]" />,
      title: "Нагороди за досягнення",
      description: "Отримуйте рідкісні NFT за участь у турнірах, досягнення високих рейтингів та виконання спеціальних завдань.",
      emoji: "🏆"
    }
  ];

  const gameRules = [
    {
      title: "Початок гри і перший NFT",
      icon: "🚀",
      rules: [
        "При першому вході гравець отримує безкоштовного базового NFT-бійця",
        "Цей воїн потрібен для початкових боїв проти бота та отримання перших BP-поінтів",
        "Стартовий NFT має базові характеристики, які можна покращити"
      ]
    },
    {
      title: "Система BP-поінтів",
      icon: "💎",
      rules: [
        "BP-поінти нараховуються за перемогу в боях проти бота",
        "Гравець може отримувати безкоштовні BP-поінти щодня – раз на 24 години",
        "BP-поінти можна конвертувати в реальні нагороди через спеціальні аксесуари",
        "Модульне вікно апгрейдів дозволяє підвищувати кількість BP за перемогу"
      ]
    },
    {
      title: "Бойова система",
      icon: "⚔️",
      rules: [
        "Кожен боєць має 2000 HP (гравець) та 2400 HP (бот) для балансу",
        "Три типи дій: атака, захист, спеціальний удар",
        "Перемога приносить BP-поінти і досвід для покращення воїна",
        "Поразка зменшує рейтинг, але NFT та BP-поінти залишаються у гравця"
      ]
    },
    {
      title: "Економіка гри",
      icon: "💰",
      rules: [
        "Всі NFT та аксесуари купуються виключно за Telegram Stars",
        "BP-поінти НЕ витрачаються на покупки - тільки на вивід через аксесуари",
        "Прозора економіка - всі ціни та можливості виводу відображаються чесно",
        "Антифрод система запобігає використанню ботів та мультиакаунтів"
      ]
    }
  ];

  const roadmapItems = [
    {
      period: "Осінь 2025",
      title: "PvE Розширення",
      items: [
        "Запуск PvE-режимів із сюжетними квестами",
        "Битви проти легендарних босів з рідкісними NFT",
        "Покращення UI/UX у Telegram Mini App"
      ],
      status: "upcoming"
    },
    {
      period: "Зима 2025",
      title: "Командна гра",
      items: [
        "Запуск Guild Wars – кланових битв 5х5",
        "Сезонні батл-паси з ексклюзивними аксесуарами",
        "Система рейтингів і щотижневі турніри"
      ],
      status: "upcoming"
    },
    {
      period: "Весна 2026",
      title: "Інтерактивний світ",
      items: [
        "Запуск інтерактивної карти скарбів із гео-локаційними NFT",
        "Розширення системи аксесуарів",
        "Перший міжрегіональний турнір з призовим фондом"
      ],
      status: "planned"
    },
    {
      period: "Літо 2026",
      title: "Блокчейн інтеграція",
      items: [
        "Запуск мобільного додатку для iOS та Android",
        "Інтеграція з блокчейном для справжніх NFT-транзакцій",
        "Впровадження внутрішнього маркетплейсу"
      ],
      status: "planned"
    }
  ];

  const faqItems = [
    {
      question: "Що таке NFT Battle Arena?",
      answer: "NFT Battle Arena – це інноваційна Play2Earn гра у форматі Telegram Mini App. Кожен гравець отримує безкоштовного NFT-бійця, щоб розпочати битви на арені та збирати унікальну колекцію."
    },
    {
      question: "Чи потрібно мати криптовалюту для гри?",
      answer: "Ні, криптовалюта не потрібна. Усі транзакції в грі здійснюються через Telegram Stars, що робить її доступною для всіх."
    },
    {
      question: "Як я можу заробити гроші у грі?",
      answer: "Ви можете заробляти BP-поінти за перемоги в боях, які можна конвертувати в реальні нагороди через спеціальні аксесуари. Також можна продавати NFT на майбутньому маркетплейсі."
    },
    {
      question: "Чи є мультиплеєрні бої?",
      answer: "Наразі доступні бої проти ботів. PvP-битви між реальними гравцями та глобальні турніри заплановані на зиму 2025."
    },
    {
      question: "Як захищена гра від шахрайства?",
      answer: "Ми використовуємо систему антиспам та перевірки акаунтів. Використання ботів або мультиакаунтів призводить до безумовного бану."
    },
    {
      question: "Де завантажити гру?",
      answer: "Гра доступна в Telegram Mini App. У майбутньому планується реліз у Play Store та App Store."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {t.title}
            <AnimatedEmoji emoji="📖" animation="bounce" className="ml-3" />
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="how-to-get" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/40 backdrop-blur-md rounded-none mb-8">
            <TabsTrigger value="how-to-get" className="rounded-none">
              <Gift className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">NFT</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="rounded-none">
              <Sword className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Правила</span>
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="rounded-none">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="rounded-none">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">FAQ</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="how-to-get" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Як отримати NFT
                <AnimatedEmoji emoji="🎁" animation="bounce" className="ml-2" />
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Дізнайтесь усі способи отримання унікальних NFT-бійців та аксесуарів у NFT Battle Arena
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {howToGetNFT.map((method, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-md border-white/20 rounded-none hover:bg-black/60 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-[#00FFD1]/20 rounded-none">
                        {method.icon}
                      </div>
                    </div>
                    <CardTitle className="text-white flex items-center justify-center gap-2">
                      <AnimatedEmoji emoji={method.emoji} animation="pulse" />
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/80 text-center">
                      {method.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Правила гри
                <AnimatedEmoji emoji="📜" animation="bounce" className="ml-2" />
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Ознайомтесь з основними правилами та механікою гри для успішного старту
              </p>
            </div>

            <div className="space-y-8">
              {gameRules.map((section, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-md border-white/20 rounded-none">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <AnimatedEmoji emoji={section.icon} animation="pulse" className="text-2xl" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3 text-white/80">
                          <div className="w-2 h-2 bg-[#00FFD1] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Roadmap розвитку
                <AnimatedEmoji emoji="🗺️" animation="bounce" className="ml-2" />
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Плани розвитку NFT Battle Arena на найближчі роки
              </p>
            </div>

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <Card key={index} className={`border-l-4 rounded-none ${
                  item.status === 'upcoming' ? 'border-l-[#00FFD1] bg-[#00FFD1]/5' : 'border-l-white/40 bg-black/40'
                } backdrop-blur-md border-white/20`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                      <div className={`px-3 py-1 rounded-none text-sm border ${
                        item.status === 'upcoming' 
                          ? 'border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/20' 
                          : 'border-white/40 text-white/70 bg-black/40'
                      }`}>
                        {item.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.items.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-white/80">
                          <Target className="w-4 h-4 text-[#00FFD1] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Часті питання
                <AnimatedEmoji emoji="❓" animation="bounce" className="ml-2" />
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Відповіді на найпоширеніші запитання про NFT Battle Arena
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-md border-white/20 rounded-none hover:bg-black/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-[#00FFD1] mt-1 flex-shrink-0" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-black/60 to-[#00FFD1]/10 border-white/20 rounded-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готові спробувати NFT Battle Arena?
                <AnimatedEmoji emoji="🚀" animation="bounce" className="ml-2" />
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Приєднуйтесь до тисяч гравців та почніть свою пригоду в світі NFT боїв прямо зараз!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                  onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Почати гру
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-none"
                  onClick={() => onPageChange('battle_demo')}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Демо бою
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};