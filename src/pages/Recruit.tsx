import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactForm, type Field } from '../components/ContactForm'
import { config } from '../config'
import { company, recruit } from '../data/site'

const fields: Field[] = [
  { name: 'name', label: 'お名前', required: true, half: true, placeholder: '中澤 太郎' },
  { name: 'email', label: 'メールアドレス', type: 'email', required: true, half: true, placeholder: 'example@mail.com' },
  { name: 'tel', label: '電話番号', type: 'tel', required: true, half: true, placeholder: '日中つながる番号' },
  { name: 'birthday', label: '生年月日', type: 'date', half: true },
  { name: 'pr', label: '自己PR', type: 'textarea', required: true, rows: 7, placeholder: 'これまでの経験や、ものづくりへの想いをお聞かせください。' },
]

export function Recruit() {
  return (
    <>
      <Seo
        title="採用情報"
        description="中澤鉄工所の採用情報。技術職（生産技術・製品開発・工機）を募集中。「出来ないというより、先にやってみよう」。現場を熟知した技術者を目指す方を歓迎します。"
        path="/recruit/"
        ogImage="/photos/machine.jpg"
      />
      <PageHero
        en="Recruit"
        title="採用情報"
        lead={recruit.catch}
        current="採用情報"
        photo="/photos/machine.jpg"
      />

      {/* メッセージ */}
      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Message</p>
            <h2>技術は、挑戦した人に宿る。</h2>
            <p className="lead">{recruit.lead}</p>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="section alt">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Requirements — 募集要項</p>
            <h2>募集要項</h2>
          </div>
          <table className="specTable reveal">
            <tbody>
              {recruit.detail.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 応募フォーム */}
      <section className="section">
        <div className="container-wide">
          <div className="sectionHead reveal">
            <p className="eyebrow">Entry — 応募フォーム</p>
            <h2>ご応募</h2>
            <p className="lead">
              下記フォーム、またはお電話（<a className="tlink" href={`tel:${company.tel}`}>{company.tel}</a> 採用担当）にてご連絡ください。
            </p>
          </div>
          <div className="reveal">
            <ContactForm
              endpoint={config.formspree.recruit}
              fields={fields}
              submitLabel="応募する"
              subject="【採用応募】Webサイトより"
            />
          </div>
        </div>
      </section>
    </>
  )
}
