import Container from '../Container'
import Reveal from '../Reveal'
import Button from '../Button'
import { CalendarClock, BookOpen, Video, LineChart, Trophy } from 'lucide-react'

const steps = [
  {
    icon: CalendarClock,
    title: 'Шаг 1. Бесплатная диагностика (30 минут).',
    text: 'Мы созваниваемся в Zoom. Я анализирую ваш текущий рацион, нахожу 1–2 главные ошибки, которые мешают худеть именно вам, и даю 3 конкретные рекомендации на неделю. Это ни к чему не обязывает — вы получаете пользу в любом случае.',
  },
  {
    icon: BookOpen,
    title: 'Шаг 2. Составление персонального плана.',
    text: 'Если вы решаете работать со мной, я 5–7 дней составляю план питания под ваш график, вкусы, бюджет и возраст. Никаких шаблонов.',
  },
  {
    icon: Video,
    title: 'Шаг 3. Еженедельные созвоны и поддержка.',
    text: 'Раз в неделю мы созваниваемся на 45 минут. Между созвонами вы пишете мне в Telegram — я отвечаю в течение дня. Я проверяю ваш дневник питания и нахожу скрытые ошибки.',
  },
  {
    icon: LineChart,
    title: 'Шаг 4. Корректировка каждые 2 недели.',
    text: 'Если что-то не работает — стресс, праздник, ПМС, усталость — мы корректируем план в тот же день, не ломая общий прогресс.',
  },
  {
    icon: Trophy,
    title: 'Шаг 5. Результат через 90 дней.',
    text: 'Вы возвращаетесь в любимую одежду, чувствуете прилив сил и понимаете, как питаться дальше — без диет и срывов. Навсегда.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-graylight py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Как проходит наставничество — пошагово</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Без стресса, без жёстких рамок, без «надо с понедельника».
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:gap-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.06 * i} className="flex flex-1 gap-4 lg:flex-col lg:gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="flex-1 rounded-2xl bg-white p-5 lg:p-5">
                <p className="font-heading text-base font-semibold text-forest">{title}</p>
                <p className="mt-2 font-body text-sub text-forest/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="#signup-final">Начать с бесплатной диагностики</Button>
        </Reveal>
      </Container>
    </section>
  )
}
