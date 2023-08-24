import { motion } from 'framer-motion'

import { useClickAway } from 'ahooks'
import { FC, useRef, useState } from 'react'

import { DropDownListItemProps, WrapDropDownListProps } from '@/components/DropDown/interface'
import * as classNames from 'classnames'

export const DropDown: FC<WrapDropDownListProps> = ({ entry, height = 'auto', children, wrapClassNames }) => {
  const ref = useRef(null)
  const [toggle, setToggle] = useState<boolean>(false)

  useClickAway(() => setToggle(false), ref)

  return (
    <div ref={ref} className={classNames('libra-drop-down', wrapClassNames)}>
      <div onClick={() => setToggle(!toggle)} className="">
        {entry}
      </div>
      <motion.div
        className="libra-drop-down-motion-div"
        initial={{ height: 0 }}
        animate={{ height: toggle ? height : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className="libra-drop-down-inner">
          <div className="libra-drop-down-items">
            <ul onClick={() => setToggle(false)}>{children}</ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const DropDownItem = ({ content, onSelect, className, ...props }: DropDownListItemProps) => (
  <li {...props} onClick={onSelect} className={className}>
    {content}
  </li>
)
