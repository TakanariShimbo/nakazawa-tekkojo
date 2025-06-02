/**
 * facilities.js - 設備紹介ページ専用スクリプト
 */

/**
 * 設備フィルター機能の初期化
 */
function initFacilityFilter() {
    const filterButtons = document.querySelectorAll('.facility-filter__btn');
    const facilityCategories = document.querySelectorAll('.facility-category');
    const facilityCards = document.querySelectorAll('.facility-card');

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');

            // ボタンのアクティブ状態を更新
            filterButtons.forEach(btn => {
                btn.classList.remove('facility-filter__btn--active');
            });
            button.classList.add('facility-filter__btn--active');

            // カテゴリーの表示/非表示を切り替え
            if (selectedCategory === 'all') {
                // すべて表示
                facilityCategories.forEach(category => {
                    category.classList.add('is-visible');
                });
                facilityCards.forEach(card => {
                    card.classList.remove('is-hidden');
                });
            } else {
                // 選択されたカテゴリーのみ表示
                facilityCategories.forEach(category => {
                    const categoryType = category.getAttribute('data-category');
                    if (categoryType === selectedCategory) {
                        category.classList.add('is-visible');
                    } else {
                        category.classList.remove('is-visible');
                    }
                });

                // カードの表示/非表示
                facilityCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === selectedCategory) {
                        card.classList.remove('is-hidden');
                    } else {
                        card.classList.add('is-hidden');
                    }
                });
            }

            // スムーズスクロール
            const firstVisibleCategory = document.querySelector('.facility-category.is-visible');
            if (firstVisibleCategory && selectedCategory !== 'all') {
                const offset = 100; // ヘッダーの高さ分のオフセット
                const targetPosition = firstVisibleCategory.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初期状態：すべて表示
    facilityCategories.forEach(category => {
        category.classList.add('is-visible');
    });
}

/**
 * 設備画像のモーダル表示
 */
function initFacilityModal() {
    const facilityImages = document.querySelectorAll('.facility-card__image img');

    facilityImages.forEach(img => {
        img.style.cursor = 'pointer';

        img.addEventListener('click', (e) => {
            // モーダルを作成
            const modal = document.createElement('div');
            modal.className = 'facility-modal';
            modal.innerHTML = `
                <div class="facility-modal__overlay"></div>
                <div class="facility-modal__content">
                    <img src="${e.target.src}" alt="${e.target.alt}">
                    <button class="facility-modal__close" aria-label="閉じる">×</button>
                </div>
            `;

            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            // アニメーション用のクラスを追加
            setTimeout(() => {
                modal.classList.add('is-active');
            }, 10);

            // 閉じるボタンのイベント
            const closeBtn = modal.querySelector('.facility-modal__close');
            const overlay = modal.querySelector('.facility-modal__overlay');

            const closeModal = () => {
                modal.classList.remove('is-active');
                document.body.style.overflow = '';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            };

            closeBtn.addEventListener('click', closeModal);
            overlay.addEventListener('click', closeModal);

            // ESCキーで閉じる
            const handleEsc = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', handleEsc);
                }
            };
            document.addEventListener('keydown', handleEsc);
        });
    });
}

/**
 * モーダル用のスタイルを追加
 */
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .facility-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .facility-modal.is-active {
            opacity: 1;
        }
        
        .facility-modal__overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .facility-modal__content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .facility-modal.is-active .facility-modal__content {
            transform: scale(1);
        }
        
        .facility-modal__content img {
            display: block;
            max-width: 100%;
            max-height: 90vh;
            width: auto;
            height: auto;
        }
        
        .facility-modal__close {
            position: absolute;
            top: -40px;
            right: 0;
            width: 40px;
            height: 40px;
            background-color: var(--color-white);
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        .facility-modal__close:hover {
            transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
            .facility-modal__close {
                top: 10px;
                right: 10px;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    initFacilityFilter();
    initFacilityModal();
    addModalStyles();
});