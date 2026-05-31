import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/Sections'
import { products } from '../data/site'
import { withBase } from '../base'
import s from './pages.module.css'

export function Products() {
  return (
    <>
      <Seo
        title="製品紹介"
        description="内径ボーリングバー、軸・シャフト部品、マシニング加工部品、治具・異形物など。中澤鉄工所の加工事例をご紹介します。"
        path="/products/"
        ogImage="/photos/product.jpg"
      />
      <PageHero
        en="Products"
        title="製品紹介"
        lead="旋盤加工品からマシニング加工品、治具・異形物まで。これまでの加工事例の一部をご覧ください。"
        current="製品紹介"
        photo="/photos/product.jpg"
      />

      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Works — 加工事例</p>
            <h2>加工事例ギャラリー</h2>
            <p className="lead">
              掲載は一例です。材種・形状・数量を問わずご相談ください。図面をお送りいただければお見積りいたします。
            </p>
          </div>
          <div className={s.gallery}>
            {products.map((p) => (
              <figure key={p.title} className={`${s.galleryItem} reveal`}>
                <img src={withBase(p.photo)} alt={p.title} loading="lazy" />
                <figcaption>
                  <span className={s.cat}>{p.cat}</span>
                  <span className={s.ttl}>{p.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
