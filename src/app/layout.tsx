import { DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Direito Agora - Acesso simplificado a direitos previdenciarios',
  description:
    'Orientamos cidadaos sobre BPC/LOAS, Auxilio-doenca e denuncias no SUS em linguagem simples e com acao direta.',
  keywords: ['BPC', 'LOAS', 'auxilio-doenca', 'INSS', 'SUS', 'direitos', 'previdencia'],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={dmSans.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20 md:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
