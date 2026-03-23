'use client'

import { useState, useCallback } from 'react'
import {
  FLOWS,
  INITIAL_QUESTION,
  type SituationType,
  type EligibilityResult,
} from '../data/flows'

// ---------------------------------------------------------------
// TIPOS DO ESTADO INTERNO DO HOOK
// ---------------------------------------------------------------
type CheckerStep = 1 | 2 | 3 | 'result'

interface CheckerState {
  step:      CheckerStep
  situation: SituationType | null
  answer2:   string | null
  result:    EligibilityResult | null
}

const INITIAL_STATE: CheckerState = {
  step:      1,
  situation: null,
  answer2:   null,
  result:    null,
}

/**
 * useEligibilityChecker — Hook customizado
 *
 * PADRÃO: Custom Hook para isolamento de lógica de negócio.
 * Por que um hook e não lógica dentro do componente?
 *
 * 1. TESTABILIDADE: Posso testar a lógica sem montar a UI
 * 2. REUTILIZAÇÃO: Qualquer componente pode usar este fluxo
 * 3. SEPARAÇÃO: O componente cuida de "como parece", o hook de "como funciona"
 * 4. LEGIBILIDADE: Componentes ficam enxutos e fáceis de ler
 *
 * useCallback: memoriza funções para evitar recriação a cada render.
 * Sem useCallback, cada renderização criaria uma nova função — ineficiente.
 */
export function useEligibilityChecker() {
  const [state, setState] = useState<CheckerState>(INITIAL_STATE)

  // Calcula quantos % da barra de progresso preencher
  const progressPercent = {
    1:       0,
    2:       33,
    3:       66,
    result: 100,
  }[state.step] ?? 0

  // Pergunta e opções atuais (derivadas do estado — sem estado duplicado)
  const currentQuestion = (() => {
    if (state.step === 1) return INITIAL_QUESTION
    if (!state.situation) return null
    const flow = FLOWS[state.situation]
    if (state.step === 2) return { text: flow.step2.questionText, options: flow.step2.options }
    if (state.step === 3) return { text: flow.step3.questionText, options: flow.step3.options }
    return null
  })()

  /**
   * Avança para o passo 2, guardando a situação escolhida
   */
  const selectSituation = useCallback((situation: SituationType) => {
    setState((prev) => ({ ...prev, step: 2, situation }))
  }, [])

  /**
   * Avança para o passo 3, guardando a resposta do passo 2
   */
  const selectAnswer2 = useCallback((answer: string) => {
    setState((prev) => ({ ...prev, step: 3, answer2: answer }))
  }, [])

  /**
   * Finaliza o fluxo, calculando e guardando o resultado
   */
  const selectAnswer3 = useCallback(
    (answer: string) => {
      if (!state.situation || !state.answer2) return

      const flow   = FLOWS[state.situation]
      const result = flow.results[state.answer2]?.[answer]

      // Fallback: se não encontrou resultado específico
      const finalResult: EligibilityResult = result ?? {
        variant:     'info',
        title:       'Consulte um especialista',
        body:        'Seu caso tem particularidades. Recomendamos consultar o CRAS ou um advogado previdenciário para uma avaliação personalizada.',
        actionLabel: 'Encontrar o CRAS →',
        actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
      }

      setState((prev) => ({ ...prev, step: 'result', result: finalResult }))
    },
    [state.situation, state.answer2],
  )

  /**
   * Reinicia o verificador do zero
   */
  const reset = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  /**
   * Handler unificado — decide qual função chamar baseado no step atual
   * Simplifica a interface que o componente precisa usar
   */
  const handleOptionSelect = useCallback(
    (value: string) => {
      if (state.step === 1) selectSituation(value as SituationType)
      else if (state.step === 2) selectAnswer2(value)
      else if (state.step === 3) selectAnswer3(value)
    },
    [state.step, selectSituation, selectAnswer2, selectAnswer3],
  )

  return {
    // Estado
    step:            state.step,
    result:          state.result,
    currentQuestion,
    progressPercent,
    // Ações
    handleOptionSelect,
    reset,
  }
}
