import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import LeadForm from '../LeadForm'
import { Check } from 'lucide-react'

const bullets = [
  'План питания из продуктов «Пятёрочки» — готовка за 15 минут',
  'Еженедельные созвоны 1 на 1 и чат со мной в Telegram',
  'Корректировка плана каждые 2 недели под ваш ритм жизни',
  'Без жёстких диет, голода и чувства вины за каждый кусок',
]

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-graylight to-white pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-16">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="mb-3 inline-block rounded-full bg-amber/20 px-4 py-1.5 font-body text-sm font-semibold text-[#B5651D]">
            Осталось 2 места на диагностику на этой неделе
          </p>
          <h1 className="text-h1 lg:text-h1-lg">
            Похудейте на 5–15 кг за 90 дней без срывов и чувства вины
          </h1>
          <p className="mt-5 font-body text-body text-forest/80">
            Персональное наставничество по питанию с еженедельными созвонами и планом из обычных
            продуктов. Без голодовок, жёстких запретов и готовки по 2 часа.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 font-body text-body">
                <Check className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={2.5} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LeadForm
              note="30 минут • Разберём ваш рацион • Дадим 3 рекомендации на неделю"
              id="signup"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ImagePlaceholder
            label="Фото: женщина в кухне (улыбается, готовит простое блюдо) + инфографика «5–15 кг за 90 дней». 1920×1080"
            ratio="16 / 9"
          />
        </Reveal>
      </Container>
    </section>
  )
}
