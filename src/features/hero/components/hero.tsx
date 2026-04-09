import { siteContent } from '@/data/content'

export function Hero() {
  const { hero, benefits, institutional } = siteContent

  return (
    <section id="inicio" className="bg-gradient-to-b from-IcyBreeze to-white pb-16 pt-14 dark:from-secondary dark:to-darkmode md:pb-20 md:pt-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0 inline-block text-lg font-bold text-ElectricAqua before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-ElectricAqua/20 before:content-['']"
            >
              {hero.eyebrow}
            </p>

            <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="py-5 text-secondary dark:!text-white">
              {hero.title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="pb-5 text-xl font-normal text-SlateBlueText dark:text-PaleCerulean"
            >
              {hero.subtitle}
            </p>

            <p className="pb-3 text-17 text-SlateBlueText dark:text-PaleCerulean">{institutional.howItWorks}</p>
            <p className="pb-8 text-17 text-SlateBlueText dark:text-PaleCerulean md:pb-10">{institutional.reinforcement}</p>

            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="flex flex-wrap items-center gap-4">
              <a href="#verificador" className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg">
                <span>{hero.primaryButton}</span>
              </a>
              <a href="#saude" className="btn_outline btn-2 hover-outline-slide-down rounded-lg">
                <span className="!border-primary !text-primary hover:!text-white dark:!border-white dark:!text-white dark:hover:!text-secondary">
                  {hero.secondaryButton}
                </span>
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000" className="hidden lg:col-span-5 lg:block">
            <div className="rounded-22 bg-white p-10 shadow-darkmd dark:bg-darklight">
              <h3 className="border-b border-PeriwinkleBorder pb-6 text-22 font-bold text-secondary dark:border-dark_border dark:text-white">
                Beneficios em destaque
              </h3>

              <div className="space-y-5 pt-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit.id} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-17 font-semibold leading-snug text-secondary dark:text-white">{benefit.title}</p>
                      <p className="text-15 text-SlateBlueText">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
