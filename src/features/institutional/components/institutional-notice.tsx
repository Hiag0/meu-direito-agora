import { siteContent } from '@/data/content'

export function InstitutionalNotice() {
  return (
    <section id="aviso-importante" className="bg-white dark:bg-darkmode">
      <div className="container">
        <div className="mx-auto max-w-1000 rounded-22 border border-PeriwinkleBorder bg-slate-50 p-7 dark:border-dark_border dark:bg-darklight md:p-10">
          <p className="text-14 font-semibold uppercase tracking-[0.2em] text-primary">Aviso institucional</p>
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
