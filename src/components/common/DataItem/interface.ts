import { ReactNode } from 'react'

export interface DataItemProps {
  label: string | ReactNode
  children: ReactNode | string
  wrapClassNames?: string | string[]
}
