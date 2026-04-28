import { siteContent } from '@/data/content'
import { QUICK_LINKS, type QuickLink } from '../data/quick-links'

const DOT_BG: Record<QuickLink['color'], string> = {
  green: 'bg-emerald-500',
  blue: 'bg-blue-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
}

const DOT_RING: Record<QuickLink['color'], string> = {
  green: 'ring-emerald-200 dark:ring-emerald-900',
  blue: 'ring-blue-200 dark:ring-blue-900',
  amber: 'ring-amber-200 dark:ring-amber-900',
  red: 'ring-red-200 dark:ring-red-900',
}

export function QuickLinksGrid() {
  return (
    <section id="portais" className="relative dark:bg-darkmode">
      <div className="pointer-events-none absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-15 font-semibold text-primary shadow-sm"
          >
            Acesso direto
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="pt-4">
            Portais oficiais
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-medium text-SlateBlueText dark:text-darktext"
          >
            Links diretos para serviços governamentais, sem intermediários.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {QUICK_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={String(200 + index * 100)}
              data-aos-duration="1000"
              className="group block w-full rounded-14 border border-white/80 bg-white/90 p-8 shadow-round-box backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] dark:border-dark_border dark:bg-darklight/95 dark:shadow-darkmd"
            >
              <span className={`mb-5 inline-flex h-5 w-5 rounded-full ring-4 ${DOT_BG[link.color]} ${DOT_RING[link.color]}`} />

              <h3 className="pb-2 text-22 font-bold text-secondary dark:text-white">{link.name}</h3>

              <p className="truncate text-15 text-SlateBlueText">{new URL(link.url).hostname.replace('www.', '')}</p>

              <span className="mt-5 inline-block text-xl text-primary transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-14 border border-rose-200/80 bg-white/90 p-7 shadow-sm dark:border-rose-900 dark:bg-rose-950/20">
            <h3 className="text-22 font-bold text-rose-900 dark:text-rose-200">Erros comuns que atrasam pedidos</h3>
            <ul className="mt-4 space-y-2 text-16 text-rose-800 dark:text-rose-200">
              {siteContent.commonErrors.map((error) => (
                <li key={error} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-rose-500" />
                  <span>{error}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-14 border border-amber-200/80 bg-white/90 p-7 shadow-sm dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="text-22 font-bold text-amber-900 dark:text-amber-200">Prazos importantes</h3>
            <ul className="mt-4 space-y-2 text-16 text-amber-800 dark:text-amber-200">
              {siteContent.deadlines.map((deadline) => (
                <li key={deadline} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{deadline}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-14 border border-blue-200/80 bg-white/90 p-5 text-16 text-blue-800 shadow-sm dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
          {siteContent.qualityTip}
        </div>
      </div>
    </section>
  )
}

