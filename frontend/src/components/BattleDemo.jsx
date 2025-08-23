import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';

export const BattleDemo = ({ currentLang, translations }) => {
  const t = translations[currentLang]?.battle || translations.en.battle;
  
  const [playerHP, setPlayerHP] = useState(2000);
  const [enemyHP, setEnemyHP] = useState(2400);
  const [playerEnergy, setPlayerEnergy] = useState(0);
  const [enemyEnergy, setEnemyEnergy] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [battleLog, setBattleLog] = useState([]);
  const [currentTurn, setCurrentTurn] = useState('player');
  const [gameResult, setGameResult] = useState(null);
  
  const intervalRef = useRef(null);
  const MAX_PLAYER_HP = 2000;
  const MAX_ENEMY_HP = 2400;

  const resetBattle = () => {
    setPlayerHP(MAX_PLAYER_HP);
    setEnemyHP(MAX_ENEMY_HP);
    setPlayerEnergy(0);
    setEnemyEnergy(0);
    setIsPlaying(false);
    setBattleLog([]);
    setCurrentTurn('player');
    setGameResult(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const addToBattleLog = (message) => {
    setBattleLog(prev => [...prev.slice(-4), message]);
  };

  const performAction = (actor, action) => {
    const damage = Math.floor(Math.random() * 50) + 20;
    const energyGain = Math.floor(Math.random() * 15) + 5;
    
    if (actor === 'player') {
      if (action === 'attack') {
        setEnemyHP(prev => Math.max(0, prev - damage));
        setPlayerEnergy(prev => Math.min(100, prev + energyGain));
        addToBattleLog(`🗡️ Гравець атакує на ${damage} шкоди!`);
      } else if (action === 'special' && playerEnergy >= 100) {
        const specialDamage = damage * 2;
        setEnemyHP(prev => Math.max(0, prev - specialDamage));
        setPlayerEnergy(0);
        addToBattleLog(`⚡ Гравець використав спецудар на ${specialDamage} шкоди!`);
      } else if (action === 'defend') {
        addToBattleLog(`🛡️ Гравець захищається!`);
      }
    } else {
      if (action === 'attack') {
        setPlayerHP(prev => Math.max(0, prev - damage));
        setEnemyEnergy(prev => Math.min(100, prev + energyGain));
        addToBattleLog(`👹 Ворог атакує на ${damage} шкоди!`);
      } else if (action === 'special' && enemyEnergy >= 100) {
        const specialDamage = damage * 2;
        setPlayerHP(prev => Math.max(0, prev - specialDamage));
        setEnemyEnergy(0);
        addToBattleLog(`💥 Ворог використав спецудар на ${specialDamage} шкоди!`);
      }
    }
  };

  const simulateBattle = () => {
    if (!isPlaying) return;
    
    const actions = ['attack', 'attack', 'special', 'defend'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    if (currentTurn === 'player') {
      performAction('player', randomAction);
      setCurrentTurn('enemy');
    } else {
      performAction('enemy', randomAction);
      setCurrentTurn('player');
    }
  };

  useEffect(() => {
    if (isPlaying && !gameResult) {
      intervalRef.current = setInterval(simulateBattle, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentTurn, gameResult, playerEnergy, enemyEnergy]);

  useEffect(() => {
    if (playerHP <= 0) {
      setGameResult('lose');
      setIsPlaying(false);
      addToBattleLog('💀 Гравець програв!');
    } else if (enemyHP <= 0) {
      setGameResult('win');
      setIsPlaying(false);
      addToBattleLog('🏆 Гравець переміг!');
    }
  }, [playerHP, enemyHP]);

  const toggleBattle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {t.title}
            <AnimatedEmoji emoji="⚔️" animation="bounce" className="ml-3" />
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {t.description}
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              onClick={toggleBattle}
              className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
              disabled={gameResult}
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Пауза' : 'Почати'}
            </Button>
            
            <Button 
              onClick={resetBattle}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-none"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Скинути
            </Button>
          </div>
        </div>

        {/* Battle Arena */}
        <div className="max-w-6xl mx-auto">
          {/* Battle UI */}
          <div className="relative bg-black/40 backdrop-blur-md border border-white/20 rounded-none p-8 mb-8">
            {/* HP Bars */}
            <div className="flex justify-between items-center mb-8">
              {/* Player HP */}
              <div className="flex-1 mr-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white/80">{t.player_hp}</span>
                  <span className="text-sm text-white/80">{playerHP}/{MAX_PLAYER_HP}</span>
                </div>
                <div className="h-4 bg-black/60 rounded-none overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-500"
                    style={{ width: `${(playerHP / MAX_PLAYER_HP) * 100}%` }}
                  />
                </div>
                <div className="mt-2 h-2 bg-black/60 rounded-none overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-500"
                    style={{ width: `${playerEnergy}%` }}
                  />
                </div>
              </div>

              {/* Timer */}
              <div className="text-center px-6">
                <div className="text-2xl font-bold text-[#00FFD1]">
                  {currentTurn === 'player' ? '👤' : '👹'}
                </div>
                <div className="text-sm text-white/60">
                  {currentTurn === 'player' ? 'Хід гравця' : 'Хід ворога'}
                </div>
              </div>

              {/* Enemy HP */}
              <div className="flex-1 ml-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/80">{enemyHP}/{MAX_ENEMY_HP}</span>
                  <span className="text-sm font-semibold text-white/80">{t.enemy_hp}</span>
                </div>
                <div className="h-4 bg-black/60 rounded-none overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-l from-red-500 to-green-500 transition-all duration-500 ml-auto"
                    style={{ width: `${(enemyHP / MAX_ENEMY_HP) * 100}%` }}
                  />
                </div>
                <div className="mt-2 h-2 bg-black/60 rounded-none overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-500 ml-auto"
                    style={{ width: `${enemyEnergy}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Characters */}
            <div className="flex justify-between items-end px-8 py-12">
              <div className={`transition-all duration-300 ${currentTurn === 'player' ? 'transform scale-110' : ''}`}>
                <div className="w-32 h-40 bg-gradient-to-b from-blue-500 to-blue-700 rounded-none flex items-center justify-center">
                  <AnimatedEmoji emoji="🦸‍♂️" className="text-6xl" animation="float" />
                </div>
                <div className="text-center mt-2 text-sm text-white/80">Гравець</div>
              </div>

              <div className="text-center">
                <AnimatedEmoji emoji="⚡" className="text-8xl" animation="pulse" />
                <div className="mt-2 text-lg font-bold text-[#00FFD1]">VS</div>
              </div>

              <div className={`transition-all duration-300 ${currentTurn === 'enemy' ? 'transform scale-110' : ''}`}>
                <div className="w-32 h-40 bg-gradient-to-b from-red-500 to-red-700 rounded-none flex items-center justify-center">
                  <AnimatedEmoji emoji="👹" className="text-6xl" animation="float" />
                </div>
                <div className="text-center mt-2 text-sm text-white/80">Ворог</div>
              </div>
            </div>

            {/* Game Result */}
            {gameResult && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-none">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {gameResult === 'win' ? (
                      <AnimatedEmoji emoji="🏆" animation="bounce" />
                    ) : (
                      <AnimatedEmoji emoji="💀" animation="pulse" />
                    )}
                  </div>
                  <div className="text-4xl font-bold mb-6 text-[#00FFD1]">
                    {gameResult === 'win' ? t.you_win : t.you_lose}
                  </div>
                  <Button 
                    onClick={resetBattle}
                    className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                  >
                    Грати знову
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Battle Log */}
          <Card className="bg-black/40 backdrop-blur-md border-white/20 rounded-none">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Лог бою
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 h-32 overflow-y-auto">
                {battleLog.length === 0 ? (
                  <p className="text-white/60 text-center">Бій ще не почався...</p>
                ) : (
                  battleLog.map((log, index) => (
                    <div key={index} className="text-white/80 text-sm">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <div className="mt-8 text-center">
            <Card className="bg-black/40 backdrop-blur-md border-white/20 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Info className="w-6 h-6 text-[#00FFD1] mr-2" />
                  <span className="text-lg font-semibold text-white">Це демо версія</span>
                </div>
                <p className="text-white/80 mb-4">
                  У справжній грі ви зможете контролювати всі дії персонажа, використовувати різні NFT з унікальними здібностями та заробляти BP поінти за перемоги.
                </p>
                <Button 
                  className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                  onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Грати справжню гру
                  <AnimatedEmoji emoji="🎮" animation="bounce" className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};