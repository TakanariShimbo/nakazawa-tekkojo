import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactForm, type Field } from '../components/ContactForm'
import { config } from '../config'
import { company } from '../data/site'
import { withBase } from '../base'
import s from './contact.module.css'

const fields: Field[] = [
  { name: 'name', label: 'お名前', required: true, half: true, placeholder: '中澤 太郎' },
  { name: 'email', label: 'メールアドレス', type: 'email', required: true, half: true, placeholder: 'example@mail.com' },
  { name: 'subject', label: '題名', placeholder: 'お問い合わせの件名' },
  { name: 'message', label: 'お問い合わせ内容', type: 'textarea', required: true, rows: 7 },
]

export function Contact() {
  return (
    <>
      <Seo
        title="お問い合わせ"
        description="中澤鉄工所へのお問い合わせ。金属切削加工のご相談・お見積りはお気軽に。お電話（0258-62-3779）またはフォームより承ります。"
        path="/contact/"
      />
      <PageHero en="Contact" title="お問い合わせ" current="お問い合わせ" />

      <section className="section">
        <div className={`container-wide ${s.layout}`}>
          {/* 連絡先情報 */}
          <aside className={`${s.aside} reveal`}>
            <p className="eyebrow">Get in touch</p>
            <h2 className={s.asideTitle}>お気軽にご相談ください。</h2>
            <p className={s.asideLead}>
              加工のご相談・お見積りは無料です。お仕事のご依頼は
              <a className="tlink" href={withBase('/contact/job/')}> お仕事依頼フォーム </a>
              もご利用ください。
            </p>
            <dl className={s.info}>
              <div>
                <dt>電話 / FAX</dt>
                <dd><a href={`tel:${company.tel}`} className={s.tel}>{company.tel}</a><br />FAX {company.fax}</dd>
              </div>
              <div>
                <dt>受付時間</dt>
                <dd>{company.hours}（土日祝休）</dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>〒{company.zip}<br />{company.address}</dd>
              </div>
            </dl>
          </aside>

          {/* フォーム */}
          <div className={`${s.formWrap} reveal`}>
            <ContactForm
              endpoint={config.formspree.contact}
              fields={fields}
              subject="【お問い合わせ】Webサイトより"
            />
          </div>
        </div>
      </section>
    </>
  )
}
