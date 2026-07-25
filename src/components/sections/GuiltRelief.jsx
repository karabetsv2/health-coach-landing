import Container from '../Container'
import Reveal from '../Reveal'
import SystemVsSlip from '../illustrations/SystemVsSlip'
import Button from '../Button'

const paragraphs = [
  'Жёсткие ограничения на 1200 ккал вызывают срывы — это не слабость характера, это физиология. Организм включает режим выживания и требует энергии.',
  'Шаблоны из интернета не учитывают ваш возраст, гормоны, стресс и ритм жизни. То, что работало в 25, в 40 уже ломает здоровье.',
  'Когда вы устали после работы и детей, у вас просто нет ресурса готовить сложные блюда по 2 часа. И вы срываетесь на быстрое — это нормально.',
  'Без поддержки и корректировок любая диета превращается в борьбу с собой. И вы проигрываете эту борьбу не потому, что плохая. А потому что система была неправильная.',
]

export default function GuiltRelief() {
  return (
    <section className="bg-beige py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 lg:text-h2-lg">Срывы — это не ваша слабость. Это ошибка системы.</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Вам годами говорили «возьми себя в руки». Но правда в другом.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <SystemVsSlip />
        </Reveal>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-5">
          {paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.05 * i}>
              <p className="font-body text-body text-forest/80">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-base/60 p-6 text-center">
            <p className="font-heading text-lg font-semibold text-forest">
              Мы не боремся с вашей силой воли. Мы перестраиваем систему так, чтобы срывы
              прекратились сами собой.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.25} className="mt-8 text-center">
          <Button href="#signup-final">Хочу систему, а не очередную диету</Button>
        </Reveal>
      </Container>
    </section>
  )
}
