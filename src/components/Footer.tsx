import { company, nav } from '../data/site'
import { config } from '../config'
import { withBase } from '../base'
import s from './Footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container-wide ${s.top}`}>
        <div className={s.brandCol}>
          <a className={s.brand} href={withBase('/')}>
            <span className={s.mark} aria-hidden>◆</span>
            <span>
              <strong>{company.name}</strong>
              <small>NAKAZAWA TEKKOJO CO., LTD.</small>
            </span>
          </a>
          <p className={s.philosophy}>{company.philosophy}</p>
          <address className={s.address}>
            〒　{company.address}<br />
            TEL {company.tel}　/　FAX {company.fax}
          </address>
        </div>

        <nav className={s.links}>
          {nav.map((n) => (
            <a key={n.href} href={withBase(n.href)}>{n.label}</a>
          ))}
          <a href={withBase('/contact/')}>お問い合わせ</a>
          <a href={config.noteUrl} target="_blank" rel="noreferrer">お知らせ（note）↗</a>
          <a href={config.instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
        </nav>
      </div>

      <div className={`container-wide ${s.bottom}`}>
        <small>© {new Date().getFullYear()} {company.name}</small>
        <small className={s.credit}>創業 {company.founded}　/　従業員 {company.employees}</small>
      </div>
    </footer>
  )
}
