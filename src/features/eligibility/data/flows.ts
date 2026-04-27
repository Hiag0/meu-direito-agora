import { siteContent } from '@/data/content'

export type ResultVariant = 'possible' | 'not_eligible' | 'depends' | 'missing_info'
export type SituationType = 'deficiencia' | 'idoso' | 'doenca' | 'acidente' | 'maternidade' | 'sus'

export interface Option {
  label: string
  value: string
  icon: string
}

export interface EligibilityResult {
  variant: ResultVariant
  title: string
  body: string
  actionLabel: string
  actionUrl?: string
}

export interface FlowStep {
  questionText: string
  options: Option[]
}

export interface Flow {
  step2: FlowStep
  step3: FlowStep
  results: Record<string, Record<string, EligibilityResult>>
}

const links = siteContent.officialLinks

export const INITIAL_QUESTION: { text: string; options: Option[] } = {
  text: 'Qual é a sua situação principal?',
  options: [
    { label: 'Pessoa com deficiência (BPC)', value: 'deficiencia', icon: '1' },
    { label: 'Pessoa idosa com 65 anos ou mais (BPC)', value: 'idoso', icon: '2' },
    { label: 'Incapacidade temporária para o trabalho', value: 'doenca', icon: '3' },
    { label: 'Sequela permanente após acidente', value: 'acidente', icon: '4' },
    { label: 'Situações de salário-maternidade', value: 'maternidade', icon: '5' },
    { label: 'Problema de atendimento no SUS/INSS', value: 'sus', icon: '6' },
  ],
}

export const FLOWS: Record<SituationType, Flow> = {
  deficiencia: {
    step2: {
      questionText:
        'Você possui CadÚnico atualizado e sua família se enquadra, em regra, no critério econômico vigente do benefício?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
        { label: 'Não sei informar', value: 'nao_sei', icon: '?' },
      ],
    },
    step3: {
      questionText: 'Você possui laudos/exames recentes e indício de impedimento de longo prazo?',
      options: [
        { label: 'Sim, tenho documentação mínima', value: 'sim', icon: 'S' },
        { label: 'Parcialmente (documentos incompletos)', value: 'parcial', icon: 'P' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    results: {
      sim: {
        sim: {
          variant: 'depends',
          title: 'Caso depende de avaliação médica e social',
          body:
            'Seu caso pode se enquadrar para análise inicial, mas a confirmação depende de avaliação médica e social pelo órgão competente.',
          actionLabel: 'Iniciar pedido oficial de BPC',
          actionUrl: links.bpcDeficienciaService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam documentos ou informações mínimas',
          body:
            'Sem documentação médica mínima e dados cadastrais consistentes, a triagem fica limitada. Reúna os documentos antes de protocolar.',
          actionLabel: 'Ver orientação oficial do BPC',
          actionUrl: links.bpcDeficienciaService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Pode não atender aos requisitos básicos informados',
          body:
            'Sem indício documentado de impedimento de longo prazo, você pode não atender aos requisitos iniciais desta triagem.',
          actionLabel: 'Buscar orientação no CRAS',
          actionUrl: links.crasInfo,
        },
      },
      nao: {
        sim: {
          variant: 'not_eligible',
          title: 'Requisitos básicos não confirmados na triagem',
          body:
            'Sem enquadramento cadastral/econômico informado, o fluxo inicial do BPC pode não ser atendido neste momento.',
          actionLabel: 'Regularizar dados e conferir regras',
          actionUrl: links.bpcDeficienciaService,
        },
        parcial: {
          variant: 'not_eligible',
          title: 'Requisitos básicos não confirmados na triagem',
          body:
            'Sem CadÚnico/critério econômico informado e com documentos incompletos, a triagem inicial não avança com segurança.',
          actionLabel: 'Conferir orientação oficial',
          actionUrl: links.bpcDeficienciaService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Requisitos básicos não confirmados na triagem',
          body: 'Pelas respostas informadas, o caso pode não atender aos requisitos básicos para abertura inicial do BPC.',
          actionLabel: 'Conferir critérios no portal oficial',
          actionUrl: links.bpcDeficienciaService,
        },
      },
      nao_sei: {
        sim: {
          variant: 'depends',
          title: 'Caso depende de avaliação do órgão competente',
          body:
            'Há indícios documentais, mas sem confirmação dos dados cadastrais e econômicos a análise final depende do órgão competente.',
          actionLabel: 'Consultar orientação oficial',
          actionUrl: links.bpcDeficienciaService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body:
            'Sem confirmação cadastral e com documentos incompletos, é recomendável organizar a documentação antes do protocolo.',
          actionLabel: 'Verificar apoio no CRAS',
          actionUrl: links.crasInfo,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body:
            'A triagem não consegue avançar sem dados cadastrais/econômicos e sem documentação mínima de saúde.',
          actionLabel: 'Entender critérios do BPC',
          actionUrl: links.bpcDeficienciaService,
        },
      },
    },
  },

  idoso: {
    step2: {
      questionText: 'Você possui 65 anos ou mais?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    step3: {
      questionText:
        'Você possui CadÚnico atualizado, renda por pessoa dentro do limite legal vigente (em regra) e sem acúmulo incompatível declarado?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
        { label: 'Preciso regularizar/confirmar', value: 'regularizar', icon: 'R' },
      ],
    },
    results: {
      sim: {
        sim: {
          variant: 'possible',
          title: 'Possível enquadramento inicial para BPC Idoso',
          body:
            'Pelas informações fornecidas, pode haver indícios de enquadramento inicial. A concessão depende da análise administrativa do órgão competente.',
          actionLabel: 'Acessar pedido oficial do BPC',
          actionUrl: links.bpcService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Pode não atender aos requisitos básicos informados',
          body:
            'Com resposta negativa para critério cadastral/econômico ou acúmulo incompatível, a triagem indica possível não enquadramento inicial.',
          actionLabel: 'Conferir critérios no portal oficial',
          actionUrl: links.bpcService,
        },
        regularizar: {
          variant: 'missing_info',
          title: 'Faltam documentos ou regularização mínima',
          body:
            'Antes de seguir, regularize CadÚnico e dados familiares para melhorar a segurança da triagem e do pedido oficial.',
          actionLabel: 'Buscar apoio no CRAS',
          actionUrl: links.crasInfo,
        },
      },
      nao: {
        sim: {
          variant: 'not_eligible',
          title: 'Não atende requisito básico de idade informado',
          body:
            'Para esta trilha de BPC Idoso, a idade mínima é requisito objetivo. Avalie outras trilhas de benefícios conforme seu caso.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Não atende requisito básico de idade informado',
          body: 'Sem o requisito objetivo de idade nesta trilha, o enquadramento inicial para BPC Idoso não é indicado.',
          actionLabel: 'Conferir serviços disponíveis no Meu INSS',
          actionUrl: links.meuInss,
        },
        regularizar: {
          variant: 'not_eligible',
          title: 'Não atende requisito básico de idade informado',
          body: 'A regularização documental é importante, mas nesta trilha o requisito de idade permanece indispensável.',
          actionLabel: 'Ver outros serviços oficiais',
          actionUrl: links.meuInss,
        },
      },
    },
  },

  doenca: {
    step2: {
      questionText: 'Você está temporariamente incapacitado para o trabalho e precisa de afastamento?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
        { label: 'Não sei informar', value: 'nao_sei', icon: '?' },
      ],
    },
    step3: {
      questionText: 'Você possui documento médico válido e qualidade de segurado/contribuição compatível?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Parcialmente', value: 'parcial', icon: 'P' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    results: {
      sim: {
        sim: {
          variant: 'possible',
          title: 'Possível enquadramento inicial para análise administrativa',
          body:
            'Você pode ter indicativos para solicitar análise do benefício, desde que documentos médicos e requisitos previdenciários sejam confirmados pelo órgão competente.',
          actionLabel: 'Acessar serviço oficial de auxílio por incapacidade',
          actionUrl: links.auxilioIncapacidadeTemporariaService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam documentos ou dados previdenciários mínimos',
          body:
            'A triagem indica necessidade de complementar laudos e/ou dados de vinculação previdenciária antes de seguir com mais segurança.',
          actionLabel: 'Conferir exigências no serviço oficial',
          actionUrl: links.auxilioIncapacidadeTemporariaService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Pode não atender aos requisitos básicos informados',
          body:
            'Sem documentação mínima e sem qualidade de segurado/contribuição compatível informada, o enquadramento inicial fica comprometido.',
          actionLabel: 'Ver canais de atendimento do INSS',
          actionUrl: links.inssCentral135,
        },
      },
      nao: {
        sim: {
          variant: 'not_eligible',
          title: 'Não há indício inicial de incapacidade temporária informada',
          body:
            'Nesta trilha, a incapacidade temporária para o trabalho é requisito objetivo para abertura inicial do pedido.',
          actionLabel: 'Conferir outros serviços no Meu INSS',
          actionUrl: links.meuInss,
        },
        parcial: {
          variant: 'not_eligible',
          title: 'Não há indício inicial de incapacidade temporária informada',
          body:
            'Mesmo com documentos parciais, sem incapacidade temporária informada o fluxo inicial deste benefício pode não se aplicar.',
          actionLabel: 'Ver orientações no Meu INSS',
          actionUrl: links.meuInss,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Não há indício inicial de incapacidade temporária informada',
          body: 'Pelas respostas, esta trilha específica não apresenta requisitos básicos informados para seguir.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
      },
      nao_sei: {
        sim: {
          variant: 'depends',
          title: 'Caso depende de avaliação do órgão competente',
          body:
            'Com dúvida sobre o quadro incapacitante, a conclusão depende de avaliação técnica e administrativa do órgão competente.',
          actionLabel: 'Acessar orientação oficial do benefício',
          actionUrl: links.auxilioIncapacidadeTemporariaService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body:
            'Há dúvida sobre incapacidade e documentação parcial. Reúna laudos e confirme dados previdenciários antes do protocolo.',
          actionLabel: 'Conferir exigências no Meu INSS',
          actionUrl: links.meuInss,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body: 'Sem indicação objetiva de incapacidade e sem documentos mínimos, a triagem não consegue avançar com segurança.',
          actionLabel: 'Buscar orientação pelo 135',
          actionUrl: links.inssCentral135,
        },
      },
    },
  },

  acidente: {
    step2: {
      questionText: 'Houve acidente de qualquer natureza com sequela permanente?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
        { label: 'Não sei informar', value: 'nao_sei', icon: '?' },
      ],
    },
    step3: {
      questionText:
        'A sequela reduziu sua capacidade para o trabalho habitual e você possui documentação médica mínima?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Parcialmente', value: 'parcial', icon: 'P' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    results: {
      sim: {
        sim: {
          variant: 'depends',
          title: 'Caso depende de avaliação técnica do INSS',
          body:
            'Pode haver indicativo de enquadramento inicial, mas a confirmação depende da análise da sequela, da redução da capacidade laboral e dos demais requisitos previdenciários pelo INSS.',
          actionLabel: 'Acessar serviço oficial de auxílio-acidente',
          actionUrl: links.auxilioAcidenteService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam documentos ou informações mínimas',
          body:
            'A triagem indica necessidade de organizar laudos e comprovações da redução da capacidade para o trabalho habitual.',
          actionLabel: 'Conferir exigências no serviço oficial',
          actionUrl: links.auxilioAcidenteService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Pode não atender aos requisitos básicos informados',
          body:
            'Sem informação sobre redução da capacidade laboral habitual, o enquadramento inicial para esta trilha pode não se confirmar.',
          actionLabel: 'Conferir orientações no Meu INSS',
          actionUrl: links.meuInss,
        },
      },
      nao: {
        sim: {
          variant: 'not_eligible',
          title: 'Não há indício básico de acidente com sequela permanente',
          body: 'Nesta trilha, acidente com sequela permanente é requisito objetivo para avaliação inicial.',
          actionLabel: 'Ver outros serviços do INSS',
          actionUrl: links.meuInss,
        },
        parcial: {
          variant: 'not_eligible',
          title: 'Não há indício básico de acidente com sequela permanente',
          body: 'Sem esse requisito objetivo informado, a triagem inicial desta trilha não avança.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Não há indício básico de acidente com sequela permanente',
          body: 'Pelas respostas, não há viabilidade inicial para o auxílio-acidente nesta trilha.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
      },
      nao_sei: {
        sim: {
          variant: 'depends',
          title: 'Caso depende de avaliação do órgão competente',
          body:
            'Com dúvida sobre a situação de acidente/sequela, a conclusão depende de avaliação técnica do INSS e documentação apresentada.',
          actionLabel: 'Acessar orientação oficial do auxílio-acidente',
          actionUrl: links.auxilioAcidenteService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body: 'Organize provas do acidente, laudos e dados de segurado para reduzir exigências na análise administrativa.',
          actionLabel: 'Conferir atendimento do INSS',
          actionUrl: links.inssCentral135,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações para triagem mais segura',
          body: 'Sem informações objetivas sobre sequela e sem documentação mínima, a triagem não consegue indicar enquadramento inicial.',
          actionLabel: 'Buscar orientação no INSS',
          actionUrl: links.inssCentral135,
        },
      },
    },
  },

  maternidade: {
    step2: {
      questionText:
        'O caso envolve parto, adoção, guarda judicial para adoção, natimorto ou aborto não criminoso?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    step3: {
      questionText: 'Há qualidade de segurado e documentos básicos do evento/vínculo para o pedido?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Parcialmente', value: 'parcial', icon: 'P' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    results: {
      sim: {
        sim: {
          variant: 'possible',
          title: 'Possível enquadramento inicial para salário-maternidade',
          body:
            'Você pode reunir elementos para iniciar a solicitação, mas a confirmação depende da análise administrativa do caso e da documentação apresentada.',
          actionLabel: 'Solicitar salário-maternidade no canal oficial',
          actionUrl: links.salarioMaternidadeService,
        },
        parcial: {
          variant: 'missing_info',
          title: 'Faltam documentos ou comprovações mínimas',
          body:
            'A triagem indica necessidade de complementar documentos do evento e de qualidade de segurado/vínculo antes do protocolo.',
          actionLabel: 'Ver orientação oficial do serviço',
          actionUrl: links.salarioMaternidadeService,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Pode não atender aos requisitos básicos informados',
          body:
            'Sem qualidade de segurado/documentos mínimos informados, o enquadramento inicial desta trilha pode não se confirmar.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
      },
      nao: {
        sim: {
          variant: 'not_eligible',
          title: 'Evento informado não corresponde a esta trilha',
          body:
            'Para esta trilha, é necessário que o caso esteja dentro das hipóteses legais específicas do salário-maternidade.',
          actionLabel: 'Conferir serviços no Meu INSS',
          actionUrl: links.meuInss,
        },
        parcial: {
          variant: 'not_eligible',
          title: 'Evento informado não corresponde a esta trilha',
          body: 'Mesmo com documentos parciais, sem evento compatível esta trilha não apresenta requisitos básicos informados.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
        nao: {
          variant: 'not_eligible',
          title: 'Evento informado não corresponde a esta trilha',
          body: 'Pelas respostas, não há viabilidade inicial para o salário-maternidade nesta trilha.',
          actionLabel: 'Acessar Meu INSS',
          actionUrl: links.meuInss,
        },
      },
    },
  },

  sus: {
    step2: {
      questionText: 'Qual tipo de manifestação descreve melhor o seu caso?',
      options: [
        { label: 'Reclamação sobre atendimento/serviço', value: 'reclamacao', icon: 'R' },
        { label: 'Denúncia de irregularidade', value: 'denuncia', icon: 'D' },
        { label: 'Solicitação de providência/informação', value: 'solicitacao', icon: 'S' },
      ],
    },
    step3: {
      questionText: 'Você possui informações mínimas (o que ocorreu, quando, onde e protocolo, se houver)?',
      options: [
        { label: 'Sim', value: 'sim', icon: 'S' },
        { label: 'Não', value: 'nao', icon: 'N' },
      ],
    },
    results: {
      reclamacao: {
        sim: {
          variant: 'possible',
          title: 'Possível encaminhamento inicial para canal oficial',
          body:
            'Com as informações básicas organizadas, você pode registrar sua manifestação de forma objetiva e acompanhar pelo protocolo.',
          actionLabel: 'Registrar no OuvSUS',
          actionUrl: links.ouvSusManifestacao,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações mínimas para registrar com segurança',
          body: 'Antes de enviar, organize data, local, fatos e documentos para reduzir retrabalho e facilitar o acompanhamento.',
          actionLabel: 'Abrir orientação no Fala.Br',
          actionUrl: links.falaBrHome,
        },
      },
      denuncia: {
        sim: {
          variant: 'possible',
          title: 'Possível encaminhamento inicial para denúncia formal',
          body: 'Você pode registrar denúncia em canal oficial, com descrição objetiva dos fatos e acompanhamento por protocolo.',
          actionLabel: 'Registrar no Fala.Br',
          actionUrl: links.falaBrHome,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações mínimas para denunciar com segurança',
          body: 'Sem dados mínimos, a manifestação pode ficar incompleta. Reúna fatos essenciais antes do envio no canal oficial.',
          actionLabel: 'Ver serviço oficial de manifestação',
          actionUrl: links.falaBrGovService,
        },
      },
      solicitacao: {
        sim: {
          variant: 'possible',
          title: 'Possível encaminhamento inicial para solicitação oficial',
          body: 'Com os dados organizados, você pode iniciar solicitação pelo canal oficial e acompanhar o andamento pelo protocolo.',
          actionLabel: 'Acessar canal oficial OuvSUS',
          actionUrl: links.ouvSus,
        },
        nao: {
          variant: 'missing_info',
          title: 'Faltam informações mínimas para a solicitação',
          body: 'A triagem recomenda organizar informações essenciais antes do envio para aumentar clareza e rastreabilidade.',
          actionLabel: 'Acessar Fala.Br',
          actionUrl: links.falaBrHome,
        },
      },
    },
  },
}

