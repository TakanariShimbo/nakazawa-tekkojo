/**
 * products.js - 製品紹介ページ専用スクリプト
 */

/**
 * ライトボックス機能の初期化
 */
function initLightbox() {
    const productItems = document.querySelectorAll('.product-item');
    const body = document.body;
    
    // ライトボックスのHTML構造を作成
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox__container">
            <button class="lightbox__close" aria-label="閉じる">&times;</button>
            <button class="lightbox__nav lightbox__nav--prev" aria-label="前の画像">‹</button>
            <button class="lightbox__nav lightbox__nav--next" aria-label="次の画像">›</button>
            <img class="lightbox__image" src="" alt="">
            <div class="lightbox__caption"></div>
        </div>
    `;
    body.appendChild(lightbox);
    
    // 要素の参照を取得
    const lightboxImage = lightbox.querySelector('.lightbox__image');
    const lightboxCaption = lightbox.querySelector('.lightbox__caption');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.lightbox__nav--next');
    
    let currentIndex = 0;
    let allImages = [];
    
    // すべての製品画像を配列に格納
    productItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.product-item__caption');
        
        if (img) {
            allImages.push({
                src: img.dataset.src || img.src,
                alt: img.alt,
                caption: caption ? caption.textContent : ''
            });
            
            // クリックイベントを追加
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        }
    });
    
    /**
     * ライトボックスを開く
     */
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        
        // ライトボックスを表示
        lightbox.style.display = 'flex';
        body.style.overflow = 'hidden';
        
        // アニメーション用にクラスを追加
        setTimeout(() => {
            lightbox.classList.add('is-active');
        }, 10);
        
        // ナビゲーションボタンの表示/非表示
        updateNavButtons();
    }
    
    /**
     * ライトボックスを閉じる
     */
    function closeLightbox() {
        lightbox.classList.remove('is-active');
        body.style.overflow = '';
        
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
    
    /**
     * ライトボックスの内容を更新
     */
    function updateLightboxContent() {
        const imageData = allImages[currentIndex];
        lightboxImage.src = imageData.src;
        lightboxImage.alt = imageData.alt;
        lightboxCaption.textContent = imageData.caption;
    }
    
    /**
     * ナビゲーションボタンの表示/非表示を更新
     */
    function updateNavButtons() {
        prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentIndex < allImages.length - 1 ? 'block' : 'none';
    }
    
    /**
     * 前の画像を表示
     */
    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightboxContent();
            updateNavButtons();
        }
    }
    
    /**
     * 次の画像を表示
     */
    function showNextImage() {
        if (currentIndex < allImages.length - 1) {
            currentIndex++;
            updateLightboxContent();
            updateNavButtons();
        }
    }
    
    // イベントリスナーの設定
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // ライトボックスの背景をクリックしたら閉じる
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // キーボード操作
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('is-active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
    
    // タッチ操作（スワイプ）
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                showPrevImage(); // 右スワイプ
            } else {
                showNextImage(); // 左スワイプ
            }
        }
    }
}

/**
 * 製品画像のホバーエフェクト強化
 */
function enhanceHoverEffects() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const overlay = item.querySelector('.product-item__overlay');
        
        if (overlay) {
            // マウスの位置に応じてオーバーレイの動きを調整
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;
                
                const image = item.querySelector('img');
                if (image) {
                    image.style.transform = `scale(1.1) translate(${deltaX * 5}px, ${deltaY * 5}px)`;
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const image = item.querySelector('img');
                if (image) {
                    image.style.transform = '';
                }
            });
        }
    });
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    enhanceHoverEffects();
});