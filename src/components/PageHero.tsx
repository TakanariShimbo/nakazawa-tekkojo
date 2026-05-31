import s from './PageHero.module.css'
import { withBase } from '../base'

type Props = {
  en: string
  title: string
  lead?: string
  current: string
  photo?: string
}

export function PageHero({ en, title, lead, current, photo }: Props) {
  return (
    <section className={s.hero} style={photo ? ({ '--ph': `url(${withBase(photo)})` } as React.CSSProperties) : undefined}>
      <div className={`container-wide ${s.inner}`}>
        <nav className={s.crumb} aria-label="パンくず">
          <a href={withBase('/')}>ホーム</a>
          <span aria-hidden>/</span>
          <span>{current}</span>
        </nav>
        <p className={s.en}>{en}</p>
        <h1 className={s.title}>{title}</h1>
        {lead && <p className={s.lead}>{lead}</p>}
      </div>
    </section>
  )
}
