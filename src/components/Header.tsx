import { useEffect, useState } from 'react'
import { company, nav } from '../data/site'
import { withBase } from '../base'
import s from './Header.module.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <a className={s.brand} href={withBase('/')} aria-label={company.name}>
          <span className={s.mark} aria-hidden>◆</span>
          <span className={s.brandText}>
            <strong>中澤鉄工所</strong>
            <small>NAKAZAWA TEKKOJO</small>
          </span>
        </a>

        <nav className={`${s.nav} ${open ? s.navOpen : ''}`}>
          {nav.map((n) => (
            <a key={n.href} href={withBase(n.href)} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className={s.navCta} href={withBase('/contact/')} onClick={() => setOpen(false)}>
            お問い合わせ
          </a>
        </nav>

        <a className={s.tel} href={`tel:${company.tel}`}>
          <small>お電話でのご相談</small>
          <strong>{company.tel}</strong>
        </a>

        <button
          className={s.burger}
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? s.barX1 : ''} />
          <span className={open ? s.barHide : ''} />
          <span className={open ? s.barX2 : ''} />
        </button>
      </div>
    </header>
  )
}
