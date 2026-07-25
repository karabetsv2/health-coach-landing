import { useState } from 'react'
import Container from '../Container'
import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import LeadForm from '../LeadForm'
import { ChevronDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'У меня нет времени на готовку. Это подойдёт?',
    a: 'Да. Я составляю план из обычных продуктов «Пятёрочки» и «Магнита». Готовка занимает 15–20 минут. Рецепты простые, их ест вся семья — вам не нужно готовить «отдельно себе диетическое».',
  },
  {
    q: 'Я уже перепробовала все диеты. Чем это отличается?',
    a: 'Это не диета с жёсткими запретами. Это гибкая система, которая корректируется каждые 2 недели под ваш ритм жизни. Мы созваниваемся каждую неделю и находим причины срывов — не ругаемся, а разбираемся.',
  },
  {
    q: 'Сколько точно я похудею?',
    a: 'В среднем клиентки теряют 5–15 кг за 3 месяца. Точный результат зависит от исходного веса, возраста, гормонов и соблюдения рекомендаций. На диагностике я смогу назвать более точные цифры под вашу ситуацию.',
  },
  {
    q: 'А если я сорвусь?',
    a: 'Срывы — это нормально. Мы не ругаемся и не «начинаем с понедельника». Мы находим причину срыва и корректируем план. Я поддерживаю вас в моменты слабости — для этого и нужен чат.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'Точную стоимость и формат оплаты (полная оплата или рассрочка на 3 месяца) мы обсуждаем на диагностике — индивидуально, под вашу ситуацию. Первая консультация бесплатна и ни к чему не обязывает.',
  },
  {
    q: 'Чем это отличается от марафонов и курсов?',
    a: 'В марафоне вы — одна из 200 человек в общем чате. Куратор отвечает шаблонно. Здесь вы работаете 1 на 1 со мной. Я знаю ваше имя, вашу ситуацию, ваши слабости. Мы созваниваемся каждую неделю.',
  },
  {
    q: 'Что будет на бесплатной диагностике?',
    a: '30 минут в Zoom. Я анализирую ваш текущий рацион, нахожу 1–2 главные ошибки, которые мешают худеть именно вам, и даю 3 конкретные рекомендации на неделю. Плюс чек-лист здоровых продуктов. Это ни к чему не обязывает — вы получаете пользу в любом случае.',
  },
]

const finalPoints = [
  'Анализ вашего текущего рациона',
  '3 конкретные рекомендации на неделю',
  'Чек-лист здоровых продуктов',
]

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-forest/10 py-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base font-semibold text-forest sm:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-forest transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-3 font-body text-body text-forest/80">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqFinalCta() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <section className="bg-graylight py-14 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 lg:text-h2-lg">Частые вопросы — отвечаю честно</h2>
            <p className="mt-4 font-body text-body text-forest/80">
              Если вашего вопроса нет в списке — задайте его на диагностике.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 lg:p-8">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-forest py-14 lg:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="text-h2 text-white lg:text-h2-lg">
              Готовы перестать срываться и начать худеть?
            </h2>
            <p className="mt-4 font-body text-body text-white/85">
              Запишитесь на бесплатный разбор рациона — 30 минут в Zoom. Мы проанализируем ваше
              текущее питание, найдём 1–2 главные ошибки, которые мешают худеть, и я дам вам 3
              конкретные рекомендации на неделю.
            </p>
            <p className="mt-4 font-body text-body text-white/85">
              Это ни к чему не обязывает. Вы получите пользу даже если решите не работать со мной.
            </p>
            <p className="mt-6 font-heading font-semibold text-white">
              Что вы получите на диагностике:
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {finalPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 font-body text-body text-white/90">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-amber" strokeWidth={2.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-block rounded-full bg-amber/20 px-4 py-1.5 font-body text-sm font-semibold text-amber">
              Осталось 2 места на диагностику на этой неделе.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ImagePlaceholder
              label="Фото: эксперт (Мария) в Zoom-окне, приглашающий жест. 1920×1080"
              ratio="16 / 9"
              className="border-white/25 bg-white/10 [&_span]:text-white/70 [&_svg]:text-white/70"
            />
            <div className="mt-8 rounded-2xl bg-white p-6">
              <LeadForm note={null} id="signup-final" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
