/**
 * components.js - 共通コンポーネントの管理
 */

// ヘッダーとフッターのHTMLを保持
const componentHTML = {
    header: `
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="header__contact">
                    <span class="header__contact-item">
                        <a href="tel:0258623779">TEL：0258-62-3779</a>
                    </span>
                    <span class="header__contact-item">
                        FAX：0258-63-2437
                    </span>
                </div>
            </div>
        </div>
        
        <div class="header__main">
            <div class="container">
                <div class="header__brand">
                    <a href="index.html" class="header__logo">
                        <img src="assets/images/logo.png" alt="中澤鉄工所">
                    </a>
                    <div class="header__tagline">
                        <h1 class="header__company-name">有限会社 中澤鉄工所</h1>
                        <p class="header__slogan">継続は力 技術は日々磨かれる</p>
                    </div>
                </div>
                
                <button class="header__menu-toggle" aria-label="メニューを開く">
                    <span class="header__menu-toggle-bar"></span>
                    <span class="header__menu-toggle-bar"></span>
                    <span class="header__menu-toggle-bar"></span>
                </button>
            </div>
        </div>
        
        <nav class="header__nav" id="main-nav">
            <div class="container">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <a href="index.html" class="header__nav-link">ホーム</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="company.html" class="header__nav-link">会社概要</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="service.html" class="header__nav-link">事業案内</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="facilities.html" class="header__nav-link">設備紹介</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="products.html" class="header__nav-link">製品紹介</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="recruit.html" class="header__nav-link">採用情報</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="contact.html" class="header__nav-link">お問い合わせ</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="header__nav-link header__nav-link--social" aria-label="Instagram">
                            インスタグラム
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>`,
    
    footer: `
    <footer class="footer">
        <div class="footer__main">
            <div class="container">
                <div class="footer__grid">
                    <div class="footer__company">
                        <h2 class="footer__heading">有限会社 中澤鉄工所</h2>
                        <address class="footer__address">
                            〒954-0082<br>
                            新潟県見附市葛巻2丁目5番5号<br>
                            TEL：<a href="tel:0258623779">0258-62-3779</a><br>
                            FAX：0258-63-2437
                        </address>
                    </div>
                    
                    <div class="footer__nav">
                        <h3 class="footer__nav-heading">サイトマップ</h3>
                        <ul class="footer__nav-list">
                            <li><a href="index.html">ホーム</a></li>
                            <li><a href="company.html">会社概要</a></li>
                            <li><a href="service.html">事業案内</a></li>
                            <li><a href="facilities.html">設備紹介</a></li>
                            <li><a href="products.html">製品紹介</a></li>
                            <li><a href="recruit.html">採用情報</a></li>
                            <li><a href="contact.html">お問い合わせ</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer__nav">
                        <h3 class="footer__nav-heading">関連リンク</h3>
                        <ul class="footer__nav-list">
                            <li>
                                <a href="https://www.mazak.jp/" target="_blank" rel="noopener noreferrer">
                                    マザック
                                </a>
                            </li>
                            <li>
                                <a href="https://www.mitsuke.or.jp/" target="_blank" rel="noopener noreferrer">
                                    見附商工会
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer__nav">
                        <h3 class="footer__nav-heading">Follow Us</h3>
                        <ul class="footer__nav-list">
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">
                                    インスタグラム
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer__bottom">
            <div class="container">
                <p class="footer__copyright">
                    &copy; 2025 有限会社 中澤鉄工所. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>`
};

/**
 * コンポーネントを読み込む
 */
function loadComponents() {
    // ヘッダーを挿入
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = componentHTML.header;
    }
    
    // フッターを挿入
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = componentHTML.footer;
    }
    
    // 現在のページをアクティブに設定
    setActiveNavItem();
    
    // モバイルメニューの初期化
    initMobileMenu();
}

/**
 * 現在のページに対応するナビゲーションアイテムをアクティブに設定
 */
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('header__nav-link--active');
        }
    });
}

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });
        
        // メニューの外をクリックしたら閉じる
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                menuToggle.classList.remove('is-active');
                nav.classList.remove('is-active');
            }
        });
    }
}

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', loadComponents);