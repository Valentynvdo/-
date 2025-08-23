// NFT Battle Arena - Static Site JavaScript
// Complete functionality for navigation, language switching, battle demo, and marketplace

// Global state
let currentLang = 'ua';
let currentPage = 'home';
let isConnected = false;
let battleState = {
  playerHP: 2000,
  enemyHP: 2400,
  playerEnergy: 0,
  enemyEnergy: 0,
  maxPlayerHP: 2000,
  maxEnemyHP: 2400,
  isPlaying: false,
  currentTurn: 'player',
  gameResult: null,
  battleLog: [],
  battleInterval: null
};

// Translations
const translations = {
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
      learn_more: "Дізнатися більше",
      watch_demo: "Дивитись демо",
      start_journey: "Почати пригоду"
    },
    stats: {
      active_players: "Активних гравців",
      nft_in_game: "NFT у грі",
      battles_fought: "Боїв проведено",
      rewards_paid: "Нагород виплачено"
    },
    features: {
      free_nft_title: "Безкоштовний NFT",
      free_nft_desc: "Отримай свого першого бійця безкоштовно та почни пригоди в арені",
      epic_battles_title: "Епічні бої",
      epic_battles_desc: "Бийся проти ботів та інших гравців за нагороди та рейтинг",
      earn_bp_title: "Заробляй BP",
      earn_bp_desc: "Конвертуй свої BP поінти в реальні нагороди через Telegram Stars",
      why_choose_title: "Чому обирають NFT Battle Arena",
      why_choose_subtitle: "Унікальна комбінація NFT колекціонування, динамічних боїв та можливостей заробітку"
    },
    cta: {
      ready_title: "Готовий почати пригоду?",
      ready_subtitle: "Приєднуйся до тисяч гравців у NFT Battle Arena та почни заробляти разом з нами!",
      start_now: "Почати гру зараз",
      watch_demo: "Дивитись демо бою"
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
      remove_from_cart: "Видалити з кошика",
      add_to_cart: "Додати в кошик",
      checkout: "Оформити замовлення",
      total: "Всього",
      empty_cart: "Кошик пустий",
      temporarily_unavailable: "Магазин тимчасово недоступний",
      market_description: "Ми працюємо над створенням найкращого досвіду покупки NFT. Магазин буде доступний через кілька місяців з усіма функціями!",
      telegram_connected: "Telegram підключено",
      telegram_not_connected: "Telegram не підключено"
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
      draw: "НІЧИЯ!",
      start: "Почати",
      pause: "Пауза",
      reset: "Скинути",
      battle_log: "Лог бою",
      battle_not_started: "Бій ще не почався...",
      demo_info: "Це демо версія",
      demo_description: "У справжній грі ви зможете контролювати всі дії персонажа, використовувати різні NFT з унікальними здібностями та заробляти BP поінти за перемоги.",
      play_real_game: "Грати справжню гру",
      player_turn: "Хід гравця",
      enemy_turn: "Хід ворога"
    },
    game_info: {
      title: "Про гру NFT Battle Arena",
      subtitle: "Дізнайтесь все про механіку гри, правила та можливості заробітку",
      how_to_get_nft: "Як отримати NFT",
      game_rules: "Правила гри",
      roadmap: "Roadmap",
      faq: "FAQ"
    },
    common: {
      loading: "Завантаження...",
      error: "Помилка",
      success: "Успішно",
      close: "Закрити",
      save: "Зберегти",
      cancel: "Скасувати",
      confirm: "Підтвердити"
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
      learn_more: "Learn More",
      watch_demo: "Watch Demo",
      start_journey: "Start Journey"
    },
    stats: {
      active_players: "Active Players",
      nft_in_game: "NFTs in Game",
      battles_fought: "Battles Fought",
      rewards_paid: "Rewards Paid"
    },
    features: {
      free_nft_title: "Free NFT",
      free_nft_desc: "Get your first fighter for free and start adventures in the arena",
      epic_battles_title: "Epic Battles",
      epic_battles_desc: "Fight against bots and other players for rewards and ranking",
      earn_bp_title: "Earn BP",
      earn_bp_desc: "Convert your BP points into real rewards through Telegram Stars",
      why_choose_title: "Why Choose NFT Battle Arena",
      why_choose_subtitle: "Unique combination of NFT collecting, dynamic battles and earning opportunities"
    },
    cta: {
      ready_title: "Ready to Start Adventure?",
      ready_subtitle: "Join thousands of players in NFT Battle Arena and start earning with us!",
      start_now: "Start Game Now",
      watch_demo: "Watch Battle Demo"
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
      remove_from_cart: "Remove from cart",
      add_to_cart: "Add to Cart",
      checkout: "Checkout",
      total: "Total",
      empty_cart: "Cart is empty",
      temporarily_unavailable: "Marketplace temporarily unavailable",
      market_description: "We're working on creating the best NFT shopping experience. The marketplace will be available in a few months with all features!",
      telegram_connected: "Telegram Connected",
      telegram_not_connected: "Telegram Not Connected"
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
      draw: "DRAW!",
      start: "Start",
      pause: "Pause",
      reset: "Reset",
      battle_log: "Battle Log",
      battle_not_started: "Battle hasn't started yet...",
      demo_info: "This is demo version",
      demo_description: "In the real game you can control all character actions, use different NFTs with unique abilities and earn BP points for victories.",
      play_real_game: "Play Real Game",
      player_turn: "Player Turn",
      enemy_turn: "Enemy Turn"
    },
    game_info: {
      title: "About NFT Battle Arena Game",
      subtitle: "Learn everything about game mechanics, rules and earning opportunities",
      how_to_get_nft: "How to Get NFT",
      game_rules: "Game Rules",
      roadmap: "Roadmap",
      faq: "FAQ"
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm"
    }
  },
  pl: {
    nav: {
      home: "Główna",
      game_info: "O Grze",
      marketplace: "Sklep",
      battle_demo: "Demo Walki",
      connect_telegram: "Połącz Telegram"
    },
    hero: {
      title: "NFT Battle Arena",
      subtitle: "Gra Play2Earn w Telegram Mini App",
      description: "Zdobądź swój pierwszy NFT, walcz na arenie z przeciwnikami i zbieraj unikalną kolekcję. To nie tylko gra – to walka o nagrody, prestiż i prawdziwą siłę!",
      play_now: "Graj Teraz",
      learn_more: "Dowiedz Się Więcej",
      watch_demo: "Zobacz Demo",
      start_journey: "Rozpocznij Przygodę"
    },
    stats: {
      active_players: "Aktywni Gracze",
      nft_in_game: "NFT w Grze",
      battles_fought: "Stoczone Bitwy",
      rewards_paid: "Wypłacone Nagrody"
    },
    features: {
      free_nft_title: "Darmowe NFT",
      free_nft_desc: "Otrzymaj swojego pierwszego wojownika za darmo i rozpocznij przygody na arenie",
      epic_battles_title: "Epické Bitwy",
      epic_battles_desc: "Walcz przeciwko botom i innym graczom o nagrody i ranking",
      earn_bp_title: "Zarabiaj BP",
      earn_bp_desc: "Konwertuj swoje punkty BP na prawdziwe nagrody poprzez Telegram Stars",
      why_choose_title: "Dlaczego Wybierać NFT Battle Arena",
      why_choose_subtitle: "Unikalna kombinacja kolekcjonowania NFT, dynamicznych walk i możliwości zarabiania"
    },
    cta: {
      ready_title: "Gotowy Rozpocząć Przygodę?",
      ready_subtitle: "Dołącz do tysięcy graczy w NFT Battle Arena i zacznij zarabiać z nami!",
      start_now: "Rozpocznij Grę Teraz",
      watch_demo: "Zobacz Demo Walki"
    },
    marketplace: {
      title: "Sklep NFT",
      coming_soon: "Sklep będzie dostępny za",
      connect_account: "Połącz Konto",
      list_nft: "Wystaw NFT",
      search_placeholder: "Szukaj NFT...",
      categories: "Kategorie",
      price_range: "Zakres Cen",
      cart: "Koszyk",
      remove_from_cart: "Usuń z koszyka",
      add_to_cart: "Dodaj do Koszyka",
      checkout: "Finalizuj Zamówienie",
      total: "Razem",
      empty_cart: "Koszyk jest pusty",
      temporarily_unavailable: "Sklep tymczasowo niedostępny",
      market_description: "Pracujemy nad stworzeniem najlepszego doświadczenia zakupów NFT. Sklep będzie dostępny za kilka miesięcy z wszystkimi funkcjami!",
      telegram_connected: "Telegram Połączony",
      telegram_not_connected: "Telegram Nie Połączony"
    },
    battle: {
      title: "Demo Walki",
      description: "Zobacz jak wyglądają walki w NFT Battle Arena",
      player_hp: "HP Gracza",
      enemy_hp: "HP Wroga",
      attack: "Atak",
      defend: "Obrona",
      special: "Specjalny",
      fight: "WALKA!",
      you_win: "WYGRAŁEŚ!",
      you_lose: "PRZEGRAŁEŚ!",
      draw: "REMIS!",
      start: "Start",
      pause: "Pauza",
      reset: "Reset",
      battle_log: "Log Walki",
      battle_not_started: "Walka jeszcze się nie rozpoczęła...",
      demo_info: "To jest wersja demo",
      demo_description: "W prawdziwej grze możesz kontrolować wszystkie akcje postaci, używać różnych NFT z unikalnymi umiejętnościami i zarabiać punkty BP za zwycięstwa.",
      play_real_game: "Graj w Prawdziwą Grę",
      player_turn: "Tura Gracza",
      enemy_turn: "Tura Wroga"
    },
    game_info: {
      title: "O Grze NFT Battle Arena",
      subtitle: "Dowiedz się wszystkiego o mechanice gry, zasadach i możliwościach zarabiania",
      how_to_get_nft: "Jak Zdobyć NFT",
      game_rules: "Zasady Gry",
      roadmap: "Mapa Drogowa",
      faq: "FAQ"
    },
    common: {
      loading: "Ładowanie...",
      error: "Błąd",
      success: "Sukces",
      close: "Zamknij",
      save: "Zapisz",
      cancel: "Anuluj",
      confirm: "Potwierdź"
    }
  }
};

// Language flags mapping
const languageFlags = {
  ua: '🇺🇦',
  en: '🇺🇸',
  pl: '🇵🇱'
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  setupNavigation();
  setupLanguageSwitcher();
  setupBattleDemo();
  setupMarketplace();
  updateLanguage();
  updatePage();
  
  // Setup scroll listener for navigation
  window.addEventListener('scroll', handleScroll);
  
  // Setup resize listener for responsive behavior
  window.addEventListener('resize', handleResize);
  
  // Initialize countdown timer
  initCountdownTimer();
  
  console.log('NFT Battle Arena initialized');
}

// Navigation Setup
function setupNavigation() {
  // Desktop navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const page = item.getAttribute('data-page');
      if (page) {
        navigateToPage(page);
      }
    });
  });
  
  // Mobile navigation
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const page = item.getAttribute('data-page');
      if (page) {
        navigateToPage(page);
        toggleMobileMenu(); // Close mobile menu after navigation
      }
    });
  });
  
  // Logo click
  const logo = document.getElementById('logoButton');
  if (logo) {
    logo.addEventListener('click', () => navigateToPage('home'));
  }
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  // Page navigation buttons
  const pageButtons = document.querySelectorAll('[data-page]');
  pageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const page = button.getAttribute('data-page');
      if (page) {
        navigateToPage(page);
      }
    });
  });
}

// Navigate to page
function navigateToPage(page) {
  currentPage = page;
  updatePage();
  updateNavigation();
  
  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Update page visibility
function updatePage() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    if (page.id === currentPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  
  // Update document title
  const t = translations[currentLang];
  let title = 'NFT Battle Arena';
  
  switch (currentPage) {
    case 'game_info':
      title = `${t.game_info.title} - NFT Battle Arena`;
      break;
    case 'marketplace':
      title = `${t.marketplace.title} - NFT Battle Arena`;
      break;
    case 'battle_demo':
      title = `${t.battle.title} - NFT Battle Arena`;
      break;
    default:
      title = `NFT Battle Arena - ${t.hero.subtitle}`;
  }
  
  document.title = title;
}

// Update navigation active state
function updateNavigation() {
  // Desktop navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Mobile navigation
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    if (item.getAttribute('data-page') === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuButton = document.getElementById('mobileMenuButton');
  
  if (mobileMenu && menuButton) {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('active');
      menuButton.querySelector('.menu-icon').textContent = '☰';
    } else {
      mobileMenu.classList.add('active');
      menuButton.querySelector('.menu-icon').textContent = '✕';
    }
  }
}

// Handle scroll for navigation
function handleScroll() {
  const nav = document.getElementById('navigation');
  if (nav) {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
}

// Handle resize for responsive behavior
function handleResize() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 1024) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('mobileMenuButton');
    
    if (mobileMenu && menuButton) {
      mobileMenu.classList.remove('active');
      menuButton.querySelector('.menu-icon').textContent = '☰';
    }
  }
}

// Language Switcher Setup
function setupLanguageSwitcher() {
  const langTrigger = document.getElementById('langTrigger');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  
  if (langTrigger && langDropdown) {
    // Toggle dropdown
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
      
      // Rotate arrow
      const arrow = langTrigger.querySelector('.lang-arrow');
      if (arrow) {
        arrow.style.transform = langDropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langTrigger.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
        const arrow = langTrigger.querySelector('.lang-arrow');
        if (arrow) {
          arrow.style.transform = 'rotate(0deg)';
        }
      }
    });
  }
  
  // Language option selection
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const lang = option.getAttribute('data-lang');
      if (lang) {
        changeLanguage(lang);
        if (langDropdown) {
          langDropdown.classList.remove('active');
          const arrow = langTrigger.querySelector('.lang-arrow');
          if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
          }
        }
      }
    });
  });
}

// Change language
function changeLanguage(lang) {
  currentLang = lang;
  updateLanguage();
  updateLanguageSwitcher();
  
  // Update document lang attribute
  document.documentElement.lang = lang;
  
  console.log(`Language changed to: ${lang}`);
}

// Update language switcher display
function updateLanguageSwitcher() {
  const langCurrent = document.querySelector('.lang-current');
  if (langCurrent) {
    const flag = languageFlags[currentLang] || '🌐';
    const langCode = currentLang.toUpperCase();
    langCurrent.textContent = `${flag} ${langCode}`;
  }
}

// Update all translatable content
function updateLanguage() {
  const t = translations[currentLang];
  
  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(t, key);
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = getTranslation(t, key);
    if (translation) {
      element.placeholder = translation;
    }
  });
  
  updateLanguageSwitcher();
}

// Get nested translation
function getTranslation(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Battle Demo Setup
function setupBattleDemo() {
  const playButton = document.getElementById('battlePlayBtn');
  const resetButton = document.getElementById('battleResetBtn');
  
  if (playButton) {
    playButton.addEventListener('click', toggleBattle);
  }
  
  if (resetButton) {
    resetButton.addEventListener('click', resetBattle);
  }
}

// Toggle battle play/pause
function toggleBattle() {
  const playButton = document.getElementById('battlePlayBtn');
  const t = translations[currentLang].battle;
  
  if (battleState.gameResult) {
    resetBattle();
    return;
  }
  
  battleState.isPlaying = !battleState.isPlaying;
  
  if (battleState.isPlaying) {
    startBattle();
    if (playButton) {
      playButton.innerHTML = `<span class="btn-icon">⏸</span><span>${t.pause}</span>`;
    }
  } else {
    pauseBattle();
    if (playButton) {
      playButton.innerHTML = `<span class="btn-icon">▶</span><span>${t.start}</span>`;
    }
  }
}

// Start battle
function startBattle() {
  if (battleState.battleInterval) {
    clearInterval(battleState.battleInterval);
  }
  
  battleState.battleInterval = setInterval(simulateBattleTurn, 1500);
  updateBattleUI();
}

// Pause battle
function pauseBattle() {
  if (battleState.battleInterval) {
    clearInterval(battleState.battleInterval);
    battleState.battleInterval = null;
  }
}

// Reset battle
function resetBattle() {
  battleState.playerHP = battleState.maxPlayerHP;
  battleState.enemyHP = battleState.maxEnemyHP;
  battleState.playerEnergy = 0;
  battleState.enemyEnergy = 0;
  battleState.isPlaying = false;
  battleState.currentTurn = 'player';
  battleState.gameResult = null;
  battleState.battleLog = [];
  
  if (battleState.battleInterval) {
    clearInterval(battleState.battleInterval);
    battleState.battleInterval = null;
  }
  
  updateBattleUI();
  
  const playButton = document.getElementById('battlePlayBtn');
  const t = translations[currentLang].battle;
  if (playButton) {
    playButton.innerHTML = `<span class="btn-icon">▶</span><span>${t.start}</span>`;
  }
  
  // Hide result overlay
  const resultOverlay = document.getElementById('battleResult');
  if (resultOverlay) {
    resultOverlay.classList.remove('active');
  }
  
  // Clear battle log
  const logContent = document.getElementById('battleLogContent');
  if (logContent) {
    const t = translations[currentLang].battle;
    logContent.innerHTML = `<p class="log-empty">${t.battle_not_started}</p>`;
  }
}

// Simulate battle turn
function simulateBattleTurn() {
  if (!battleState.isPlaying || battleState.gameResult) {
    return;
  }
  
  const actions = ['attack', 'attack', 'special', 'defend'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  
  if (battleState.currentTurn === 'player') {
    performAction('player', randomAction);
    battleState.currentTurn = 'enemy';
  } else {
    performAction('enemy', randomAction);
    battleState.currentTurn = 'player';
  }
  
  updateBattleUI();
  checkGameEnd();
}

// Perform battle action
function performAction(actor, action) {
  const damage = Math.floor(Math.random() * 50) + 20;
  const energyGain = Math.floor(Math.random() * 15) + 5;
  const t = translations[currentLang].battle;
  
  if (actor === 'player') {
    if (action === 'attack') {
      battleState.enemyHP = Math.max(0, battleState.enemyHP - damage);
      battleState.playerEnergy = Math.min(100, battleState.playerEnergy + energyGain);
      addBattleLog(`⚔️ ${t.player_turn} attacks for ${damage} damage!`);
    } else if (action === 'special' && battleState.playerEnergy >= 100) {
      const specialDamage = damage * 2;
      battleState.enemyHP = Math.max(0, battleState.enemyHP - specialDamage);
      battleState.playerEnergy = 0;
      addBattleLog(`✨ ${t.player_turn} uses special attack for ${specialDamage} damage!`);
    } else if (action === 'defend') {
      addBattleLog(`🛡️ ${t.player_turn} defends!`);
    }
  } else {
    if (action === 'attack') {
      battleState.playerHP = Math.max(0, battleState.playerHP - damage);
      battleState.enemyEnergy = Math.min(100, battleState.enemyEnergy + energyGain);
      addBattleLog(`👹 ${t.enemy_turn} attacks for ${damage} damage!`);
    } else if (action === 'special' && battleState.enemyEnergy >= 100) {
      const specialDamage = damage * 2;
      battleState.playerHP = Math.max(0, battleState.playerHP - specialDamage);
      battleState.enemyEnergy = 0;
      addBattleLog(`💥 ${t.enemy_turn} uses special attack for ${specialDamage} damage!`);
    }
  }
}

// Add message to battle log
function addBattleLog(message) {
  battleState.battleLog.push(message);
  if (battleState.battleLog.length > 5) {
    battleState.battleLog.shift();
  }
  
  const logContent = document.getElementById('battleLogContent');
  if (logContent) {
    logContent.innerHTML = battleState.battleLog.map(log => `<div>${log}</div>`).join('');
    logContent.scrollTop = logContent.scrollHeight;
  }
}

// Check if game ended
function checkGameEnd() {
  const t = translations[currentLang].battle;
  
  if (battleState.playerHP <= 0) {
    battleState.gameResult = 'lose';
    battleState.isPlaying = false;
    addBattleLog(`💀 ${t.you_lose}`);
    showGameResult('lose');
  } else if (battleState.enemyHP <= 0) {
    battleState.gameResult = 'win';
    battleState.isPlaying = false;
    addBattleLog(`🏆 ${t.you_win}`);
    showGameResult('win');
  }
  
  if (battleState.gameResult) {
    if (battleState.battleInterval) {
      clearInterval(battleState.battleInterval);
      battleState.battleInterval = null;
    }
  }
}

// Show game result
function showGameResult(result) {
  const resultOverlay = document.getElementById('battleResult');
  const resultIcon = document.getElementById('resultIcon');
  const resultText = document.getElementById('resultText');
  const t = translations[currentLang].battle;
  
  if (resultOverlay && resultIcon && resultText) {
    resultOverlay.classList.add('active');
    
    if (result === 'win') {
      resultIcon.textContent = '🏆';
      resultText.textContent = t.you_win;
    } else {
      resultIcon.textContent = '💀';
      resultText.textContent = t.you_lose;
    }
  }
}

// Update battle UI
function updateBattleUI() {
  // Update HP bars
  const playerHPBar = document.getElementById('playerHPBar');
  const enemyHPBar = document.getElementById('enemyHPBar');
  const playerHPText = document.getElementById('playerHP');
  const enemyHPText = document.getElementById('enemyHP');
  
  if (playerHPBar && enemyHPBar && playerHPText && enemyHPText) {
    const playerHPPercent = (battleState.playerHP / battleState.maxPlayerHP) * 100;
    const enemyHPPercent = (battleState.enemyHP / battleState.maxEnemyHP) * 100;
    
    playerHPBar.style.width = `${playerHPPercent}%`;
    enemyHPBar.style.width = `${enemyHPPercent}%`;
    playerHPText.textContent = battleState.playerHP;
    enemyHPText.textContent = battleState.enemyHP;
  }
  
  // Update energy bars
  const playerEnergyBar = document.getElementById('playerEnergyBar');
  const enemyEnergyBar = document.getElementById('enemyEnergyBar');
  
  if (playerEnergyBar && enemyEnergyBar) {
    playerEnergyBar.style.width = `${battleState.playerEnergy}%`;
    enemyEnergyBar.style.width = `${battleState.enemyEnergy}%`;
  }
  
  // Update turn indicator
  const turnAvatar = document.getElementById('turnAvatar');
  const turnText = document.getElementById('turnText');
  const playerCharacter = document.getElementById('playerCharacter');
  const enemyCharacter = document.getElementById('enemyCharacter');
  const t = translations[currentLang].battle;
  
  if (turnAvatar && turnText) {
    if (battleState.currentTurn === 'player') {
      turnAvatar.textContent = '👤';
      turnText.textContent = t.player_turn;
    } else {
      turnAvatar.textContent = '👹';
      turnText.textContent = t.enemy_turn;
    }
  }
  
  // Update character scale for active turn
  if (playerCharacter && enemyCharacter) {
    if (battleState.currentTurn === 'player') {
      playerCharacter.classList.add('active');
      enemyCharacter.classList.remove('active');
    } else {
      playerCharacter.classList.remove('active');
      enemyCharacter.classList.add('active');
    }
  }
}

// Marketplace Setup
function setupMarketplace() {
  const connectBtn = document.getElementById('connectTelegramBtn');
  
  if (connectBtn) {
    connectBtn.addEventListener('click', connectTelegram);
  }
}

// Connect Telegram (demo)
function connectTelegram() {
  isConnected = true;
  updateConnectionStatus();
  
  // Show success message
  const t = translations[currentLang].marketplace;
  alert(`${t.telegram_connected}! (Demo режим)`);
}

// Update connection status
function updateConnectionStatus() {
  const statusIndicator = document.getElementById('connectionStatus');
  const statusDot = statusIndicator ? statusIndicator.querySelector('.status-dot') : null;
  const statusText = statusIndicator ? statusIndicator.querySelector('.status-text') : null;
  const connectBtn = document.getElementById('connectTelegramBtn');
  const t = translations[currentLang].marketplace;
  
  if (statusDot && statusText) {
    if (isConnected) {
      statusDot.classList.add('connected');
      statusText.textContent = t.telegram_connected;
      if (connectBtn) {
        connectBtn.style.display = 'none';
      }
    } else {
      statusDot.classList.remove('connected');
      statusText.textContent = t.telegram_not_connected;
      if (connectBtn) {
        connectBtn.style.display = 'inline-flex';
      }
    }
  }
}

// Countdown Timer
function initCountdownTimer() {
  // Set target date (5 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 5);
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    if (distance < 0) {
      // Timer expired
      const timer = document.getElementById('countdownTimer');
      if (timer) {
        timer.innerHTML = '<div class="countdown-item"><div class="countdown-value">00</div><div class="countdown-label">готово</div></div>';
      }
      return;
    }
    
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    
    if (monthsEl) monthsEl.textContent = months.toString().padStart(2, '0');
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
  }
  
  // Update immediately and then every minute
  updateCountdown();
  setInterval(updateCountdown, 60000);
}

// Tab System Setup
document.addEventListener('DOMContentLoaded', function() {
  // Setup tab triggers
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetTab = trigger.getAttribute('data-tab');
      
      // Remove active class from all triggers and contents
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked trigger
      trigger.classList.add('active');
      
      // Show corresponding content
      const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});

// Animation on scroll
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Utility Functions

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Global functions for HTML onclick handlers
window.navigateToPage = navigateToPage;
window.connectTelegram = connectTelegram;
window.resetBattle = resetBattle;

console.log('NFT Battle Arena script loaded successfully');