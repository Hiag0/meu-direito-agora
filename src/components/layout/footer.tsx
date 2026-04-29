import { siteContent } from '@/data/content'
import { SectionScrollLink } from '@/components/ui/section-scroll-link'

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Saúde', href: '#saude' },
  { label: 'Verificador', href: '#verificador' },
  { label: 'Portais', href: '#portais' },
  { label: 'Aviso importante', href: '#aviso-importante' },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary to-[#0b2137]">
      <div className="container">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-dark_border pb-8 pt-12 md:pb-12 md:pt-20">
          <div className="max-w-420">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-RegalBlue text-lg leading-none text-white shadow-md">
                ⚖
              </span>
              <span className="text-xl font-semibold tracking-tight text-white">Meu Direito Agora</span>
            </div>
            <p className="text-15 font-normal leading-relaxed text-PaleCerulean">
              Plataforma de orientação básica para acesso à informação previdenciária e canais oficiais de saúde.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <SectionScrollLink
                  href={link.href}
                  className="text-lg font-normal text-PaleCerulean transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </SectionScrollLink>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <a
                href={siteContent.officialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-dark_border transition-colors hover:border-primary"
                aria-label="Acessar Instagram Meu Direito Agora"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="transition-colors group-hover:fill-primary">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.9 1.85a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={siteContent.officialLinks.falaBrHome}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-dark_border transition-colors hover:border-primary"
                aria-label="Acessar Fala.Br"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="transition-colors group-hover:fill-primary">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8v-2a1 1 0 0 1-1-1v-1H4.07A8.017 8.017 0 0 1 4 12c0-.341.021-.677.057-1H7a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v.07A8.005 8.005 0 0 1 11 19.93zM18 16h-1v1a1 1 0 0 1-1 1h-1v1.93A8.009 8.009 0 0 1 11 20v-1a2 2 0 0 0 2-2v-2h1a1 1 0 0 0 1-1v-1h2v1a2 2 0 0 1-2 2h-1v1h1a1 1 0 0 1 1 1v.07c.361-.215.703-.454 1.02-.716L18 18v-2z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={siteContent.officialLinks.meuInss}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-dark_border transition-colors hover:border-primary"
                aria-label="Acessar Meu INSS"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="transition-colors group-hover:fill-primary">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 py-7">
          <p className="text-base font-normal text-PaleCerulean">{siteContent.disclaimers.short}</p>
          <p className="text-base font-normal text-PaleCerulean">
            Baseado no direito de acesso a informação (Constituição Federal de 1988, art. 5º, XXXIII, e Lei nº 12.527/2011).
          </p>
          <p className="text-base font-normal text-PaleCerulean">© {new Date().getFullYear()} Meu Direito Agora.</p>
        </div>
      </div>
    </footer>
  )
}
