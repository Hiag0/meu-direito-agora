import { QUICK_LINKS, type QuickLink } from '../data/quick-links'

const DOT_BG: Record<QuickLink['color'], string> = {
  green: 'bg-emerald-500',
  blue:  'bg-blue-500',
  amber: 'bg-amber-500',
  red:   'bg-red-500',
}

const DOT_RING: Record<QuickLink['color'], string> = {
  green: 'ring-emerald-200 dark:ring-emerald-900',
  blue:  'ring-blue-200 dark:ring-blue-900',
  amber: 'ring-amber-200 dark:ring-amber-900',
  red:   'ring-red-200 dark:ring-red-900',
}

export function QuickLinksGrid() {
  return (
    <section id="portais" className="dark:bg-darkmode">
      <div className="container">

        {/* Section header */}
        <div className="text-center md:pb-14 pb-8">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block text-primary text-lg font-bold
                       before:absolute before:content-[''] before:bg-primary/20
                       before:w-full before:h-2 before:-z-10 before:bottom-0"
          >
            Acesso direto
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="pt-4"
          >
            Portais Oficiais
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-lg text-SlateBlueText dark:text-darktext font-normal max-w-920 mx-auto pt-4"
          >
            Links diretos para os serviços governamentais — sem intermediários.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {QUICK_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={String(200 + index * 100)}
              data-aos-duration="1000"
              className="group rounded-14 shadow-round-box dark:shadow-darkmd
                         bg-white dark:bg-darklight p-8
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                         block"
            >
              {/* Colored indicator */}
              <span className={`inline-flex h-5 w-5 rounded-full ring-4 mb-5 ${DOT_BG[link.color]} ${DOT_RING[link.color]}`} />

              {/* Name */}
              <h3 className="text-22 font-bold text-secondary dark:text-white pb-2">
                {link.name}
              </h3>

              {/* Domain */}
              <p className="text-15 text-SlateBlueText truncate">
                {new URL(link.url).hostname.replace('www.', '')}
              </p>

              {/* Arrow */}
              <span className="mt-5 inline-block text-primary text-xl transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
