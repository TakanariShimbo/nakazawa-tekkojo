/**
 * main.js - メインスクリプト
 */

/**
 * スムーズスクロール
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * フェードインアニメーション
 */
function initFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * 画像の遅延読み込み
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // フォールバック
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
}

/**
 * パララックススクロール効果
 */
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.philosophy__image');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

/**
 * サービスタブ機能
 */
function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab');
    const contents = document.querySelectorAll('.service-tab-content');

    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // すべてのタブとコンテンツからactiveクラスを削除
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // クリックされたタブとそのコンテンツにactiveクラスを追加
            tab.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/**
 * 数値カウントアップアニメーション
 */
function initCountUpAnimation() {
    const statsNumbers = document.querySelectorAll('.stats-card__number, .stat-item__number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalNumber = element.textContent;

                // 数値以外の文字（+、/など）を分離
                const numberMatch = finalNumber.match(/\d+/);
                if (numberMatch) {
                    const targetNumber = parseInt(numberMatch[0]);
                    const prefix = finalNumber.split(numberMatch[0])[0];
                    const suffix = finalNumber.split(numberMatch[0])[1] || '';

                    let currentNumber = 0;
                    const increment = targetNumber / 30;
                    const timer = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= targetNumber) {
                            element.textContent = prefix + targetNumber + suffix;
                            clearInterval(timer);
                        } else {
                            element.textContent = prefix + Math.floor(currentNumber) + suffix;
                        }
                    }, 50);
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    statsNumbers.forEach(number => {
        observer.observe(number);
    });
}

/**
 * フォームバリデーション
 */
function initFormValidation() {
    const forms = document.querySelectorAll('.form-validate');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                const errorElement = field.parentElement.querySelector('.form-error');

                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('form-control--error');
                    if (errorElement) {
                        errorElement.textContent = 'このフィールドは必須です。';
                    }
                } else {
                    field.classList.remove('form-control--error');
                    if (errorElement) {
                        errorElement.textContent = '';
                    }
                }

                // メールアドレスの検証
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        field.classList.add('form-control--error');
                        if (errorElement) {
                            errorElement.textContent = '有効なメールアドレスを入力してください。';
                        }
                    }
                }
            });

            if (isValid) {
                // フォーム送信処理
                console.log('フォーム送信');
                // 実際の実装では、ここでAjaxリクエストなどを行う
            }
        });

        // リアルタイムバリデーション
        form.querySelectorAll('[required]').forEach(field => {
            field.addEventListener('blur', () => {
                const errorElement = field.parentElement.querySelector('.form-error');

                if (!field.value.trim()) {
                    field.classList.add('form-control--error');
                    if (errorElement) {
                        errorElement.textContent = 'このフィールドは必須です。';
                    }
                } else {
                    field.classList.remove('form-control--error');
                    if (errorElement) {
                        errorElement.textContent = '';
                    }
                }
            });
        });
    });
}

/**
 * トップへ戻るボタン
 */
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'ページトップへ戻る');
    document.body.appendChild(backToTopBtn);

    // スタイルを追加
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: var(--color-primary);
            color: var(--color-white);
            border: none;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: opacity var(--transition-normal), visibility var(--transition-normal);
            z-index: 999;
        }
        
        .back-to-top.is-visible {
            opacity: 0.8;
            visibility: visible;
        }
        
        .back-to-top:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // スクロールイベント
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    });

    // クリックイベント
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initFadeInAnimation();
    initLazyLoading();
    initParallaxEffect();
    initServiceTabs();
    initCountUpAnimation();
    initFormValidation();
    initBackToTop();
});