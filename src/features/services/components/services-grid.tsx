import { siteContent } from '@/data/content'
import { ServiceCard } from './service-card'

export function ServicesGrid() {
  return (
    <section id="beneficios" className="relative dark:bg-darkmode">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 to-transparent dark:from-darkmode/50" />
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-15 font-semibold text-primary shadow-sm"
          >
            Benefícios previdenciários
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="pt-4">
            Orientação prática sem promessas
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-medium text-SlateBlueText dark:text-darktext"
          >
            Selecione um benefício para ver requisitos objetivos, checklist e passo a passo no canal oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.benefits.map((benefit, index) => (
            <ServiceCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

