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
            subtitle: "Battle Arena",
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
        countdown: {
            months: "Місяців",
            days: "Днів", 
            hours: "Годин",
            minutes: "Хвилин",
            seconds: "Секунд"
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
            enemy_turn: "Хід ворога",
            choose_action: "Оберіть свою дію:",
            health_restored: "Здоров'я відновлено!",
            play_again: "Грати знову"
        },
        game_info: {
            title: "Про гру NFT Battle Arena",
            subtitle: "Дізнайтесь все про механіку гри, правила та можливості заробітку",
            how_to_get_nft: "Як отримати NFT",
            game_rules: "Правила гри",
            roadmap: "Roadmap",
            faq: "FAQ",
            free_nft_title: "Безкоштовний стартовий NFT",
            free_nft_desc: "Кожен новий гравець отримує свого першого NFT-бійця абсолютно безкоштовно через Airdrop систему.",
            cta_title: "Готові спробувати NFT Battle Arena?",
            cta_subtitle: "Приєднуйтесь до тисяч гравців та почніть свою пригоду в світі NFT боїв прямо зараз!",
            cta_start_game: "Почати гру",
            cta_demo: "Демо бою"
        },
        roadmap: {
            title: "Roadmap розвитку",
            subtitle: "Плани розвитку NFT Battle Arena на найближчі роки",
            q3_2025_title: "PvE Розширення",
            q3_2025_date: "Осінь 2025",
            q3_item_1: "Запуск PvE-режимів із сюжетними квестами",
            q3_item_2: "Битви проти легендарних босів з рідкісними NFT",
            q3_item_3: "Покращення UI/UX у Telegram Mini App",
            q4_2025_title: "Командна гра",
            q4_2025_date: "Зима 2025",
            q4_item_1: "Запуск Guild Wars – кланових битв 5х5",
            q4_item_2: "Сезонні батл-паси з ексклюзивними аксесуарами",
            q4_item_3: "Система рейтингів і щотижневі турніри",
            q1_2026_title: "Інтерактивний світ",
            q1_2026_date: "Весна 2026",
            q1_item_1: "Запуск інтерактивної карти скарбів із гео-локаційними NFT",
            q1_item_2: "Розширення системи аксесуарів",
            q1_item_3: "Перший міжрегіональний турнір з призовим фондом",
            q2_2026_title: "Блокчейн інтеграція",
            q2_2026_date: "Літо 2026",
            q2_item_1: "Запуск мобільного додатку для iOS та Android",
            q2_item_2: "Інтеграція з блокчейном для справжніх NFT-транзакцій",
            q2_item_3: "Впровадження внутрішнього маркетплейсу"
        },
        faq: {
            title: "Часті питання",
            subtitle: "Відповіді на найпоширеніші запитання про NFT Battle Arena",
            q1_question: "Що таке NFT Battle Arena?",
            q1_answer: "NFT Battle Arena – це інноваційна Play2Earn гра у форматі Telegram Mini App. Кожен гравець отримує безкоштовного NFT-бійця, щоб розпочати битви на арені та збирати унікальну колекцію.",
            q2_question: "Чи потрібно мати криптовалюту для гри?",
            q2_answer: "Ні, криптовалюта не потрібна. Усі транзакції в грі здійснюються через Telegram Stars, що робить її доступною для всіх.",
            q3_question: "Як я можу заробити гроші у грі?",
            q3_answer: "Ви можете заробляти BP-поінти за перемоги в боях, які можна конвертувати в реальні нагороди через спеціальні аксесуари. Також можна продавати NFT на майбутньому маркетплейсі.",
            q4_question: "Чи є мультиплеєрні бої?",
            q4_answer: "Наразі доступні бої проти ботів. PvP-битви між реальними гравцями та глобальні турніри заплановані на зиму 2025.",
            q5_question: "Як захищена гра від шахрайства?",
            q5_answer: "Ми використовуємо систему антиспам та перевірки акаунтів. Використання ботів або мультиакаунтів призводить до безумовного бану.",
            q6_question: "Де завантажити гру?",
            q6_answer: "Гра доступна в Telegram Mini App. У майбутньому планується реліз у Play Store та App Store."
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
            subtitle: "Battle Arena",
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
        countdown: {
            months: "Months",
            days: "Days", 
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
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
            enemy_turn: "Enemy Turn",
            choose_action: "Choose your action:",
            health_restored: "Health restored!",
            play_again: "Play Again"
        },
        game_info: {
            title: "About NFT Battle Arena Game",
            subtitle: "Learn everything about game mechanics, rules and earning opportunities",
            how_to_get_nft: "How to Get NFT",
            game_rules: "Game Rules",
            roadmap: "Roadmap",
            faq: "FAQ",
            free_nft_title: "Free Starter NFT",
            free_nft_desc: "Every new player receives their first NFT fighter absolutely free through Airdrop system.",
            cta_title: "Ready to try NFT Battle Arena?",
            cta_subtitle: "Join thousands of players and start your adventure in the world of NFT battles right now!",
            cta_start_game: "Start Game",
            cta_demo: "Battle Demo"
        },
        roadmap: {
            title: "Development Roadmap",
            subtitle: "NFT Battle Arena development plans for the coming years",
            q3_2025_title: "PvE Expansion",
            q3_2025_date: "Fall 2025",
            q3_item_1: "Launch of PvE modes with story quests",
            q3_item_2: "Battles against legendary bosses with rare NFTs",
            q3_item_3: "UI/UX improvements in Telegram Mini App",
            q4_2025_title: "Team Play",
            q4_2025_date: "Winter 2025",
            q4_item_1: "Launch Guild Wars – 5v5 clan battles",
            q4_item_2: "Seasonal battle passes with exclusive accessories",
            q4_item_3: "Rating system and weekly tournaments",
            q1_2026_title: "Interactive World",
            q1_2026_date: "Spring 2026",
            q1_item_1: "Launch interactive treasure map with geo-location NFTs",
            q1_item_2: "Expansion of accessory system",
            q1_item_3: "First inter-regional tournament with prize pool",
            q2_2026_title: "Blockchain Integration",
            q2_2026_date: "Summer 2026",
            q2_item_1: "Launch mobile app for iOS and Android",
            q2_item_2: "Blockchain integration for real NFT transactions",
            q2_item_3: "Implementation of internal marketplace"
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Answers to the most common questions about NFT Battle Arena",
            q1_question: "What is NFT Battle Arena?",
            q1_answer: "NFT Battle Arena is an innovative Play2Earn game in Telegram Mini App format. Every player gets a free NFT fighter to start arena battles and collect unique collection.",
            q2_question: "Do I need cryptocurrency to play?",
            q2_answer: "No, cryptocurrency is not required. All in-game transactions are made through Telegram Stars, making it accessible to everyone.",
            q3_question: "How can I earn money in the game?",
            q3_answer: "You can earn BP points for battle victories, which can be converted into real rewards through special accessories. You can also sell NFTs on the future marketplace.",
            q4_question: "Are there multiplayer battles?",
            q4_answer: "Currently, battles against bots are available. PvP battles between real players and global tournaments are planned for winter 2025.",
            q5_question: "How is the game protected from fraud?",
            q5_answer: "We use anti-spam and account verification systems. Using bots or multi-accounts leads to unconditional ban.",
            q6_question: "Where to download the game?",
            q6_answer: "The game is available in Telegram Mini App. Future release in Play Store and App Store is planned."
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
    },
    es: {
        nav: {
            home: "Inicio",
            game_info: "Información del Juego",
            marketplace: "Mercado",
            battle_demo: "Demo de Batalla",
            connect_telegram: "Conectar Telegram"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Juego Play2Earn en Telegram Mini App",
            description: "Consigue tu primer NFT, lucha en la arena contra oponentes y colecciona una colección única. ¡Esto no es solo un juego - es una batalla por recompensas, prestigio y poder real!",
            play_now: "Jugar Ahora",
            learn_more: "Saber Más",
            watch_demo: "Ver Demo",
            start_journey: "Comenzar Aventura"
        },
        stats: {
            active_players: "Jugadores Activos",
            nft_in_game: "NFTs en Juego",
            battles_fought: "Batallas Peleadas",
            rewards_paid: "Recompensas Pagadas"
        },
        features: {
            free_nft_title: "NFT Gratis",
            free_nft_desc: "Consigue tu primer luchador gratis y comienza aventuras en la arena",
            epic_battles_title: "Batallas Épicas",
            epic_battles_desc: "Lucha contra bots y otros jugadores por recompensas y ranking",
            earn_bp_title: "Ganar BP",
            earn_bp_desc: "Convierte tus puntos BP en recompensas reales a través de Telegram Stars",
            why_choose_title: "Por qué elegir NFT Battle Arena",
            why_choose_subtitle: "Combinación única de coleccionismo de NFT, batallas dinámicas y oportunidades de ganancias"
        },
        cta: {
            ready_title: "¿Listo para comenzar la aventura?",
            ready_subtitle: "¡Únete a miles de jugadores en NFT Battle Arena y comienza a ganar con nosotros!",
            start_now: "Empezar Juego Ahora",
            watch_demo: "Ver Demo de Batalla"
        },
        marketplace: {
            title: "Mercado NFT",
            coming_soon: "El mercado estará disponible en",
            connect_account: "Conectar Cuenta",
            temporarily_unavailable: "Mercado temporalmente no disponible",
            market_description: "Estamos trabajando en crear la mejor experiencia de compra de NFT. ¡El mercado estará disponible en unos meses con todas las funciones!",
            telegram_connected: "Telegram Conectado",
            telegram_not_connected: "Telegram No Conectado"
        },
        battle: {
            title: "Demo de Batalla",
            description: "Ve cómo se ven las batallas en NFT Battle Arena",
            player_hp: "HP del Jugador",
            enemy_hp: "HP del Enemigo",
            attack: "Atacar",
            defend: "Defender",
            special: "Especial",
            fight: "¡LUCHA!",
            you_win: "¡GANASTE!",
            you_lose: "¡PERDISTE!",
            draw: "¡EMPATE!",
            start: "Comenzar",
            pause: "Pausa",
            reset: "Reiniciar",
            battle_log: "Registro de Batalla",
            battle_not_started: "La batalla aún no ha comenzado...",
            demo_info: "Esta es la versión demo",
            demo_description: "En el juego real puedes controlar todas las acciones del personaje, usar diferentes NFTs con habilidades únicas y ganar puntos BP por victorias.",
            play_real_game: "Jugar Juego Real",
            player_turn: "Turno del Jugador",
            enemy_turn: "Turno del Enemigo",
            choose_action: "Elige tu acción:",
            health_restored: "¡Salud restaurada!"
        },
        game_info: {
            title: "Sobre el Juego NFT Battle Arena",
            subtitle: "Aprende todo sobre las mecánicas del juego, reglas y oportunidades de ganancias",
            how_to_get_nft: "Cómo Obtener NFT",
            game_rules: "Reglas del Juego",
            roadmap: "Hoja de Ruta",
            faq: "FAQ"
        },
        common: {
            loading: "Cargando...",
            error: "Error",
            success: "Éxito",
            close: "Cerrar",
            save: "Guardar",
            cancel: "Cancelar",
            confirm: "Confirmar"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            game_info: "Info du Jeu",
            marketplace: "Marché",
            battle_demo: "Démo de Bataille",
            connect_telegram: "Connecter Telegram"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Battle Arena",
            description: "Obtenez votre premier NFT, combattez dans l'arène contre des adversaires et collectionnez une collection unique. Ce n'est pas juste un jeu - c'est une bataille pour des récompenses, du prestige et du vrai pouvoir !",
            play_now: "Jouer Maintenant",
            learn_more: "En Savoir Plus",
            watch_demo: "Voir la Démo",
            start_journey: "Commencer l'Aventure"
        },
        stats: {
            active_players: "Joueurs Actifs",
            nft_in_game: "NFT dans le Jeu",
            battles_fought: "Batailles Menées",
            rewards_paid: "Récompenses Payées"
        },
        features: {
            free_nft_title: "NFT Gratuit",
            free_nft_desc: "Obtenez votre premier combattant gratuitement et commencez les aventures dans l'arène",
            epic_battles_title: "Batailles Épiques",
            epic_battles_desc: "Combattez contre des bots et d'autres joueurs pour des récompenses et du classement",
            earn_bp_title: "Gagner BP",
            earn_bp_desc: "Convertissez vos points BP en vraies récompenses via Telegram Stars",
            why_choose_title: "Pourquoi choisir NFT Battle Arena",
            why_choose_subtitle: "Combinaison unique de collection NFT, batailles dynamiques et opportunités de gains"
        },
        cta: {
            ready_title: "Prêt à commencer l'aventure ?",
            ready_subtitle: "Rejoignez des milliers de joueurs dans NFT Battle Arena et commencez à gagner avec nous !",
            start_now: "Commencer le Jeu Maintenant",
            watch_demo: "Voir la Démo de Bataille"
        },
        marketplace: {
            title: "Marché NFT",
            coming_soon: "Le marché sera disponible dans",
            connect_account: "Connecter le Compte",
            temporarily_unavailable: "Marché temporairement indisponible",
            market_description: "Nous travaillons sur la création de la meilleure expérience d'achat NFT. Le marché sera disponible dans quelques mois avec toutes les fonctionnalités !",
            telegram_connected: "Telegram Connecté",
            telegram_not_connected: "Telegram Non Connecté"
        },
        countdown: {
            months: "Mois",
            days: "Jours", 
            hours: "Heures",
            minutes: "Minutes",
            seconds: "Secondes"
        },
        battle: {
            title: "Démo de Bataille",
            description: "Voyez à quoi ressemblent les batailles dans NFT Battle Arena",
            player_hp: "HP du Joueur",
            enemy_hp: "HP de l'Ennemi",
            attack: "Attaquer",
            defend: "Défendre",
            special: "Spécial",
            fight: "COMBAT !",
            you_win: "VOUS GAGNEZ !",
            you_lose: "VOUS PERDEZ !",
            draw: "ÉGALITÉ !",
            start: "Commencer",
            pause: "Pause",
            reset: "Réinitialiser",
            battle_log: "Journal de Bataille",
            battle_not_started: "La bataille n'a pas encore commencé...",
            demo_info: "Ceci est la version démo",
            demo_description: "Dans le vrai jeu, vous pouvez contrôler toutes les actions du personnage, utiliser différents NFT avec des capacités uniques et gagner des points BP pour les victoires.",
            play_real_game: "Jouer au Vrai Jeu",
            player_turn: "Tour du Joueur",
            enemy_turn: "Tour de l'Ennemi",
            choose_action: "Choisissez votre action :",
            health_restored: "Santé restaurée !",
            play_again: "Rejouer"
        },
        game_info: {
            title: "À Propos du Jeu NFT Battle Arena",
            subtitle: "Apprenez tout sur les mécaniques du jeu, les règles et les opportunités de gains",
            how_to_get_nft: "Comment Obtenir des NFT",
            game_rules: "Règles du Jeu",
            roadmap: "Feuille de Route",
            faq: "FAQ",
            free_nft_title: "NFT de Démarrage Gratuit",
            free_nft_desc: "Chaque nouveau joueur reçoit son premier combattant NFT gratuitement via le système Airdrop.",
            cta_title: "Prêt à essayer NFT Battle Arena ?",
            cta_subtitle: "Rejoignez des milliers de joueurs et commencez votre aventure dans le monde des batailles NFT dès maintenant !",
            cta_start_game: "Commencer le Jeu",
            cta_demo: "Démo Bataille"
        },
        roadmap: {
            title: "Feuille de Route de Développement",
            subtitle: "Plans de développement NFT Battle Arena pour les années à venir",
            q3_2025_title: "Expansion PvE",
            q3_2025_date: "Automne 2025",
            q3_item_1: "Lancement des modes PvE avec quêtes narratives",
            q3_item_2: "Batailles contre des boss légendaires avec NFT rares",
            q3_item_3: "Améliorations UI/UX dans Telegram Mini App",
            q4_2025_title: "Jeu d'Équipe",
            q4_2025_date: "Hiver 2025",
            q4_item_1: "Lancement Guild Wars – batailles de clan 5v5",
            q4_item_2: "Passes de bataille saisonniers avec accessoires exclusifs",
            q4_item_3: "Système de classement et tournois hebdomadaires",
            q1_2026_title: "Monde Interactif",
            q1_2026_date: "Printemps 2026",
            q1_item_1: "Lancement carte aux trésors interactive avec NFT géolocalisés",
            q1_item_2: "Expansion du système d'accessoires",
            q1_item_3: "Premier tournoi inter-régional avec prize pool",
            q2_2026_title: "Intégration Blockchain",
            q2_2026_date: "Été 2026",
            q2_item_1: "Lancement app mobile pour iOS et Android",
            q2_item_2: "Intégration blockchain pour vraies transactions NFT",
            q2_item_3: "Implémentation du marketplace interne"
        },
        faq: {
            title: "Questions Fréquemment Posées",
            subtitle: "Réponses aux questions les plus courantes sur NFT Battle Arena",
            q1_question: "Qu'est-ce que NFT Battle Arena ?",
            q1_answer: "NFT Battle Arena est un jeu Play2Earn innovant au format Telegram Mini App. Chaque joueur obtient un combattant NFT gratuit pour commencer ses batailles d'arène et collecter une collection unique.",
            q2_question: "Ai-je besoin de cryptomonnaie pour jouer ?",
            q2_answer: "Non, aucune cryptomonnaie n'est requise. Toutes les transactions dans le jeu se font via Telegram Stars, le rendant accessible à tous.",
            q3_question: "Comment puis-je gagner de l'argent dans le jeu ?",
            q3_answer: "Vous pouvez gagner des points BP pour vos victoires en bataille, qui peuvent être convertis en vraies récompenses via des accessoires spéciaux. Vous pouvez aussi vendre des NFT sur le futur marketplace.",
            q4_question: "Y a-t-il des batailles multijoueur ?",
            q4_answer: "Actuellement, les batailles contre les bots sont disponibles. Les batailles PvP entre vrais joueurs et tournois globaux sont prévus pour l'hiver 2025.",
            q5_question: "Comment le jeu est-il protégé contre la fraude ?",
            q5_answer: "Nous utilisons des systèmes anti-spam et de vérification de compte. L'utilisation de bots ou comptes multiples mène à un ban inconditionnel.",
            q6_question: "Où télécharger le jeu ?",
            q6_answer: "Le jeu est disponible dans Telegram Mini App. Une future sortie sur Play Store et App Store est prévue."
        },
        common: {
            loading: "Chargement...",
            error: "Erreur",
            success: "Succès",
            close: "Fermer",
            save: "Sauvegarder",
            cancel: "Annuler",
            confirm: "Confirmer"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            game_info: "Spiel-Info",
            marketplace: "Marktplatz",
            battle_demo: "Kampf-Demo",
            connect_telegram: "Telegram Verbinden"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Play2Earn Spiel in Telegram Mini App",
            description: "Hol dir dein erstes NFT, kämpfe in der Arena gegen Gegner und sammle eine einzigartige Sammlung. Das ist nicht nur ein Spiel - es ist ein Kampf um Belohnungen, Prestige und wahre Macht!",
            play_now: "Jetzt Spielen",
            learn_more: "Mehr Erfahren",
            watch_demo: "Demo Ansehen",
            start_journey: "Abenteuer Beginnen"
        },
        stats: {
            active_players: "Aktive Spieler",
            nft_in_game: "NFTs im Spiel",
            battles_fought: "Kämpfe Gefochten",
            rewards_paid: "Belohnungen Bezahlt"
        },
        features: {
            free_nft_title: "Kostenloses NFT",
            free_nft_desc: "Hol dir deinen ersten Kämpfer kostenlos und beginne Abenteuer in der Arena",
            epic_battles_title: "Epische Kämpfe",
            epic_battles_desc: "Kämpfe gegen Bots und andere Spieler um Belohnungen und Ranking",
            earn_bp_title: "BP Verdienen",
            earn_bp_desc: "Wandle deine BP-Punkte in echte Belohnungen über Telegram Stars um",
            why_choose_title: "Warum NFT Battle Arena wählen",
            why_choose_subtitle: "Einzigartige Kombination aus NFT-Sammeln, dynamischen Kämpfen und Verdienstmöglichkeiten"
        },
        cta: {
            ready_title: "Bereit, das Abenteuer zu beginnen?",
            ready_subtitle: "Schließe dich Tausenden von Spielern in der NFT Battle Arena an und beginne mit uns zu verdienen!",
            start_now: "Spiel Jetzt Starten",
            watch_demo: "Kampf-Demo Ansehen"
        },
        marketplace: {
            title: "NFT Marktplatz",
            coming_soon: "Der Marktplatz wird verfügbar sein in",
            connect_account: "Konto Verbinden",
            temporarily_unavailable: "Marktplatz vorübergehend nicht verfügbar",
            market_description: "Wir arbeiten daran, die beste NFT-Shopping-Erfahrung zu schaffen. Der Marktplatz wird in wenigen Monaten mit allen Funktionen verfügbar sein!",
            telegram_connected: "Telegram Verbunden",
            telegram_not_connected: "Telegram Nicht Verbunden"
        },
        battle: {
            title: "Kampf-Demo",
            description: "Sieh, wie Kämpfe in der NFT Battle Arena aussehen",
            player_hp: "Spieler HP",
            enemy_hp: "Gegner HP",
            attack: "Angreifen",
            defend: "Verteidigen",
            special: "Spezial",
            fight: "KAMPF!",
            you_win: "DU GEWINNST!",
            you_lose: "DU VERLIERST!",
            draw: "UNENTSCHIEDEN!",
            start: "Starten",
            pause: "Pause",
            reset: "Zurücksetzen",
            battle_log: "Kampfprotokoll",
            battle_not_started: "Der Kampf hat noch nicht begonnen...",
            demo_info: "Das ist die Demo-Version",
            demo_description: "Im echten Spiel kannst du alle Charakter-Aktionen kontrollieren, verschiedene NFTs mit einzigartigen Fähigkeiten nutzen und BP-Punkte für Siege verdienen.",
            play_real_game: "Echtes Spiel Spielen",
            player_turn: "Spielerzug",
            enemy_turn: "Gegnerzug",
            choose_action: "Wähle deine Aktion:",
            health_restored: "Gesundheit wiederhergestellt!"
        },
        game_info: {
            title: "Über das NFT Battle Arena Spiel",
            subtitle: "Lerne alles über Spielmechaniken, Regeln und Verdienstmöglichkeiten",
            how_to_get_nft: "Wie man NFTs bekommt",
            game_rules: "Spielregeln",
            roadmap: "Roadmap",
            faq: "FAQ"
        },
        common: {
            loading: "Laden...",
            error: "Fehler",
            success: "Erfolg",
            close: "Schließen",
            save: "Speichern",
            cancel: "Abbrechen",
            confirm: "Bestätigen"
        }
    },
    it: {
        nav: {
            home: "Home",
            game_info: "Info Gioco",
            marketplace: "Mercato",
            battle_demo: "Demo Battaglia",
            connect_telegram: "Connetti Telegram"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Gioco Play2Earn in Telegram Mini App",
            description: "Ottieni il tuo primo NFT, combatti nell'arena contro avversari e raccogli una collezione unica. Questo non è solo un gioco - è una battaglia per ricompense, prestigio e vero potere!",
            play_now: "Gioca Ora",
            learn_more: "Scopri di Più",
            watch_demo: "Guarda Demo",
            start_journey: "Inizia l'Avventura"
        },
        stats: {
            active_players: "Giocatori Attivi",
            nft_in_game: "NFT nel Gioco",
            battles_fought: "Battaglie Combattute",
            rewards_paid: "Ricompense Pagate"
        },
        features: {
            free_nft_title: "NFT Gratuito",
            free_nft_desc: "Ottieni il tuo primo combattente gratis e inizia le avventure nell'arena",
            epic_battles_title: "Battaglie Epiche",
            epic_battles_desc: "Combatti contro bot e altri giocatori per ricompense e classifiche",
            earn_bp_title: "Guadagna BP",
            earn_bp_desc: "Converti i tuoi punti BP in vere ricompense tramite Telegram Stars",
            why_choose_title: "Perché scegliere NFT Battle Arena",
            why_choose_subtitle: "Combinazione unica di collezionismo NFT, battaglie dinamiche e opportunità di guadagno"
        },
        cta: {
            ready_title: "Pronto a iniziare l'avventura?",
            ready_subtitle: "Unisciti a migliaia di giocatori in NFT Battle Arena e inizia a guadagnare con noi!",
            start_now: "Inizia il Gioco Ora",
            watch_demo: "Guarda Demo Battaglia"
        },
        marketplace: {
            title: "Mercato NFT",
            coming_soon: "Il mercato sarà disponibile tra",
            connect_account: "Connetti Account",
            temporarily_unavailable: "Mercato temporaneamente non disponibile",
            market_description: "Stiamo lavorando per creare la migliore esperienza di acquisto NFT. Il mercato sarà disponibile tra qualche mese con tutte le funzionalità!",
            telegram_connected: "Telegram Connesso",
            telegram_not_connected: "Telegram Non Connesso"
        },
        battle: {
            title: "Demo Battaglia",
            description: "Vedi come appaiono le battaglie in NFT Battle Arena",
            player_hp: "HP Giocatore",
            enemy_hp: "HP Nemico",
            attack: "Attaccare",
            defend: "Difendere",
            special: "Speciale",
            fight: "COMBATTI!",
            you_win: "HAI VINTO!",
            you_lose: "HAI PERSO!",
            draw: "PAREGGIO!",
            start: "Inizia",
            pause: "Pausa",
            reset: "Ripristina",
            battle_log: "Registro Battaglia",
            battle_not_started: "La battaglia non è ancora iniziata...",
            demo_info: "Questa è la versione demo",
            demo_description: "Nel gioco reale puoi controllare tutte le azioni del personaggio, usare diversi NFT con abilità uniche e guadagnare punti BP per le vittorie.",
            play_real_game: "Gioca al Gioco Vero",
            player_turn: "Turno del Giocatore",
            enemy_turn: "Turno del Nemico",
            choose_action: "Scegli la tua azione:",
            health_restored: "Salute ripristinata!"
        },
        game_info: {
            title: "Informazioni sul Gioco NFT Battle Arena",
            subtitle: "Impara tutto sulle meccaniche di gioco, regole e opportunità di guadagno",
            how_to_get_nft: "Come Ottenere NFT",
            game_rules: "Regole del Gioco",
            roadmap: "Roadmap",
            faq: "FAQ"
        },
        common: {
            loading: "Caricamento...",
            error: "Errore",
            success: "Successo",
            close: "Chiudi",
            save: "Salva",
            cancel: "Annulla",
            confirm: "Conferma"
        }
    },
    pt: {
        nav: {
            home: "Início",
            game_info: "Info do Jogo",
            marketplace: "Mercado",
            battle_demo: "Demo de Batalha",
            connect_telegram: "Conectar Telegram"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Jogo Play2Earn no Telegram Mini App",
            description: "Obtenha seu primeiro NFT, lute na arena contra oponentes e colete uma coleção única. Isso não é apenas um jogo - é uma batalha por recompensas, prestígio e poder real!",
            play_now: "Jogar Agora",
            learn_more: "Saber Mais",
            watch_demo: "Ver Demo",
            start_journey: "Começar Aventura"
        },
        stats: {
            active_players: "Jogadores Ativos",
            nft_in_game: "NFTs no Jogo",
            battles_fought: "Batalhas Lutadas",
            rewards_paid: "Recompensas Pagas"
        },
        features: {
            free_nft_title: "NFT Grátis",
            free_nft_desc: "Obtenha seu primeiro lutador gratuitamente e comece aventuras na arena",
            epic_battles_title: "Batalhas Épicas",
            epic_battles_desc: "Lute contra bots e outros jogadores por recompensas e ranking",
            earn_bp_title: "Ganhar BP",
            earn_bp_desc: "Converta seus pontos BP em recompensas reais através do Telegram Stars",
            why_choose_title: "Por que escolher NFT Battle Arena",
            why_choose_subtitle: "Combinação única de colecionismo NFT, batalhas dinâmicas e oportunidades de ganhos"
        },
        cta: {
            ready_title: "Pronto para começar a aventura?",
            ready_subtitle: "Junte-se a milhares de jogadores no NFT Battle Arena e comece a ganhar conosco!",
            start_now: "Começar Jogo Agora",
            watch_demo: "Ver Demo de Batalha"
        },
        marketplace: {
            title: "Mercado NFT",
            coming_soon: "O mercado estará disponível em",
            connect_account: "Conectar Conta",
            temporarily_unavailable: "Mercado temporariamente indisponível",
            market_description: "Estamos trabalhando para criar a melhor experiência de compra NFT. O mercado estará disponível em alguns meses com todas as funcionalidades!",
            telegram_connected: "Telegram Conectado",
            telegram_not_connected: "Telegram Não Conectado"
        },
        battle: {
            title: "Demo de Batalha",
            description: "Veja como são as batalhas no NFT Battle Arena",
            player_hp: "HP do Jogador",
            enemy_hp: "HP do Inimigo",
            attack: "Atacar",
            defend: "Defender",
            special: "Especial",
            fight: "LUTA!",
            you_win: "VOCÊ VENCEU!",
            you_lose: "VOCÊ PERDEU!",
            draw: "EMPATE!",
            start: "Iniciar",
            pause: "Pausar",
            reset: "Resetar",
            battle_log: "Log da Batalha",
            battle_not_started: "A batalha ainda não começou...",
            demo_info: "Esta é a versão demo",
            demo_description: "No jogo real você pode controlar todas as ações do personagem, usar diferentes NFTs com habilidades únicas e ganhar pontos BP pelas vitórias.",
            play_real_game: "Jogar Jogo Real",
            player_turn: "Turno do Jogador",
            enemy_turn: "Turno do Inimigo",
            choose_action: "Escolha sua ação:",
            health_restored: "Saúde restaurada!"
        },
        game_info: {
            title: "Sobre o Jogo NFT Battle Arena",
            subtitle: "Aprenda tudo sobre as mecânicas do jogo, regras e oportunidades de ganhos",
            how_to_get_nft: "Como Obter NFT",
            game_rules: "Regras do Jogo",
            roadmap: "Roadmap",
            faq: "FAQ"
        },
        common: {
            loading: "Carregando...",
            error: "Erro",
            success: "Sucesso",
            close: "Fechar",
            save: "Salvar",
            cancel: "Cancelar",
            confirm: "Confirmar"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            game_info: "О игре",
            marketplace: "Магазин",
            battle_demo: "Демо боя",
            connect_telegram: "Подключить Telegram"
        },
        hero: {
            title: "NFT Battle Arena",
            subtitle: "Play2Earn игра в Telegram Mini App",
            description: "Получи свой первый NFT, сражайся на арене с противниками и собирай уникальную коллекцию. Это не просто игра – это битва за награды, престиж и настоящую силу!",
            play_now: "Играть сейчас",
            learn_more: "Узнать больше",
            watch_demo: "Смотреть демо",
            start_journey: "Начать приключение"
        },
        stats: {
            active_players: "Активных игроков",
            nft_in_game: "NFT в игре",
            battles_fought: "Боев проведено",
            rewards_paid: "Наград выплачено"
        },
        features: {
            free_nft_title: "Бесплатный NFT",
            free_nft_desc: "Получи своего первого бойца бесплатно и начни приключения на арене",
            epic_battles_title: "Эпические бои",
            epic_battles_desc: "Сражайся против ботов и других игроков за награды и рейтинг",
            earn_bp_title: "Зарабатывай BP",
            earn_bp_desc: "Конвертируй свои BP поинты в реальные награды через Telegram Stars",
            why_choose_title: "Почему выбирают NFT Battle Arena",
            why_choose_subtitle: "Уникальная комбинация NFT коллекционирования, динамичных боев и возможностей заработка"
        },
        cta: {
            ready_title: "Готов начать приключение?",
            ready_subtitle: "Присоединяйся к тысячам игроков в NFT Battle Arena и начни зарабатывать вместе с нами!",
            start_now: "Начать игру сейчас",
            watch_demo: "Смотреть демо боя"
        },
        marketplace: {
            title: "NFT Магазин",
            coming_soon: "Магазин будет доступен через",
            connect_account: "Подключить аккаунт",
            temporarily_unavailable: "Магазин временно недоступен",
            market_description: "Мы работаем над созданием лучшего опыта покупки NFT. Магазин будет доступен через несколько месяцев со всеми функциями!",
            telegram_connected: "Telegram подключен",
            telegram_not_connected: "Telegram не подключен"
        },
        battle: {
            title: "Демо боя",
            description: "Посмотрите, как выглядят бои в NFT Battle Arena",
            player_hp: "HP Игрока",
            enemy_hp: "HP Врага",
            attack: "Атака",
            defend: "Защита",
            special: "Спец-удар",
            fight: "БОЙ!",
            you_win: "ВЫ ПОБЕДИЛИ!",
            you_lose: "ВЫ ПРОИГРАЛИ!",
            draw: "НИЧЬЯ!",
            start: "Начать",
            pause: "Пауза",
            reset: "Сброс",
            battle_log: "Лог боя",
            battle_not_started: "Бой еще не начался...",
            demo_info: "Это демо версия",
            demo_description: "В настоящей игре вы сможете контролировать все действия персонажа, использовать разные NFT с уникальными способностями и зарабатывать BP поинты за победы.",
            play_real_game: "Играть в настоящую игру",
            player_turn: "Ход игрока",
            enemy_turn: "Ход врага",
            choose_action: "Выберите действие:",
            health_restored: "Здоровье восстановлено!"
        },
        game_info: {
            title: "О игре NFT Battle Arena",
            subtitle: "Узнайте все о механиках игры, правилах и возможностях заработка",
            how_to_get_nft: "Как получить NFT",
            game_rules: "Правила игры",
            roadmap: "Roadmap",
            faq: "FAQ"
        },
        common: {
            loading: "Загрузка...",
            error: "Ошибка",
            success: "Успешно",
            close: "Закрыть",
            save: "Сохранить",
            cancel: "Отменить",
            confirm: "Подтвердить"
        }
    }
};

// Language configuration
const languages = [
    { code: 'ua', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

// Global state
let currentLang = 'ua';
let currentPage = 'home';
let isScrolled = false;
let isMobileMenuOpen = false;
let isConnected = false;
let battleInterval = null;
let battleState = {
    isActive: false,
    playerHP: 2500,
    enemyHP: 2400,
    playerEnergy: 0,
    enemyEnergy: 0,
    maxPlayerHP: 2500,
    maxEnemyHP: 2400,
    currentTurn: 'player',
    gameResult: null,
    turnCount: 0
};

// Initialize the application
function init() {
    console.log('Initializing NFT Battle Arena...');
    
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
    
    // Show home page initially
    setTimeout(() => {
        changePage('home');
    }, 100);
    
    console.log('NFT Battle Arena initialized successfully');
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
    updateElementByClass('hero-subtitle', t.hero.subtitle);
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
    updateElementByClass('how-to-get-free-nft-title', t.game_info.free_nft_title);
    updateElementByClass('how-to-get-free-nft-desc', t.game_info.free_nft_desc);
    updateElementByClass('gameinfo-cta-title', t.game_info.cta_title);
    updateElementByClass('gameinfo-cta-subtitle', t.game_info.cta_subtitle);
    updateElementByClass('gameinfo-cta-start-game', t.game_info.cta_start_game);
    updateElementByClass('gameinfo-cta-demo', t.game_info.cta_demo);
    
    // Update roadmap section
    if (t.roadmap) {
        updateElementByClass('roadmap-title', t.roadmap.title);
        updateElementByClass('roadmap-subtitle', t.roadmap.subtitle);
        updateElementByClass('roadmap-q3-2025-title', t.roadmap.q3_2025_title);
        updateElementByClass('roadmap-q3-2025-date', t.roadmap.q3_2025_date);
        updateElementByClass('roadmap-q3-item-1', t.roadmap.q3_item_1);
        updateElementByClass('roadmap-q3-item-2', t.roadmap.q3_item_2);
        updateElementByClass('roadmap-q3-item-3', t.roadmap.q3_item_3);
        updateElementByClass('roadmap-q4-2025-title', t.roadmap.q4_2025_title);
        updateElementByClass('roadmap-q4-2025-date', t.roadmap.q4_2025_date);
        updateElementByClass('roadmap-q4-item-1', t.roadmap.q4_item_1);
        updateElementByClass('roadmap-q4-item-2', t.roadmap.q4_item_2);
        updateElementByClass('roadmap-q4-item-3', t.roadmap.q4_item_3);
        updateElementByClass('roadmap-q1-2026-title', t.roadmap.q1_2026_title);
        updateElementByClass('roadmap-q1-2026-date', t.roadmap.q1_2026_date);
        updateElementByClass('roadmap-q1-item-1', t.roadmap.q1_item_1);
        updateElementByClass('roadmap-q1-item-2', t.roadmap.q1_item_2);
        updateElementByClass('roadmap-q1-item-3', t.roadmap.q1_item_3);
        updateElementByClass('roadmap-q2-2026-title', t.roadmap.q2_2026_title);
        updateElementByClass('roadmap-q2-2026-date', t.roadmap.q2_2026_date);
        updateElementByClass('roadmap-q2-item-1', t.roadmap.q2_item_1);
        updateElementByClass('roadmap-q2-item-2', t.roadmap.q2_item_2);
        updateElementByClass('roadmap-q2-item-3', t.roadmap.q2_item_3);
    }
    
    // Update FAQ section
    if (t.faq) {
        updateElementByClass('faq-title', t.faq.title);
        updateElementByClass('faq-subtitle', t.faq.subtitle);
        updateElementByClass('faq-q1-question', t.faq.q1_question);
        updateElementByClass('faq-q1-answer', t.faq.q1_answer);
        updateElementByClass('faq-q2-question', t.faq.q2_question);
        updateElementByClass('faq-q2-answer', t.faq.q2_answer);
        updateElementByClass('faq-q3-question', t.faq.q3_question);
        updateElementByClass('faq-q3-answer', t.faq.q3_answer);
        updateElementByClass('faq-q4-question', t.faq.q4_question);
        updateElementByClass('faq-q4-answer', t.faq.q4_answer);
        updateElementByClass('faq-q5-question', t.faq.q5_question);
        updateElementByClass('faq-q5-answer', t.faq.q5_answer);
        updateElementByClass('faq-q6-question', t.faq.q6_question);
        updateElementByClass('faq-q6-answer', t.faq.q6_answer);
    }
    
    // Update marketplace
    updateElementByClass('marketplace-title', t.marketplace.title);
    updateElementByClass('marketplace-coming-soon', t.marketplace.coming_soon);
    updateElementByClass('marketplace-temp-unavailable', t.marketplace.temporarily_unavailable);
    updateElementByClass('marketplace-description', t.marketplace.market_description);
    updateElementByClass('connect-account-text', t.marketplace.connect_account);
    updateElementByClass('connection-status-text', isConnected ? t.marketplace.telegram_connected : t.marketplace.telegram_not_connected);
    
    // Update countdown
    if (t.countdown) {
        updateElementByClass('countdown-months', t.countdown.months);
        updateElementByClass('countdown-days', t.countdown.days);
        updateElementByClass('countdown-hours', t.countdown.hours);
        updateElementByClass('countdown-minutes', t.countdown.minutes);
        updateElementByClass('countdown-seconds', t.countdown.seconds);
    }
    
    // Update battle demo
    updateElementByClass('battle-title', t.battle.title);
    updateElementByClass('battle-description', t.battle.description);
    updateElementByClass('battle-reset-text', t.battle.reset);
    updateElementByClass('battle-player-hp', t.battle.player_hp);
    updateElementByClass('battle-enemy-hp', t.battle.enemy_hp);
    updateElementByClass('battle-player-turn', t.battle.player_turn);
    updateElementByClass('battle-choose-action', t.battle.choose_action);
    updateElementByClass('battle-attack', t.battle.attack);
    updateElementByClass('battle-defend', t.battle.defend);
    updateElementByClass('battle-special', t.battle.special);
    updateElementByClass('battle-health-restored', t.battle.health_restored);
    updateElementByClass('battle-demo-info', t.battle.demo_info);
    updateElementByClass('battle-demo-description', t.battle.demo_description);
    updateElementByClass('battle-play-real-game', t.battle.play_real_game);
    updateElementByClass('battle-you-win', t.battle.you_win);
    updateElementByClass('battle-play-again', t.battle.play_again);
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

// Helper function to update element by ID - Added for how-to-get and rules tabs
function updateElementById(id, text) {
    const element = document.getElementById(id);
    if (element && text) {
        element.textContent = text;
    }
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
    console.log('Attempting to change page to:', page);
    
    if (currentPage === page) return;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    console.log('Found pages:', pages.length);
    pages.forEach(p => {
        p.classList.add('hidden');
        console.log('Hidden page:', p.id);
    });
    
    // Show selected page
    let targetPageId;
    if (page === 'home') {
        targetPageId = 'homePage';
    } else if (page === 'game_info') {
        targetPageId = 'gameInfoPage';
    } else if (page === 'marketplace') {
        targetPageId = 'marketplacePage';
    } else if (page === 'battle_demo') {
        targetPageId = 'battleDemoPage';
    }
    
    const targetPage = document.getElementById(targetPageId);
    console.log('Looking for page:', targetPageId, 'Found:', targetPage);
    
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
            setTimeout(() => switchTab('how-to-get'), 100);
        } else if (page === 'battle_demo') {
            setTimeout(() => resetBattle(), 100);
        }
        
        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Successfully changed to page:', page);
    } else {
        console.error('Page not found:', targetPageId);
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
    console.log('Switching to tab:', tabName);
    
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    console.log('Found tabs:', tabs.length);
    tabs.forEach(tab => {
        tab.classList.add('hidden');
        console.log('Hidden tab:', tab.id);
    });
    
    // Show selected tab
    const targetTab = document.getElementById(tabName);
    console.log('Looking for tab:', tabName, 'Found:', targetTab);
    
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
        
        console.log('Successfully switched to tab:', tabName);
    } else {
        console.error('Tab not found:', tabName);
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
function playerAction(action) {
    if (battleState.gameResult || battleState.currentTurn !== 'player') return;
    
    battleState.isActive = true;
    battleState.turnCount++;
    
    const t = translations[currentLang] || translations.ua;
    
    // Disable all buttons temporarily
    disableBattleButtons(true);
    
    // Player action
    performPlayerAction(action);
    
    // Check if game ended
    if (checkGameEnd()) return;
    
    // Switch to enemy turn
    battleState.currentTurn = 'enemy';
    updateBattleUI();
    
    // Enemy action after delay
    setTimeout(() => {
        if (!battleState.gameResult) {
            performEnemyAction();
            checkGameEnd();
            
            // Switch back to player turn
            if (!battleState.gameResult) {
                battleState.currentTurn = 'player';
                updateBattleUI();
                disableBattleButtons(false);
            }
        }
    }, 1500);
}

function performPlayerAction(action) {
    const damage = Math.floor(Math.random() * 40) + 20;
    const heal = Math.floor(Math.random() * 20) + 20;
    
    if (action === 'attack') {
        battleState.enemyHP = Math.max(0, battleState.enemyHP - damage);
        battleState.playerEnergy = Math.min(100, battleState.playerEnergy + 15);
        showActionFeedback(`⚔️ -${damage} урону!`, 'enemy');
    } else if (action === 'defend') {
        const healAmount = Math.min(heal, battleState.maxPlayerHP - battleState.playerHP);
        battleState.playerHP = Math.min(battleState.maxPlayerHP, battleState.playerHP + healAmount);
        battleState.playerEnergy = Math.min(100, battleState.playerEnergy + 10);
        showActionFeedback(`🛡️ +${healAmount} здоров'я!`, 'player');
    } else if (action === 'special' && battleState.playerEnergy >= 100) {
        const specialDamage = damage * 2;
        battleState.enemyHP = Math.max(0, battleState.enemyHP - specialDamage);
        battleState.playerEnergy = 0;
        showActionFeedback(`✨ -${specialDamage} критичний урон!`, 'enemy');
    }
    
    updateBattleUI();
}

function performEnemyAction() {
    const actions = ['attack', 'attack', 'special', 'defend'];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const damage = Math.floor(Math.random() * 35) + 25;
    const heal = Math.floor(Math.random() * 15) + 15;
    
    if (action === 'attack') {
        battleState.playerHP = Math.max(0, battleState.playerHP - damage);
        battleState.enemyEnergy = Math.min(100, battleState.enemyEnergy + 15);
        showActionFeedback(`👹 -${damage} урону!`, 'player');
    } else if (action === 'defend') {
        const healAmount = Math.min(heal, battleState.maxEnemyHP - battleState.enemyHP);
        battleState.enemyHP = Math.min(battleState.maxEnemyHP, battleState.enemyHP + healAmount);
        battleState.enemyEnergy = Math.min(100, battleState.enemyEnergy + 10);
        showActionFeedback(`👹 +${healAmount} здоров'я!`, 'enemy');
    } else if (action === 'special' && battleState.enemyEnergy >= 100) {
        const specialDamage = damage * 2;
        battleState.playerHP = Math.max(0, battleState.playerHP - specialDamage);
        battleState.enemyEnergy = 0;
        showActionFeedback(`💥 -${specialDamage} критичний урон!`, 'player');
    }
    
    updateBattleUI();
}

function showActionFeedback(message, target) {
    // Create floating damage text
    const battleArena = document.getElementById('battleArena');
    const feedback = document.createElement('div');
    feedback.className = 'absolute z-20 text-lg font-bold pointer-events-none';
    feedback.style.cssText = `
        top: 50%;
        ${target === 'player' ? 'left: 25%' : 'right: 25%'};
        transform: translate(-50%, -50%);
        color: ${message.includes('+') ? '#4ade80' : '#f87171'};
        animation: fadeUpOut 2s ease-out forwards;
    `;
    feedback.textContent = message;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#damageAnimation')) {
        const style = document.createElement('style');
        style.id = 'damageAnimation';
        style.textContent = `
            @keyframes fadeUpOut {
                0% { opacity: 1; transform: translate(-50%, -50%); }
                100% { opacity: 0; transform: translate(-50%, -150%); }
            }
        `;
        document.head.appendChild(style);
    }
    
    battleArena.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2000);
}

function disableBattleButtons(disabled) {
    const buttons = ['attackBtn', 'defendBtn', 'specialBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.disabled = disabled;
            if (disabled) {
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
            } else {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }
        }
    });
    
    // Special button logic
    const specialBtn = document.getElementById('specialBtn');
    if (specialBtn && !disabled) {
        if (battleState.playerEnergy < 100) {
            specialBtn.disabled = true;
            specialBtn.style.opacity = '0.5';
        }
    }
}

function resetBattle() {
    // Reset state
    battleState = {
        isActive: false,
        playerHP: 2500,
        enemyHP: 2400,
        playerEnergy: 0,
        enemyEnergy: 0,
        maxPlayerHP: 2500,
        maxEnemyHP: 2400,
        currentTurn: 'player',
        gameResult: null,
        turnCount: 0
    };
    
    // Update UI
    updateBattleUI();
    
    // Enable buttons
    disableBattleButtons(false);
    
    // Hide game result
    const gameResult = document.getElementById('gameResult');
    if (gameResult) gameResult.classList.add('hidden');
    
    // Show battle controls
    const battleControls = document.getElementById('battleControls');
    if (battleControls) battleControls.style.display = 'block';
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
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
        
        if (battlePlayerTurn) {
            battlePlayerTurn.textContent = battleState.currentTurn === 'player' ? 
                t.battle.player_turn : t.battle.enemy_turn;
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
    
    // Update special button state
    const specialBtn = document.getElementById('specialBtn');
    if (specialBtn) {
        if (battleState.playerEnergy >= 100) {
            specialBtn.style.opacity = '1';
            specialBtn.disabled = false;
        } else {
            specialBtn.style.opacity = '0.5';
            specialBtn.disabled = true;
        }
    }
}

function checkGameEnd() {
    if (battleState.playerHP <= 0) {
        battleState.gameResult = 'lose';
        const t = translations[currentLang] || translations.ua;
        showGameResult('lose');
        return true;
    } else if (battleState.enemyHP <= 0) {
        battleState.gameResult = 'win';
        const t = translations[currentLang] || translations.ua;
        showGameResult('win');
        return true;
    }
    return false;
}

function showGameResult(result) {
    const gameResultEl = document.getElementById('gameResult');
    const resultEmoji = document.getElementById('resultEmoji');
    const resultText = document.getElementById('resultText');
    const battleControls = document.getElementById('battleControls');
    
    if (gameResultEl && resultEmoji && resultText) {
        const t = translations[currentLang] || translations.ua;
        
        resultEmoji.textContent = result === 'win' ? '🏆' : '💀';
        
        const battleYouWin = resultText.querySelector('.battle-you-win');
        if (battleYouWin) {
            battleYouWin.textContent = result === 'win' ? t.battle.you_win : t.battle.you_lose;
        }
        
        gameResultEl.classList.remove('hidden');
    }
    
    // Hide battle controls
    if (battleControls) {
        battleControls.style.display = 'none';
    }
    
    // Disable all buttons
    disableBattleButtons(true);
    
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
window.playerAction = playerAction;
window.resetBattle = resetBattle;

console.log('NFT Battle Arena script loaded');