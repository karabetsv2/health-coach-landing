import { ImageIcon } from 'lucide-react'

export default function ImagePlaceholder({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest/25 bg-gradient-to-br from-base to-beige p-6 text-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <ImageIcon className="h-8 w-8 text-forest/50" strokeWidth={1.5} />
      <span className="max-w-[85%] font-body text-sm leading-snug text-forest/60">{label}</span>
    </div>
  )
}
