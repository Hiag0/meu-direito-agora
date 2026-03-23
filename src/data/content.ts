export const siteContent = {
  hero: {
    title: "Entenda a Previdência e a Saúde de Forma Simples",
    subtitle: "Transformamos informação jurídica em ação prática. Descubra seus direitos e saiba como exigi-los sem burocracia.",
    primaryButton: "Verificar meus direitos",
    secondaryButton: "Denunciar problemas na saúde"
  },
  benefits: [
    {
      id: "bpc-loas",
      title: "BPC / LOAS",
      description: "Benefício assistencial de um salário mínimo mensal para idosos e pessoas com deficiência de baixa renda.",
      requirements: ["Idade de 65 anos ou mais, OU pessoa com deficiência", "Renda familiar por pessoa de até 1/4 do salário mínimo", "Inscrição atualizada no CadÚnico"],
      steps: ["Acesse o Meu INSS", "Faça login com gov.br", "Clique em 'Novo pedido' e busque por 'Benefício Assistencial'", "Envie documentos e agende perícia"],
      importantInfo: "Não é necessário ter contribuído para o INSS, mas não dá direito a 13º salário nem pensão por morte.",
      actionLink: "https://meu.inss.gov.br/"
    },
    {
      id: "auxilio-doenca",
      title: "Auxílio-doença",
      description: "Benefício para quem está temporariamente incapacitado para o trabalho por mais de 15 dias.",
      requirements: ["Possuir qualidade de segurado", "Comprovar incapacidade através de perícia", "Carência de 12 meses (isenta em casos específicos )"],
      steps: ["Acesse o Meu INSS", "Clique em 'Pedir Benefício por Incapacidade'", "Escolha perícia presencial ou análise documental (Atestmed)", "Anexe laudos médicos"],
      importantInfo: "Se a espera para perícia presencial for maior que 30 dias, envie apenas os documentos médicos (Atestmed).",
      actionLink: "https://meu.inss.gov.br/"
    },
    {
      id: "salario-maternidade",
      title: "Salário-maternidade",
      description: "Auxílio para quem se afasta do trabalho por motivo de nascimento de filho, adoção ou aborto não criminoso.",
      requirements: ["Qualidade de segurado", "Carência de 10 meses (apenas para autônomas e facultativas )", "Isento para empregadas CLT"],
      steps: ["CLT: peça na empresa", "Outros: Acesse o Meu INSS", "Busque 'Salário-maternidade'", "Envie certidão de nascimento"],
      importantInfo: "Duração padrão de 120 dias. Homens também têm direito em caso de adoção ou falecimento da mãe.",
      actionLink: "https://meu.inss.gov.br/"
    }
  ],
  healthComplaints: {
    title: "Problemas no SUS? Saiba como agir",
    subtitle: "Sua reclamação é um direito fundamental garantido pela Lei nº 13.460/2017.",
    channels: [
      { name: "Ouvidoria-Geral do SUS", description: "Canal oficial para reclamações e denúncias.", contact: "Disque 136", link: "https://ouvidor.saude.gov.br/" },
      { name: "Defensoria Pública", description: "Assistência jurídica gratuita para garantir tratamentos.", contact: "Ligue 129", link: "https://www.dpu.def.br/contatos-dpu" },
      { name: "Ministério Público", description: "Investiga irregularidades graves na saúde pública.", contact: "Varia por estado", link: "https://www.mpf.mp.br/" }
    ]
  }
};
