import Container from '../Container'
import Reveal from '../Reveal'
import Photo from '../Photo'
import Button from '../Button'
import { Check, X } from 'lucide-react'

const fits = [
  'Вы женщина 35–45 лет, работаете, у вас есть дети',
  'Вы устали от срывов и хотите систему, а не очередную диету',
  'Вы готовы уделять 15–20 минут в день на готовку и 45 минут в неделю на созвон со мной',
  'Вы хотите работать 1 на 1 с наставником, а не в общем чате на 200 человек',
  'Вы готовы инвестировать в своё здоровье и готовы к честному разговору о привычках',
]

const notFits = [
  'Вы ищете «волшебную таблетку» без усилий с вашей стороны',
  'Вы готовы только на жёсткие запреты и голодовки — «скажите, что нельзя, и я потерплю»',
  'У вас расстройства пищевого поведения (анорексия, булимия) — тут нужна работа с психотерапевтом, я направлю к проверенному специалисту',
  'Вы не готовы инвестировать в себя — и это нормально, просто мы не сработаемся',
]

export default function ForWhom() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Кому подойдёт наставничество — честно</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Я беру не всех. И это осознанный выбор — чтобы давать результат, а не «вести для
            галочки».
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-sm">
          <Photo
            src="/images/forwhom.jpg"
            alt="Женщина 35–45 лет работает за ноутбуком"
            ratio="16 / 10"
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.05} className="rounded-2xl bg-base/50 p-6 lg:p-8">
            <p className="font-heading text-lg font-semibold text-forest">Вам подойдёт, если:</p>
            <ul className="mt-4 flex flex-col gap-3">
              {fits.map((f) => (
                <li key={f} className="flex items-start gap-3 font-body text-body">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-graylight p-6 lg:p-8">
            <p className="font-heading text-lg font-semibold text-forest">Вам не подойдёт, если:</p>
            <ul className="mt-4 flex flex-col gap-3">
              {notFits.map((f) => (
                <li key={f} className="flex items-start gap-3 font-body text-body">
                  <X className="mt-1 h-5 w-5 shrink-0 text-forest/50" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="#signup-final">Проверить, подхожу ли я — на диагностику</Button>
        </Reveal>
      </Container>
    </section>
  )
}
