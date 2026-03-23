import { siteContent } from '@/data/content'

export function HealthComplaints() {
  const { title, subtitle, channels } = siteContent.healthComplaints

  return (
    <section id="saude" className="bg-slate-100 dark:bg-darklight/70">
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block text-lg font-bold text-primary before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-primary/20 before:content-['']"
          >
            Denúncias e reclamações na saúde
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="pt-4">
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-normal text-SlateBlueText dark:text-darktext"
          >
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <article
              key={channel.name}
              data-aos="fade-up"
              data-aos-delay={String(220 + index * 120)}
              data-aos-duration="1000"
              className="rounded-14 border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-dark_border dark:bg-darkmode"
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
                Acessar canal ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
