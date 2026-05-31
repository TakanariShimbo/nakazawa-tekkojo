import { company } from '../data/site'
import { withBase } from '../base'
import s from './Hero.module.css'

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.bg}>
        <img src={withBase('/photos/lathe-hero.jpg')} alt="" aria-hidden />
        <div className={s.scrim} />
      </div>

      <span className={`${s.vlabel} u-vlabel`} aria-hidden>Metal Cutting Engineering</span>

      <div className={s.inner}>
        <p className={`${s.eyebrow} fx-load fx-d1`}>NAKAZAWA TEKKOJO — SINCE 1967</p>
        <h1 className={s.title}>
          <span className={`${s.jp} fx-clip fx-d2`}>削<span className={s.accent}>る</span>、を究める。</span>
        </h1>
        <p className={`${s.lead} fx-load fx-d4`}>
          最新鋭の設備と、丁寧な匠の技。<br />
          一点物から量産まで、金属切削のあらゆる要望に応えます。
        </p>
        <div className={`${s.actions} fx-load fx-d5`}>
          <a className={s.primary} href={withBase('/contact/job/')}>お仕事のご依頼</a>
          <a className={s.ghost} href={withBase('/service/')}>事業案内を見る<span aria-hidden>→</span></a>
        </div>
      </div>

      <div className={`${s.meta} fx-load fx-d6`}>
        <span>{company.philosophy}</span>
        <a href="#strengths" className={s.scroll} aria-label="下へスクロール">
          <span /> SCROLL
        </a>
      </div>
    </section>
  )
}
