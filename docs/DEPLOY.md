# デプロイ手順（GitHub Pages）

## 1. リポジトリ設定
1. GitHub にリポジトリを作成し push
2. Settings → Pages → **Build and deployment → Source: GitHub Actions**
3. `main` への push で `.github/workflows/deploy.yml` が走り、`npm run build` の出力（`dist/`）が公開される

## 2. base パスの設定（重要）
`vite.config.ts` の `base` を公開URLに合わせる。

| 公開形態 | base | 補足 |
|---|---|---|
| 独自ドメイン `nakazawa-tekkojo.jp` | `'/'` | `public/CNAME` に `nakazawa-tekkojo.jp` を記載 |
| `<user>.github.io`（ユーザーサイト） | `'/'` | |
| `<user>.github.io/<repo>`（プロジェクトサイト） | `'/<repo>/'` | サブパス公開時はこちら |

> 独自ドメインを使う場合は `public/CNAME`（1行: `nakazawa-tekkojo.jp`）を作成。DNS は GitHub Pages の Apex/CNAME 設定に従う。

## 3. 公開前に差し替えるもの（`src/config.ts`）
- `formspree.contact / job / recruit` … Formspree でフォーム作成後の各エンドポイント
- `noteUrl` / `noteRss` … note アカウントURL（お知らせ運用先）
- `instagramUrl` … Instagram アカウントURL

## 4. SSG / ルーティングの要点
- `npm run build` で各ルートが個別の静的HTML（`/about/index.html` 等）に出力される（`dirStyle: 'nested'`）
- ディープリンク・直アクセスは各HTMLが存在するためそのまま動作（SPA特有の404問題なし）
- 未知URL用に `dist/404.html`（トップのコピー）を生成済み。GitHub Pages が自動で配信する
- `public/.nojekyll` で Jekyll 処理を無効化済み

## 5. 旧サイトからのリダイレクト（SEO継承）
GitHub Pages は**サーバ301を持てない**。順位を厳密に引き継ぐ場合は、
ドメインを **Cloudflare 経由**にして Redirect Rules で301を設定するのが推奨。
対応表は `docs/REDIRECTS.md` を参照。

## 6. ローカル確認
```bash
npm install
npm run dev       # 開発（http://localhost:5173/）
npm run build     # 本番ビルド（dist/）
npm run typecheck # 型チェック
```
