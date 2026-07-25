import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d+()\-\s]{7,20}$/

// TODO: temporary stub — recipient opens their mail client via `mailto:`.
// Replace with a real integration (Telegram bot / Unisender) later.
const RECIPIENT_EMAIL = 'karabetsv2@gmail.com'

const fieldClass =
  'w-full rounded-full border-2 border-forest/20 bg-white px-5 py-4 font-body text-body text-[#2B2B2B] outline-none transition-colors focus:border-forest'
const errorClass = 'mt-1.5 font-body text-sm text-red-600'

export default function LeadForm({ note, id = 'signup' }) {
  const [values, setValues] = useState({ name: '', phone: '', email: '', comment: '' })
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function setField(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Укажите, пожалуйста, имя'
    if (!PHONE_RE.test(values.phone.trim())) nextErrors.phone = 'Проверьте, пожалуйста, номер телефона'
    if (!EMAIL_RE.test(values.email.trim())) nextErrors.email = 'Проверьте, пожалуйста, адрес email'
    if (!consent) nextErrors.consent = 'Нужно согласие на обработку персональных данных'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = `Заявка на бесплатный разбор — ${values.name}`
    const body = [
      `Имя: ${values.name}`,
      `Телефон: ${values.phone}`,
      `Email: ${values.email}`,
      `Комментарий: ${values.comment.trim() || '—'}`,
    ].join('\n')
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        id={id}
        className="flex flex-col items-center gap-2 rounded-2xl bg-base/60 px-6 py-8 text-center scroll-mt-24"
      >
        <CheckCircle2 className="h-9 w-9 text-forest" strokeWidth={1.5} />
        <p className="font-heading text-lg font-semibold text-forest">Заявка отправлена!</p>
        <p className="font-body text-sub text-forest/80">
          Откроется ваш почтовый клиент с письмом на {RECIPIENT_EMAIL} — останется его отправить.
          Мы свяжемся с вами, чтобы согласовать время диагностики.
        </p>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={handleSubmit} noValidate className="w-full max-w-md scroll-mt-24">
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">
            Имя
          </label>
          <input
            id={`${id}-name`}
            type="text"
            autoComplete="name"
            placeholder="Ваше имя"
            value={values.name}
            onChange={setField('name')}
            className={fieldClass}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className="sr-only">
            Телефон
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ваш телефон"
            value={values.phone}
            onChange={setField('phone')}
            className={fieldClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="sr-only">
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Ваш email"
            value={values.email}
            onChange={setField('email')}
            className={fieldClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-comment`} className="sr-only">
            Комментарий
          </label>
          <textarea
            id={`${id}-comment`}
            placeholder="Комментарий (необязательно)"
            rows={3}
            value={values.comment}
            onChange={setField('comment')}
            className="w-full resize-none rounded-2xl border-2 border-forest/20 bg-white px-5 py-4 font-body text-body text-[#2B2B2B] outline-none transition-colors focus:border-forest"
          />
        </div>

        <div>
          <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-2.5">
            <input
              id={`${id}-consent`}
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-2 border-forest/30 text-forest accent-forest"
            />
            <span className="font-body text-sm text-forest/80">
              Я даю{' '}
              <a
                href="/consent.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-forest"
              >
                согласие на обработку персональных данных
              </a>{' '}
              в соответствии с{' '}
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-forest"
              >
                Политикой конфиденциальности
              </a>
            </span>
          </label>
          {errors.consent && <p className={errorClass}>{errors.consent}</p>}
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-forest px-7 py-4 text-center font-heading text-[17px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#264a3d] active:translate-y-0"
        >
          Записаться на бесплатный разбор
        </button>
      </div>
      {note && <p className="mt-3 font-body text-sub text-forest/70">{note}</p>}
    </form>
  )
}
