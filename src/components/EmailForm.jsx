import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function EmailForm({ ctaText, note, id = 'signup' }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError('Проверьте, пожалуйста, адрес email')
      return
    }
    setError('')
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
          Мы свяжемся с вами, чтобы согласовать время диагностики.
        </p>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={handleSubmit} noValidate className="w-full max-w-md scroll-mt-24">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-full border-2 border-forest/20 bg-white px-5 py-4 font-body text-body text-[#2B2B2B] outline-none transition-colors focus:border-forest"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-4 text-center font-heading text-[17px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#264a3d] active:translate-y-0"
        >
          {ctaText}
        </button>
      </div>
      {error && <p className="mt-2 font-body text-sm text-red-600">{error}</p>}
      {note && <p className="mt-3 font-body text-sub text-forest/70">{note}</p>}
    </form>
  )
}
