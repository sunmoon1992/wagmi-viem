import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { isMobile } from 'react-device-detect'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export interface ModalProps {
  hideCancel?: boolean
  okLoading?: boolean
  okDisabled?: boolean
  className?: string | string[]
  onCancel?: () => void
  onOk?: () => Promise<any> | void
  title?: ReactNode
  visible?: boolean
  okText?: ReactNode
  cancelText?: ReactNode
  footer?: ReactNode
  children?: ReactNode
  contentClassName?: string | string[]
  bodyClassName?: string | string[]
}

const Modal = ({
  title,
  footer,
  visible,
  okLoading,
  okDisabled,
  hideCancel,
  children,
  okText,
  cancelText,
  bodyClassName,
  contentClassName,
  onOk,
  onCancel
}: ModalProps) => {
  useBodyScrollLock(!!visible)

  const _onOk = (e: any) => {
    e.stopPropagation()
    onOk?.()
  }

  const _onCancel = (e: any) => {
    e.stopPropagation()
    onCancel?.()
  }

  const renderFooter = () => {
    if (footer === null) return null
    const cancelButtonNode = !hideCancel && <button onClick={_onCancel}>{cancelText || 'Cancel'}</button>
    const okButtonNode = (
      <button disabled={okDisabled} loading={okLoading} onClick={_onOk}>
        {okText || 'GOT IT'}
      </button>
    )
    const footerContent = (
      <>
        {okButtonNode}
        {cancelButtonNode}
      </>
    )
    return <div className="c-modal-footer">{footer || footerContent}</div>
  }

  return (
    <ReactModal
      isOpen={Boolean(visible)}
      shouldFocusAfterRender={false}
      className={classNames('c-modal-content', contentClassName, isMobile && 'h5')}
      overlayClassName="c-modal-overlay"
    >
      <header className="c-modal-head">
        <h4>{title}</h4>
        <button onClick={_onCancel} />
      </header>
      <div className={classNames('c-modal-body', bodyClassName)}>{children}</div>
      {renderFooter()}
    </ReactModal>
  )
}

export default Modal
