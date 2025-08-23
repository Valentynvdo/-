import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Search, ShoppingCart, Plus, Star, Shield, Sword, Calendar, Clock, Link, Trash2 } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';
import { CountdownTimer } from './CountdownTimer';
import { mockNFTs, mockAccessories, marketLaunchDate } from '../data/mock';

export const Marketplace = ({ currentLang, translations }) => {
  const t = translations[currentLang]?.marketplace || translations.en.marketplace;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [cart, setCart] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [showListNFT, setShowListNFT] = useState(false);
  const [newNFT, setNewNFT] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    rarity: 'common'
  });

  const categories = [
    { value: 'all', label: 'Усі категорії', icon: '🎯' },
    { value: 'warrior', label: 'Воїни', icon: '⚔️' },
    { value: 'mage', label: 'Маги', icon: '🔮' },
    { value: 'assassin', label: 'Асасини', icon: '🗡️' },
    { value: 'accessories', label: 'Аксесуари', icon: '💎' }
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
    // Mock connection
    setIsConnected(true);
    alert('Telegram акаунт успішно підключено! (Демо режим)');
  };

  const handleListNFT = () => {
    if (!newNFT.name || !newNFT.description || !newNFT.price) {
      alert('Заповніть всі поля');
      return;
    }
    alert('NFT успішно виставлено на продаж! (Демо режим)');
    setShowListNFT(false);
    setNewNFT({ name: '', description: '', price: '', image: '', rarity: 'common' });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {t.title}
            <AnimatedEmoji emoji="🏪" animation="bounce" className="ml-3" />
          </h1>
          
          {/* Countdown Timer */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00FFD1]">
              {t.coming_soon}
              <AnimatedEmoji emoji="⏳" animation="pulse" className="ml-2" />
            </h2>
            <CountdownTimer targetDate={marketLaunchDate} />
          </div>

          {/* Connection Status */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-none border ${isConnected ? 'border-green-500 bg-green-500/20' : 'border-white/20 bg-black/40'}`}>
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm">
                {isConnected ? 'Telegram підключено' : 'Telegram не підключено'}
              </span>
            </div>
            
            {!isConnected && (
              <Button 
                onClick={handleConnectTelegram}
                className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
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
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-none">
            <Card className="bg-black/90 backdrop-blur-md border-white/20 rounded-none text-center max-w-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-2 text-[#00FFD1]" />
                  Магазин тимчасово недоступний
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Ми працюємо над створенням найкращого досвіду покупки NFT. 
                  Магазин буде доступний через кілька місяців з усіма функціями!
                </p>
                <div className="flex flex-col gap-2 text-sm text-white/60">
                  <div className="flex items-center justify-center gap-2">
                    <AnimatedEmoji emoji="🛒" animation="bounce" />
                    Покупка та продаж NFT
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <AnimatedEmoji emoji="💎" animation="pulse" />
                    Рідкісні аксесуари
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <AnimatedEmoji emoji="🔍" animation="float" />
                    Розширений пошук
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketplace UI Preview */}
          <div className="opacity-30">
            <Tabs defaultValue="browse" className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-black/40 backdrop-blur-md rounded-none">
                <TabsTrigger value="browse" className="rounded-none">
                  <Search className="w-4 h-4 mr-2" />
                  Переглядати
                </TabsTrigger>
                <TabsTrigger value="sell" className="rounded-none" disabled={!isConnected}>
                  <Plus className="w-4 h-4 mr-2" />
                  Продавати
                </TabsTrigger>
                <TabsTrigger value="cart" className="rounded-none">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Кошик ({cart.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-6">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                    <Input 
                      placeholder={t.search_placeholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white">
                      <SelectValue placeholder={t.categories} />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-md border-white/20 rounded-none">
                      {categories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value} className="text-white hover:bg-white/10 rounded-none">
                          <span className="flex items-center gap-2">
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white">
                      <SelectValue placeholder={t.price_range} />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-md border-white/20 rounded-none">
                      <SelectItem value="all" className="text-white hover:bg-white/10 rounded-none">Усі ціни</SelectItem>
                      <SelectItem value="low" className="text-white hover:bg-white/10 rounded-none">&lt; 100 ⭐</SelectItem>
                      <SelectItem value="mid" className="text-white hover:bg-white/10 rounded-none">100-200 ⭐</SelectItem>
                      <SelectItem value="high" className="text-white hover:bg-white/10 rounded-none">&gt; 200 ⭐</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* NFT Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="bg-black/40 backdrop-blur-md border-white/20 rounded-none hover:bg-black/60 transition-all duration-300">
                      <CardHeader className="p-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-none mb-4"
                        />
                        <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-white/70 text-sm">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-[#00FFD1] font-bold text-lg">
                            {item.price} {item.currency}
                          </div>
                          {item.rarity && (
                            <div className={`text-sm px-2 py-1 border rounded-none ${
                              rarities.find(r => r.value === item.rarity)?.color || 'text-white'
                            } border-current`}>
                              {rarities.find(r => r.value === item.rarity)?.label}
                            </div>
                          )}
                        </div>
                        
                        {item.stats && (
                          <div className="flex justify-around text-xs mb-4 text-white/70">
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
                          className="w-full bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Додати в кошик
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sell">
                <Card className="bg-black/40 backdrop-blur-md border-white/20 rounded-none">
                  <CardHeader>
                    <CardTitle className="text-white">{t.list_nft}</CardTitle>
                    <CardDescription className="text-white/70">
                      Виставте свій NFT або аксесуар на продаж
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input 
                      placeholder="Назва NFT"
                      value={newNFT.name}
                      onChange={(e) => setNewNFT(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white"
                    />
                    <Input 
                      placeholder="Опис"
                      value={newNFT.description}
                      onChange={(e) => setNewNFT(prev => ({ ...prev, description: e.target.value }))}
                      className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white"
                    />
                    <Input 
                      placeholder="Ціна (⭐)"
                      type="number"
                      value={newNFT.price}
                      onChange={(e) => setNewNFT(prev => ({ ...prev, price: e.target.value }))}
                      className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white"
                    />
                    <Input 
                      placeholder="URL зображення"
                      value={newNFT.image}
                      onChange={(e) => setNewNFT(prev => ({ ...prev, image: e.target.value }))}
                      className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white"
                    />
                    <Select value={newNFT.rarity} onValueChange={(value) => setNewNFT(prev => ({ ...prev, rarity: value }))}>
                      <SelectTrigger className="bg-black/40 backdrop-blur-md border-white/20 rounded-none text-white">
                        <SelectValue placeholder="Рідкість" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 backdrop-blur-md border-white/20 rounded-none">
                        {rarities.map(rarity => (
                          <SelectItem key={rarity.value} value={rarity.value} className="text-white hover:bg-white/10 rounded-none">
                            <span className={rarity.color}>{rarity.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button 
                      onClick={handleListNFT}
                      className="w-full bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                    >
                      Виставити на продаж
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cart">
                <Card className="bg-black/40 backdrop-blur-md border-white/20 rounded-none">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {t.cart}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {cart.length === 0 ? (
                      <p className="text-white/70 text-center py-8">Кошик пустий</p>
                    ) : (
                      <>
                        <div className="space-y-4 mb-6">
                          {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 bg-black/20 rounded-none">
                              <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-none" />
                                <div>
                                  <div className="text-white font-semibold">{item.name}</div>
                                  <div className="text-white/70 text-sm">
                                    {item.price} ⭐ × {item.quantity}
                                  </div>
                                </div>
                              </div>
                              <Button 
                                variant="outline"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="border-red-500 text-red-500 hover:bg-red-500/20 rounded-none"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-white/20 pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-white">Всього:</span>
                            <span className="text-lg font-bold text-[#00FFD1]">{getTotalPrice()} ⭐</span>
                          </div>
                          <Button 
                            className="w-full bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 rounded-none font-bold"
                          >
                            Оформити замовлення
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};