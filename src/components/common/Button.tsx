import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'solid' | 'ghost'
  children: ReactNode
}

export default function Button({ variant = 'ghost', className = '', children, ...rest }: Props) {
  return (
    <a className={`btn ${variant === 'solid' ? 'btn-solid' : 'btn-ghost'} ${className}`} {...rest}>
      {children}
    </a>
  )
}
