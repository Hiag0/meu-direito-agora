'use client'

import { useState } from 'react'
import { siteContent } from '@/data/content'
import { BenefitDetailsDialog } from './benefit-details-dialog'

type Benefit = (typeof siteContent.benefits)[number]

interface ServiceCardProps {
  benefit: Benefit
  index: number
}

export function ServiceCard({ benefit, index }: ServiceCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <article
        data-aos="fade-up"
        data-aos-delay={String(200 + index * 120)}
        data-aos-duration="1000"
        className="group flex h-full flex-col rounded-14 border border-white/80 bg-white/88 p-8 shadow-round-box backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark_border dark:bg-darklight/95"
      >
        <p className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-14 font-semibold uppercase tracking-[0.16em] text-primary">
          Serviço {index + 1}
        </p>
        <h3 className="pb-3 text-24 font-bold text-secondary dark:text-white">{benefit.title}</h3>
        <p className="flex-1 text-17 leading-relaxed text-SlateBlueText dark:text-darktext">{benefit.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="rounded-xl bg-gradient-to-r from-primary to-RegalBlue px-5 py-3 text-17 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Ver orientação
          </button>
          <a
            href={benefit.actionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-primary/40 bg-white/80 px-5 py-3 text-17 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/7"
          >
            Canal oficial ↗
          </a>
        </div>
      </article>

      <BenefitDetailsDialog benefit={benefit} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}

