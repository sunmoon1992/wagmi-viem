import { Button } from '@arco-design/web-react'
import classNames from 'classnames'
import { useState } from 'react'

const chains = [
  {
    label: 'Ethereum',
    icon: ''
  },
  {
    label: 'Polygon',
    icon: ''
  },
  {
    label: 'Tezos',
    icon: ''
  },
  {
    label: 'Immutable X',
    icon: ''
  }
]

export function ChainOptions() {
  const [active, setActive] = useState<string>(chains[0].label)

  return (
    <div className="block-chain">
      <div className="block-chain-options">
        {chains.map((l) => (
          <Button
            key={l.label}
            className={classNames({ active: active === l.label })}
            onClick={() => setActive(l.label)}
          >
            {l.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
