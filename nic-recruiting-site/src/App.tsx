import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Stats } from './components/Stats'
import { CTA } from './components/CTA'

export default function App() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <Story />
      <Stats />
      <CTA />
    </div>
  )
}
