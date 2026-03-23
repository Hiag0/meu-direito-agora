import { cn } from '@/lib/utils'

type BadgeVariant = 'success' | 'info' | 'warning' | 'danger' | 'neutral'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

/**
 * Badge — Etiqueta visual semântica
 *
 * Usada para status, categorias e destaques.
 * A cor carrega significado: verde=positivo, amarelo=atenção, etc.
 */
export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    success: 'badge-success',
    info:    'badge-info',
    warning: 'badge-warning',
    danger:  'badge-danger',
    neutral: 'bg-surface-secondary text-muted',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
