'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Saúde', href: '#saude' },
  { label: 'Verificador', href: '#verificador' },
  { label: 'Portais', href: '#portais' },
]

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('mda-theme', theme)
}

export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem('mda-theme')
    const preferredTheme: 'light' | 'dark' =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'

    setIsDarkMode(preferredTheme === 'dark')
    applyTheme(preferredTheme)

    const handleScroll = () => setSticky(window.scrollY >= 80)
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleTheme = () => {
    const next = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(next === 'dark')
    applyTheme(next)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        sticky
          ? 'border-slate-200/90 bg-white/95 shadow-lg backdrop-blur dark:border-dark_border dark:bg-secondary/95 dark:shadow-darkmd'
          : 'border-slate-200/70 bg-white/90 backdrop-blur dark:border-dark_border dark:bg-secondary/90'
      }`}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Link href="#inicio" className="flex shrink-0 items-center gap-2.5">
            <span className="text-2xl leading-none">⚖️</span>
            <span className="text-xl font-bold text-secondary transition-colors duration-300 dark:text-white">
              Meu Direito Agora
            </span>
          </Link>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-17 font-medium text-secondary transition-colors duration-300 hover:text-primary dark:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              aria-label="Alternar tema claro/escuro"
              aria-pressed={isDarkMode}
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary transition-all duration-300 hover:border-primary hover:text-primary dark:border-dark_border dark:text-white"
            >
              {!mounted ? (
                <span className="h-5 w-5" />
              ) : isDarkMode ? (
                <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current">
                  <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 23 23" className="h-6 w-6 fill-current">
                  <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                </svg>
              )}
            </button>

            <Link href="#verificador" className="btn btn-1 hover-filled-slide-down hidden overflow-hidden rounded-lg xl:block">
              <span className="!px-5 !py-2">Verificar direitos</span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="block rounded-lg p-2 xl:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-0.5 w-6 bg-secondary transition-colors dark:bg-white" />
              <span className="mt-1.5 block h-0.5 w-6 bg-secondary transition-colors dark:bg-white" />
              <span className="mt-1.5 block h-0.5 w-6 bg-secondary transition-colors dark:bg-white" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white p-4 shadow-xl dark:border-dark_border dark:bg-darkmode xl:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-17 font-medium text-secondary transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-darklight"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#verificador"
                onClick={() => setMenuOpen(false)}
                className="btn btn-1 hover-filled-slide-down block w-full overflow-hidden rounded-lg text-center"
              >
                <span>Verificar direitos</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
