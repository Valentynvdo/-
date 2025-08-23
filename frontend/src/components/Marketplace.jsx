import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Search, ShoppingCart, Plus, Star, Shield, Sword, Calendar, Clock, Link, Trash2 } from 'lucide-react';
import { Emoji } from './AnimatedEmoji';
import { CountdownTimer } from './CountdownTimer';
import { mockNFTs, mockAccessories, marketLaunchDate } from '../data/mock';

export const Marketplace = ({ currentLang, translations }) => {
  const t = translations[currentLang]?.marketplace || translations.en.marketplace;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [cart, setCart] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [newNFT, setNewNFT] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    rarity: 'common'
  });

  const categories = [
    { value: 'all', label: 'Усі категорії' },
    { value: 'warrior', label: 'Воїни' },
    { value: 'mage', label: 'Маги' },
    { value: 'assassin', label: 'Асасини' },
    { value: 'accessories', label: 'Аксесуари' }
  ];

  const rarities = [
    { value: 'common', label: 'Звичайний', color: 'text-gray-400' },
    { value: 'rare', label: 'Рідкісний', color: 'text-blue-400' },
    { value: 'epic', label: 'Епічний', color: 'text-purple-400' },
    { value: 'legendary', label: 'Легендарний', color: 'text-yellow-400' }
  ];

  const allItems = [...mockNFTs, ...mockAccessories];

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           item.category === selectedCategory || 
                           (selectedCategory === 'accessories' && item.type);
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && item.price < 100) ||
                        (priceRange === 'mid' && item.price >= 100 && item.price < 200) ||
                        (priceRange === 'high' && item.price >= 200);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleConnectTelegram = () => {
    setIsConnected(true);
    alert('Telegram акаунт успішно підключено! (Демо режим)');
  };

  const handleListNFT = () => {
    if (!newNFT.name || !newNFT.description || !newNFT.price) {
      alert('Заповніть всі поля');
      return;
    }
    alert('NFT успішно виставлено на продаж! (Демо режим)');
    setNewNFT({ name: '', description: '', price: '', image: '', rarity: 'common' });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="container-glass">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-display">
            {t.title} <Emoji emoji="🏪" />
          </h1>
          
          {/* Countdown Timer */}
          <div className="space-y-6">
            <h2 className="text-title text-blue-400">
              {t.coming_soon} <Emoji emoji="⏳" />
            </h2>
            <CountdownTimer targetDate={marketLaunchDate} />
          </div>

          {/* Connection Status */}
          <div className="flex justify-center items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl border ${isConnected ? 'border-green-500/30 bg-green-500/10' : 'border-white/20 glass-card'}`}>
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-body">
                {isConnected ? (t.telegram_connected || 'Telegram Connected') : (t.telegram_not_connected || 'Telegram Not Connected')}
              </span>
            </div>
            
            {!isConnected && (
              <Button 
                onClick={handleConnectTelegram}
                className="glass-button-accent"
              >
                <Link className="w-4 h-4 mr-2" />
                {t.connect_account}
              </Button>
            )}
          </div>
        </div>

        {/* Marketplace Interface (Disabled) */}
        <div className="relative">
          {/* Disabled Overlay */}
          <div className="absolute inset-0 glass-card-strong z-10 flex items-center justify-center rounded-3xl">
            <Card className="glass-card-strong text-center max-w-md p-8">
              <CardHeader className="space-y-4">
                <CardTitle className="text-headline flex items-center justify-center gap-2">
                  <Clock className="w-6 h-6 text-blue-400" />
                  {t.temporarily_unavailable || "Marketplace temporarily unavailable"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-body">
                  {t.market_description || "We're working on creating the best NFT shopping experience. The marketplace will be available in a few months with all features!"}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 text-body">
                    <Emoji emoji="🛒" />
                    Покупка та продаж NFT
                  </div>
                  <div className="flex items-center justify-center gap-2 text-body">
                    <Emoji emoji="💎" />
                    Рідкісні аксесуари
                  </div>
                  <div className="flex items-center justify-center gap-2 text-body">
                    <Emoji emoji="🔍" />
                    Розширений пошук
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketplace UI Preview */}
          <div className="opacity-20 space-y-8">
            <Tabs defaultValue="browse" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass-card rounded-2xl p-1">
                <TabsTrigger value="browse" className="rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Переглядати</span>
                </TabsTrigger>
                <TabsTrigger value="sell" className="rounded-xl" disabled={!isConnected}>
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Продавати</span>
                </TabsTrigger>
                <TabsTrigger value="cart" className="rounded-xl">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Кошик ({cart.length})</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-6 mt-8">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-white/50" />
                    <Input 
                      placeholder={t.search_placeholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 glass-input"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="glass-input">
                      <SelectValue placeholder={t.categories} />
                    </SelectTrigger>
                    <SelectContent className="glass-card-strong">
                      {categories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value} className="text-white hover:bg-white/10 rounded-lg">
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="glass-input">
                      <SelectValue placeholder={t.price_range} />
                    </SelectTrigger>
                    <SelectContent className="glass-card-strong">
                      <SelectItem value="all" className="text-white hover:bg-white/10 rounded-lg">Усі ціни</SelectItem>
                      <SelectItem value="low" className="text-white hover:bg-white/10 rounded-lg">&lt; 100 ⭐</SelectItem>
                      <SelectItem value="mid" className="text-white hover:bg-white/10 rounded-lg">100-200 ⭐</SelectItem>
                      <SelectItem value="high" className="text-white hover:bg-white/10 rounded-lg">&gt; 200 ⭐</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* NFT Grid */}
                <div className="grid-glass grid-glass-4">
                  {filteredItems.slice(0, 8).map((item) => (
                    <Card key={item.id} className="glass-card scale-hover">
                      <CardHeader className="p-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-2xl mb-4"
                        />
                        <CardTitle className="text-headline">{item.name}</CardTitle>
                        <CardDescription className="text-body">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="text-blue-400 font-bold text-lg">
                            {item.price} {item.currency}
                          </div>
                          {item.rarity && (
                            <div className={`text-sm px-3 py-1 border rounded-xl ${
                              rarities.find(r => r.value === item.rarity)?.color || 'text-white'
                            } border-current`}>
                              {rarities.find(r => r.value === item.rarity)?.label}
                            </div>
                          )}
                        </div>
                        
                        {item.stats && (
                          <div className="flex justify-around text-xs text-white/70">
                            <div className="flex items-center gap-1">
                              <Sword className="w-3 h-3" />
                              <span>{item.stats.attack}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              <span>{item.stats.defense}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              <span>{item.stats.speed}</span>
                            </div>
                          </div>
                        )}
                        
                        <Button 
                          onClick={() => addToCart(item)}
                          className="w-full glass-button-accent"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {t.add_to_cart || "Add to Cart"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};