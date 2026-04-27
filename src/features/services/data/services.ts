export interface Service {
  id: string
  icon: string
  name: string
  description: string
  badge?: string
  featured?: boolean
  externalUrl?: string
}

export const SERVICES: Service[] = [
  {
    id: 'bpc-loas',
    icon: '1',
    name: 'BPC / LOAS',
    description:
      'Orientação sobre requisitos objetivos e documentos para pedido de Benefício de Prestação Continuada, sem garantia de concessão.',
    badge: 'triagem informativa',
    featured: true,
    externalUrl: 'https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia',
  },
  {
    id: 'incapacidade-temporaria',
    icon: '2',
    name: 'Auxílio por Incapacidade Temporária (Auxílio-Doença)',
    description:
      'Passo a passo para organizar laudos e iniciar solicitação no INSS quando houver incapacidade temporária para o trabalho.',
    externalUrl: 'https://www.gov.br/pt-br/servicos/solicitar-beneficio-por-incapacidade-temporaria-auxilio-doenca',
  },
  {
    id: 'ouvidoria-saude',
    icon: '3',
    name: 'Manifestações em saúde',
    description:
      'Encaminhamento para canais oficiais de ouvidoria com foco em reclamação, denúncia, solicitação, elogio e sugestão.',
    externalUrl: 'https://falabr.cgu.gov.br/web/home',
  },
]
