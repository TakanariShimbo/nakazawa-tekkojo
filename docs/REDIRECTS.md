# 旧URL → 新URL リダイレクト対応表

旧サイト（WordPress）から新サイトへの301リダイレクト設計。
GitHub Pages はサーバ301不可のため、**Cloudflare Redirect Rules**（推奨）か、
移行直後だけ各旧URLに meta refresh のスタブHTMLを置く方法で対応する。

## ページ対応

| 旧URL | 新URL | 備考 |
|---|---|---|
| `/` | `/` | トップ |
| `/中澤鉄工所とは/`（%エンコード） | `/about/` | |
| `/company/` | `/company/` | 同一 |
| `/service/` | `/service/` | 同一 |
| `/facilities/` | `/facilities/` | 同一 |
| `/facilities/machining/` | `/facilities/#machining` | 1ページに集約 |
| `/facilities/nclathe/` | `/facilities/#nclathe` | 1ページに集約 |
| `/facilities/other/` | `/facilities/#other` | 1ページに集約 |
| `/products/` | `/products/` | 同一 |
| `/recruit/` | `/recruit/` | 同一 |
| `/contact/` | `/contact/` | 同一 |
| `/contact/job/` | `/contact/job/` | 同一 |
| `/news/` | `/news/` | note運用。個別記事はnoteへ |
| `/news/<記事スラッグ>/` | note の該当記事 or `/news/` | evergreen記事のみ個別対応 |

## Cloudflare Redirect Rules 例（疑似）
```
when  URI Path equals "/facilities/machining/"
then  Static redirect 301 -> https://nakazawa-tekkojo.jp/facilities/#machining
```

## 注意
- 旧サイトの `/news/` 配下は約130件。多くが「営業カレンダー」「休業日」等の短命情報。
  個別301は evergreen 記事に限定し、それ以外は `/news/` へまとめてリダイレクトでよい。
- 公開後、Google Search Console で旧URLのインデックス状況とリダイレクトを確認すること。
