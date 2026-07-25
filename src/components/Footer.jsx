const links = [
  { href: '/privacy.html', label: 'Политика конфиденциальности' },
  { href: '/oferta.html', label: 'Договор оферты' },
  { href: '/consent.html', label: 'Согласие на обработку персональных данных' },
]

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center">
      <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-forest/70 underline-offset-2 hover:text-forest hover:underline"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <p className="font-body text-sm text-forest/60">
        © {new Date().getFullYear()} Мария — Наставничество по питанию
      </p>
    </footer>
  )
}
