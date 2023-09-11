import { Button } from '@arco-design/web-react'
import * as classNames from 'classnames'
import { useState } from 'react'

const status = [
  {
    label: 'All',
    icon: ''
  },
  {
    label: 'Multiple Editions',
    icon: ''
  },
  {
    label: 'Single Edition',
    icon: ''
  }
]

export function TypeOptions() {
  const [active, setActive] = useState<string>(status[0].label)

  return (
    <div className="type-options">
      {status.map((l) => (
        <Button key={l.label} className={classNames({ active: active === l.label })} onClick={() => setActive(l.label)}>
          {l.label}
        </Button>
      ))}
    </div>
  )
}
