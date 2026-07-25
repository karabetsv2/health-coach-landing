import Button from './Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <span className="font-heading text-lg font-bold text-forest">Мария</span>
        <Button
          href="#signup"
          className="hidden !px-4 !py-2.5 !text-sm sm:inline-flex sm:!px-6 sm:!py-3 sm:!text-base"
        >
          Записаться на бесплатный разбор рациона
        </Button>
      </div>
    </header>
  )
}
