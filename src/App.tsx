import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Achievements } from './components/Achievements'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { WhyD2D } from './components/WhyD2D'
import { Training } from './components/Training'
import { PayScale } from './components/PayScale'
import { StickyCTA } from './components/StickyCTA'

export default function App() {
  return (
    <div className="font-sans text-ink">
      <Nav />
      <Hero />
      <WhyD2D />
      <Story />
      <Training />
      <Achievements />
      <Stats />
      <PayScale />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </div>
  )
}
