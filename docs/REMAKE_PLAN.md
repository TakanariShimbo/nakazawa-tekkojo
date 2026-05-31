# 中澤鉄工所サイト リメイク方針書

> 旧サイト: https://nakazawa-tekkojo.jp/ （WordPress + All in One SEO）
> 新サイト: Vite × TypeScript × React × CSS Modules（SSGプリレンダリング）
> 作成日: 2026-05-31

---

## 1. 目的

WordPressベースの現サイトを、モダンなフロントエンド技術スタックで再構築する。
単純な移植ではなく、**ブランド資産（オレンジ #FF6400・機械/削りの質感写真）を活かしつつデザインを刷新**し、
保守の手間を減らす（ブログ→note、フォーム→外部サービス）構成にする。

---

## 2. 現状分析

### 事業・会社
- 有限会社 中澤鉄工所 / 新潟県見附市葛巻2-5-5 / 見附市・長岡市エリア
- 創業 昭和42年(1967) / 資本金900万円 / 従業員17名 / TEL 0258-62-3779
- 金属切削加工（NC旋盤・マシニングセンタ中心。一点物〜量産、鋳物・異形物、治具立て対応）
- 企業理念「継続は力 技術は日々磨かれる」/ 行動指針「凡事徹底・自己成長・相利共生」
- 主要取引先: ニクニアサヒ / オーエム製作所 / 太陽工機

### 技術スタック（現状）
- WordPress + All in One SEO 4.8.7
- 本文フォント = 游明朝（serif）で全面構成
- ブランドカラー = オレンジ `#FF6400` + ネイビー + スチールグレー（写真）

### サイト構成（移植対象）
| カテゴリ | ページ | 旧URL |
|---|---|---|
| 会社 | 中澤鉄工所とは | `/中澤鉄工所とは/` |
| 会社 | 会社概要（沿革含む） | `/company/` |
| 事業 | 事業案内 | `/service/` |
| 事業 | 設備紹介 | `/facilities/` |
| 事業 | └ マシニングセンタ | `/facilities/machining/` |
| 事業 | └ NC旋盤 | `/facilities/nclathe/` |
| 事業 | └ 汎用旋盤 / フライス・ボール盤 | `/facilities/other/` |
| 事業 | 製品紹介（画像ギャラリー） | `/products/` |
| 採用 | 採用情報 + 応募フォーム | `/recruit/` |
| 接点 | お問い合わせ | `/contact/` |
| 接点 | お仕事依頼フォーム | `/contact/job/` |
| 発信 | お知らせ（ブログ 約130件 / 14ページ） | `/news/` |

### デザイン上の課題（ブラッシュアップ余地）
1. 50/50の色面＋写真ブロックの羅列で 2010年代WPテーマ感、余白リズムが単調
2. ヒーローの文字が小さく低コントラスト、「削り」の迫力が活きていない
3. 游明朝1本で見出し/本文の階層が弱い
4. お知らせの大半が「営業カレンダー」「休業日」など短命情報で、資産価値の高い記事が埋もれる

> 参照スクショ: `docs/current-site-reference/`

---

## 3. デザイン方針

**コンセプト: 「和モダン × インダストリアル」** — 職人の品格と最新設備の精密感を両立。

- **配色**: アクセント = オレンジ `#FF6400`（面積を絞る）/ ベース = スチールグレー〜オフホワイト + ディープネイビー
- **タイポグラフィ（役割で3層に分離）**:
  - 基幹 = **IBM Plex Sans JP**（本文・見出し・UI・ロゴを一本化＝精密で工業的）
  - 情緒 = **Shippori Mincho**（明朝は理念・象徴句・背景の「削」など要所の差し色のみ）
  - 技術 = **IBM Plex Mono**（英字ラベル・01〜04の番号・電話番号・日付＝計器の精密感）
- **レイアウト**: 硬い50/50グリッドをやめ、非対称・ベント風グリッド＋大胆な余白。ヒーローは全画面級＋大型コピー「Kezuri 削り」＋控えめなスクロール演出
- **写真主役**: 削り粉・刃・金属面のディテール写真を大きく使い質感で語る
- **構造化**: 製品/設備をカード化しスペック・対応材種を整理。`LocalBusiness` 構造化データで見附市・長岡市のローカルSEO強化
- **品質**: モバイルファースト / アクセシビリティ（コントラスト・キーボード操作）/ Core Web Vitals 配慮（画像最適化・遅延読込）

---

## 4. 技術スタック（確定）

| 項目 | 採用 | 備考 |
|---|---|---|
| ビルド | **Vite + React + TypeScript** | 指定 |
| CSS | **CSS Modules + デザイントークン（CSS変数）** | ランタイム0・スコープ安全・bespokeデザインの自由度が高い |
| 描画 | **SSG / プリレンダリング（vite-react-ssg）** | 各ルートを静的HTML化。SEO/OGPに強い |
| ルーティング | react-router（vite-react-ssg と統合） | 各ページが個別HTML出力 |
| ホスティング | **GitHub Pages**（+ 推奨: Cloudflare 前段） | 静的・無料。SSGと相性良 |
| フォーム | **Formspree**（代替: Tally） | 自前UIのまま送信。静的ホスティングでも動作 |
| ブログ | **note 運用 + RSS取込** | 最新記事を新サイト「お知らせ」に自動表示 |

### CSS設計（デザイントークン例）
```
:root {
  --color-accent: #ff6400;     /* ブランドオレンジ */
  --color-ink:    #1a1d24;     /* ディープネイビー/墨 */
  --color-steel:  #6b7280;     /* スチールグレー */
  --color-base:   #f7f7f5;     /* オフホワイト */
  --font-base:    "IBM Plex Sans JP", sans-serif; /* 基幹：本文・見出し */
  --font-accent:  "Shippori Mincho", serif;       /* 情緒：明朝の差し色 */
  --font-mono:    "IBM Plex Mono", monospace;      /* 技術：数字・英字 */
  --space-...:    8pxベースのスケール;
}
```

---

## 5. 移行方針

### ブログ → note + RSS
- 投稿は note で運用（保守ゼロ・拡散力）
- note の RSS（`https://note.com/<account>/rss`）をビルド時 or クライアントで取得し、新サイト「お知らせ」に最新数件を表示
- 既存約130件は短命情報が多い → **evergreenな記事のみ手動移植**、残りはアーカイブ扱い
- 注意: RSSのCORS。ビルド時取得（SSG時にfetch）が安全。クライアント取得なら軽量プロキシ要

### フォーム → Formspree
- お問い合わせ / お仕事依頼 / 採用応募 の3フォームを自前UIで実装し、Formspreeのエンドポイントに送信
- 採用応募フォーム項目: 氏名 / メール / 電話 / 生年月日 / 自己PR
- お問い合わせ項目: 氏名 / メール / 題名 / 本文
- スパム対策（honeypot / reCAPTCHA）、送信完了画面、自動返信を設定

### GitHub Pages 固有の注意
- **base パス**: 独自ドメイン `nakazawa-tekkojo.jp` 継続なら `base: '/'`（CNAME設定）。`user.github.io/repo` 形式なら `base: '/repo/'`
- **301リダイレクト不可**: GitHub Pages はサーバ301を持てない。旧WP日本語URLからの順位引き継ぎを厳密にやるなら、ドメインを **Cloudflare 経由**にして Redirect Rules で301を張る構成を推奨
- デプロイ: GitHub Actions で Vite ビルド → Pages 公開
- ディープリンク: SSGで各ルートが個別HTMLになるためSPA特有の404問題は発生しない

---

## 6. 実装フェーズ

1. **設計**: サイトマップ確定 / デザイントークン / 主要ページのワイヤーフレーム / コンテンツ棚卸し（旧サイトから文言・写真抽出）
2. **基盤構築**: Vite+TS+React 雛形 / vite-react-ssg / ルーティング / デザインシステム（トークン・共通UI）
3. **ページ実装**: トップ → 会社/事業/設備/製品 → 採用 → お問い合わせ
4. **移行連携**: note RSS取込 / Formspreeフォーム / OGP・構造化データ
5. **公開**: GitHub Pages（+Cloudflare）/ 旧URL→新URLリダイレクト表 / 計測（GA4等）/ 動作確認

---

## 7. 確認事項（着手前に詰めたい点）

- [ ] 独自ドメイン `nakazawa-tekkojo.jp` を新サイトでも継続するか（→ base/CNAME/リダイレクト構成に影響）
- [ ] note アカウントの有無（既存 or 新規作成）
- [ ] Formspree の無料枠（月50送信）で足りるか、有料 or 代替（Tally / Google Apps Script）
- [ ] 写真素材: 旧サイト画像の流用可否 / 新規撮影の予定
- [ ] 旧サイトの全文言・全画像の入手方法（WP管理画面アクセス or スクレイピング）

---

## 8. 実装状況（2026-05-31 時点）

全ページ実装・SSGビルド・SEO検証まで完了。

- ✅ 基盤: Vite + TS + React + vite-react-ssg + react-router、CSS Modules + トークン
- ✅ 全10ページ: トップ / about / company / service / facilities / products / recruit / contact / contact/job / news（+ 404）
- ✅ デザインシステム: ネイビー×アイボリー×オレンジ、IBM Plex Sans JP / Shippori Mincho / IBM Plex Mono
- ✅ フォーム: Formspree連携の再利用コンポーネント（honeypot・送信完了画面付き）
- ✅ SEO: 各ページ個別 title/description/OGP、トップに LocalBusiness 構造化データ
- ✅ デプロイ: GitHub Actions（`.github/workflows/deploy.yml`）、`.nojekyll`、404フォールバック
- ⏳ 公開前差し替え: Formspree ID / note URL / 独自ドメイン・base / 写真（`src/config.ts`・`vite.config.ts`）

手順は `docs/DEPLOY.md`、旧URL対応は `docs/REDIRECTS.md`。
