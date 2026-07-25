import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import Button from '../Button'
import { UtensilsCrossed, Video, MessageCircle, NotebookPen, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: UtensilsCrossed,
    title: 'Персональный план питания.',
    text: 'Я составляю его под ваш график, вкусы, бюджет и возраст. Из обычных продуктов «Пятёрочки» — никаких семян чиа по 2000 рублей за пачку.',
  },
  {
    icon: Video,
    title: 'Еженедельные созвоны 1 на 1.',
    text: '45 минут, где мы разбираем вашу неделю, находим ошибки и корректируем курс. Не запись в вебинаре, а живой разговор.',
  },
  {
    icon: MessageCircle,
    title: 'Чат со мной в Telegram.',
    text: 'Поддержка в моменты слабости, праздников, ПМС, стресса на работе. Вы не остаётесь один на один с холодильником.',
  },
  {
    icon: NotebookPen,
    title: 'Проверка дневника питания.',
    text: 'Я анализирую, что вы едите, и нахожу скрытые причины срывов — те, которые вы сами не видите.',
  },
  {
    icon: TrendingUp,
    title: 'Корректировка плана каждые 2 недели.',
    text: 'Система подстраивается под ваш ритм жизни, а не ломает его. У вас праздник? ПМС? Завал на работе? Мы меняем план в тот же день.',
  },
]

export default function Solution() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Наставничество «Здоровое тело за 90 дней»</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Персональное сопровождение 1 на 1. Не курс с PDF-файлом и общим чатом на 200 человек.
            Живая работа, где я знаю вас по имени.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <ImagePlaceholder
            label="Горизонтальное фото: эксперт и клиентка на созвоне (скриншот Zoom). 1920×1080"
            ratio="16 / 9"
          />
        </Reveal>
        <p className="mt-10 text-center font-heading text-lg font-semibold text-forest">
          Что вы получаете:
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-graylight p-6">
                <Icon className="h-8 w-8 text-amber" strokeWidth={1.75} />
                <p className="font-body text-body">
                  <span className="font-heading font-semibold text-forest">{title}</span>{' '}
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="#signup-final">Записаться на бесплатный разбор рациона</Button>
        </Reveal>
      </Container>
    </section>
  )
}
