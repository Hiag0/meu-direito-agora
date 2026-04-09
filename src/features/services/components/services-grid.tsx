import { siteContent } from '@/data/content'
import { ServiceCard } from './service-card'

export function ServicesGrid() {
  return (
    <section id="beneficios" className="dark:bg-darkmode">
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block text-lg font-bold text-primary before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-primary/20 before:content-['']"
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
            className="mx-auto max-w-920 pt-4 text-lg font-normal text-SlateBlueText dark:text-darktext"
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

