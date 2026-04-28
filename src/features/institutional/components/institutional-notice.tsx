import { siteContent } from '@/data/content'

export function InstitutionalNotice() {
  return (
    <section id="aviso-importante" className="dark:bg-darkmode">
      <div className="container">
        <div className="mx-auto max-w-1000 rounded-22 border border-white/90 bg-white/90 p-7 shadow-darkmd backdrop-blur dark:border-dark_border dark:bg-darklight/90 md:p-10">
          <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-14 font-semibold uppercase tracking-[0.15em] text-primary">
            Aviso institucional
          </p>
          <h2 className="pt-3 text-32 font-bold text-secondary dark:text-white">Uso informativo e educativo</h2>

          <div className="space-y-4 pt-5 text-17 leading-relaxed text-SlateBlueText dark:text-darktext">
            {siteContent.disclaimers.longParagraphs.map((paragraph, index) => (
              <p key={`disclaimer-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
