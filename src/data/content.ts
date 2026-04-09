export const siteContent = {
  hero: {
    eyebrow: 'Plataforma informativa e educativa',
    title: 'Entenda benefícios previdenciários e canais de saúde com clareza',
    subtitle:
      'O Meu Direito Agora explica requisitos básicos, documentos e caminhos oficiais para iniciar pedidos e manifestações. A plataforma não substitui análise jurídica individual nem decisão do órgão competente.',
    primaryButton: 'Iniciar triagem informativa',
    secondaryButton: 'Ver canais oficiais de saúde',
  },

  institutional: {
    howItWorks:
      'O sistema apresenta informações básicas, faz uma triagem inicial com perguntas objetivas e direciona para canais oficiais com passo a passo prático.',
    reinforcement:
      'Quando o caso depende de perícia, avaliação social ou análise mais aprofundada, a plataforma apenas informa essa limitação e orienta o canal adequado.',
  },

  disclaimers: {
    short:
      'Este verificador faz apenas uma triagem informativa. A confirmação depende da análise do órgão competente e, quando aplicável, de perícia ou avaliação social. Em caso de dúvida jurídica, procure advogado(a) ou Defensoria Pública.',
    longParagraphs: [
      'O presente projeto não tem como objetivo substituir a atuação de advogados ou profissionais do Direito. Sua finalidade é exclusivamente informativa e educativa, oferecendo orientação básica e acessível para que o cidadão compreenda como acessar canais oficiais de reclamações, solicitações e acompanhamento de demandas junto ao Sistema Único de Saúde e ao Instituto Nacional do Seguro Social.',
      'O conteúdo disponibilizado limita-se a instruções práticas, como passo a passo, direcionamento para links oficiais e explicações simplificadas dos serviços disponíveis, não envolvendo análise individual de casos, interpretação jurídica ou emissão de parecer técnico.',
      'O projeto também pode facilitar o trabalho de operadores do Direito ao organizar e centralizar fluxos de acesso a serviços públicos, contribuindo para orientação inicial e encaminhamento adequado das demandas.',
      'Em situações que envolvam conflitos, negativa de direitos, necessidade de medidas judiciais ou interpretação legal aprofundada, é indispensável consultar advogado(a) ou Defensoria Pública, profissionais habilitados para assistência jurídica adequada.',
      'A plataforma atua como instrumento de acesso à informação e orientação básica ao cidadão, sem exercer atividade jurídica privativa da advocacia.',
    ],
  },

  officialLinks: {
    falaBrHome: 'https://falabr.cgu.gov.br/web/home',
    falaBrGovService:
      'https://www.gov.br/pt-br/servicos/registrar-manifestacao-no-sistema-de-ouvidorias-do-poder-executivo-federal',
    inssOuvidoria: 'https://www.gov.br/inss/pt-br/canais_atendimento/ouvidoria',
    inssCentral135: 'https://www.gov.br/inss/pt-br/canais_atendimento/central-135',
    meuInss: 'https://meu.inss.gov.br/',
    ouvSus: 'https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus',
    ouvSusManifestacao:
      'https://www.gov.br/pt-br/servicos/cadastrar-manifestacao-na-ouvidoria-geral-do-sus-ouvsus',
    tocantinsOuvidoriaGeral: 'https://www.to.gov.br/cge/ouvidoria-geral-do-estado/5ucazpoed99m',
    tocantinsOuvidoriaSus: 'https://www.to.gov.br/saude/ouvidoria-do-sus/5ry99whtlmk6',
    bpcService: 'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
    crasInfo: 'https://www.gov.br/mds/pt-br/acoes-e-programas/suas/protecao-social-basica/cras',
    salarioMaternidadeService: 'https://www.gov.br/pt-br/servicos/solicitar-salario-maternidade-urbano',
  },

  benefits: [
    {
      id: 'bpc-loas',
      title: 'BPC / LOAS',
      description:
        'Benefício assistencial para pessoa idosa (65+) ou pessoa com deficiência que cumpra os critérios legais e socioeconômicos.',
      requirements: [
        'CadÚnico atualizado e dados familiares consistentes',
        'Renda por pessoa do grupo familiar, em regra, dentro do limite legal vigente',
        'Documentos pessoais e comprovantes de renda do grupo familiar',
      ],
      steps: [
        'Revise os dados do CadÚnico antes do pedido',
        'Acesse o Meu INSS e pesquise por Benefício Assistencial',
        'Anexe documentos pessoais e comprovantes solicitados',
        'Acompanhe exigências, perícia e avaliação social pelo canal oficial',
      ],
      importantInfo:
        'A confirmação depende de análise administrativa e, para pessoa com deficiência, de avaliação médica e social.',
      actionLink: 'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
    },
    {
      id: 'auxilio-incapacidade-temporaria',
      title: 'Auxílio por Incapacidade Temporária',
      description:
        'Benefício para quem fica temporariamente incapaz para o trabalho por doença ou acidente, conforme regras previdenciárias.',
      requirements: [
        'Incapacidade temporária para o trabalho',
        'Documento médico válido, legível e atualizado',
        'Qualidade de segurado ou contribuição compatível com o pedido',
      ],
      steps: [
        'Reúna laudos, exames e atestado com identificação do profissional',
        'Acesse o Meu INSS e busque o pedido por incapacidade',
        'Envie os documentos e acompanhe agendamento/perícia quando aplicável',
        'Monitore o andamento e cumpra exigências dentro do prazo',
      ],
      importantInfo:
        'Não basta estar doente: o órgão competente avalia incapacidade para o trabalho e requisitos previdenciários.',
      actionLink: 'https://meu.inss.gov.br/',
    },
    {
      id: 'auxilio-acidente',
      title: 'Auxílio-Acidente',
      description:
        'Benefício indenizatório para quem ficou com sequela permanente que reduza a capacidade para o trabalho habitual.',
      requirements: [
        'Ocorrência de acidente de qualquer natureza',
        'Sequela permanente com redução da capacidade laboral habitual',
        'Documentação médica e categoria de segurado compatível',
      ],
      steps: [
        'Organize laudos, exames, prontuários e documentos pessoais',
        'Acesse o Meu INSS e localize o serviço de benefício por incapacidade',
        'Formalize o pedido e cumpra etapas de avaliação do INSS',
        'Guarde o protocolo e acompanhe exigências no portal oficial',
      ],
      importantInfo:
        'Pode haver continuidade no trabalho, mas a confirmação do enquadramento depende da análise técnica do INSS.',
      actionLink: 'https://meu.inss.gov.br/',
    },
    {
      id: 'salario-maternidade',
      title: 'Salário-Maternidade',
      description:
        'Benefício para afastamento por parto, adoção, guarda judicial, natimorto ou aborto não criminoso, conforme regras aplicáveis.',
      requirements: [
        'Evento compatível com as hipóteses legais do benefício',
        'Qualidade de segurado na hipótese aplicável',
        'Documentos do evento e de vínculo/contribuição conforme categoria',
      ],
      steps: [
        'Reúna certidão, termo judicial ou documentos médicos do evento',
        'Confirme documentos pessoais e de vínculo/contribuição',
        'Acesse o Meu INSS ou canal oficial correspondente e protocole o pedido',
        'Acompanhe o andamento e responda exigências pelo canal oficial',
      ],
      importantInfo:
        'A duração e os requisitos variam conforme o tipo de evento e a categoria da pessoa requerente.',
      actionLink: 'https://www.gov.br/pt-br/servicos/solicitar-salario-maternidade-urbano',
    },
  ],

  checker: {
    sectionTitle: 'Triagem inicial de elegibilidade',
    sectionSubtitle:
      'Responda perguntas objetivas para receber orientação informativa, checklist de documentos e canal oficial para seguir com segurança.',
    resultMessages: {
      possible:
        'Pelas informações fornecidas, pode haver indícios de enquadramento inicial para este serviço/benefício. Isso não representa concessão automática.',
      depends:
        'O seu caso depende de avaliação do órgão competente e, quando aplicável, de perícia ou avaliação social.',
      notEligible:
        'Com base nas respostas informadas, você pode não atender aos requisitos básicos desta triagem inicial. Ainda assim, vale conferir dados e documentos nos canais oficiais.',
      missingInfo:
        'Faltam documentos ou informações mínimas para uma triagem inicial mais segura. Reúna a documentação básica e revise seus dados antes de seguir.',
    },
    nextSteps: [
      'Revise seus documentos básicos.',
      'Confirme se seus dados cadastrais estão atualizados.',
      'Acesse o canal oficial indicado abaixo.',
      'Descreva os fatos com objetividade.',
      'Guarde o número de protocolo.',
      'Acompanhe o andamento pelo mesmo canal.',
    ],
  },

  documents: {
    common: [
      'RG, CPF e comprovante de residência',
      'Documentos médicos ou comprobatórios do caso, quando aplicável',
      'Documentos específicos da categoria de segurado ou do evento',
    ],
    bySituation: {
      deficiencia: [
        'CadÚnico atualizado',
        'RG e CPF de todas as pessoas do grupo familiar',
        'Comprovantes de renda familiar',
        'Laudos, exames, receitas e prontuários recentes',
      ],
      idoso: [
        'Documento de identificação com idade mínima exigida',
        'CadÚnico atualizado',
        'Comprovantes de renda do grupo familiar',
      ],
      doenca: [
        'Atestado/laudo médico com data recente e identificação profissional',
        'Documentos de vínculo ou contribuição previdenciária',
      ],
      acidente: [
        'Laudos, exames e prontuários que comprovem sequela permanente',
        'Documentos de vínculo/categoria de segurado',
      ],
      maternidade: [
        'Certidão de nascimento, termo judicial ou documento médico do evento',
        'Documentos pessoais e de contribuição/vínculo conforme categoria',
      ],
      sus: [
        'Descrição objetiva do fato (o que, quando e onde ocorreu)',
        'Nome da unidade/serviço e, se houver, profissionais envolvidos',
        'Número de protocolo anterior, quando existir',
      ],
    },
    warning:
      'Antes de iniciar o pedido, reúna documentos pessoais, documentos médicos ou comprobatórios do caso e os documentos específicos da sua categoria. Ausência ou baixa qualidade desses documentos pode gerar exigências e atrasos.',
  },

  deadlines: [
    'Prazo para recurso administrativo, quando houver decisão desfavorável',
    'Prazo para cumprir exigências do órgão competente',
    'Prazo para comparecimento em perícias, avaliações e atendimentos agendados',
    'Necessidade de manter o CadÚnico atualizado periodicamente',
  ],

  commonErrors: [
    'Documento ilegível',
    'Arquivo incompleto',
    'Dados divergentes do cadastro oficial',
    'Autodeclaração preenchida com erro',
    'Falta de laudo ou comprovante essencial',
    'Ausência de protocolo ou perda de prazo',
  ],

  qualityTip:
    'Não existe fórmula que garanta aprovação. Informações completas, coerentes e verificáveis ajudam o órgão a analisar o pedido com mais clareza.',

  healthComplaints: {
    title: 'Problemas no SUS? Use canais oficiais de ouvidoria',
    subtitle:
      'Descreva o fato com objetividade, informe quando e onde aconteceu e acompanhe tudo pelo protocolo.',
    intro:
      'Se o problema envolver atendimento no SUS, falta de medicamento, demora, ausência de profissionais ou negativa de atendimento, o caminho mais seguro é registrar manifestação nos canais oficiais.',
    manifestationTypes: [
      {
        type: 'Reclamação',
        description: 'Quando há insatisfação com serviço ou atendimento.',
      },
      {
        type: 'Denúncia',
        description: 'Quando há notícia de irregularidade.',
      },
      {
        type: 'Solicitação',
        description: 'Quando a pessoa pede providência, informação ou acesso.',
      },
      {
        type: 'Elogio',
        description: 'Quando deseja registrar satisfação com o atendimento.',
      },
      {
        type: 'Sugestão',
        description: 'Quando quer propor melhoria no serviço.',
      },
    ],
    channels: [
      {
        name: 'Fala.Br (CGU)',
        description: 'Canal amplo para registrar manifestações em órgãos federais.',
        contact: 'Acesso web oficial',
        link: 'https://falabr.cgu.gov.br/web/home',
      },
      {
        name: 'OuvSUS',
        description: 'Canal oficial para manifestações relacionadas ao SUS.',
        contact: 'Disque Saúde 136',
        link: 'https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus',
      },
      {
        name: 'Ouvidoria do INSS',
        description: 'Para manifestações ligadas ao atendimento do INSS.',
        contact: 'Central 135',
        link: 'https://www.gov.br/inss/pt-br/canais_atendimento/ouvidoria',
      },
    ],
    regionalChannels: [
      {
        name: 'Ouvidoria-Geral do Estado do Tocantins',
        link: 'https://www.to.gov.br/cge/ouvidoria-geral-do-estado/5ucazpoed99m',
      },
      {
        name: 'Ouvidoria do SUS no Tocantins',
        link: 'https://www.to.gov.br/saude/ouvidoria-do-sus/5ry99whtlmk6',
      },
    ],
  },
} as const

export type SiteContent = typeof siteContent
export type BenefitContent = (typeof siteContent.benefits)[number]
export type CheckerSituationKey = keyof typeof siteContent.documents.bySituation
