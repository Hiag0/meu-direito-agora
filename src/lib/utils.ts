import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn() — "Class Names"
 *
 * Combina classes do Tailwind de forma segura, sem conflitos.
 * Exemplo de problema que ele resolve:
 *   sem cn(): "p-4 p-8" → ambas as classes existem (conflito)
 *   com cn(): "p-4 p-8" → vira apenas "p-8" (a última vence)
 *
 * Uso: cn('base-class', condition && 'conditional-class', 'override-class')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
