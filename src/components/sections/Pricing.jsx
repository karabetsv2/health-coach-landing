import Container from '../Container'
import Reveal from '../Reveal'
import Button from '../Button'
import { Check } from 'lucide-react'

const includes = [
  { title: 'Персональный план питания', text: '— под ваш график, вкусы, бюджет и возраст' },
  { title: '12 еженедельных созвонов 1 на 1', text: '— по 45 минут каждый' },
  { title: 'Безлимитный чат со мной в Telegram', text: '— поддержка между созвонами' },
  { title: 'Проверка дневника питания', text: '— я нахожу скрытые ошибки' },
  { title: '6 корректировок плана', text: '— каждые 2 недели' },
  { title: 'Поддержка в моменты слабости', text: '— праздники, ПМС, стресс' },
  { title: 'Работа с психологией пищевого поведения', text: '— разбираем причины срывов' },
]

export default function Pricing() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Что вы получаете за 90 дней — по пунктам</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Это не курс с PDF-файлом. Это живое сопровождение, где я веду вас за руку.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl rounded-2xl bg-base/50 p-6 lg:p-8">
          <p className="font-heading text-lg font-semibold text-forest">В наставничество входит:</p>
          <ul className="mt-4 flex flex-col gap-3">
            {includes.map((item) => (
              <li key={item.title} className="flex items-start gap-3 font-body text-body">
                <Check className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={2.5} />
                <span>
                  <span className="font-semibold text-forest">{item.title}</span> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl">
          <p className="font-heading text-lg font-semibold text-forest">Стоимость:</p>
          <p className="mt-2 font-body text-body text-forest/80">
            Наставничество «Здоровое тело за 90 дней» — это 12 созвонов, безлимитный чат,
            персональный план и 6 корректировок. Точную стоимость и удобный формат оплаты (полная
            оплата или рассрочка на 3 месяца) мы обсуждаем на диагностике — индивидуально, под
            вашу ситуацию.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-6 max-w-2xl rounded-2xl bg-amber/10 p-6">
          <p className="font-heading text-lg font-semibold text-forest">Важно:</p>
          <p className="mt-2 font-body text-body text-forest/80">
            Я веду наставничество лично, поэтому беру только{' '}
            <span className="font-semibold text-amber">5 женщин в месяц</span>. Это не
            маркетинговый приём — это реальное ограничение формата 1 на 1. Чтобы уделять каждой
            достаточно времени и давать результат.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 text-center">
          <Button href="#signup-final">Узнать стоимость на бесплатной диагностике</Button>
          <p className="mt-3 font-body text-sub text-forest/70">
            30 минут • Без обязательств • Получите 3 рекомендации уже на созвоне
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
