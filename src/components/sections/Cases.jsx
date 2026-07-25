import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import Button from '../Button'
import { Quote } from 'lucide-react'

const cases = [
  {
    name: 'Кейс 1. Анна, 42 года, руководитель отдела, двое детей',
    problem:
      '85 кг. Вечерние срывы на сладкое после работы. Усталость, раздражительность, стыд за своё тело. Перепробовала 4 диеты за последние 3 года — вес возвращался.',
    what: 'Перестроили рацион так, чтобы к вечеру не было дикого голода. Добавили белок и сложные углеводы в обед. Нашли триггер стресса (разговор с мамой по телефону) и заменили его на прогулку. Готовка — 15–20 минут, из обычных продуктов.',
    result:
      '−12 кг (73 кг). Влезла в джинсы, которые 3 года лежали в шкафу. Энергии хватает на детей и на себя. Вечерние срывы прекратились на 3-й неделе.',
    resultLabel: 'Результат за 3 месяца:',
    quote:
      'Я думала, что у меня просто нет силы воли. Оказалось, мне просто давали неправильную систему. Теперь я ем вкусно, готовлю за 15 минут и не срываюсь. Впервые за 10 лет',
    quoteAuthor: 'Слова Анны',
  },
  {
    name: 'Кейс 2. Елена, 38 лет, бухгалтер, замужем',
    problem:
      '78 кг. Проблемы с гормонами, отёки, тяжесть в ногах. Врачи говорили «возрастное». Старые методы (гречка + курица, не есть после 18:00) перестали работать — вес стоял, даже если ела мало.',
    what: 'Разобрались с гормональным фоном через питание (добавили нужные нутриенты, убрали продукты, которые усиливали отёки). Составили план под её возраст — не «как в 25», а с учётом перестройки организма.',
    result:
      '−8 кг (70 кг). Нормализовался гормональный фон, ушли отёки, улучшились анализы. Давление стабилизировалось.',
    resultLabel: 'Результат за 3 месяца:',
    quote:
      'Мне 38, и врачи говорили, что это возрастное. Оказалось, дело было в питании. Никаких голодовок — просто грамотная система под мой возраст. Чувствую себя на 10 лет моложе',
    quoteAuthor: 'Слова Елены',
  },
  {
    name: 'Кейс 3. Ольга, 52 года, врач, двое взрослых детей',
    problem:
      '90 кг. Давление, боли в суставах, страх возрастных заболеваний (диабет, сердце). Думала, что в 52 «уже поздно».',
    what: 'Составили план питания с учётом возрастных особенностей (больше белка для мышц, меньше простых углеводов, контроль соли). Еженедельные созвоны, поддержка в моменты, когда «опускались руки».',
    result:
      '−15 кг (75 кг). Улучшились анализы, снизилось давление, ушли боли в суставах. Появилась лёгкость.',
    resultLabel: 'Результат за 4 месяца:',
    quote:
      'Я думала, что в 52 уже ничего не изменить. Оказалось, нужно просто питаться правильно для своего возраста. Мария не давила, не стыдила, просто вела за руку. Чувствую себя на 10 лет моложе',
    quoteAuthor: 'Слова Ольги',
  },
]

export default function Cases() {
  return (
    <section className="bg-graylight py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Результаты моих клиенток — без фотошопа и обмана</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Три истории женщин, которые были в той же точке, что и вы сейчас.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={0.08 * i}>
              <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6">
                <ImagePlaceholder
                  label={`Вертикальное фото клиентки — ${c.name.split(',')[0]}. 800×1000`}
                  ratio="4 / 5"
                />
                <p className="font-heading text-base font-semibold text-forest">{c.name}</p>
                <div className="font-body text-sub text-forest/80">
                  <p>
                    <span className="font-semibold text-forest">Проблема:</span> {c.problem}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-forest">Что сделали:</span> {c.what}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-forest">{c.resultLabel}</span> {c.result}
                  </p>
                </div>
                <div className="mt-auto flex gap-3 rounded-xl bg-base/50 p-4">
                  <Quote className="h-5 w-5 shrink-0 text-amber" strokeWidth={1.75} />
                  <p className="font-body text-sub italic text-forest/80">
                    «{c.quote}».
                    <span className="mt-1 block not-italic font-semibold text-forest">
                      {c.quoteAuthor}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="#signup-final">Хочу такой же результат — на диагностику</Button>
        </Reveal>
      </Container>
    </section>
  )
}
