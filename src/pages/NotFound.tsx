import { Seo } from '../components/Seo'
import { withBase } from '../base'

export function NotFound() {
  return (
    <>
      <Seo title="ページが見つかりません" description="お探しのページは見つかりませんでした。" path="/404" />
      <section
        className="section"
        style={{ minHeight: '70svh', display: 'grid', placeItems: 'center', textAlign: 'center' }}
      >
        <div className="container">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontFamily: 'var(--font-mono)', margin: 'var(--sp-2) 0' }}>
            404
          </h1>
          <p className="lead" style={{ marginBottom: 'var(--sp-4)' }}>
            お探しのページは見つかりませんでした。<br />URLが変更された可能性があります。
          </p>
          <a className="btn btn-primary" href={withBase('/')}>トップへ戻る<span aria-hidden>→</span></a>
        </div>
      </section>
    </>
  )
}
