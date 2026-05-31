import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { config } from '../config'
import { news } from '../data/site'
import s from './news.module.css'

export function News() {
  return (
    <>
      <Seo
        title="お知らせ"
        description="中澤鉄工所からのお知らせ・ブログ。営業日・技能検定の取組み・メディア掲載など、最新の活動をお届けします。"
        path="/news/"
      />
      <PageHero en="News" title="お知らせ" current="お知らせ" />

      <section className="section">
        <div className="container-wide">
          {/* note 運用バナー */}
          <a className={`${s.noteBanner} reveal`} href={config.noteUrl} target="_blank" rel="noreferrer">
            <div>
              <span className={s.noteTag}>note</span>
              <strong>ブログ・お知らせは note で発信しています</strong>
              <p>日々の取り組みや現場の様子を更新中。フォローで最新情報をお受け取りいただけます。</p>
            </div>
            <span className={s.noteArrow} aria-hidden>↗</span>
          </a>

          <div className={`sectionHead reveal ${s.head}`}>
            <p className="eyebrow">Latest — 最新の更新</p>
            <h2>最新のお知らせ</h2>
          </div>

          <ul className={s.list}>
            {news.map((n) => (
              <li key={n.title} className="reveal">
                <a href={config.noteUrl} target="_blank" rel="noreferrer">
                  <time>{n.date}</time>
                  <span className={s.cat} data-cat={n.cat}>{n.cat}</span>
                  <span className={s.title}>{n.title}</span>
                  <span className={s.arrow} aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>

          <p className={s.foot}>
            ※ 公開前に <code>src/config.ts</code> の <code>noteUrl</code> / <code>noteRss</code> を設定すると、
            この一覧を note の最新記事から自動更新できます。
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
