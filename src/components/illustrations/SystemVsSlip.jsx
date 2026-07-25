import { Check } from 'lucide-react'

export default function SystemVsSlip({ className = '' }) {
  return (
    <div
      className={`w-full rounded-2xl border border-forest/10 bg-white px-4 py-8 sm:px-10 sm:py-10 ${className}`}
    >
      <svg viewBox="0 0 800 300" className="w-full" role="img" aria-label="Схема: срыв — это небольшое отклонение внутри системы, которая всё равно ведёт к результату">
        <line x1="30" y1="260" x2="770" y2="260" stroke="#2E5A4A" strokeOpacity="0.15" strokeWidth="2" />

        <path
          d="M 40 235 C 140 190, 200 165, 260 175 C 300 182, 300 225, 330 232 C 365 240, 400 160, 460 120 C 560 55, 660 45, 760 40"
          fill="none"
          stroke="#2E5A4A"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <circle cx="315" cy="228" r="9" fill="#F4A261" />
        <text x="315" y="200" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#B5651D">
          Срыв
        </text>
        <line x1="315" y1="207" x2="315" y2="219" stroke="#F4A261" strokeWidth="2" />

        <circle cx="760" cy="40" r="16" fill="#2E5A4A" />
        <foreignObject x="746" y="26" width="28" height="28">
          <div className="flex h-full w-full items-center justify-center">
            <Check className="h-4 w-4 text-white" strokeWidth={3} />
          </div>
        </foreignObject>

        <text x="30" y="285" fontFamily="'Open Sans', sans-serif" fontSize="16" fill="#2E5A4A" fillOpacity="0.6">
          Старт
        </text>
        <text x="770" y="285" textAnchor="end" fontFamily="'Open Sans', sans-serif" fontSize="16" fill="#2E5A4A" fillOpacity="0.6">
          90 дней
        </text>
      </svg>
    </div>
  )
}
