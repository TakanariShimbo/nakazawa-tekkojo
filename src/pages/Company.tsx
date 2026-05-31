import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { company, companyTable, history, clients } from '../data/site'
import s from './pages.module.css'

export function Company() {
  return (
    <>
      <Seo
        title="会社概要"
        description={`${company.name}の会社概要。${company.founded}創業、新潟県見附市の金属切削加工メーカー。沿革・主要取引先をご案内します。`}
        path="/company/"
      />
      <PageHero en="Company" title="会社概要" current="会社概要" photo="/photos/factory2.png" />

      {/* 概要テーブル */}
      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Overview — 会社概要</p>
            <h2>会社情報</h2>
          </div>
          <table className="specTable reveal">
            <tbody>
              {companyTable.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section alt">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">History — 沿革</p>
            <h2>歩み</h2>
          </div>
          <div className={`${s.timeline} reveal`}>
            {history.map((h) => (
              <div key={h.year} className={s.tlRow}>
                <span className={s.tlYear}>{h.year}</span>
                <span className={s.tlText}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 取引先 */}
      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Clients — 主要取引先</p>
            <h2>お取引先</h2>
          </div>
          <ul className={`${s.clients} reveal`}>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
