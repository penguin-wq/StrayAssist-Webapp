import { ChevronDown } from 'lucide-react'
import { Button } from './button'
import { Container } from './container'

type HeroProps = {
  titleLines: string[]
  subtitle: string
  scrollTargetId?: string
  bgImage?: string
}

export function Hero({ 
  titleLines, 
  subtitle, 
  scrollTargetId = 'footer',
  bgImage = '/kirk.png'
}: HeroProps) {
  const handleScroll = () => {
    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      aria-labelledby="hero-title" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative flex min-h-[560px] flex-col items-center justify-center py-[64px] text-center md:min-h-[722px]">
        <h1
          id="hero-title"
          className="text-[44px] font-bold leading-[52px] tracking-[-0.03em] text-white md:text-[72px] md:leading-[86px]"
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        
        <p className="mt-[22px] max-w-[530px] text-[16px] font-semibold uppercase leading-[18px] tracking-[0.05em] text-gray-200 md:text-[20px] md:leading-[20px] text-balance">
          {subtitle}
        </p>
        
        <Button
          variant="soft"
          size="icon"
          aria-label="Scroll down"
          onClick={handleScroll}
          className="mt-[10px]"
        >
          <ChevronDown aria-hidden="true" className="size-[16px]" strokeWidth={2.25} />
        </Button>
      </Container>
    </section>
  )
}

export default Hero
