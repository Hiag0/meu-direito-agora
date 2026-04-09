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
        className="group flex h-full flex-col rounded-14 border border-PeriwinkleBorder bg-white p-8 shadow-round-box transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark_border dark:bg-darklight"
      >
        <p className="mb-4 text-14 font-semibold uppercase tracking-[0.2em] text-primary">Serviço {index + 1}</p>
        <h3 className="pb-3 text-24 font-bold text-secondary dark:text-white">{benefit.title}</h3>
        <p className="flex-1 text-17 leading-relaxed text-SlateBlueText dark:text-darktext">{benefit.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="rounded-lg bg-primary px-5 py-3 text-17 font-medium text-white transition-colors hover:bg-RegalBlue"
          >
            Ver orientação
          </button>
          <a
            href={benefit.actionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-primary px-5 py-3 text-17 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Canal oficial ↗
          </a>
        </div>
      </article>

      <BenefitDetailsDialog benefit={benefit} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}

