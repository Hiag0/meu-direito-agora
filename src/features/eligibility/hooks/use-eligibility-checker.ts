'use client'

import { useState, useCallback } from 'react'
import { FLOWS, INITIAL_QUESTION, type SituationType, type EligibilityResult } from '../data/flows'
import { siteContent } from '@/data/content'

type CheckerStep = 1 | 2 | 3 | 'result'

interface CheckerState {
  step: CheckerStep
  situation: SituationType | null
  answer2: string | null
  result: EligibilityResult | null
}

const INITIAL_STATE: CheckerState = {
  step: 1,
  situation: null,
  answer2: null,
  result: null,
}

export function useEligibilityChecker() {
  const [state, setState] = useState<CheckerState>(INITIAL_STATE)

  const progressPercent = {
    1: 0,
    2: 33,
    3: 66,
    result: 100,
  }[state.step] ?? 0

  const currentQuestion = (() => {
    if (state.step === 1) return INITIAL_QUESTION
    if (!state.situation) return null

    const flow = FLOWS[state.situation]
    if (state.step === 2) return { text: flow.step2.questionText, options: flow.step2.options }
    if (state.step === 3) return { text: flow.step3.questionText, options: flow.step3.options }

    return null
  })()

  const selectSituation = useCallback((situation: SituationType) => {
    setState((prev) => ({ ...prev, step: 2, situation, answer2: null, result: null }))
  }, [])

  const selectAnswer2 = useCallback((answer: string) => {
    setState((prev) => {
      if (prev.situation === 'acidente' && answer === 'nao') {
        const immediateResult = FLOWS.acidente.results.nao?.nao

        return {
          ...prev,
          step: 'result',
          answer2: answer,
          result:
            immediateResult ??
            ({
              variant: 'not_eligible',
              title: 'Sem viabilidade inicial para auxílio-acidente',
              body: 'Sem acidente com sequela permanente, não há viabilidade inicial para este benefício nesta trilha.',
              actionLabel: 'Acessar Meu INSS',
              actionUrl: siteContent.officialLinks.meuInss,
            } satisfies EligibilityResult),
        }
      }

      if (prev.situation === 'maternidade' && answer === 'nao') {
        const immediateResult = FLOWS.maternidade.results.nao?.nao

        return {
          ...prev,
          step: 'result',
          answer2: answer,
          result:
            immediateResult ??
            ({
              variant: 'not_eligible',
              title: 'Sem viabilidade inicial para salário-maternidade',
              body: 'Sem evento compatível, não há viabilidade inicial para este benefício nesta trilha.',
              actionLabel: 'Acessar Meu INSS',
              actionUrl: siteContent.officialLinks.meuInss,
            } satisfies EligibilityResult),
        }
      }

      return { ...prev, step: 3, answer2: answer }
    })
  }, [])

  const selectAnswer3 = useCallback(
    (answer: string) => {
      if (!state.situation || !state.answer2) return

      const flow = FLOWS[state.situation]
      const result = flow.results[state.answer2]?.[answer]

      const fallback: EligibilityResult = {
        variant: 'depends',
        title: 'Caso depende de avaliação do órgão competente',
        body: 'A triagem não conseguiu concluir com segurança. Consulte o canal oficial para confirmação da situação.',
        actionLabel: 'Acessar canal oficial de manifestações',
        actionUrl: siteContent.officialLinks.falaBrHome,
      }

      setState((prev) => ({ ...prev, step: 'result', result: result ?? fallback }))
    },
    [state.situation, state.answer2],
  )

  const reset = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  const handleOptionSelect = useCallback(
    (value: string) => {
      if (state.step === 1) {
        selectSituation(value as SituationType)
        return
      }
      if (state.step === 2) {
        selectAnswer2(value)
        return
      }
      if (state.step === 3) {
        selectAnswer3(value)
      }
    },
    [state.step, selectSituation, selectAnswer2, selectAnswer3],
  )

  return {
    step: state.step,
    situation: state.situation,
    result: state.result,
    currentQuestion,
    progressPercent,
    handleOptionSelect,
    reset,
  }
}
