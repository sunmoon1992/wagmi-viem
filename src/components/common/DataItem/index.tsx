import classNames from 'classnames'

import { DataItemProps } from '@/components/common/DataItem/interface'
import { FC } from 'react'

const DataItem: FC<DataItemProps> = ({ wrapClassNames, label, children }) => {
  return (
    <div className={classNames('libra-data-item', wrapClassNames)}>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  )
}

export const DataItemGroup: FC<Omit<DataItemProps, 'label'>> = ({ wrapClassNames, children }) => {
  return <div className={classNames('libra-data-item-group', wrapClassNames)}>{children}</div>
}

export const DataItemDivider = () => <div className="libra-data-item-divider" />

export default DataItem
