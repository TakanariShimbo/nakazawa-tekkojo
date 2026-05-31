import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { company } from '../data/site'
import { withBase } from '../base'
import s from './pages.module.css'

const valueDesc: Record<string, string> = {
  凡事徹底: '当たり前のことを、当たり前に、徹底して。日々の基本の積み重ねが品質を支えます。',
  自己成長: '生涯初心。一人ひとりが学び続け、技術と人間性を磨き続けます。',
  相利共生: 'お客様・協力先・仲間と利を分かち合い、ともに成長する関係を築きます。',
}

export function About() {
  return (
    <>
      <Seo
        title="中澤鉄工所とは"
        description="「継続は力 技術は日々磨かれる」。金属切削の技術と価値を高め、日本のもの作りに貢献する——中澤鉄工所の理念と価値観をご紹介します。"
        path="/about/"
        ogImage="/photos/factory.jpg"
      />
      <PageHero
        en="About Us"
        title="中澤鉄工所とは"
        lead="昭和42年の創業以来、金属切削ひとすじ。私たちの根底にある理念と価値観をご紹介します。"
        current="中澤鉄工所とは"
        photo="/photos/factory.jpg"
      />

      {/* 理念 */}
      <section className="section">
        <div className="container-wide split">
          <div className="reveal">
            <p className="eyebrow">Philosophy — 企業理念</p>
            <h2 className="" style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--fs-h2)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>
              継続は力、<br />技術は日々磨かれる。
            </h2>
            <div className="prose">
              <p>
                派手な近道はありません。毎日の仕事を丁寧に積み重ね、技術を磨き続けること。
                その地道な「継続」こそが、私たちの何よりの力だと考えています。
              </p>
              <p>
                事業の目的は、<strong>{company.mission}</strong>こと。
                最新鋭の設備と現場で培った匠の技を掛け合わせ、一点物から量産まで、
                お客様の「つくりたい」に誠実に応えていきます。
              </p>
            </div>
          </div>
          <figure className={`${s.figure} u-frame reveal`}>
            <img src={withBase('/photos/factory.jpg')} alt="中澤鉄工所 本社工場" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* 行動指針 */}
      <section className="section alt">
        <div className="container-wide">
          <div className="sectionHead center reveal">
            <p className="eyebrow">Our Values — 行動指針</p>
            <h2>三つの価値観を、現場に。</h2>
          </div>
          <div className={s.values}>
            {company.values.map((v, i) => (
              <div key={v} className={`${s.valueCard} reveal`}>
                <span className="num">VALUE {String(i + 1).padStart(2, '0')}</span>
                <h3>{v}</h3>
                <p>{valueDesc[v]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* モットー */}
      <section className="section">
        <div className="container-wide reveal">
          <p className="eyebrow">Motto</p>
          <ul className={s.mottos}>
            {company.mottos.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
