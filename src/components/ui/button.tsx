'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------
// TIPOS — TypeScript garante que só passemos props válidas
// ---------------------------------------------------------------
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?:    ButtonSize
  isLoading?: boolean
  leftIcon?:  React.ReactNode
}

/**
 * Button — Componente de botão reutilizável
 *
 * PADRÃO: "Componente Burro" (Dumb Component / Presentational Component)
 * Ele NÃO sabe o que acontece quando clicado. Apenas renderiza.
 * Quem chama o <Button> passa o onClick com a lógica.
 *
 * forwardRef: permite que o pai acesse o elemento <button> do DOM diretamente
 * (necessário para libs de acessibilidade e animações)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant    = 'primary',
      size       = 'md',
      isLoading  = false,
      leftIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    // Estilos base que sempre existem
    const base =
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium ' +
      'transition-all duration-150 focus-visible:outline-none ' +
      'focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ' +
      'disabled:pointer-events-none disabled:opacity-50'

    // Variantes visuais
    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95',
      secondary:
        'bg-surface-primary text-on-surface border border-subtle ' +
        'hover:bg-surface-secondary active:scale-95',
      ghost:
        'text-muted hover:bg-surface-secondary hover:text-on-surface active:scale-95',
    }

    // Tamanhos
    const sizes: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Spinner de loading — aparece só quando isLoading=true */}
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!isLoading && leftIcon}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export { Button }
export type { ButtonProps }
