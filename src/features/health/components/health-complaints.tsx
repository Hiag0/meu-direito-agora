import { siteContent } from '@/data/content'

export function HealthComplaints() {
  const { title, subtitle, intro, channels, manifestationTypes, regionalChannels, ouvidoriasByState } =
    siteContent.healthComplaints

  return (
    <section id="saude" className="relative bg-[#eef4fb] dark:bg-darklight/70">
      <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-15 font-semibold text-primary shadow-sm"
          >
            Canais de saúde e ouvidoria
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="pt-4">
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-medium text-SlateBlueText dark:text-darktext"
          >
            {subtitle}
          </p>
          <p className="mx-auto max-w-920 pt-4 text-17 text-SlateBlueText dark:text-darktext">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <article
              key={channel.name}
              data-aos="fade-up"
              data-aos-delay={String(220 + index * 120)}
              data-aos-duration="1000"
              className="rounded-14 border border-white/80 bg-white/90 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-dark_border dark:bg-darkmode/95"
            >
              <h3 className="text-22 font-bold text-secondary dark:text-white">{channel.name}</h3>
              <p className="mt-3 text-17 text-SlateBlueText dark:text-darktext">{channel.description}</p>
              <p className="mt-4 text-15 font-semibold text-primary">{channel.contact}</p>

              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-17 font-semibold text-primary transition-transform duration-300 hover:translate-x-1"
              >
                Acessar canal oficial ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-14 border border-white/80 bg-white/90 p-7 shadow-sm dark:border-dark_border dark:bg-darkmode/95">
            <h3 className="text-22 font-bold text-secondary dark:text-white">Tipos de manifestação</h3>
            <ul className="mt-4 space-y-3">
              {manifestationTypes.map((item) => (
                <li key={item.type} className="text-16 text-SlateBlueText dark:text-darktext">
                  <span className="font-semibold text-secondary dark:text-white">{item.type}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-14 border border-white/80 bg-white/90 p-7 shadow-sm dark:border-dark_border dark:bg-darkmode/95">
            <h3 className="text-22 font-bold text-secondary dark:text-white">Ouvidorias no Tocantins</h3>
            <ul className="mt-4 space-y-3">
              {regionalChannels.map((channel) => (
                <li key={channel.name}>
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-16 font-semibold text-primary transition-colors hover:text-RegalBlue"
                  >
                    {channel.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-14 border border-white/80 bg-white/90 p-7 shadow-sm dark:border-dark_border dark:bg-darkmode/95">
            <h3 className="text-22 font-bold text-secondary dark:text-white">{ouvidoriasByState.title}</h3>
            <p className="mt-4 text-16 text-SlateBlueText dark:text-darktext">{ouvidoriasByState.description}</p>
            <a
              href={ouvidoriasByState.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-16 font-semibold text-primary transition-colors hover:text-RegalBlue"
            >
              {ouvidoriasByState.actionLabel} ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

