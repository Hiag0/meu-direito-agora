/**
 * quick-links.ts — Links diretos para portais oficiais
 */

export interface QuickLink {
  id:    string
  name:  string
  url:   string
  color: 'green' | 'blue' | 'amber' | 'red'
}

export const QUICK_LINKS: QuickLink[] = [
  {
    id:    'meu-inss',
    name:  'Meu INSS',
    url:   'https://meu.inss.gov.br',
    color: 'green',
  },
  {
    id:    'ouvidoria-sus',
    name:  'Ouvidoria SUS',
    url:   'https://www.gov.br/saude/pt-br/canais_atendimento/ouvidoria',
    color: 'blue',
  },
  {
    id:    'bpc-gov',
    name:  'BPC / LOAS',
    url:   'https://www.gov.br/pt-br/servicos/solicitar-o-beneficio-de-prestacao-continuada-bpc',
    color: 'amber',
  },
  {
    id:    'fala-br',
    name:  'Fala.BR — CGU',
    url:   'https://falabr.cgu.gov.br',
    color: 'red',
  },
]
