// Mock data for NFT Battle Arena

export const translations = {
  ua: {
    nav: {
      home: "Головна",
      game_info: "Про гру",
      marketplace: "Магазин",
      battle_demo: "Демо бою",
      connect_telegram: "Підключити Telegram"
    },
    hero: {
      title: "NFT Battle Arena",
      subtitle: "Play2Earn гра в Telegram Mini App",
      description: "Отримай свій перший NFT, бийся на арені з суперниками та збирай унікальну колекцію. Це не просто гра – це битва за нагороди, престиж і справжню силу!",
      play_now: "Грати зараз",
      learn_more: "Дізнатися більше"
    },
    marketplace: {
      title: "NFT Магазин",
      coming_soon: "Магазин буде доступний через",
      connect_account: "Підключити акаунт",
      list_nft: "Виставити NFT",
      search_placeholder: "Пошук NFT...",
      categories: "Категорії",
      price_range: "Діапазон цін",
      cart: "Кошик",
      remove_from_cart: "Видалити з кошика"
    },
    battle: {
      title: "Демо бою",
      description: "Подивіться, як виглядає бій в NFT Battle Arena",
      player_hp: "HP Гравця",
      enemy_hp: "HP Ворога",
      attack: "Атака",
      defend: "Захист",
      special: "Спец-удар",
      fight: "БІЙ!",
      you_win: "ВИ ПЕРЕМОГЛИ!",
      you_lose: "ВИ ПРОГРАЛИ!",
      draw: "НІЧИЯ!"
    },
    game_info: {
      title: "Про гру NFT Battle Arena",
      subtitle: "Дізнайтесь все про механіку гри, правила та можливості заробітку",
      how_to_get_nft: "Як отримати NFT",
      game_rules: "Правила гри",
      roadmap: "Roadmap",
      faq: "FAQ"
    }
  },
  en: {
    nav: {
      home: "Home",
      game_info: "Game Info",
      marketplace: "Marketplace",
      battle_demo: "Battle Demo",
      connect_telegram: "Connect Telegram"
    },
    hero: {
      title: "NFT Battle Arena",
      subtitle: "Play2Earn game in Telegram Mini App",
      description: "Get your first NFT, fight in arena against opponents and collect unique collection. This is not just a game – it's a battle for rewards, prestige and real power!",
      play_now: "Play Now",
      learn_more: "Learn More"
    },
    marketplace: {
      title: "NFT Marketplace",
      coming_soon: "Marketplace will be available in",
      connect_account: "Connect Account",
      list_nft: "List NFT",
      search_placeholder: "Search NFTs...",
      categories: "Categories",
      price_range: "Price Range",
      cart: "Cart",
      remove_from_cart: "Remove from cart"
    },
    battle: {
      title: "Battle Demo",
      description: "See how battles look in NFT Battle Arena",
      player_hp: "Player HP",
      enemy_hp: "Enemy HP",
      attack: "Attack",
      defend: "Defend",
      special: "Special",
      fight: "FIGHT!",
      you_win: "YOU WIN!",
      you_lose: "YOU LOSE!",
      draw: "DRAW!"
    },
    game_info: {
      title: "About NFT Battle Arena Game",
      subtitle: "Learn everything about game mechanics, rules and earning opportunities",
      how_to_get_nft: "How to Get NFT",
      game_rules: "Game Rules",
      roadmap: "Roadmap",
      faq: "FAQ"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      game_info: "Info del Juego",
      marketplace: "Mercado",
      battle_demo: "Demo de Batalla",
      connect_telegram: "Conectar Telegram"
    },
    hero: {
      title: "NFT Battle Arena",
      subtitle: "Juego Play2Earn en Telegram Mini App",
      description: "Obtén tu primer NFT, lucha en la arena contra oponentes y colecciona una colección única. ¡Esto no es solo un juego: es una batalla por recompensas, prestigio y poder real!",
      play_now: "Jugar Ahora",
      learn_more: "Saber Más"
    },
    marketplace: {
      title: "Mercado NFT",
      coming_soon: "El mercado estará disponible en",
      connect_account: "Conectar Cuenta",
      list_nft: "Listar NFT",
      search_placeholder: "Buscar NFTs...",
      categories: "Categorías",
      price_range: "Rango de Precios",
      cart: "Carrito",
      remove_from_cart: "Eliminar del carrito"
    },
    battle: {
      title: "Demo de Batalla",
      description: "Ve cómo se ven las batallas en NFT Battle Arena",
      player_hp: "HP del Jugador",
      enemy_hp: "HP del Enemigo",
      attack: "Ataque",
      defend: "Defender",
      special: "Especial",
      fight: "¡LUCHA!",
      you_win: "¡GANASTE!",
      you_lose: "¡PERDISTE!",
      draw: "¡EMPATE!"
    },
    game_info: {
      title: "Sobre el Juego NFT Battle Arena",
      subtitle: "Aprende todo sobre las mecánicas del juego, reglas y oportunidades de ganar",
      how_to_get_nft: "Cómo Obtener NFT",
      game_rules: "Reglas del Juego",
      roadmap: "Hoja de Ruta",
      faq: "Preguntas Frecuentes"
    }
  }
};

export const mockNFTs = [
  {
    id: 1,
    name: "Warrior Dragon",
    description: "Legendary fire-breathing warrior with devastating attacks",
    price: 150,
    currency: "⭐",
    image: "https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png",
    rarity: "legendary",
    category: "warrior",
    stats: { attack: 95, defense: 80, speed: 70 }
  },
  {
    id: 2,
    name: "Shadow Assassin",
    description: "Stealthy fighter with critical strike abilities",
    price: 120,
    currency: "⭐",
    image: "https://via.placeholder.com/300x400?text=Shadow+Assassin",
    rarity: "epic",
    category: "assassin",
    stats: { attack: 85, defense: 60, speed: 95 }
  },
  {
    id: 3,
    name: "Cyber Mage",
    description: "Tech-enhanced spellcaster with energy attacks",
    price: 200,
    currency: "⭐",
    image: "https://via.placeholder.com/300x400?text=Cyber+Mage",
    rarity: "legendary",
    category: "mage",
    stats: { attack: 90, defense: 70, speed: 75 }
  }
];

export const mockAccessories = [
  {
    id: 1,
    name: "Power Gauntlets",
    description: "Increases attack power by 15%",
    price: 50,
    currency: "⭐",
    image: "https://via.placeholder.com/200x200?text=Power+Gauntlets",
    type: "gloves",
    bonus: { attack: 15 }
  },
  {
    id: 2,
    name: "Shield of Protection",
    description: "Increases defense by 20%",
    price: 40,
    currency: "⭐",
    image: "https://via.placeholder.com/200x200?text=Shield",
    type: "shield",
    bonus: { defense: 20 }
  }
];

export const gameFeatures = [
  {
    icon: "🎁",
    titleKey: "free_nft",
    descriptionKey: "free_nft_desc"
  },
  {
    icon: "⚔️",
    titleKey: "epic_battles",
    descriptionKey: "epic_battles_desc"
  },
  {
    icon: "💰",
    titleKey: "earn_rewards",
    descriptionKey: "earn_rewards_desc"
  }
];

// Market countdown - 5 months from now
export const marketLaunchDate = new Date();
marketLaunchDate.setMonth(marketLaunchDate.getMonth() + 5);