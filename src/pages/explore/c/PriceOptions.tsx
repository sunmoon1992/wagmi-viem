import { Button, Input, Select, Space } from '@arco-design/web-react'
import { IconMinus } from '@arco-design/web-react/icon'

interface Props {
  simple?: boolean
}

export const PriceOptions = ({ simple }: Props) => {
  return (
    <div className="price-options">
      <section className="inner">
        <Space size={simple ? 'medium' : 'mini'}>
          <Input placeholder="Min" />
          <IconMinus />
          <Input placeholder="Max" />
          {simple && (
            <small>
              <b>ETH</b>
            </small>
          )}
        </Space>
        {!simple && (
          <Select allowClear defaultValue="ETH">
            {['ETH', 'wETH', 'USDC'].map((option, index) => (
              <Select.Option key={option} disabled={index === 3} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        )}
      </section>
      <Button>Apply</Button>
    </div>
  )
}
