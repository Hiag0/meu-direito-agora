/**
 * services.ts — Dados dos serviços oferecidos pela plataforma
 *
 * PADRÃO: Separação de dados da apresentação.
 * Os componentes React não devem conter dados hardcoded.
 * Centralizar aqui facilita manutenção: para adicionar um serviço,
 * basta adicionar um objeto neste array.
 */

export interface Service {
  id:          string
  icon:        string
  name:        string
  description: string
  badge?:      string
  featured?:   boolean
  externalUrl?: string
}

export const SERVICES: Service[] = [
  {
    id:          'bpc-loas',
    icon:        '🛡️',
    name:        'BPC / LOAS',
    description: 'Benefício de Prestação Continuada — para pessoas com deficiência ou idosos com renda familiar baixa.',
    badge:       'mais solicitado',
    featured:    true,
    externalUrl: 'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
  },
  {
    id:          'auxilio-doenca',
    icon:        '🏥',
    name:        'Auxílio-doença',
    description: 'Incapaz de trabalhar por doença? Conheça seus direitos e como solicitar pelo INSS.',
    externalUrl: 'https://meu.inss.gov.br',
  },
  {
    id:          'denuncia-sus',
    icon:        '📢',
    name:        'Denúncia no SUS',
    description: 'Atendimento negado ou irregular? Saiba como registrar sua ocorrência formalmente.',
    externalUrl: 'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
  },
]
