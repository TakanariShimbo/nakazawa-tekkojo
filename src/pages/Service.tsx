import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { strengths, network } from '../data/site'
import { withBase } from '../base'
import s from './pages.module.css'

export function Service() {
  return (
    <>
      <Seo
        title="事業案内"
        description="NC旋盤・マシニングセンタによる高品位な金属切削加工。短納期対応、一点物・異形物の治具立て加工、協力工場ネットワークによる熱処理・表面処理・研磨まで。"
        path="/service/"
        ogImage="/photos/machine.jpg"
      />
      <PageHero
        en="Service"
        title="事業案内"
        lead="金属切削加工を軸に、設計から仕上げ工程の手配まで。お客様のものづくりを一貫して支えます。"
        current="事業案内"
        photo="/photos/machine.jpg"
      />

      {/* 概要 */}
      <section className="section">
        <div className="container-wide split">
          <div className="reveal">
            <p className="eyebrow">Core Business</p>
            <h2 style={{ fontSize: 'var(--fs-h2)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>削りで、応える。</h2>
            <div className="prose">
              <p>
                NC旋盤（複合機含む）8台、マシニングセンタ5台を中心に、丸物・角物の精密切削加工を手がけています。
                量産品の安定供給から、図面一枚の一点物・試作まで、規模を問わず対応します。
              </p>
              <p>
                鋳物や異形物は治具立てのノウハウで材種を問わず加工。さらに協力工場との連携で、
                切削以外の工程もワンストップで手配します。
              </p>
            </div>
          </div>
          <figure className={`${s.figure} u-frame reveal`}>
            <img src={withBase('/photos/lathe-hero.jpg')} alt="NC旋盤による切削加工" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* 4つの強み */}
      <section className="section alt">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Strengths</p>
            <h2>削りの現場を支える、4つの強み。</h2>
          </div>
          <div className={s.strengthRows}>
            {strengths.map((it) => (
              <div key={it.no} className={`${s.strengthRow} reveal`}>
                <span className={s.no}>{it.no}</span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ネットワーク */}
      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Network — 協力工場ネットワーク</p>
            <h2>一次加工から仕上げまで。</h2>
            <p className="lead">協力工場との連携により、切削以外の工程もまとめて手配。材種・仕上げを問わずご相談ください。</p>
          </div>
          <ul className={`${s.netGrid} reveal`}>
            {network.map((n) => (
              <li key={n.label}>
                <strong>{n.label}</strong>
                <span>{n.items}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
