import { Rec } from '@/typings'
import { ReactNode } from 'react'

export interface TableProps {
  rowKey: string
  loading?: boolean
  emptyNode?: ReactNode
  loadingNode?: ReactNode
  data: Rec[]
  columns: { dataIndex: string; width?: number; title: string; render?: (value: string, data: Rec) => void }[]
}

export interface TableItemProps {
  id?: string
  item: Rec
  columns: Rec[]
}
