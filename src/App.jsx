import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import GuiltRelief from './components/sections/GuiltRelief'
import Solution from './components/sections/Solution'
import HowItWorks from './components/sections/HowItWorks'
import ForWhom from './components/sections/ForWhom'
import About from './components/sections/About'
import Cases from './components/sections/Cases'
import Pricing from './components/sections/Pricing'
import FaqFinalCta from './components/sections/FaqFinalCta'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <GuiltRelief />
        <Solution />
        <HowItWorks />
        <ForWhom />
        <About />
        <Cases />
        <Pricing />
        <FaqFinalCta />
      </main>
      <Footer />
    </div>
  )
}
