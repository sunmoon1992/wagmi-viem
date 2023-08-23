import { Key, PropsWithChildren, ReactNode } from 'react'

export interface DropDownListProps {
  entry: ReactNode
  height?: number
}

export interface DropDownListItemProps {
  key: Key
  content: ReactNode
  className?: string
  onSelect?: () => void
}

export declare type WrapDropDownListProps = PropsWithChildren<DropDownListProps>
