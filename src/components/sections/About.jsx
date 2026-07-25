import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import Button from '../Button'
import { Check } from 'lucide-react'

const stats = [
  'Более 120 клиенток прошли через наставничество',
  'Средний результат: −8 кг за 3 месяца',
  '9 из 10 клиенток не возвращают вес после завершения программы',
]

export default function About() {
  return (
    <section className="bg-beige py-14 lg:py-20">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <ImagePlaceholder
            label="Вертикальное фото: эксперт (Мария) в рабочей обстановке + фото «до/после» (без обработки). 800×1000"
            ratio="4 / 5"
            className="mx-auto max-w-sm lg:sticky lg:top-24"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-h2 lg:text-h2-lg">Меня зовут Мария. Я практик, а не теоретик.</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Я не рассказываю, «как надо». Я сама прошла этот путь — и знаю все ловушки изнутри.
          </p>
          <div className="mt-6 flex flex-col gap-4 font-body text-body text-forest/80">
            <p>
              10 лет я боролась с весом. Перепробовала всё: кето, Дюкана, интервальное голодание,
              1200 ккал, гречку с курицей, детоксы на соках. Вес уходил — и возвращался с
              друзьями. Я винила себя, думала, что у меня «слабая сила воли» и «плохой обмен
              веществ».
            </p>
            <p>
              В 40 лет я весила 88 кг. Устала, отёки, давление, стыд за своё тело. И тогда я
              перестала «садиться на диету» и начала разбираться — в гормонах, в физиологии, в
              психологии срывов. Я сбросила 18 кг за 8 месяцев. Без голодовок. Без срывов. Без
              чувства вины.
            </p>
            <p>
              С тех пор я помогаю таким же женщинам — уставшим, занятым, перепробовавшим всё. Не
              «садить на диету», а выстраивать систему, которая работает в реальной жизни — с
              работой, детьми, стрессом и праздниками.
            </p>
          </div>
          <p className="mt-6 font-heading text-lg font-semibold text-forest">Мои цифры:</p>
          <ul className="mt-4 flex flex-col gap-3 rounded-2xl bg-white p-5">
            {stats.map((s) => (
              <li key={s} className="flex items-start gap-3 font-body text-body text-forest/80">
                <Check className="mt-1 h-5 w-5 shrink-0 text-amber" strokeWidth={2.5} />
                <span>{s}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 font-body text-body text-forest/80">
              <Check className="mt-1 h-5 w-5 shrink-0 text-amber" strokeWidth={2.5} />
              <span>Сертифицированный нутрициолог, специалист по пищевому поведению</span>
            </li>
          </ul>
          <p className="mt-6 font-heading text-lg font-semibold text-forest">Мой подход:</p>
          <p className="mt-2 font-body text-body text-forest/80">
            Я не осуждаю за срывы. Я нахожу их причину и корректирую систему. Я не даю жёстких
            запретов. Я строю гибкий план под вашу жизнь.
          </p>
          <Button href="#signup-final" className="mt-8">
            Хочу так же — на диагностику
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
