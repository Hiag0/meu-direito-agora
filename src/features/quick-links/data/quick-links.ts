import { siteContent } from '@/data/content'

export interface QuickLink {
  id: string
  name: string
  url: string
  color: 'green' | 'blue' | 'amber' | 'red'
}

export const QUICK_LINKS: QuickLink[] = [
  {
    id: 'meu-inss',
    name: 'Meu INSS',
    url: siteContent.officialLinks.meuInss,
    color: 'green',
  },
  {
    id: 'ouvsus',
    name: 'OuvSUS',
    url: siteContent.officialLinks.ouvSus,
    color: 'blue',
  },
  {
    id: 'bpc-gov',
    name: 'BPC / LOAS',
    url: siteContent.officialLinks.bpcService,
    color: 'amber',
  },
  {
    id: 'fala-br',
    name: 'Fala.Br (CGU)',
    url: siteContent.officialLinks.falaBrHome,
    color: 'red',
  },
]
