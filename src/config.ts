// サイト全体の設定。公開前に TODO を実値へ差し替える。
export const config = {
  // プレビュー公開先。独自ドメインに移すときは 'https://nakazawa-tekkojo.jp' に戻す。
  siteUrl: 'https://takanarishimbo.github.io/nakazawa-tekkojo',

  // Formspree のフォームID（https://formspree.io で各フォーム作成後に差し替え）
  formspree: {
    contact: 'https://formspree.io/f/REPLACE_CONTACT', // お問い合わせ
    job: 'https://formspree.io/f/REPLACE_JOB',          // お仕事依頼
    recruit: 'https://formspree.io/f/REPLACE_RECRUIT',  // 採用応募
  },

  // 外部サービス
  noteUrl: 'https://note.com/', // TODO: 実アカウントURL（お知らせ運用先）
  noteRss: '',                  // TODO: 'https://note.com/<account>/rss'（ビルド時取込用）
  instagramUrl: 'https://www.instagram.com/', // TODO: 実アカウントURL
} as const
