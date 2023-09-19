import { Button } from '@arco-design/web-react'
import classNames from 'classnames'
import { useState } from 'react'

const status = [
  {
    label: 'All',
    icon: ''
  },
  {
    label: 'Buy Now',
    icon: ''
  },
  {
    label: 'Live Auction',
    icon: ''
  },
  {
    label: 'Not For Sale',
    icon: ''
  }
]

export function StatusOptions() {
  const [active, setActive] = useState<string>(status[0].label)

  return (
    <div className="status-options">
      {status.map((l) => (
        <Button key={l.label} className={classNames({ active: active === l.label })} onClick={() => setActive(l.label)}>
          {l.label}
        </Button>
      ))}
    </div>
  )
}
