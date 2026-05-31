import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactForm, type Field } from '../components/ContactForm'
import { config } from '../config'
import { company } from '../data/site'

const fields: Field[] = [
  { name: 'company', label: '会社名', required: true, half: true, placeholder: '株式会社○○' },
  { name: 'name', label: 'ご担当者名', required: true, half: true, placeholder: '中澤 太郎' },
  { name: 'email', label: 'メールアドレス', type: 'email', required: true, half: true, placeholder: 'example@mail.com' },
  { name: 'tel', label: '電話番号', type: 'tel', half: true, placeholder: '日中つながる番号' },
  { name: 'detail', label: '加工内容・材質・数量・希望納期', type: 'textarea', required: true, rows: 6, placeholder: '例）SUS304　外径φ50×L120　20個　○月末納品希望' },
  { name: 'message', label: 'その他ご要望', type: 'textarea', rows: 4, placeholder: '図面の送付方法など、ご希望があればご記入ください。' },
]

export function ContactJob() {
  return (
    <>
      <Seo
        title="お仕事のご依頼"
        description="金属切削加工のお仕事のご依頼・お見積り依頼フォーム。材質・数量・納期を問わずご相談ください。図面一枚からお見積りいたします。"
        path="/contact/job/"
        ogImage="/photos/lathe-hero.jpg"
      />
      <PageHero
        en="Request a Quote"
        title="お仕事のご依頼"
        lead="図面一枚から、材質・数量を問わずお見積りいたします。下記フォームよりお気軽にご相談ください。"
        current="お仕事のご依頼"
        photo="/photos/lathe-hero.jpg"
      />

      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Request Form — お見積り依頼</p>
            <h2>ご依頼フォーム</h2>
            <p className="lead">
              図面データがある場合は、送信後に折り返すメールへご返信いただくか、お電話（
              <a className="tlink" href={`tel:${company.tel}`}>{company.tel}</a>）でも承ります。
            </p>
          </div>
          <div className="reveal">
            <ContactForm
              endpoint={config.formspree.job}
              fields={fields}
              submitLabel="この内容で依頼する"
              subject="【お仕事依頼】Webサイトより"
            />
          </div>
        </div>
      </section>
    </>
  )
}
