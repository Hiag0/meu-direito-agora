import { siteContent } from '@/data/content'

export function InstagramHighlight() {
  const instagramUrl = siteContent.officialLinks.instagram

  return (
    <section id="instagram" className="dark:bg-darkmode">
      <div className="container">
        <article
          data-aos="fade-up"
          data-aos-delay="180"
          data-aos-duration="900"
          className="group relative overflow-hidden rounded-22 border border-white/80 bg-gradient-to-br from-white/95 via-white to-[#eef6ff] p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark_border dark:from-secondary dark:via-darklight dark:to-darkmode md:p-10"
        >
          <div className="pointer-events-none absolute -left-10 -top-14 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl transition-transform duration-500 group-hover:scale-110" />
          <div className="pointer-events-none absolute -bottom-16 -right-8 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl transition-transform duration-500 group-hover:scale-110" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-3 py-1 text-14 font-semibold text-pink-700 dark:border-pink-400/40 dark:bg-darkmode/60 dark:text-pink-300">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-pink-500" />
              Instagram oficial
            </p>

            <h2 className="pt-4 text-30 font-bold leading-tight text-secondary dark:text-white md:text-36">
              Conecte-se com o projeto
            </h2>

            <p className="pt-4 text-18 leading-relaxed text-SlateBlueText dark:text-darktext">
              Para acompanhar conteúdos, atualizações e orientações, siga nosso Instagram!
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg border border-pink-300 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-orange-500 px-6 py-3 text-16 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.9 1.85a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
              <span>Seguir no Instagram ↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
