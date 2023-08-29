import Image from '@/components/common/Image'
import Spin from '@/components/common/Spin'
import _classNames from 'classnames'
import { MouseEventHandler } from 'react'
import { ButtonProps } from './interface'

function Button({ icon, size, type, shape, style, loading, disabled, onClick, classNames, children }: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      if (typeof event?.preventDefault === 'function') event.preventDefault()
      return
    }
    onClick && onClick(event)
  }

  return (
    <button
      style={style}
      className={_classNames(
        `
      libra-btn
      libra-btn-type-${type}
      libra-btn-size-${size}`,
        { loading: loading },
        { disabled: disabled },
        { [`libra-btn-shape-${shape}`]: shape },
        classNames
      )}
      type="button"
      disabled={disabled}
      onClick={(e) => handleClick(e)}
    >
      {loading && <Spin />}
      <div className="libra-btn-inner">
        {icon && <Image className="libra-btn-icon" src={`${icon}.svg`} />}
        {children}
      </div>
    </button>
  )
}

Button.defaultProps = {
  size: 'default',
  type: 'default'
}

export default Button
