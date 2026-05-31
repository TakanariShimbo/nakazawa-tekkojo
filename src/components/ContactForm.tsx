import { useState } from 'react'
import s from './ContactForm.module.css'

export type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'textarea'
  required?: boolean
  placeholder?: string
  rows?: number
  half?: boolean // 2カラム表示
}

type Props = {
  endpoint: string
  fields: Field[]
  submitLabel?: string
  subject?: string // Formspree の件名
}

export function ContactForm({ endpoint, fields, submitLabel = '送信する', subject }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const notConfigured = endpoint.includes('REPLACE_')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (notConfigured) return
    const form = e.currentTarget
    setState('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setState('ok')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <div className={s.done} role="status">
        <span className={s.doneMark} aria-hidden>✓</span>
        <h3>送信しました</h3>
        <p>お問い合わせありがとうございます。担当者より折り返しご連絡いたします。</p>
      </div>
    )
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      {subject && <input type="hidden" name="_subject" value={subject} />}
      {/* スパム対策（honeypot） */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className={s.hp} aria-hidden />

      <div className={s.grid}>
        {fields.map((f) => (
          <div key={f.name} className={`${s.field} ${f.half ? s.half : ''}`}>
            <label htmlFor={f.name}>
              {f.label}
              {f.required && <span className={s.req}>必須</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea id={f.name} name={f.name} rows={f.rows ?? 6} required={f.required} placeholder={f.placeholder} />
            ) : (
              <input id={f.name} name={f.name} type={f.type ?? 'text'} required={f.required} placeholder={f.placeholder} />
            )}
          </div>
        ))}
      </div>

      {notConfigured && (
        <p className={s.notice}>
          ※ 送信先（Formspree）が未設定です。公開前に <code>src/config.ts</code> のフォームIDを設定してください。
        </p>
      )}
      {state === 'error' && (
        <p className={s.error} role="alert">送信に失敗しました。お手数ですがお電話（0258-62-3779）でご連絡ください。</p>
      )}

      <button className={`btn btn-primary ${s.submit}`} type="submit" disabled={state === 'sending' || notConfigured}>
        {state === 'sending' ? '送信中…' : submitLabel}
        {state !== 'sending' && <span aria-hidden>→</span>}
      </button>
    </form>
  )
}
