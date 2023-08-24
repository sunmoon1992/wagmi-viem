import classNames from 'classnames'

import Button from '@/components/Button'
import { ModalProps } from '@/components/Modal/interface'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { FC } from 'react'
import * as ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const Modal: FC<ModalProps> = ({
  title,
  footer,
  visible,
  okLoading,
  okDisabled,
  children,
  okText,
  cancelText,
  bodyClassName,
  contentClassName,
  onOk,
  onCancel
}) => {
  useBodyScrollLock(!!visible)

  const renderFooter = () => {
    if (footer === null) return null
    const cancelButtonNode = (
      <Button type="outline" size="large" onClick={onCancel}>
        {cancelText || '取消'}
      </Button>
    )
    const okButtonNode = (
      <Button size="large" disabled={okDisabled} loading={okLoading} onClick={onOk}>
        {okText || '确定'}
      </Button>
    )
    const footerContent = (
      <>
        {okButtonNode}
        {cancelButtonNode}
      </>
    )
    return <div className="libra-modal-footer">{footer || footerContent}</div>
  }

  return (
    <ReactModal
      isOpen={visible}
      className={classNames('libra-modal-content', contentClassName)}
      overlayClassName="libra-modal-overlay"
    >
      <header className="libra-modal-head">
        <h4>{title}</h4>
        <button onClick={onCancel} />
      </header>
      <div className={classNames('libra-modal-body', bodyClassName)}>{children}</div>
      {renderFooter()}
    </ReactModal>
  )
}

export default Modal
