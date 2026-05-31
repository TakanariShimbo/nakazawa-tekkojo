# 中澤鉄工所 Webサイト（リニューアル）

有限会社 中澤鉄工所（新潟県見附市・金属切削加工）コーポレートサイトの、
WordPress からのモダンリニューアル版。

## 🔒 関係者限定プレビュー（公開中）
- URL: https://takanarishimbo.github.io/nakazawa-tekkojo/
- パスワード: `nakazawa2026`（素人向けのソフトな目隠し。詳細: [`docs/PREVIEW_GATE.md`](docs/PREVIEW_GATE.md)）
- `main` への push で GitHub Actions が自動ビルド・デプロイ
- 旧バージョン（手書きHTML）は `legacy-html` ブランチに保全

## 技術スタック
- **Vite + React + TypeScript**
- **CSS Modules + デザイントークン**（`src/styles/tokens.css`）
- **vite-react-ssg**（各ページを静的HTML化＝SEO/OGP対応）
- ホスティング: **GitHub Pages**（GitHub Actions 自動デプロイ）
- フォーム: **Formspree** / ブログ: **note + RSS**

## デザイン
和モダン × インダストリアル。ネイビー × アイボリー × オレンジ(指し色 `#ff6400`)。
タイポは IBM Plex Sans JP（基幹）/ Shippori Mincho（情緒の差し色）/ IBM Plex Mono（数字・英字）。
→ 詳細は [`docs/REMAKE_PLAN.md`](docs/REMAKE_PLAN.md)

## 開発
```bash
npm install
npm run dev        # http://localhost:5173/
npm run build      # 本番ビルド -> dist/
npm run typecheck  # 型チェック
```

## ページ構成
`/`（トップ）`/about` `/company` `/service` `/facilities` `/products`
`/recruit` `/contact` `/contact/job` `/news`

## 公開前にやること
- [ ] `src/config.ts` の Formspree ID・note URL・Instagram URL を設定
- [ ] `vite.config.ts` の `base` と独自ドメイン（`public/CNAME`）を確定
- [ ] 写真の差し替え（現状は旧サイト画像を `public/photos/` に取込）
- [ ] 旧URLリダイレクト（[`docs/REDIRECTS.md`](docs/REDIRECTS.md)）

## ドキュメント
- [`docs/REMAKE_PLAN.md`](docs/REMAKE_PLAN.md) … リメイク方針
- [`docs/DEPLOY.md`](docs/DEPLOY.md) … デプロイ手順
- [`docs/REDIRECTS.md`](docs/REDIRECTS.md) … リダイレクト対応表
