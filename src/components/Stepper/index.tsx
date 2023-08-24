import { useUpdateEffect } from 'ahooks'
import classNames from 'classnames'

import { StepperProps } from '@/components/Stepper/interface'
import { FC, useImperativeHandle, useState } from 'react'

const Stepper: FC<StepperProps> = ({ value = 0, min = 0, max = 10, step = 1, onChange, cRef, suffix, className }) => {
  // 组件内维护的数据
  const [currValue, setCurrValue] = useState(value)
  const [currTime, setCurrTime] = useState(0)
  const changeValue = (val: number): void => {
    // 在允许的区间内，进行设置
    if (val >= min && val <= max) {
      setCurrValue(val)
    }
    if (val < min) setCurrValue(min)
    if (val > max) setCurrValue(max)
  }
  useUpdateEffect(() => {
    onChange?.(currValue as number)
  }, [currValue])
  useUpdateEffect(() => {
    setCurrValue(value)
  }, [value])

  useImperativeHandle(cRef, () => ({
    reset() {
      setCurrValue(min)
    }
  }))
  const isTouch: boolean = 'ontouchstart' in window

  const touchStart = (type: string) => {
    setCurrTime(+new Date())
    // console.log(type)
  }
  const touchEnd = (action: string, type: string): void => {
    if (type === 'mouse' && isTouch) return

    const now = +new Date()
    const diffTime = now - currTime
    if (diffTime > 400) {
      if (action === 'add') {
        changeValue(max as number)
      }
      if (action === 'sub') {
        changeValue(min as number)
      }
    } else {
      if (action === 'add') {
        changeValue(currValue + step)
      }
      if (action === 'sub') {
        changeValue(currValue - step)
      }
    }
  }

  return (
    <div className={classNames('libra-stepper', className)}>
      <button
        className="libra-stepper-sub"
        disabled={currValue <= min}
        onTouchStart={() => touchStart('touch')}
        onTouchEnd={() => touchEnd('sub', 'touch')}
        onMouseDown={() => touchStart('mouse')}
        onMouseUp={() => touchEnd('sub', 'mouse')}
      >
        <i />
      </button>
      <label>
        {suffix}
        {currValue}
      </label>
      <button
        className="libra-stepper-add"
        disabled={currValue >= max}
        onTouchStart={() => touchStart('touch')}
        onTouchEnd={() => touchEnd('add', 'touch')}
        onMouseDown={() => touchStart('mouse')}
        onMouseUp={() => touchEnd('add', 'mouse')}
      >
        <i />
      </button>
    </div>
  )
}

export default Stepper
