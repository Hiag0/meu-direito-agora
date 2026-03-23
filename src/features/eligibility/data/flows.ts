/**
 * flows.ts — Dados e tipos do Verificador de Elegibilidade
 *
 * PADRÃO: Single Source of Truth (uma única fonte de verdade).
 * Toda a lógica de perguntas e resultados vive aqui.
 * O hook e os componentes apenas consomem estes dados.
 */

// ---------------------------------------------------------------
// TIPOS — Contratos explícitos com TypeScript
// ---------------------------------------------------------------

export type ResultVariant = 'success' | 'warning' | 'info'
export type SituationType = 'deficiencia' | 'idoso' | 'doenca' | 'sus'

export interface Option {
  label: string
  value: string
  icon:  string
}

export interface EligibilityResult {
  variant:     ResultVariant
  title:       string
  body:        string
  actionLabel: string
  actionUrl?:  string
}

export interface FlowStep {
  questionText: string
  options:      Option[]
}

export interface Flow {
  step2: FlowStep
  step3: FlowStep
  // Mapa: results[resposta_q2][resposta_q3] = resultado
  results: Record<string, Record<string, EligibilityResult>>
}

// ---------------------------------------------------------------
// PERGUNTA INICIAL — comum para todos os fluxos
// ---------------------------------------------------------------
export const INITIAL_QUESTION: { text: string; options: Option[] } = {
  text: 'Qual é a sua situação principal?',
  options: [
    { label: 'Tenho deficiência física, intelectual ou sensorial', value: 'deficiencia', icon: '♿' },
    { label: 'Estou doente e não consigo trabalhar',               value: 'doenca',      icon: '🤒' },
    { label: 'Tenho 65 anos ou mais',                              value: 'idoso',       icon: '👴' },
    { label: 'Problema com atendimento no SUS',                    value: 'sus',         icon: '🏥' },
  ],
}

// ---------------------------------------------------------------
// FLUXOS — Árvore de decisão completa
// ---------------------------------------------------------------
export const FLOWS: Record<SituationType, Flow> = {

  deficiencia: {
    step2: {
      questionText: 'Qual é a renda familiar mensal por pessoa da casa?',
      options: [
        { label: 'Até R$ 218 por pessoa',          value: 'baixa', icon: '✓' },
        { label: 'Entre R$ 218 e R$ 436',           value: 'media', icon: '~' },
        { label: 'Acima de R$ 436',                 value: 'alta',  icon: '✕' },
      ],
    },
    step3: {
      questionText: 'A deficiência impede atividades da vida independente ou do trabalho?',
      options: [
        { label: 'Sim, de longa duração (2+ anos)', value: 'sim_long',  icon: '✓' },
        { label: 'Sim, mas por período curto',       value: 'sim_curto', icon: '~' },
        { label: 'Não tenho certeza',               value: 'nao_sabe',  icon: '?' },
      ],
    },
    results: {
      baixa: {
        sim_long: {
          variant:     'success',
          title:       'Você provavelmente tem direito ao BPC/LOAS',
          body:        'Renda baixa + deficiência de longa duração: seu caso se encaixa nos critérios principais. Procure uma agência do INSS com documentos de identidade, comprovante de renda familiar e laudo médico.',
          actionLabel: 'Solicitar BPC online →',
          actionUrl:   'https://meu.inss.gov.br',
        },
        sim_curto: {
          variant:     'info',
          title:       'Pode haver direito — avalie com especialista',
          body:        'Sua deficiência pode não se enquadrar como "de longa duração" (mínimo 2 anos). Mas um perito do INSS avaliará seu caso. Vale solicitar a análise.',
          actionLabel: 'Agendar perícia no INSS →',
          actionUrl:   'https://meu.inss.gov.br',
        },
        nao_sabe: {
          variant:     'info',
          title:       'Consulte um assistente social',
          body:        'O CRAS (Centro de Referência de Assistência Social) da sua cidade pode te ajudar a entender se sua situação se qualifica para o BPC/LOAS — gratuitamente.',
          actionLabel: 'Saiba o que é o CRAS →',
          actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
        },
      },
      media: {
        sim_long: {
          variant:     'warning',
          title:       'Atenção: a renda pode ser um obstáculo',
          body:        'Para o BPC, a renda por pessoa da casa precisa ser de até 1/4 do salário mínimo (R$ 359). Sua renda pode estar acima desse limite. Consulte um assistente social — há exceções.',
          actionLabel: 'Ver exceções na renda →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
        sim_curto: {
          variant:     'warning',
          title:       'Dois pontos a avaliar',
          body:        'Tanto a renda quanto o prazo da deficiência podem ser obstáculos. Recomendamos consultar o CRAS da sua cidade para uma avaliação individual gratuita.',
          actionLabel: 'Encontrar o CRAS →',
          actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
        },
        nao_sabe: {
          variant:     'warning',
          title:       'Consulte o CRAS antes de desistir',
          body:        'O assistente social do CRAS pode avaliar seu caso gratuitamente e identificar caminhos que você pode não conhecer.',
          actionLabel: 'O que é o CRAS →',
          actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
        },
      },
      alta: {
        sim_long: {
          variant:     'info',
          title:       'BPC/LOAS possivelmente não se aplica',
          body:        'A renda está acima do limite de R$ 218. Mas verifique com um assistente social — despesas com saúde podem ser deduzidas do cálculo.',
          actionLabel: 'Ver exceções de renda →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
        sim_curto: {
          variant:     'info',
          title:       'Consulte um assistente social',
          body:        'Existem situações especiais onde despesas com saúde reduzem a renda considerada. Vale uma análise profissional.',
          actionLabel: 'Entender o cálculo →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
        nao_sabe: {
          variant:     'info',
          title:       'Consulte um assistente social',
          body:        'Mesmo com renda acima do limite, consulte um assistente social para análise individual do seu caso.',
          actionLabel: 'Encontrar o CRAS →',
          actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
        },
      },
    },
  },

  idoso: {
    step2: {
      questionText: 'A renda familiar mensal por pessoa da casa é:',
      options: [
        { label: 'Até R$ 218 por pessoa', value: 'baixa', icon: '✓' },
        { label: 'Entre R$ 218 e R$ 436', value: 'media', icon: '~' },
        { label: 'Acima de R$ 436',       value: 'alta',  icon: '✕' },
      ],
    },
    step3: {
      questionText: 'Você tem CPF em situação regular?',
      options: [
        { label: 'Sim',               value: 'sim', icon: '✓' },
        { label: 'Não / Irregular',   value: 'nao', icon: '✕' },
      ],
    },
    results: {
      baixa: {
        sim: {
          variant:     'success',
          title:       'Você provavelmente tem direito ao BPC para idosos',
          body:        '65 anos ou mais + renda baixa + CPF regular: você se enquadra nos critérios do BPC para idosos. Procure uma agência do INSS com RG, CPF e comprovante de renda familiar.',
          actionLabel: 'Solicitar BPC para idoso →',
          actionUrl:   'https://meu.inss.gov.br',
        },
        nao: {
          variant:     'warning',
          title:       'Regularize o CPF primeiro',
          body:        'O CPF é obrigatório para qualquer benefício federal. Regularize gratuitamente pelo site da Receita Federal ou em agências dos Correios.',
          actionLabel: 'Regularizar CPF →',
          actionUrl:   'https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf',
        },
      },
      media: {
        sim: {
          variant:     'warning',
          title:       'A renda pode impedir o benefício',
          body:        'O limite é de R$ 218 por pessoa da família. Sua situação está no limite. Consulte o CRAS — há exceções para idosos com despesas de saúde elevadas.',
          actionLabel: 'Ver exceções →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
        nao: {
          variant:     'warning',
          title:       'Regularize o CPF e consulte o CRAS',
          body:        'Dois pontos a resolver: regularizar o CPF e verificar se a renda se enquadra. O CRAS da sua cidade orienta gratuitamente.',
          actionLabel: 'O que é o CRAS →',
          actionUrl:   'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
        },
      },
      alta: {
        sim: {
          variant:     'info',
          title:       'Renda acima do limite',
          body:        'A renda está acima do máximo para o BPC. Verifique se há despesas com saúde ou medicamentos que possam ser descontados do cálculo.',
          actionLabel: 'Ver cálculo de renda →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
        nao: {
          variant:     'info',
          title:       'Regularize o CPF e verifique',
          body:        'Mesmo com renda acima do limite, regularize o CPF e consulte um assistente social para análise individual.',
          actionLabel: 'Regularizar CPF →',
          actionUrl:   'https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf',
        },
      },
    },
  },

  doenca: {
    step2: {
      questionText: 'Você tem carteira assinada ou pagou INSS nos últimos 12 meses?',
      options: [
        { label: 'Sim, tenho contribuições',  value: 'sim', icon: '✓' },
        { label: 'Não, trabalho informal',    value: 'nao', icon: '✕' },
        { label: 'Sou MEI',                   value: 'mei', icon: '~' },
      ],
    },
    step3: {
      questionText: 'Seu médico diz que você ficará incapaz de trabalhar por quantos dias?',
      options: [
        { label: 'Mais de 15 dias', value: 'longo', icon: '✓' },
        { label: '15 dias ou menos', value: 'curto', icon: '~' },
      ],
    },
    results: {
      sim: {
        longo: {
          variant:     'success',
          title:       'Você provavelmente tem direito ao Auxílio-doença',
          body:        'Com contribuições ao INSS e incapacidade por mais de 15 dias, você pode solicitar o Auxílio-doença. Agende perícia médica pelo Meu INSS com seu laudo médico.',
          actionLabel: 'Agendar pelo Meu INSS →',
          actionUrl:   'https://meu.inss.gov.br',
        },
        curto: {
          variant:     'info',
          title:       'Auxílio-doença começa no 16º dia',
          body:        'Para afastamentos de até 15 dias, quem paga é o empregador. O INSS entra a partir do 16º dia. Se você se recuperar antes, não há benefício do INSS.',
          actionLabel: 'Entender mais →',
          actionUrl:   'https://www.gov.br/inss/pt-br/saiba-mais/seus-direitos-e-deveres/calculos-e-valores/calculo-da-renda-mensal-inicial-rmi-dos-beneficios',
        },
      },
      nao: {
        longo: {
          variant:     'warning',
          title:       'Trabalho informal dificulta o acesso',
          body:        'Sem contribuições ao INSS, não há direito ao Auxílio-doença padrão. É possível se filiação como Segurado Facultativo em alguns casos. Consulte o INSS.',
          actionLabel: 'Ver opções →',
          actionUrl:   'https://www.gov.br/inss/pt-br',
        },
        curto: {
          variant:     'warning',
          title:       'Sem contribuições, sem auxílio-doença',
          body:        'Sem INSS recolhido, o Auxílio-doença não se aplica. Verifique se tem direito ao BPC/LOAS se tiver deficiência permanente.',
          actionLabel: 'Ver BPC/LOAS →',
          actionUrl:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
        },
      },
      mei: {
        longo: {
          variant:     'success',
          title:       'MEI tem direito ao Auxílio-doença',
          body:        'MEI contribui para o INSS e tem direito ao Auxílio-doença. Verifique se suas contribuições mensais estão em dia antes de solicitar.',
          actionLabel: 'Verificar contribuições →',
          actionUrl:   'https://meu.inss.gov.br',
        },
        curto: {
          variant:     'info',
          title:       'Auxílio começa só no 16º dia',
          body:        'Como MEI, o INSS só paga a partir do 16º dia de afastamento. Mantenha suas contribuições mensais em dia para garantir o direito.',
          actionLabel: 'Saiba mais →',
          actionUrl:   'https://meu.inss.gov.br',
        },
      },
    },
  },

  sus: {
    step2: {
      questionText: 'O que aconteceu no SUS?',
      options: [
        { label: 'Atendimento foi negado',             value: 'negado',     icon: '!' },
        { label: 'Atendimento foi irregular ou descuidado', value: 'irregular', icon: '!' },
        { label: 'Falta de medicamento na unidade',    value: 'medicamento', icon: '!' },
      ],
    },
    step3: {
      questionText: 'Você tentou resolver diretamente com a unidade de saúde?',
      options: [
        { label: 'Sim, mas não resolveu', value: 'sim', icon: '~' },
        { label: 'Não ainda',             value: 'nao', icon: '?' },
      ],
    },
    results: {
      negado: {
        sim: {
          variant:     'success',
          title:       'Você pode registrar denúncia formal',
          body:        'Atendimento negado sem resolução direta: registre no 136 (gratuito) ou na Ouvidoria SUS online. Anote data, unidade e nome do responsável.',
          actionLabel: 'Acessar Ouvidoria SUS →',
          actionUrl:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
        },
        nao: {
          variant:     'info',
          title:       'Tente primeiro na unidade',
          body:        'Antes de formalizar a denúncia, procure o responsável ou gerente da unidade. Se não resolver, registre no 136 ou na Ouvidoria SUS.',
          actionLabel: 'Ouvidoria SUS →',
          actionUrl:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
        },
      },
      irregular: {
        sim: {
          variant:     'success',
          title:       'Registre sua ocorrência',
          body:        'Atendimento irregular é violação do direito à saúde (Art. 196 CF/88). Registre no 136, Ouvidoria SUS ou Fala.BR (CGU) para acompanhar sua reclamação.',
          actionLabel: 'Acessar Fala.BR →',
          actionUrl:   'https://falabr.cgu.gov.br',
        },
        nao: {
          variant:     'info',
          title:       'Documente e registre formalmente',
          body:        'Anote datas, horários e nomes. Tente resolução direta na unidade. Se não resolver, registre no 136 ou na Ouvidoria SUS.',
          actionLabel: 'Ouvidoria SUS →',
          actionUrl:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
        },
      },
      medicamento: {
        sim: {
          variant:     'success',
          title:       'Falta de medicamento também é denunciável',
          body:        'Registre na Ouvidoria do SUS (136). A falta de medicamentos pode configurar violação do direito à saúde.',
          actionLabel: 'Denunciar →',
          actionUrl:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
        },
        nao: {
          variant:     'info',
          title:       'Verifique disponibilidade antes',
          body:        'Confirme com a unidade se há previsão de reabastecimento. Se persistir, registre denúncia no 136 com o nome do medicamento e a necessidade médica.',
          actionLabel: 'Ouvidoria SUS →',
          actionUrl:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
        },
      },
    },
  },
}
