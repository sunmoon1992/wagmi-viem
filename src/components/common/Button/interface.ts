import { CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
  style?: CSSProperties
  className?: string | string[]
  children?: ReactNode
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline'
  size?: 'small' | 'default'
  shape?: 'circle' | 'left-ugly' | 'left-ugly-light' | 'right-ugly' | 'right-ugly-light'
  href?: string
  target?: string
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  onClick?: (e: Event) => void
}
