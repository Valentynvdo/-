import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';
import { Emoji } from './AnimatedEmoji';

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
        addToBattleLog(`⚔️ ${t.player_turn || 'Player'} attacks for ${damage} damage!`);
      } else if (action === 'special' && playerEnergy >= 100) {
        const specialDamage = damage * 2;
        setEnemyHP(prev => Math.max(0, prev - specialDamage));
        setPlayerEnergy(0);
        addToBattleLog(`✨ ${t.player_turn || 'Player'} uses special attack for ${specialDamage} damage!`);
      } else if (action === 'defend') {
        addToBattleLog(`🛡️ ${t.player_turn || 'Player'} defends!`);
      }
    } else {
      if (action === 'attack') {
        setPlayerHP(prev => Math.max(0, prev - damage));
        setEnemyEnergy(prev => Math.min(100, prev + energyGain));
        addToBattleLog(`👹 ${t.enemy_turn || 'Enemy'} attacks for ${damage} damage!`);
      } else if (action === 'special' && enemyEnergy >= 100) {
        const specialDamage = damage * 2;
        setPlayerHP(prev => Math.max(0, prev - specialDamage));
        setEnemyEnergy(0);
        addToBattleLog(`💥 ${t.enemy_turn || 'Enemy'} uses special attack for ${specialDamage} damage!`);
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
      addToBattleLog(`💀 ${t.you_lose || 'You Lose!'}`);
    } else if (enemyHP <= 0) {
      setGameResult('win');
      setIsPlaying(false);
      addToBattleLog(`🏆 ${t.you_win || 'You Win!'}`);
    }
  }, [playerHP, enemyHP]);

  const toggleBattle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="container-glass">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-display">
            {t.title || "Battle Demo"} <Emoji emoji="⚔️" />
          </h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {t.description || "See how battles look in NFT Battle Arena"}
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={toggleBattle}
              className="glass-button-accent px-6 py-3"
              disabled={gameResult}
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? (t.pause || 'Pause') : (t.start || 'Start')}
            </Button>
            
            <Button 
              onClick={resetBattle}
              className="glass-button-primary px-6 py-3"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t.reset || 'Reset'}
            </Button>
          </div>
        </div>

        {/* Battle Arena */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Battle UI */}
          <Card className="glass-card-strong p-8">
            {/* HP Bars */}
            <div className="flex justify-between items-center mb-8 gap-8">
              {/* Player HP */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-caption font-semibold">{t.player_hp || "Player HP"}</span>
                  <span className="text-caption">{playerHP}/{MAX_PLAYER_HP}</span>
                </div>
                <div className="h-3 bg-black/60 rounded-xl overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-500 rounded-xl"
                    style={{ width: `${(playerHP / MAX_PLAYER_HP) * 100}%` }}
                  />
                </div>
                <div className="h-2 bg-black/60 rounded-xl overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-500 rounded-xl"
                    style={{ width: `${playerEnergy}%` }}
                  />
                </div>
              </div>

              {/* Turn Indicator */}
              <div className="text-center px-6">
                <div className="text-3xl mb-2">
                  {currentTurn === 'player' ? '👤' : '👹'}
                </div>
                <div className="text-caption">
                  {currentTurn === 'player' ? (t.player_turn || 'Player Turn') : (t.enemy_turn || 'Enemy Turn')}
                </div>
              </div>

              {/* Enemy HP */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-caption">{enemyHP}/{MAX_ENEMY_HP}</span>
                  <span className="text-caption font-semibold">{t.enemy_hp || "Enemy HP"}</span>
                </div>
                <div className="h-3 bg-black/60 rounded-xl overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-l from-red-500 to-green-500 transition-all duration-500 ml-auto rounded-xl"
                    style={{ width: `${(enemyHP / MAX_ENEMY_HP) * 100}%` }}
                  />
                </div>
                <div className="h-2 bg-black/60 rounded-xl overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-500 ml-auto rounded-xl"
                    style={{ width: `${enemyEnergy}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Characters */}
            <div className="flex justify-between items-end px-8 py-12">
              <div className={`transition-all duration-300 ${currentTurn === 'player' ? 'scale-110' : ''}`}>
                <div className="w-24 h-32 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                  <Emoji emoji="🦸‍♂️" className="text-4xl" />
                </div>
                <div className="text-center mt-2 text-caption">Player</div>
              </div>

              <div className="text-center">
                <Emoji emoji="⚡" className="text-6xl" />
                <div className="mt-2 text-headline text-blue-400">VS</div>
              </div>

              <div className={`transition-all duration-300 ${currentTurn === 'enemy' ? 'scale-110' : ''}`}>
                <div className="w-24 h-32 bg-gradient-to-b from-red-500 to-red-700 rounded-2xl flex items-center justify-center">
                  <Emoji emoji="👹" className="text-4xl" />
                </div>
                <div className="text-center mt-2 text-caption">Enemy</div>
              </div>
            </div>

            {/* Game Result */}
            {gameResult && (
              <div className="absolute inset-0 glass-card-strong flex items-center justify-center rounded-2xl">
                <div className="text-center space-y-6">
                  <div className="text-6xl">
                    {gameResult === 'win' ? <Emoji emoji="🏆" /> : <Emoji emoji="💀" />}
                  </div>
                  <div className="text-title text-blue-400">
                    {gameResult === 'win' ? t.you_win : t.you_lose}
                  </div>
                  <Button 
                    onClick={resetBattle}
                    className="glass-button-accent"
                  >
                    Play Again
                  </Button>
                </div>
              </div>
            )}
          </Card>

          {/* Battle Log */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-headline flex items-center">
                <Info className="w-5 h-5 mr-2" />
                {t.battle_log || "Battle Log"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 h-32 overflow-y-auto">
                {battleLog.length === 0 ? (
                  <p className="text-body text-center opacity-60">
                    {t.battle_not_started || "Battle hasn't started yet..."}
                  </p>
                ) : (
                  battleLog.map((log, index) => (
                    <div key={index} className="text-body">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <Card className="glass-card text-center">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-center">
                <Info className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-headline">{t.demo_info || "This is demo version"}</span>
              </div>
              <p className="text-body">
                {t.demo_description || "In the real game you can control all character actions, use different NFTs with unique abilities and earn BP points for victories."}
              </p>
              <Button 
                className="glass-button-accent"
                onClick={() => window.open('https://t.me/NFTBattleArenaBot', '_blank')}
              >
                <Play className="w-4 h-4 mr-2" />
                {t.play_real_game || "Play Real Game"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};