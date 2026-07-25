import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import Button from '../Button'

const points = [
  'Вечером, когда дети уснули, вы набрасываетесь на сладкое или бутерброды. Это единственный способ выдохнуть после работы и быта.',
  'Вы перепробовали всё: кето, интервальное голодание, 1200 ккал, гречку с курицей. Но вес возвращается, как только заканчивается диета.',
  'Вы чувствуете вину за каждый съеденный кусок и думаете: «У меня просто нет силы воли, я слабая».',
  'Гардероб трещит по швам. Приходится прятать тело в бесформенную одежду и избегать фото.',
  'Вы устали думать, что приготовить, и боитесь, что «правильное питание» — это часами стоять у плиты с киноа и авокадо.',
  'Врачи говорят «надо худеть», но не дают понятной инструкции, как это сделать с вашим графиком и возрастом.',
]

export default function Problem() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <ImagePlaceholder
            label="Вертикальное фото: женщина у зеркала (с отражением, задумчивое настроение, без фейкового «до/после»). 800×1000"
            ratio="4 / 5"
            className="mx-auto max-w-sm"
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <h2 className="text-h2 lg:text-h2-lg">Узнаёте себя хотя бы в двух пунктах?</h2>
          <p className="mt-4 font-body text-body text-forest/80">
            Если да — вы не одна. И дело точно не в вашей «слабой силе воли».
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-body text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Button href="#signup-final" className="mt-8">
            Да, узнала себя — хочу разобраться
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
