import { Checkbox } from '@arco-design/web-react'
import { useState } from 'react'

const marketplaceOptions = [
  {
    label: 'Rarible',
    value: 'Rarible',
    icon: ''
  },
  {
    label: 'OpenSea',
    value: 'OpenSea',
    icon: ''
  },
  {
    label: 'x2y2',
    value: 'x2y2',
    icon: ''
  }
]

export function MarketOptions() {
  const [active, setActive] = useState<string>(marketplaceOptions[0].label)

  return (
    <div className="type-options">
      <Checkbox.Group defaultValue={['Rarible']}>
        {marketplaceOptions.map((item) => {
          return (
            <Checkbox key={item.value} value={item.label}>
              {item.label}
            </Checkbox>
          )
        })}
      </Checkbox.Group>
    </div>
  )
}
