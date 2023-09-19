import { nftCardSizeAtom } from '@/atoms/useNftCardSize'
import classNames from 'classnames'
import { useAtom } from 'jotai'
import { useState } from 'react'

export const ViewOptions = () => {
  const [sizeType, setSizeType] = useState<'small' | 'big'>('small')
  const [, setNftCardSize] = useAtom(nftCardSizeAtom)

  const _handleClick = (size: 'small' | 'big') => {
    setSizeType(size)
    setNftCardSize(size)
  }

  return (
    <div className="xyz-filter-options">
      <span
        className={classNames({ active: sizeType === 'big' })}
        onClick={() => {
          _handleClick('big')
        }}
      >
        Big
      </span>
      <span
        className={classNames({ active: sizeType === 'small' })}
        onClick={() => {
          _handleClick('small')
        }}
      >
        Small
      </span>
    </div>
  )
}
