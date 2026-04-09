'use client'

import { useEffect } from 'react'
import { siteContent } from '@/data/content'

type Benefit = (typeof siteContent.benefits)[number]

interface BenefitDetailsDialogProps {
  benefit: Benefit
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BenefitDetailsDialog({ benefit, open, onOpenChange }: BenefitDetailsDialogProps) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onEscape)
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 p-4" onClick={() => onOpenChange(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${benefit.id}-title`}
        aria-describedby={`${benefit.id}-description`}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-22 bg-white p-6 shadow-2xl dark:bg-darkmode md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-PeriwinkleBorder pb-4 dark:border-dark_border">
          <div>
            <p className="text-14 font-semibold uppercase tracking-wide text-primary">Orientação informativa</p>
            <h3 id={`${benefit.id}-title`} className="mt-1 text-28 font-bold text-secondary dark:text-white">
              {benefit.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-PeriwinkleBorder p-2 text-SlateBlueText transition-colors hover:border-primary hover:text-primary dark:border-dark_border"
            aria-label="Fechar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <p id={`${benefit.id}-description`} className="mb-6 rounded-14 bg-IcyBreeze p-4 text-16 text-SlateBlueText dark:bg-darklight dark:text-darktext">
          Use esta orientação para organizar documentos, preencher com mais clareza e seguir para o canal oficial indicado.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-19 font-semibold text-secondary dark:text-white">Requisitos objetivos</h4>
            <ul className="space-y-2">
              {benefit.requirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-2 text-16 text-SlateBlueText dark:text-darktext">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-19 font-semibold text-secondary dark:text-white">Passo a passo sugerido</h4>
            <ol className="space-y-2">
              {benefit.steps.map((step, index) => (
                <li
                  key={`${benefit.id}-step-${index}`}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-16 text-SlateBlueText dark:bg-darklight dark:text-darktext"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-14 font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-6 rounded-14 bg-IcyBreeze p-4 dark:bg-darklight">
          <h4 className="mb-2 text-17 font-semibold text-secondary dark:text-white">Aviso importante</h4>
          <p className="text-16 text-SlateBlueText dark:text-darktext">{benefit.importantInfo}</p>
          <p className="mt-2 text-15 text-SlateBlueText dark:text-darktext">{siteContent.disclaimers.short}</p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href={benefit.actionLink} target="_blank" rel="noopener noreferrer" className="btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg">
            <span>Acessar canal oficial ↗</span>
          </a>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-lg border border-primary px-5 py-3 text-17 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
