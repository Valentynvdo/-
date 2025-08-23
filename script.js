// NFT Battle Arena - Main JavaScript File

// Global variables
let currentLang = 'ua';
let currentPage = 'home';
let isScrolled = false;

// Battle game variables
let playerHP = 2000;
let enemyHP = 2400;
let playerEnergy = 0;
let enemyEnergy = 0;
let isPlaying = false;
let battleLog = [];
let currentTurn = 'player';
let gameResult = null;
let battleInterval = null;

const MAX_PLAYER_HP = 2000;
const MAX_ENEMY_HP = 2400;

// Translations object
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

// Content templates
const pageContents = {
    home: `
        <div class="min-h-screen bg-black text-white">
            <!-- Hero Section -->
            <section class="relative pt-32 pb-20 overflow-hidden">
                <div class="container-glass">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <!-- Left Content -->
                        <div class="text-center lg:text-left space-y-8">
                            <div class="inline-flex items-center space-x-2 px-4 py-2 glass-card">
                                <span>🌟</span>
                                <span class="text-blue-400 font-semibold tracking-wider uppercase text-sm">Play2Earn</span>
                                <span>🚀</span>
                            </div>
                            
                            <h1 class="text-display">
                                <span class="text-white" data-translate="hero.title">NFT Battle Arena</span>
                                <br />
                                <span style="color: var(--accent-primary);">Battle Arena</span>
                            </h1>
                            
                            <p class="text-body max-w-xl mx-auto lg:mx-0 text-lg" data-translate="hero.description">
                                Отримай свій перший NFT, бийся на арені з суперниками та збирай унікальну колекцію. Це не просто гра – це битва за нагороди, престиж і справжню силу!
                            </p>
                            
                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent px-8 py-4 text-lg">
                                    ▶️ <span data-translate="hero.play_now">Грати зараз</span>
                                </a>
                                
                                <button onclick="showPage('game-info')" class="glass-button-primary px-8 py-4 text-lg">
                                    ℹ️ <span data-translate="hero.learn_more">Дізнатися більше</span>
                                </button>
                            </div>
                        </div>

                        <!-- Right Content - Hero Image -->
                        <div class="flex justify-center lg:justify-end">
                            <div class="relative">
                                <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <img src="https://i.ibb.co/3mQ3s9Mn/Photoroom-20250819-205326.png"
                                     alt="NFT Battle Character"
                                     class="relative z-10 w-full max-w-md lg:max-w-lg object-contain rounded-3xl scale-hover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Game Stats -->
            <section class="section-glass">
                <div class="container-glass">
                    <div class="grid-glass grid-glass-4">
                        <div class="glass-card p-6 text-center">
                            <div class="flex justify-center items-center mb-4" style="color: var(--accent-primary);">🎮</div>
                            <div class="text-title text-white mb-2">12,847</div>
                            <div class="text-caption" data-translate="stats.active_players">Активних гравців</div>
                        </div>
                        <div class="glass-card p-6 text-center">
                            <div class="flex justify-center items-center mb-4" style="color: #facc15;">⭐</div>
                            <div class="text-title text-white mb-2">3,420</div>
                            <div class="text-caption" data-translate="stats.nft_in_game">NFT у грі</div>
                        </div>
                        <div class="glass-card p-6 text-center">
                            <div class="flex justify-center items-center mb-4" style="color: var(--accent-secondary);">🏆</div>
                            <div class="text-title text-white mb-2">89,234</div>
                            <div class="text-caption" data-translate="stats.battles_fought">Боїв проведено</div>
                        </div>
                        <div class="glass-card p-6 text-center">
                            <div class="flex justify-center items-center mb-4" style="color: #c084fc;">⚡</div>
                            <div class="text-title text-white mb-2">₴45,890</div>
                            <div class="text-caption" data-translate="stats.rewards_paid">Нагород виплачено</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="section-glass">
                <div class="container-glass">
                    <div class="text-center mb-16 space-y-4">
                        <h2 class="text-title" data-translate="features.why_choose_title">
                            Чому обирають NFT Battle Arena
                        </h2>
                        <p class="text-body max-w-3xl mx-auto" data-translate="features.why_choose_subtitle">
                            Унікальна комбінація NFT колекціонування, динамічних боїв та можливостей заробітку
                        </p>
                    </div>
                    
                    <div class="grid-glass grid-glass-3">
                        <div class="glass-card p-6 text-center scale-hover">
                            <div class="space-y-4">
                                <div class="flex justify-center">
                                    <div class="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                                        🎁
                                    </div>
                                </div>
                                <h3 class="text-headline" data-translate="features.free_nft_title">Безкоштовний NFT</h3>
                                <p class="text-body" data-translate="features.free_nft_desc">
                                    Отримай свого першого бійця безкоштовно та почни пригоди в арені
                                </p>
                            </div>
                        </div>
                        
                        <div class="glass-card p-6 text-center scale-hover">
                            <div class="space-y-4">
                                <div class="flex justify-center">
                                    <div class="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
                                        ⚔️
                                    </div>
                                </div>
                                <h3 class="text-headline" data-translate="features.epic_battles_title">Епічні бої</h3>
                                <p class="text-body" data-translate="features.epic_battles_desc">
                                    Бийся проти ботів та інших гравців за нагороди та рейтинг
                                </p>
                            </div>
                        </div>
                        
                        <div class="glass-card p-6 text-center scale-hover">
                            <div class="space-y-4">
                                <div class="flex justify-center">
                                    <div class="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                        💰
                                    </div>
                                </div>
                                <h3 class="text-headline" data-translate="features.earn_bp_title">Заробляй BP</h3>
                                <p class="text-body" data-translate="features.earn_bp_desc">
                                    Конвертуй свої BP поінти в реальні нагороди через Telegram Stars
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="section-glass">
                <div class="container-glass">
                    <div class="glass-card-strong text-center p-12">
                        <div class="space-y-6">
                            <h2 class="text-title">
                                <span data-translate="cta.ready_title">Готовий почати пригоду?</span> 🚀
                            </h2>
                            <p class="text-body max-w-2xl mx-auto" data-translate="cta.ready_subtitle">
                                Приєднуйся до тисяч гравців у NFT Battle Arena та почни заробляти разом з нами!
                            </p>
                            
                            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent px-12 py-4 text-lg">
                                    👥 <span data-translate="cta.start_now">Почати гру зараз</span>
                                </a>
                                
                                <button onclick="showPage('battle-demo')" class="glass-button-primary px-8 py-4 text-lg">
                                    👁️ <span data-translate="cta.watch_demo">Дивитись демо бою</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    
    'game-info': `
        <div class="min-h-screen bg-black text-white pt-32 pb-16">
            <div class="container-glass">
                <!-- Header -->
                <div class="text-center mb-12 space-y-6">
                    <h1 class="text-display">
                        <span data-translate="game_info.title">Про гру NFT Battle Arena</span> 📖
                    </h1>
                    <p class="text-body text-lg max-w-3xl mx-auto" data-translate="game_info.subtitle">
                        Дізнайтесь все про механіку гри, правила та можливості заробітку
                    </p>
                </div>

                <!-- Main Content -->
                <div class="tabs-container">
                    <div class="tabs-list">
                        <button class="tab-trigger active" onclick="showTab('how-to-get')">
                            🎁 <span class="hidden sm:inline">NFT</span>
                        </button>
                        <button class="tab-trigger" onclick="showTab('rules')">
                            ⚔️ <span class="hidden sm:inline">Правила</span>
                        </button>
                        <button class="tab-trigger" onclick="showTab('roadmap')">
                            📅 <span class="hidden sm:inline">Roadmap</span>
                        </button>
                        <button class="tab-trigger" onclick="showTab('faq')">
                            ❓ <span class="hidden sm:inline">FAQ</span>
                        </button>
                    </div>

                    <div id="how-to-get" class="tab-content active space-y-8">
                        <div class="text-center space-y-4">
                            <h2 class="text-title">Як отримати NFT 🎁</h2>
                            <p class="text-body max-w-2xl mx-auto">
                                Дізнайтесь усі способи отримання унікальних NFT-бійців та аксесуарів у NFT Battle Arena
                            </p>
                        </div>
                        
                        <div class="grid-glass grid-glass-3">
                            <div class="glass-card scale-hover p-6 text-center">
                                <div class="space-y-4">
                                    <div class="flex justify-center">
                                        <div class="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-4xl">
                                            🎁
                                        </div>
                                    </div>
                                    <h3 class="text-headline flex items-center justify-center gap-2">
                                        🎁 Безкоштовний стартовий NFT
                                    </h3>
                                    <p class="text-body">
                                        Кожен новий гравець отримує свого першого NFT-бійця абсолютно безкоштовно через Airdrop систему.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="glass-card scale-hover p-6 text-center">
                                <div class="space-y-4">
                                    <div class="flex justify-center">
                                        <div class="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-4xl">
                                            ⭐
                                        </div>
                                    </div>
                                    <h3 class="text-headline flex items-center justify-center gap-2">
                                        ⭐ Покупка за Telegram Stars
                                    </h3>
                                    <p class="text-body">
                                        Додаткові унікальні NFT та аксесуари можна придбати за Telegram Stars у внутрішньому магазині.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="glass-card scale-hover p-6 text-center">
                                <div class="space-y-4">
                                    <div class="flex justify-center">
                                        <div class="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-4xl">
                                            🏆
                                        </div>
                                    </div>
                                    <h3 class="text-headline flex items-center justify-center gap-2">
                                        🏆 Нагороди за досягнення
                                    </h3>
                                    <p class="text-body">
                                        Отримуйте рідкісні NFT за участь у турнірах, досягнення високих рейтингів та виконання спеціальних завдань.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Other tab contents would be added here -->
                    <div id="rules" class="tab-content space-y-8">
                        <div class="text-center space-y-4">
                            <h2 class="text-title">Правила гри 📜</h2>
                            <p class="text-body max-w-2xl mx-auto">
                                Ознайомтесь з основними правилами та механікою гри для успішного старту
                            </p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="glass-card p-6">
                                <h3 class="text-headline flex items-center gap-3 mb-4">
                                    🚀 Початок гри і перший NFT
                                </h3>
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3 text-body">
                                        <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>При першому вході гравець отримує безкоштовного базового NFT-бійця</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-body">
                                        <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Цей воїн потрібен для початкових боїв проти бота та отримання перших BP-поінтів</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-body">
                                        <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Стартовий NFT має базові характеристики, які можна покращити</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="roadmap" class="tab-content space-y-8">
                        <div class="text-center space-y-4">
                            <h2 class="text-title">Roadmap розвитку 🗺️</h2>
                            <p class="text-body max-w-2xl mx-auto">
                                Плани розвитку NFT Battle Arena на найближчі роки
                            </p>
                        </div>
                    </div>

                    <div id="faq" class="tab-content space-y-8">
                        <div class="text-center space-y-4">
                            <h2 class="text-title">Часті питання ❓</h2>
                            <p class="text-body max-w-2xl mx-auto">
                                Відповіді на найпоширеніші запитання про NFT Battle Arena
                            </p>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="glass-card scale-hover p-6">
                                <h3 class="text-headline flex items-start gap-2 mb-4">
                                    ❓ Що таке NFT Battle Arena?
                                </h3>
                                <p class="text-body leading-relaxed">
                                    NFT Battle Arena – це інноваційна Play2Earn гра у форматі Telegram Mini App. Кожен гравець отримує безкоштовного NFT-бійця, щоб розпочати битви на арені та збирати унікальну колекцію.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="text-center mt-16">
                    <div class="glass-card-strong p-8">
                        <div class="space-y-6">
                            <h3 class="text-title">
                                Готові спробувати NFT Battle Arena? 🚀
                            </h3>
                            <p class="text-body max-w-xl mx-auto">
                                Приєднуйтесь до тисяч гравців та почніть свою пригоду в світі NFT боїв прямо зараз!
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent">
                                    👥 Почати гру
                                </a>
                                <button onclick="showPage('battle-demo')" class="glass-button-primary">
                                    ⚡ Демо бою
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    'battle-demo': `
        <div class="min-h-screen bg-black text-white pt-32 pb-16">
            <div class="container-glass">
                <!-- Header -->
                <div class="text-center mb-12 space-y-6">
                    <h1 class="text-display">
                        <span data-translate="battle.title">Демо бою</span> ⚔️
                    </h1>
                    <p class="text-body text-lg max-w-2xl mx-auto" data-translate="battle.description">
                        Подивіться, як виглядає бій в NFT Battle Arena
                    </p>
                    
                    <div class="flex justify-center gap-4">
                        <button id="battle-play-btn" onclick="toggleBattle()" class="glass-button-accent px-6 py-3">
                            ▶️ <span data-translate="battle.start">Почати</span>
                        </button>
                        
                        <button onclick="resetBattle()" class="glass-button-primary px-6 py-3">
                            🔄 <span data-translate="battle.reset">Скинути</span>
                        </button>
                    </div>
                </div>

                <!-- Battle Arena -->
                <div class="max-w-4xl mx-auto space-y-6">
                    <!-- Battle UI -->
                    <div class="glass-card-strong p-8 battle-arena" id="battle-arena">
                        <!-- HP Bars -->
                        <div class="hp-bar-container">
                            <!-- Player HP -->
                            <div class="hp-section">
                                <div class="hp-info">
                                    <span class="text-caption font-semibold" data-translate="battle.player_hp">HP Гравця</span>
                                    <span class="text-caption"><span id="player-hp">2000</span>/2000</span>
                                </div>
                                <div class="hp-bar">
                                    <div id="player-hp-fill" class="hp-fill" style="width: 100%;"></div>
                                </div>
                                <div class="energy-bar">
                                    <div id="player-energy-fill" class="energy-fill" style="width: 0%;"></div>
                                </div>
                            </div>

                            <!-- Turn Indicator -->
                            <div class="turn-indicator">
                                <div class="turn-icon" id="turn-icon">👤</div>
                                <div class="text-caption" id="turn-text" data-translate="battle.player_turn">Хід гравця</div>
                            </div>

                            <!-- Enemy HP -->
                            <div class="hp-section">
                                <div class="hp-info" style="flex-direction: row-reverse;">
                                    <span class="text-caption font-semibold" data-translate="battle.enemy_hp">HP Ворога</span>
                                    <span class="text-caption"><span id="enemy-hp">2400</span>/2400</span>
                                </div>
                                <div class="hp-bar">
                                    <div id="enemy-hp-fill" class="hp-fill" style="width: 100%; background: linear-gradient(to left, #ef4444, #22c55e);"></div>
                                </div>
                                <div class="energy-bar">
                                    <div id="enemy-energy-fill" class="energy-fill" style="width: 0%; margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Characters -->
                        <div class="characters-container">
                            <div class="character active" id="player-character">
                                <div class="character-avatar player-avatar">🦸‍♂️</div>
                                <div class="text-center text-caption">Player</div>
                            </div>

                            <div class="vs-indicator">
                                <div class="vs-icon">⚡</div>
                                <div class="text-headline" style="color: var(--accent-primary);">VS</div>
                            </div>

                            <div class="character" id="enemy-character">
                                <div class="character-avatar enemy-avatar">👹</div>
                                <div class="text-center text-caption">Enemy</div>
                            </div>
                        </div>

                        <!-- Game Result -->
                        <div id="battle-result" class="battle-result" style="display: none;">
                            <div class="text-center space-y-6">
                                <div class="text-6xl" id="result-icon">🏆</div>
                                <div class="text-title" style="color: var(--accent-primary);" id="result-text">ВИ ПЕРЕМОГЛИ!</div>
                                <button onclick="resetBattle()" class="glass-button-accent">
                                    Грати знову
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Battle Log -->
                    <div class="glass-card">
                        <div class="p-6">
                            <h3 class="text-headline flex items-center mb-4">
                                ℹ️ <span data-translate="battle.battle_log">Лог бою</span>
                            </h3>
                            <div class="battle-log" id="battle-log">
                                <p class="text-body text-center opacity-60" data-translate="battle.battle_not_started">
                                    Бій ще не почався...
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Demo Info -->
                    <div class="glass-card text-center">
                        <div class="p-8 space-y-6">
                            <div class="flex items-center justify-center">
                                <span class="text-headline">ℹ️ <span data-translate="battle.demo_info">Це демо версія</span></span>
                            </div>
                            <p class="text-body" data-translate="battle.demo_description">
                                У справжній грі ви зможете контролювати всі дії персонажа, використовувати різні NFT з унікальними здібностями та заробляти BP поінти за перемоги.
                            </p>
                            <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent">
                                ▶️ <span data-translate="battle.play_real_game">Грати справжню гру</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Initialize app when DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    loadPageContent('home');
    updateLanguage();
    updateSEO();
    initializeScrollHandler();
}

// Load page content dynamically
function loadPageContent(pageId) {
    const pageElement = document.getElementById(pageId);
    if (pageElement && pageContents[pageId]) {
        pageElement.innerHTML = pageContents[pageId];
    }
}

// Language functions
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    updateLanguage();
    updateSEO();
    toggleLanguageDropdown();
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('open');
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[currentLang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((o, i) => o ? o[i] : null, obj);
}

// SEO functions
function updateSEO() {
    const t = translations[currentLang] || translations.ua;
    
    document.title = `NFT Battle Arena - ${t.hero?.subtitle || 'Play2Earn гра в Telegram'}`;
    
    const description = t.hero?.description || 'Отримай свій перший NFT, бийся на арені з суперниками та збирай унікальну колекцію. Це не просто гра – це битва за нагороди, престиж і справжню силу!';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = description;
    }
}

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Load and show selected page
    loadPageContent(pageId);
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll(`[data-page="${pageId}"]`).forEach(item => {
        item.classList.add('active');
    });
    
    currentPage = pageId;
    updateLanguage(); // Update translations for new content
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('open');
}

function initializeScrollHandler() {
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navigation');
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Tab functions
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.classList.add('active');
    }
    
    // Update tab triggers
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Battle game functions
function toggleBattle() {
    isPlaying = !isPlaying;
    const button = document.getElementById('battle-play-btn');
    const t = translations[currentLang]?.battle || translations.ua.battle;
    
    if (isPlaying) {
        button.innerHTML = `⏸️ <span>${t.pause || 'Пауза'}</span>`;
        startBattle();
    } else {
        button.innerHTML = `▶️ <span>${t.start || 'Почати'}</span>`;
        pauseBattle();
    }
}

function startBattle() {
    if (gameResult) return;
    
    battleInterval = setInterval(() => {
        simulateBattleTurn();
    }, 1500);
}

function pauseBattle() {
    if (battleInterval) {
        clearInterval(battleInterval);
        battleInterval = null;
    }
}

function resetBattle() {
    pauseBattle();
    
    playerHP = MAX_PLAYER_HP;
    enemyHP = MAX_ENEMY_HP;
    playerEnergy = 0;
    enemyEnergy = 0;
    isPlaying = false;
    battleLog = [];
    currentTurn = 'player';
    gameResult = null;
    
    updateBattleUI();
    
    const battleLogElement = document.getElementById('battle-log');
    if (battleLogElement) {
        battleLogElement.innerHTML = `
            <p class="text-body text-center opacity-60">${translations[currentLang]?.battle?.battle_not_started || "Бій ще не почався..."}</p>
        `;
    }
    
    const battleResult = document.getElementById('battle-result');
    if (battleResult) {
        battleResult.style.display = 'none';
    }
    
    const button = document.getElementById('battle-play-btn');
    if (button) {
        const t = translations[currentLang]?.battle || translations.ua.battle;
        button.innerHTML = `▶️ <span>${t.start || 'Почати'}</span>`;
        button.disabled = false;
    }
}

function simulateBattleTurn() {
    if (gameResult) return;
    
    const actions = ['attack', 'attack', 'special', 'defend'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    if (currentTurn === 'player') {
        performAction('player', randomAction);
        currentTurn = 'enemy';
    } else {
        performAction('enemy', randomAction);
        currentTurn = 'player';
    }
    
    updateBattleUI();
    checkGameEnd();
}

function performAction(actor, action) {
    const damage = Math.floor(Math.random() * 50) + 20;
    const energyGain = Math.floor(Math.random() * 15) + 5;
    const t = translations[currentLang]?.battle || translations.ua.battle;
    
    if (actor === 'player') {
        if (action === 'attack') {
            enemyHP = Math.max(0, enemyHP - damage);
            playerEnergy = Math.min(100, playerEnergy + energyGain);
            addToBattleLog(`⚔️ ${t.player_turn || 'Гравець'} атакує на ${damage} пошкоджень!`);
        } else if (action === 'special' && playerEnergy >= 100) {
            const specialDamage = damage * 2;
            enemyHP = Math.max(0, enemyHP - specialDamage);
            playerEnergy = 0;
            addToBattleLog(`✨ ${t.player_turn || 'Гравець'} використовує спеціальну атаку на ${specialDamage} пошкоджень!`);
        } else if (action === 'defend') {
            addToBattleLog(`🛡️ ${t.player_turn || 'Гравець'} захищається!`);
        }
    } else {
        if (action === 'attack') {
            playerHP = Math.max(0, playerHP - damage);
            enemyEnergy = Math.min(100, enemyEnergy + energyGain);
            addToBattleLog(`👹 ${t.enemy_turn || 'Ворог'} атакує на ${damage} пошкоджень!`);
        } else if (action === 'special' && enemyEnergy >= 100) {
            const specialDamage = damage * 2;
            playerHP = Math.max(0, playerHP - specialDamage);
            enemyEnergy = 0;
            addToBattleLog(`💥 ${t.enemy_turn || 'Ворог'} використовує спеціальну атаку на ${specialDamage} пошкоджень!`);
        }
    }
}

function addToBattleLog(message) {
    battleLog.push(message);
    if (battleLog.length > 5) {
        battleLog.shift();
    }
    
    const logContainer = document.getElementById('battle-log');
    if (logContainer) {
        logContainer.innerHTML = battleLog.map(log => 
            `<div class="log-entry">${log}</div>`
        ).join('');
        logContainer.scrollTop = logContainer.scrollHeight;
    }
}

function updateBattleUI() {
    // Update HP displays
    const playerHpElement = document.getElementById('player-hp');
    const enemyHpElement = document.getElementById('enemy-hp');
    if (playerHpElement) playerHpElement.textContent = playerHP;
    if (enemyHpElement) enemyHpElement.textContent = enemyHP;
    
    // Update HP bars
    const playerHpFill = document.getElementById('player-hp-fill');
    const enemyHpFill = document.getElementById('enemy-hp-fill');
    if (playerHpFill) playerHpFill.style.width = `${(playerHP / MAX_PLAYER_HP) * 100}%`;
    if (enemyHpFill) enemyHpFill.style.width = `${(enemyHP / MAX_ENEMY_HP) * 100}%`;
    
    // Update energy bars
    const playerEnergyFill = document.getElementById('player-energy-fill');
    const enemyEnergyFill = document.getElementById('enemy-energy-fill');
    if (playerEnergyFill) playerEnergyFill.style.width = `${playerEnergy}%`;
    if (enemyEnergyFill) enemyEnergyFill.style.width = `${enemyEnergy}%`;
    
    // Update turn indicator
    const t = translations[currentLang]?.battle || translations.ua.battle;
    const turnIcon = document.getElementById('turn-icon');
    const turnText = document.getElementById('turn-text');
    if (turnIcon) turnIcon.textContent = currentTurn === 'player' ? '👤' : '👹';
    if (turnText) turnText.textContent = currentTurn === 'player' ? 
        (t.player_turn || 'Хід гравця') : (t.enemy_turn || 'Хід ворога');
    
    // Update character states
    const playerCharacter = document.getElementById('player-character');
    const enemyCharacter = document.getElementById('enemy-character');
    if (playerCharacter) playerCharacter.classList.toggle('active', currentTurn === 'player');
    if (enemyCharacter) enemyCharacter.classList.toggle('active', currentTurn === 'enemy');
}

function checkGameEnd() {
    const t = translations[currentLang]?.battle || translations.ua.battle;
    
    if (playerHP <= 0) {
        gameResult = 'lose';
        isPlaying = false;
        pauseBattle();
        addToBattleLog(`💀 ${t.you_lose || 'ВИ ПРОГРАЛИ!'}`);
        showGameResult('💀', t.you_lose || 'ВИ ПРОГРАЛИ!');
    } else if (enemyHP <= 0) {
        gameResult = 'win';
        isPlaying = false;
        pauseBattle();
        addToBattleLog(`🏆 ${t.you_win || 'ВИ ПЕРЕМОГЛИ!'}`);
        showGameResult('🏆', t.you_win || 'ВИ ПЕРЕМОГЛИ!');
    }
}

function showGameResult(icon, text) {
    const resultIcon = document.getElementById('result-icon');
    const resultText = document.getElementById('result-text');
    const battleResult = document.getElementById('battle-result');
    const playButton = document.getElementById('battle-play-btn');
    
    if (resultIcon) resultIcon.textContent = icon;
    if (resultText) resultText.textContent = text;
    if (battleResult) battleResult.style.display = 'flex';
    if (playButton) playButton.disabled = true;
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const languageDropdown = document.getElementById('language-dropdown');
    const languageSwitcher = document.querySelector('.language-switcher');
    
    if (languageSwitcher && !languageSwitcher.contains(event.target)) {
        languageDropdown.classList.remove('open');
    }
    
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileToggle && !mobileToggle.contains(event.target) && mobileMenu && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('open');
    }
});