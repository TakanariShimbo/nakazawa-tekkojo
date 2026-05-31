import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { facilityGroups } from '../data/site'
import { withBase } from '../base'
import s from './pages.module.css'

export function Facilities() {
  return (
    <>
      <Seo
        title="設備紹介"
        description="NC旋盤（複合機含む）8台、マシニングセンタ5台、汎用旋盤・フライス・ボール盤。MAZAK VCN-600など、多台数・複合機による生産体制をご紹介します。"
        path="/facilities/"
        ogImage="/photos/lathe-hero.jpg"
      />
      <PageHero
        en="Facilities"
        title="設備紹介"
        lead="多台数・複合機による生産体制で、精度と短納期を両立。代表的な設備をご紹介します。"
        current="設備紹介"
        photo="/photos/lathe-hero.jpg"
      />

      {facilityGroups.map((g, i) => (
        <section key={g.key} className={`section ${i % 2 === 1 ? 'alt' : ''}`} id={g.key}>
          <div className={`container-wide split ${i % 2 === 1 ? 'rev' : ''}`}>
            <div className="reveal">
              <p className="eyebrow">{g.en}</p>
              <h2 style={{ fontSize: 'var(--fs-h2)', margin: 'var(--sp-2) 0 var(--sp-2)' }}>{g.name}</h2>
              {g.count && <p className={s.facCountBig}>保有 {g.count}</p>}
              <div className="prose" style={{ marginTop: 'var(--sp-2)' }}>
                <p>{g.body}</p>
              </div>
              <ul className={s.machineList}>
                {g.machines.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <figure className={`${s.figure} u-frame reveal`}>
              <img src={withBase(g.photo)} alt={g.name} loading="lazy" />
            </figure>
          </div>
        </section>
      ))}

      <ContactCTA />
    </>
  )
}
