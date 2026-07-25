export default function Photo({ src, alt, ratio = '4 / 5', className = '', priority = false }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl bg-base ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : undefined}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
