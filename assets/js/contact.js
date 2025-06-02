/**
 * contact.js - お問い合わせページ専用スクリプト
 */

/**
 * フォーム送信処理の初期化
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (!form) return;

    // カスタムバリデーションメッセージの設定
    setCustomValidationMessages();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // エラーメッセージをクリア
        clearErrors();

        // バリデーション
        if (!validateForm()) {
            return;
        }

        // フォームデータを取得
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // ローディング状態に設定
        setLoadingState(true);

        try {
            // ここで実際のAPIエンドポイントにデータを送信
            // デモ用にタイムアウトでシミュレート
            await simulateFormSubmission(data);

            // 成功メッセージを表示
            showSuccessMessage();

            // フォームをリセット
            form.reset();

        } catch (error) {
            // エラーメッセージを表示
            showErrorMessage();
            console.error('Form submission error:', error);

        } finally {
            // ローディング状態を解除
            setLoadingState(false);
        }
    });
}

/**
 * カスタムバリデーションメッセージの設定
 */
function setCustomValidationMessages() {
    const requiredInputs = document.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();

            const errorElement = input.parentElement.querySelector('.form-error');
            if (!errorElement) return;

            if (input.validity.valueMissing) {
                errorElement.textContent = 'このフィールドは必須です。';
            } else if (input.validity.typeMismatch && input.type === 'email') {
                errorElement.textContent = '有効なメールアドレスを入力してください。';
            } else if (input.validity.patternMismatch) {
                errorElement.textContent = '正しい形式で入力してください。';
            }

            input.classList.add('form-control--error');
        });

        // 入力時にエラーをクリア
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                clearError(input);
            }
        });
    });
}

/**
 * フォームバリデーション
 */
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.validity.valid) {
            showError(field);
            isValid = false;
        }
    });

    // プライバシーポリシーのチェック
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (!privacyCheckbox.checked) {
        const errorElement = privacyCheckbox.parentElement.parentElement.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = 'プライバシーポリシーへの同意が必要です。';
        }
        isValid = false;
    }

    return isValid;
}

/**
 * エラー表示
 */
function showError(field) {
    field.classList.add('form-control--error');
    const errorElement = field.parentElement.querySelector('.form-error');

    if (errorElement) {
        if (field.validity.valueMissing) {
            errorElement.textContent = 'このフィールドは必須です。';
        } else if (field.validity.typeMismatch && field.type === 'email') {
            errorElement.textContent = '有効なメールアドレスを入力してください。';
        }
    }
}

/**
 * エラークリア
 */
function clearError(field) {
    field.classList.remove('form-control--error');
    const errorElement = field.parentElement.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

/**
 * すべてのエラーをクリア
 */
function clearErrors() {
    const errorFields = document.querySelectorAll('.form-control--error');
    const errorMessages = document.querySelectorAll('.form-error');

    errorFields.forEach(field => field.classList.remove('form-control--error'));
    errorMessages.forEach(msg => msg.textContent = '');
}

/**
 * ローディング状態の設定
 */
function setLoadingState(isLoading) {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');

    if (isLoading) {
        form.classList.add('contact-form--loading');
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
    } else {
        form.classList.remove('contact-form--loading');
        submitButton.textContent = '送信する';
        submitButton.disabled = false;
    }
}

/**
 * 成功メッセージの表示
 */
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.style.display = 'none';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';

    // ページトップにスクロール
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * エラーメッセージの表示
 */
function showErrorMessage() {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
}

/**
 * フォーム送信のシミュレーション（デモ用）
 */
async function simulateFormSubmission(data) {
    // 実際のAPIエンドポイントに送信する場合は、ここを変更
    console.log('Form data:', data);

    // 2秒待機（送信シミュレーション）
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ランダムで成功/失敗を決定（デモ用）
            const isSuccess = Math.random() > 0.1; // 90%の確率で成功

            if (isSuccess) {
                resolve({ success: true });
            } else {
                reject(new Error('Network error'));
            }
        }, 2000);
    });
}

/**
 * 電話番号フォーマット
 */
function initPhoneFormat() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^\d-]/g, '');

        // ハイフンを除去
        value = value.replace(/-/g, '');

        // フォーマット適用
        if (value.length > 0) {
            const parts = [];

            if (value.length <= 3) {
                parts.push(value);
            } else if (value.length <= 7) {
                parts.push(value.slice(0, 3));
                parts.push(value.slice(3));
            } else {
                parts.push(value.slice(0, 3));
                parts.push(value.slice(3, 7));
                parts.push(value.slice(7, 11));
            }

            value = parts.join('-');
        }

        e.target.value = value;
    });
}

/**
 * プライバシーポリシーへのスムーススクロール
 */
function initPrivacyPolicyScroll() {
    const privacyLink = document.querySelector('a[href="#privacy-policy"]');
    if (!privacyLink) return;

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector('#privacy-policy');
        if (target) {
            const offset = 100; // ヘッダーの高さ分のオフセット
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initPhoneFormat();
    initPrivacyPolicyScroll();
});