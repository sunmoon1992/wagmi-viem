import * as classNames from 'classnames'
import { useState } from 'react'

const dateOptions = [
  {
    label: '1H',
    value: '1h'
  },
  {
    label: '1D',
    value: '1D'
  },
  {
    label: '7D',
    value: '7D'
  },
  {
    label: '30D',
    value: '30D'
  }
]

export const DateOptions = ({ handleClick }: { handleClick: (dateType: string) => void }) => {
  const [dateType, setDateType] = useState<string>('1D')

  const _handleClick = (dateType: string) => {
    handleClick(dateType)
  }

  return (
    <div className="xyz-filter-options">
      {dateOptions.map((l) => (
        <span
          className={classNames({ active: dateType === l.value })}
          onClick={() => {
            setDateType(l.value)
            _handleClick(l.value)
          }}
        >
          {l.label}
        </span>
      ))}
    </div>
  )
}
