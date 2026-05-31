import { company, strengths, facilityGroups, network, news } from '../data/site'
import { config } from '../config'
import { withBase } from '../base'
import s from './Sections.module.css'

/* ---------------- 中澤鉄工所とは（理念） ---------------- */
export function Philosophy() {
  return (
    <section className={s.philosophy} id="about">
      <div className="container-wide">
        <div className={`${s.philGrid} reveal`}>
          <div className={s.philText}>
            <p className="eyebrow">中澤鉄工所とは</p>
            <h2 className={s.philTitle}>
              継続は力、<br />技術は日々磨かれる。
            </h2>
            <p className={s.philBody}>
              昭和42年の創業以来、私たちは金属切削ひとすじに歩んできました。
              {company.mission}——その思いのもと、最新鋭の設備と現場で磨かれた匠の技を掛け合わせ、
              一点物の難加工から量産まで、お客様の「つくりたい」に応えます。
            </p>
            <ul className={s.values}>
              {company.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            <a className={s.textLink} href={withBase('/about/')}>中澤鉄工所について詳しく<span aria-hidden>→</span></a>
          </div>
          <figure className={s.philFigure}>
            <img src={withBase('/photos/factory.jpg')} alt="中澤鉄工所の工場外観" loading="lazy" />
            <figcaption>新潟県見附市 本社工場</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

/* ---------------- 事業案内（強み） ---------------- */
export function Strengths() {
  return (
    <section className={s.strengths} id="strengths">
      <div className="container-wide">
        <header className={`${s.head} reveal`}>
          <p className="eyebrow">Our Strengths — 事業案内</p>
          <h2 className={s.h2}>削りの現場を支える、4つの強み。</h2>
        </header>
        <div className={s.strengthGrid}>
          {strengths.map((it) => (
            <article key={it.no} className={`${s.card} reveal`}>
              <span className={s.cardNo}>{it.no}</span>
              <h3 className={s.cardTitle}>{it.title}</h3>
              <p className={s.cardBody}>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 設備紹介 ---------------- */
export function Facilities() {
  return (
    <section className={s.facilities} id="facilities">
      <div className="container-wide">
        <header className={`${s.headDark} reveal`}>
          <div>
            <p className="eyebrow">Facilities — 設備紹介</p>
            <h2 className={s.h2}>多台数・複合機による生産体制。</h2>
          </div>
          <a className={s.ghostLink} href={withBase('/facilities/')}>設備一覧へ<span aria-hidden>→</span></a>
        </header>
        <div className={s.facGrid}>
          {facilityGroups.map((f) => (
            <a key={f.name} href={withBase(`/facilities/#${f.key}`)} className={`${s.facCard} reveal`}>
              <div className={s.facPhoto}>
                <img src={withBase(f.photo)} alt={f.name} loading="lazy" />
              </div>
              <div className={s.facMeta}>
                <h3>{f.name}</h3>
                {f.count && <span className={s.facCount}>{f.count}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 協力ネットワーク（二次加工） ---------------- */
export function Network() {
  return (
    <section className={s.network}>
      <div className="container">
        <div className={`${s.netHead} reveal`}>
          <p className="eyebrow">Network</p>
          <h2 className={s.h2}>一次加工から仕上げまで、<br className={s.brSp} />幅広いネットワークで。</h2>
          <p className={s.netLead}>
            協力工場との連携により、切削以外の工程もワンストップで手配。材種・仕上げを問わずご相談ください。
          </p>
        </div>
        <ul className={s.netList}>
          {network.map((n) => (
            <li key={n.label} className="reveal">
              <strong>{n.label}</strong>
              <span>{n.items}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- 製品紹介 ＋ 採用（並列バンド） ---------------- */
export function ProductsRecruit() {
  return (
    <section className={s.band}>
      <a className={`${s.bandCard} ${s.bandProducts} reveal`} href={withBase('/products/')}>
        <img src={withBase('/photos/product.jpg')} alt="加工製品例" loading="lazy" />
        <div className={s.bandScrim} />
        <div className={s.bandInner}>
          <p className="eyebrow">Products</p>
          <h3>製品紹介</h3>
          <p>内径ボーリングバーをはじめ、これまでの加工事例をご覧いただけます。</p>
          <span className={s.bandMore}>事例を見る<span aria-hidden>→</span></span>
        </div>
      </a>
      <a className={`${s.bandCard} ${s.bandRecruit} reveal`} href={withBase('/recruit/')}>
        <div className={s.bandInner}>
          <p className="eyebrow">Recruit</p>
          <h3>採用情報</h3>
          <p>「出来ないというより、先にやってみよう」。現場を熟知した技術者を目指す仲間を募集しています。</p>
          <span className={s.bandMore}>募集要項を見る<span aria-hidden>→</span></span>
        </div>
      </a>
    </section>
  )
}

/* ---------------- お知らせ（note 連携想定） ---------------- */
export function News() {
  return (
    <section className={s.news} id="news">
      <div className="container">
        <header className={`${s.newsHead} reveal`}>
          <div>
            <p className="eyebrow">News — お知らせ</p>
            <h2 className={s.h2}>最新の活動</h2>
          </div>
          <a className={s.ghostLinkDark} href={config.noteUrl} target="_blank" rel="noreferrer">
            note で記事一覧<span aria-hidden>↗</span>
          </a>
        </header>
        <ul className={s.newsList}>
          {news.map((n) => (
            <li key={n.title} className="reveal">
              <a href={withBase('/news/')}>
                <time>{n.date}</time>
                <span className={s.newsCat} data-cat={n.cat}>{n.cat}</span>
                <span className={s.newsTitle}>{n.title}</span>
                <span className={s.newsArrow} aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- お問い合わせ CTA ---------------- */
export function ContactCTA() {
  return (
    <section className={s.cta}>
      <div className={`container ${s.ctaInner} reveal`}>
        <p className="eyebrow">Contact</p>
        <h2 className={s.ctaTitle}>その加工、まずはご相談ください。</h2>
        <p className={s.ctaLead}>
          図面一枚から、材種・数量を問わずお見積りいたします。お電話・フォームどちらでもお気軽に。
        </p>
        <div className={s.ctaActions}>
          <a className={s.ctaPrimary} href={withBase('/contact/job/')}>お仕事のご依頼</a>
          <a className={s.ctaTel} href={`tel:${company.tel}`}>
            <small>お電話でのご相談</small>
            <strong>{company.tel}</strong>
            <small>受付 8:00–17:00</small>
          </a>
        </div>
      </div>
    </section>
  )
}
