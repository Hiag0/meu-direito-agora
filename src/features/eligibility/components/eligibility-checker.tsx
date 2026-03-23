'use client'

import { useEligibilityChecker } from '../hooks/use-eligibility-checker'
import { cn } from '@/lib/utils'
import type { EligibilityResult } from '../data/flows'

export function EligibilityChecker() {
  const { step, result, currentQuestion, progressPercent, handleOptionSelect, reset } = useEligibilityChecker()

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
            Descubra seu benefício
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="mx-auto max-w-920 pt-4 text-lg font-normal text-SlateBlueText dark:text-darktext"
          >
            Responda 3 perguntas rápidas e veja qual benefício pode se aplicar ao seu caso, gratuito e sem cadastro.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="mx-auto max-w-632">
          <div className="rounded-22 bg-white p-8 shadow-darkmd dark:bg-darkmode md:p-10">
            <ProgressBar percent={progressPercent} />

            <p className="mb-6 text-15 text-SlateBlueText">{step === 'result' ? 'Resultado' : `Passo ${step} de 3`}</p>

            {step !== 'result' && currentQuestion && (
              <QuestionStep
                questionText={currentQuestion.text}
                options={currentQuestion.options}
                onSelect={handleOptionSelect}
              />
            )}

            {step === 'result' && result && <ResultStep result={result} onReset={reset} />}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-PaleSkyBlu dark:bg-dark_border">
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
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
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-round-box dark:bg-darkmode">
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
  onReset: () => void
}

function ResultStep({ result, onReset }: ResultStepProps) {
  const variantStyles: Record<string, { wrap: string; title: string; body: string }> = {
    success: {
      wrap: 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30',
      title: 'text-emerald-800 dark:text-emerald-300',
      body: 'text-emerald-700 dark:text-emerald-400',
    },
    warning: {
      wrap: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30',
      title: 'text-amber-800 dark:text-amber-300',
      body: 'text-amber-700 dark:text-amber-400',
    },
    info: {
      wrap: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30',
      title: 'text-blue-800 dark:text-blue-300',
      body: 'text-blue-700 dark:text-blue-400',
    },
  }

  const s = variantStyles[result.variant]

  return (
    <div>
      <div className={cn('rounded-14 border p-6', s.wrap)}>
        <p className={cn('mb-3 text-19 font-bold', s.title)}>{result.title}</p>
        <p className={cn('text-17 leading-relaxed', s.body)}>{result.body}</p>

        {result.actionUrl && (
          <a
            href={result.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('mt-4 inline-flex items-center gap-1 text-17 font-semibold underline-offset-2 hover:underline', s.title)}
          >
            {result.actionLabel}
          </a>
        )}
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
