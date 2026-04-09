'use client'

import { siteContent } from '@/data/content'
import { cn } from '@/lib/utils'
import type { EligibilityResult, ResultVariant, SituationType } from '../data/flows'
import { useEligibilityChecker } from '../hooks/use-eligibility-checker'

export function EligibilityChecker() {
  const { step, situation, result, currentQuestion, progressPercent, handleOptionSelect, reset } = useEligibilityChecker()
  const checkerContent = siteContent.checker

  return (
    <section id="verificador" className="bg-IcyBreeze dark:bg-darklight">
      <div className="container">
        <div className="pb-8 text-center md:pb-14">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative z-0 inline-block text-lg font-bold text-primary before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-primary/20 before:content-['']"
          >
            Verificador de elegibilidade
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="pt-4">
            {checkerContent.sectionTitle}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-normal text-SlateBlueText dark:text-darktext"
          >
            {checkerContent.sectionSubtitle}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="mx-auto mb-5 max-w-632 rounded-14 border border-blue-200 bg-blue-50 p-4 text-15 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
        >
          {siteContent.disclaimers.short}
        </div>

        <div data-aos="fade-up" data-aos-delay="520" data-aos-duration="1000" className="mx-auto max-w-632">
          <div className="rounded-22 bg-white p-8 shadow-darkmd dark:bg-darkmode md:p-10">
            <ProgressBar percent={progressPercent} />

            <p className="mb-6 text-15 text-SlateBlueText">{step === 'result' ? 'Resultado' : `Passo ${step} de 3`}</p>

            {step !== 'result' && currentQuestion && (
              <QuestionStep questionText={currentQuestion.text} options={currentQuestion.options} onSelect={handleOptionSelect} />
            )}

            {step === 'result' && result && (
              <ResultStep
                result={result}
                situation={situation}
                onReset={reset}
                nextSteps={siteContent.checker.nextSteps}
                deadlines={siteContent.deadlines}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-PaleSkyBlu dark:bg-dark_border">
      <div className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out" style={{ width: `${percent}%` }} />
    </div>
  )
}

interface QuestionStepProps {
  questionText: string
  options: Array<{ label: string; value: string; icon: string }>
  onSelect: (value: string) => void
}

function QuestionStep({ questionText, options, onSelect }: QuestionStepProps) {
  return (
    <div>
      <p className="mb-5 text-19 font-semibold text-secondary dark:text-white">{questionText}</p>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              'flex items-center gap-4 rounded-14 border border-PeriwinkleBorder px-5 py-4 text-left',
              'bg-IcyBreeze text-17 font-medium text-secondary transition-all duration-300',
              'hover:border-primary hover:bg-primary/5 hover:shadow-round-box',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              'active:scale-[0.99] dark:border-dark_border dark:bg-darklight dark:text-white',
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold shadow-round-box dark:bg-darkmode">
              {opt.icon}
            </span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

interface ResultStepProps {
  result: EligibilityResult
  situation: SituationType | null
  onReset: () => void
  nextSteps: readonly string[]
  deadlines: readonly string[]
}

function ResultStep({ result, situation, onReset, nextSteps, deadlines }: ResultStepProps) {
  const variantStyles: Record<ResultVariant, { wrap: string; title: string; body: string }> = {
    possible: {
      wrap: 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30',
      title: 'text-emerald-800 dark:text-emerald-300',
      body: 'text-emerald-700 dark:text-emerald-400',
    },
    not_eligible: {
      wrap: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30',
      title: 'text-amber-800 dark:text-amber-300',
      body: 'text-amber-700 dark:text-amber-400',
    },
    depends: {
      wrap: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30',
      title: 'text-blue-800 dark:text-blue-300',
      body: 'text-blue-700 dark:text-blue-400',
    },
    missing_info: {
      wrap: 'border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30',
      title: 'text-rose-800 dark:text-rose-300',
      body: 'text-rose-700 dark:text-rose-400',
    },
  }

  const style = variantStyles[result.variant]
  const commonDocs = siteContent.documents.common
  const specificDocs = situation ? siteContent.documents.bySituation[situation] : []

  return (
    <div className="space-y-6">
      <div className={cn('rounded-14 border p-6', style.wrap)}>
        <p className={cn('mb-3 text-19 font-bold', style.title)}>{result.title}</p>
        <p className={cn('text-17 leading-relaxed', style.body)}>{result.body}</p>

        {result.actionUrl && (
          <a
            href={result.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('mt-4 inline-flex items-center gap-1 text-17 font-semibold underline-offset-2 hover:underline', style.title)}
          >
            {result.actionLabel} ↗
          </a>
        )}
      </div>

      <div className="rounded-14 border border-PeriwinkleBorder bg-slate-50 p-5 dark:border-dark_border dark:bg-darklight">
        <h3 className="mb-3 text-18 font-semibold text-secondary dark:text-white">Proximo passo sugerido</h3>
        <ol className="space-y-2 text-16 text-SlateBlueText dark:text-darktext">
          {nextSteps.map((step, index) => (
            <li key={`${step}-${index}`} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-14 font-semibold text-primary">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-14 border border-PeriwinkleBorder p-5 dark:border-dark_border">
        <h3 className="mb-3 text-18 font-semibold text-secondary dark:text-white">Checklist de documentos</h3>
        <ul className="space-y-2 text-16 text-SlateBlueText dark:text-darktext">
          {commonDocs.map((doc) => (
            <li key={doc} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <span>{doc}</span>
            </li>
          ))}
          {specificDocs.map((doc) => (
            <li key={doc} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-15 text-SlateBlueText dark:text-darktext">{siteContent.documents.warning}</p>
      </div>

      <div className="rounded-14 border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="mb-3 text-18 font-semibold text-amber-800 dark:text-amber-300">Prazos importantes</h3>
        <ul className="space-y-2 text-16 text-amber-700 dark:text-amber-200">
          {deadlines.map((deadline) => (
            <li key={deadline} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
              <span>{deadline}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-14 border border-blue-200 bg-blue-50 p-4 text-15 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
        <p className="font-semibold">Aviso importante</p>
        <p className="mt-1">{siteContent.disclaimers.short}</p>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-primary px-6 py-3 text-17 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Recomeçar
        </button>
      </div>
    </div>
  )
}
