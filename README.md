# 中澤鉄工所 ウェブサイト リメイク版

## プロジェクト概要
中澤鉄工所のウェブサイトを静的HTML/CSS/JSで再構築したプロジェクト。
単一責務原則とDRY原則に基づいて、メンテナンス性と拡張性を重視した設計。

## ディレクトリ構造
```
remake/
├── index.html          # トップページ
├── company.html        # 会社概要
├── service.html        # 事業案内
├── facilities.html     # 設備紹介
├── products.html       # 製品紹介
├── contact.html        # お問い合わせ
├── recruit.html        # 採用情報
├── assets/            # 静的アセット
│   ├── css/          # スタイルシート
│   │   ├── base.css      # 基本スタイル（リセット、共通要素）
│   │   ├── layout.css    # レイアウト関連
│   │   ├── components.css # 再利用可能なコンポーネント
│   │   └── pages/        # ページ固有のスタイル
│   ├── js/           # JavaScript
│   │   ├── main.js       # メインスクリプト
│   │   └── components.js # コンポーネント用スクリプト
│   ├── images/       # 画像ファイル
│   └── videos/       # 動画ファイル
└── components/       # 共通HTMLコンポーネント（開発用）

## 設計方針

### 1. 単一責務原則（SRP）
- 各CSSファイルは特定の責務のみを担当
- JavaScriptモジュールは機能ごとに分離
- HTMLコンポーネントは独立して動作

### 2. DRY原則（Don't Repeat Yourself）
- ヘッダー/フッターは各ページで共通化（JavaScriptで動的挿入）
- CSSの共通スタイルは`base.css`と`components.css`に集約
- 繰り返し使用される要素はコンポーネント化

### 3. シンプルな実装
- 外部ライブラリの依存を最小限に
- バニラJavaScriptを優先使用
- CSSはモダンな機能を活用しつつ、互換性を確保

### 4. プロフェッショナルなデザイン
- クリーンでモダンなUI
- 一貫性のあるビジュアル言語
- アクセシビリティへの配慮
- レスポンシブデザイン

## 技術スタック
- HTML5
- CSS3（CSS Grid, Flexbox）
- Vanilla JavaScript（ES6+）
- 画像最適化（遅延読み込み）
- 動画（HTML5 video要素）

## 開発ガイドライン

### CSS命名規則
- BEM（Block Element Modifier）を採用
- 例：`.header__nav-item--active`

### JavaScript
- モジュラーな設計
- イベントデリゲーションの活用
- パフォーマンスを意識した実装

### 画像・動画
- 適切な圧縮とフォーマット選択
- 遅延読み込みの実装
- レスポンシブ画像の使用

## ビルド・デプロイ
静的サイトのため、特別なビルドプロセスは不要。
Webサーバーにファイルを配置するだけで動作。

## ブラウザサポート
- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）