import { Checkbox } from '@arco-design/web-react'
// import { useState } from 'react'

const marketplaceOptions = [
  {
    label: 'Verified Only',
    value: 'Verified',
    icon: ''
  },
  {
    label: 'Show lazy minted items',
    value: 'Rarible',
    icon: ''
  },
  {
    label: 'Show NSFW',
    value: 'OpenSea',
    icon: ''
  }
]

export function OtherOptions() {
  // const [active, setActive] = useState<string>(marketplaceOptions[0].label)

  return (
    <div className="type-options">
      <Checkbox.Group defaultValue={['Beijing']}>
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
