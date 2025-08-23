#!/bin/bash

# Create complete HTML file with embedded styles and scripts
cat > /app/nft-battle-arena-FINAL.html << 'HTML_START'
<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFT Battle Arena - Play2Earn гра в Telegram</title>
    <meta name="description" content="Отримай свій перший NFT, бійся на арені з суперниками та збирай унікальну колекцію. Це не просто гра – це битва за нагороди, престиж і справжню силу!">
    
    <style>
HTML_START

# Add CSS content
cat /app/styles.css >> /app/nft-battle-arena-FINAL.html

# Continue HTML structure
cat >> /app/nft-battle-arena-FINAL.html << 'HTML_MIDDLE'
    </style>
</head>
<body>
    <div class="App">
        <!-- Navigation -->
        <nav class="glass-nav" id="navigation">
            <div class="container-glass">
                <div class="nav-content">
                    <!-- Logo -->
                    <a href="#" class="nav-logo" onclick="showPage('home')">
                        <div class="nav-logo-icon">🎮</div>
                        <span class="text-headline">NFT Battle Arena</span>
                    </a>

                    <!-- Desktop Menu -->
                    <ul class="nav-menu">
                        <li class="nav-item active" onclick="showPage('home')" data-page="home" data-translate="nav.home">Головна</li>
                        <li class="nav-item" onclick="showPage('game-info')" data-page="game-info" data-translate="nav.game_info">Про гру</li>
                        <li class="nav-item" onclick="window.open('marketplace.html', '_blank')" data-translate="nav.marketplace">Магазин</li>
                        <li class="nav-item" onclick="showPage('battle-demo')" data-page="battle-demo" data-translate="nav.battle_demo">Демо бою</li>
                    </ul>

                    <!-- Right Section -->
                    <div class="nav-right">
                        <!-- Language Switcher -->
                        <div class="language-switcher">
                            <div class="language-trigger" onclick="toggleLanguageDropdown()">
                                🌍 <span id="current-lang">UA</span> ▼
                            </div>
                            <div class="language-dropdown" id="language-dropdown">
                                <div class="language-option" onclick="changeLanguage('ua')">🇺🇦 Українська</div>
                                <div class="language-option" onclick="changeLanguage('en')">🇺🇸 English</div>
                                <div class="language-option" onclick="changeLanguage('pl')">🇵🇱 Polski</div>
                            </div>
                        </div>
                        
                        <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent hidden lg:flex" data-translate="nav.connect_telegram">Підключити Telegram</a>

                        <!-- Mobile menu button -->
                        <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div class="mobile-menu" id="mobile-menu">
                    <div class="glass-card mt-4 p-4 space-y-4">
                        <div class="nav-item" onclick="showPage('home'); toggleMobileMenu()" data-translate="nav.home">Головна</div>
                        <div class="nav-item" onclick="showPage('game-info'); toggleMobileMenu()" data-translate="nav.game_info">Про гру</div>
                        <div class="nav-item" onclick="window.open('marketplace.html', '_blank')" data-translate="nav.marketplace">Магазин</div>
                        <div class="nav-item" onclick="showPage('battle-demo'); toggleMobileMenu()" data-translate="nav.battle_demo">Демо бою</div>
                        
                        <a href="https://t.me/NFTBattleArenaBot" target="_blank" class="glass-button-accent" data-translate="nav.connect_telegram">Підключити Telegram</a>
                    </div>
                </div>
            </div>
        </nav>

        <main>
            <!-- HOME PAGE -->
            <div id="home" class="page active">
                <!-- Content will be loaded by JavaScript -->
            </div>

            <!-- GAME INFO PAGE -->
            <div id="game-info" class="page">
                <!-- Content will be loaded by JavaScript -->
            </div>

            <!-- BATTLE DEMO PAGE -->
            <div id="battle-demo" class="page">
                <!-- Content will be loaded by JavaScript -->
            </div>
        </main>
    </div>

    <script>
HTML_MIDDLE

# Add JavaScript content
cat /app/script.js >> /app/nft-battle-arena-FINAL.html

# Close HTML
cat >> /app/nft-battle-arena-FINAL.html << 'HTML_END'
    </script>
</body>
</html>
HTML_END

echo "✅ Створено повний HTML файл: nft-battle-arena-FINAL.html"
