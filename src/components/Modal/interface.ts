import { ReactNode } from 'react'

export interface ModalProps {
  loading?: boolean
  className?: string | string[]
  onCancel?: () => void
  onOk?: (e?: MouseEvent) => Promise<any> | void
  title?: string | ReactNode
  visible?: boolean
  okText?: string
  cancelText?: string
  footer?: ReactNode
  contentClassName?: string | string[]
  bodyClassName?: string | string[]
}
