// NFT Battle Arena - JavaScript Functions

// Translations data
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

// Language configuration
const languages = [
    { code: 'ua', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' }
];

// Global state
let currentLang = 'ua';
let currentPage = 'home';
let isScrolled = false;
let isMobileMenuOpen = false;
let isConnected = false;
let battleInterval = null;
let battleState = {
    isPlaying: false,
    playerHP: 2000,
    enemyHP: 2400,
    playerEnergy: 0,
    enemyEnergy: 0,
    maxPlayerHP: 2000,
    maxEnemyHP: 2400,
    currentTurn: 'player',
    gameResult: null,
    battleLog: []
};

// Initialize the application
function init() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Update translations
    updateTranslations();
    
    // Update SEO meta tags
    updateSEOMeta();
    
    // Initialize countdown timer
    initCountdownTimer();
    
    // Show home page
    changePage('home');
    
    console.log('NFT Battle Arena initialized');
}

// Set up all event listeners
function setupEventListeners() {
    // Language dropdown
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.add('hidden');
        });
        
        // Language options
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newLang = option.getAttribute('data-lang');
                changeLanguage(newLang);
                langDropdown.classList.add('hidden');
            });
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    if (mobileMenuBtn && mobileMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', () => {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                mobileMenu.classList.remove('hidden');
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            
            // Recreate icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }
    
    // Scroll effect for navigation
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navigation');
        if (nav) {
            if (window.scrollY > 20 && !isScrolled) {
                nav.classList.add('scrolled');
                isScrolled = true;
            } else if (window.scrollY <= 20 && isScrolled) {
                nav.classList.remove('scrolled');
                isScrolled = false;
            }
        }
    });
    
    // Tab system for game info page
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

// Change language function
function changeLanguage(newLang) {
    if (translations[newLang]) {
        currentLang = newLang;
        
        // Update UI
        updateLanguageDisplay();
        updateTranslations();
        updateSEOMeta();
        
        // Update document language
        document.documentElement.lang = newLang;
        
        console.log('Language changed to:', newLang);
    }
}

// Update language display in the UI
function updateLanguageDisplay() {
    const currentLanguage = languages.find(lang => lang.code === currentLang);
    if (currentLanguage) {
        const flagElement = document.getElementById('currentLangFlag');
        const codeElement = document.getElementById('currentLangCode');
        
        if (flagElement) flagElement.textContent = currentLanguage.flag;
        if (codeElement) codeElement.textContent = currentLanguage.code.toUpperCase();
    }
}

// Update all translations in the UI
function updateTranslations() {
    const t = translations[currentLang] || translations.ua;
    
    // Update navigation
    updateElementsByClass('nav-text', [
        t.nav.home,
        t.nav.game_info,
        t.nav.marketplace,
        t.nav.battle_demo
    ]);
    
    updateElementsByClass('telegram-text', [t.nav.connect_telegram]);
    
    // Update hero section
    updateElementByClass('hero-title', t.hero.title);
    updateElementByClass('hero-description', t.hero.description);
    updateElementByClass('hero-play-now', t.hero.play_now);
    updateElementByClass('hero-learn-more', t.hero.learn_more);
    
    // Update stats
    updateElementByClass('stats-active-players', t.stats.active_players);
    updateElementByClass('stats-nft-in-game', t.stats.nft_in_game);
    updateElementByClass('stats-battles-fought', t.stats.battles_fought);
    updateElementByClass('stats-rewards-paid', t.stats.rewards_paid);
    
    // Update features
    updateElementByClass('features-why-choose-title', t.features.why_choose_title);
    updateElementByClass('features-why-choose-subtitle', t.features.why_choose_subtitle);
    updateElementByClass('features-free-nft-title', t.features.free_nft_title);
    updateElementByClass('features-free-nft-desc', t.features.free_nft_desc);
    updateElementByClass('features-epic-battles-title', t.features.epic_battles_title);
    updateElementByClass('features-epic-battles-desc', t.features.epic_battles_desc);
    updateElementByClass('features-earn-bp-title', t.features.earn_bp_title);
    updateElementByClass('features-earn-bp-desc', t.features.earn_bp_desc);
    
    // Update CTA
    updateElementByClass('cta-ready-title', t.cta.ready_title);
    updateElementByClass('cta-ready-subtitle', t.cta.ready_subtitle);
    updateElementByClass('cta-start-now', t.cta.start_now);
    updateElementByClass('cta-watch-demo', t.cta.watch_demo);
    
    // Update game info page
    updateElementByClass('gameinfo-title', t.game_info.title);
    updateElementByClass('gameinfo-subtitle', t.game_info.subtitle);
    
    // Update marketplace
    updateElementByClass('marketplace-title', t.marketplace.title);
    updateElementByClass('marketplace-coming-soon', t.marketplace.coming_soon);
    updateElementByClass('marketplace-temp-unavailable', t.marketplace.temporarily_unavailable);
    updateElementByClass('marketplace-description', t.marketplace.market_description);
    updateElementByClass('connect-account-text', t.marketplace.connect_account);
    updateElementByClass('connection-status-text', isConnected ? t.marketplace.telegram_connected : t.marketplace.telegram_not_connected);
    
    // Update battle demo
    updateElementByClass('battle-title', t.battle.title);
    updateElementByClass('battle-description', t.battle.description);
    updateElementByClass('battle-start-text', t.battle.start);
    updateElementByClass('battle-reset-text', t.battle.reset);
    updateElementByClass('battle-player-hp', t.battle.player_hp);
    updateElementByClass('battle-enemy-hp', t.battle.enemy_hp);
    updateElementByClass('battle-player-turn', t.battle.player_turn);
    updateElementByClass('battle-enemy-turn', t.battle.enemy_turn);
    updateElementByClass('battle-battle-log', t.battle.battle_log);
    updateElementByClass('battle-log-empty', t.battle.battle_not_started);
    updateElementByClass('battle-demo-info', t.battle.demo_info);
    updateElementByClass('battle-demo-description', t.battle.demo_description);
    updateElementByClass('battle-play-real-game', t.battle.play_real_game);
    updateElementByClass('battle-you-win', t.battle.you_win);
}

// Helper function to update element by class
function updateElementByClass(className, text) {
    const element = document.querySelector(`.${className}`);
    if (element) element.textContent = text;
}

// Helper function to update multiple elements by class
function updateElementsByClass(className, texts) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element, index) => {
        if (texts[index]) element.textContent = texts[index];
    });
}

// Update SEO meta tags
function updateSEOMeta() {
    const t = translations[currentLang] || translations.ua;
    
    // Update title
    document.title = `NFT Battle Arena - ${t.hero.subtitle}`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = t.hero.description;
    }
    
    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = `NFT Battle Arena - ${t.hero.subtitle}`;
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.content = t.hero.description;
    }
    
    // Update Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.content = `NFT Battle Arena - ${t.hero.subtitle}`;
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.content = t.hero.description;
    }
    
    // Update structured data
    const structuredData = document.getElementById('structuredData');
    if (structuredData) {
        const data = JSON.parse(structuredData.textContent);
        data.description = t.hero.description;
        data.inLanguage = [currentLang, "uk", "en", "pl"];
        structuredData.textContent = JSON.stringify(data);
    }
}

// Change page function
function changePage(page) {
    if (currentPage === page) return;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.add('hidden'));
    
    // Show selected page
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = page;
        
        // Update navigation active states
        updateNavigation();
        
        // Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        if (mobileMenu && menuIcon) {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            isMobileMenuOpen = false;
        }
        
        // Initialize page-specific functionality
        if (page === 'game_info') {
            switchTab('how-to-get');
        } else if (page === 'battle_demo') {
            resetBattle();
        }
        
        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Changed to page:', page);
    }
}

// Update navigation active states
function updateNavigation() {
    // Desktop navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        const page = btn.getAttribute('data-page');
        if (page === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Mobile navigation
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    mobileNavBtns.forEach(btn => {
        const page = btn.getAttribute('data-page');
        if (page === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Tab switching for game info page
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    // Show selected tab
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.remove('hidden');
        
        // Update tab button states
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            const btnTab = btn.getAttribute('data-tab');
            if (btnTab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        console.log('Switched to tab:', tabName);
    }
}

// Connect Telegram function
function connectTelegram() {
    isConnected = true;
    
    // Update UI
    const connectionStatus = document.getElementById('connectionStatus');
    const connectBtn = document.getElementById('connectBtn');
    
    if (connectionStatus) {
        connectionStatus.classList.add('connected');
        const statusText = connectionStatus.querySelector('.connection-status-text');
        if (statusText) {
            const t = translations[currentLang] || translations.ua;
            statusText.textContent = t.marketplace.telegram_connected;
        }
    }
    
    if (connectBtn) {
        connectBtn.style.display = 'none';
    }
    
    alert('Telegram акаунт успішно підключено! (Демо режим)');
}

// Countdown timer for marketplace
function initCountdownTimer() {
    // Set target date to 5 months from now
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 5);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const target = targetDate.getTime();
        const difference = target - now;
        
        if (difference > 0) {
            const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            // Update display
            const monthsEl = document.getElementById('months');
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (monthsEl) monthsEl.textContent = months;
            if (daysEl) daysEl.textContent = days;
            if (hoursEl) hoursEl.textContent = hours;
            if (minutesEl) minutesEl.textContent = minutes;
            if (secondsEl) secondsEl.textContent = seconds;
        }
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// Battle Demo Functions
function toggleBattle() {
    battleState.isPlaying = !battleState.isPlaying;
    
    const toggleBtn = document.getElementById('toggleBattleBtn');
    const battleIcon = document.getElementById('battleIcon');
    const battleBtnText = document.getElementById('battleBtnText');
    
    if (battleState.isPlaying) {
        if (battleIcon) battleIcon.setAttribute('data-lucide', 'pause');
        if (battleBtnText) {
            const t = translations[currentLang] || translations.ua;
            battleBtnText.textContent = t.battle.pause;
        }
        
        if (!battleState.gameResult) {
            startBattleSimulation();
        }
    } else {
        if (battleIcon) battleIcon.setAttribute('data-lucide', 'play');
        if (battleBtnText) {
            const t = translations[currentLang] || translations.ua;
            battleBtnText.textContent = t.battle.start;
        }
        
        stopBattleSimulation();
    }
    
    // Disable button if game ended
    if (toggleBtn && battleState.gameResult) {
        toggleBtn.disabled = true;
    }
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function resetBattle() {
    // Reset state
    battleState = {
        isPlaying: false,
        playerHP: 2000,
        enemyHP: 2400,
        playerEnergy: 0,
        enemyEnergy: 0,
        maxPlayerHP: 2000,
        maxEnemyHP: 2400,
        currentTurn: 'player',
        gameResult: null,
        battleLog: []
    };
    
    // Stop simulation
    stopBattleSimulation();
    
    // Update UI
    updateBattleUI();
    
    // Reset buttons
    const toggleBtn = document.getElementById('toggleBattleBtn');
    const battleIcon = document.getElementById('battleIcon');
    const battleBtnText = document.getElementById('battleBtnText');
    
    if (toggleBtn) toggleBtn.disabled = false;
    if (battleIcon) battleIcon.setAttribute('data-lucide', 'play');
    if (battleBtnText) {
        const t = translations[currentLang] || translations.ua;
        battleBtnText.textContent = t.battle.start;
    }
    
    // Hide game result
    const gameResult = document.getElementById('gameResult');
    if (gameResult) gameResult.classList.add('hidden');
    
    // Reset battle log
    const battleLogContainer = document.getElementById('battleLogContainer');
    if (battleLogContainer) {
        const t = translations[currentLang] || translations.ua;
        battleLogContainer.innerHTML = `<p class="text-body text-center opacity-60 battle-log-empty">${t.battle.battle_not_started}</p>`;
    }
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function startBattleSimulation() {
    if (battleInterval) clearInterval(battleInterval);
    
    battleInterval = setInterval(() => {
        if (battleState.isPlaying && !battleState.gameResult) {
            simulateBattleTurn();
        }
    }, 1500);
}

function stopBattleSimulation() {
    if (battleInterval) {
        clearInterval(battleInterval);
        battleInterval = null;
    }
}

function simulateBattleTurn() {
    if (battleState.gameResult) return;
    
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

function performAction(actor, action) {
    const damage = Math.floor(Math.random() * 50) + 20;
    const energyGain = Math.floor(Math.random() * 15) + 5;
    const t = translations[currentLang] || translations.ua;
    
    if (actor === 'player') {
        if (action === 'attack') {
            battleState.enemyHP = Math.max(0, battleState.enemyHP - damage);
            battleState.playerEnergy = Math.min(100, battleState.playerEnergy + energyGain);
            addToBattleLog(`⚔️ ${t.battle.player_turn} attacks for ${damage} damage!`);
        } else if (action === 'special' && battleState.playerEnergy >= 100) {
            const specialDamage = damage * 2;
            battleState.enemyHP = Math.max(0, battleState.enemyHP - specialDamage);
            battleState.playerEnergy = 0;
            addToBattleLog(`✨ ${t.battle.player_turn} uses special attack for ${specialDamage} damage!`);
        } else if (action === 'defend') {
            addToBattleLog(`🛡️ ${t.battle.player_turn} defends!`);
        }
    } else {
        if (action === 'attack') {
            battleState.playerHP = Math.max(0, battleState.playerHP - damage);
            battleState.enemyEnergy = Math.min(100, battleState.enemyEnergy + energyGain);
            addToBattleLog(`👹 ${t.battle.enemy_turn} attacks for ${damage} damage!`);
        } else if (action === 'special' && battleState.enemyEnergy >= 100) {
            const specialDamage = damage * 2;
            battleState.playerHP = Math.max(0, battleState.playerHP - specialDamage);
            battleState.enemyEnergy = 0;
            addToBattleLog(`💥 ${t.battle.enemy_turn} uses special attack for ${specialDamage} damage!`);
        }
    }
}

function addToBattleLog(message) {
    battleState.battleLog.push(message);
    if (battleState.battleLog.length > 5) {
        battleState.battleLog.shift();
    }
    
    const battleLogContainer = document.getElementById('battleLogContainer');
    if (battleLogContainer) {
        battleLogContainer.innerHTML = battleState.battleLog
            .map(log => `<div class="text-body">${log}</div>`)
            .join('');
    }
}

function updateBattleUI() {
    // Update HP displays
    const playerHP = document.getElementById('playerHP');
    const enemyHP = document.getElementById('enemyHP');
    const playerHPBar = document.getElementById('playerHPBar');
    const enemyHPBar = document.getElementById('enemyHPBar');
    const playerEnergyBar = document.getElementById('playerEnergyBar');
    const enemyEnergyBar = document.getElementById('enemyEnergyBar');
    
    if (playerHP) playerHP.textContent = battleState.playerHP;
    if (enemyHP) enemyHP.textContent = battleState.enemyHP;
    
    if (playerHPBar) {
        const playerHPPercent = (battleState.playerHP / battleState.maxPlayerHP) * 100;
        playerHPBar.style.width = `${playerHPPercent}%`;
    }
    
    if (enemyHPBar) {
        const enemyHPPercent = (battleState.enemyHP / battleState.maxEnemyHP) * 100;
        enemyHPBar.style.width = `${enemyHPPercent}%`;
    }
    
    if (playerEnergyBar) {
        playerEnergyBar.style.width = `${battleState.playerEnergy}%`;
    }
    
    if (enemyEnergyBar) {
        enemyEnergyBar.style.width = `${battleState.enemyEnergy}%`;
    }
    
    // Update turn indicator
    const turnEmoji = document.getElementById('turnEmoji');
    const turnText = document.getElementById('turnText');
    const playerChar = document.getElementById('playerChar');
    const enemyChar = document.getElementById('enemyChar');
    
    if (turnEmoji) {
        turnEmoji.textContent = battleState.currentTurn === 'player' ? '👤' : '👹';
    }
    
    if (turnText) {
        const t = translations[currentLang] || translations.ua;
        const battlePlayerTurn = turnText.querySelector('.battle-player-turn');
        const battleEnemyTurn = turnText.querySelector('.battle-enemy-turn');
        
        if (battleState.currentTurn === 'player') {
            if (battlePlayerTurn) battlePlayerTurn.style.display = 'inline';
            if (battleEnemyTurn) battleEnemyTurn.style.display = 'none';
        } else {
            if (battlePlayerTurn) battlePlayerTurn.style.display = 'none';
            if (battleEnemyTurn) {
                battleEnemyTurn.style.display = 'inline';
                battleEnemyTurn.textContent = t.battle.enemy_turn;
            }
        }
    }
    
    // Update character scaling
    if (playerChar) {
        if (battleState.currentTurn === 'player') {
            playerChar.classList.add('active');
        } else {
            playerChar.classList.remove('active');
        }
    }
    
    if (enemyChar) {
        if (battleState.currentTurn === 'enemy') {
            enemyChar.classList.add('active');
        } else {
            enemyChar.classList.remove('active');
        }
    }
}

function checkGameEnd() {
    if (battleState.playerHP <= 0) {
        battleState.gameResult = 'lose';
        battleState.isPlaying = false;
        const t = translations[currentLang] || translations.ua;
        addToBattleLog(`💀 ${t.battle.you_lose}`);
        showGameResult('lose');
    } else if (battleState.enemyHP <= 0) {
        battleState.gameResult = 'win';
        battleState.isPlaying = false;
        const t = translations[currentLang] || translations.ua;
        addToBattleLog(`🏆 ${t.battle.you_win}`);
        showGameResult('win');
    }
}

function showGameResult(result) {
    const gameResultEl = document.getElementById('gameResult');
    const resultEmoji = document.getElementById('resultEmoji');
    const resultText = document.getElementById('resultText');
    
    if (gameResultEl && resultEmoji && resultText) {
        const t = translations[currentLang] || translations.ua;
        
        resultEmoji.textContent = result === 'win' ? '🏆' : '💀';
        
        const battleYouWin = resultText.querySelector('.battle-you-win');
        if (battleYouWin) {
            battleYouWin.textContent = result === 'win' ? t.battle.you_win : t.battle.you_lose;
        }
        
        gameResultEl.classList.remove('hidden');
    }
    
    // Update toggle button
    const toggleBtn = document.getElementById('toggleBattleBtn');
    const battleIcon = document.getElementById('battleIcon');
    const battleBtnText = document.getElementById('battleBtnText');
    
    if (toggleBtn) toggleBtn.disabled = true;
    if (battleIcon) battleIcon.setAttribute('data-lucide', 'play');
    if (battleBtnText) {
        const t = translations[currentLang] || translations.ua;
        battleBtnText.textContent = t.battle.start;
    }
    
    stopBattleSimulation();
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Initialize when page is fully loaded (for icons)
window.addEventListener('load', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Export functions for global access
window.changePage = changePage;
window.changeLanguage = changeLanguage;
window.connectTelegram = connectTelegram;
window.toggleBattle = toggleBattle;
window.resetBattle = resetBattle;

console.log('NFT Battle Arena script loaded');