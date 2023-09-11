import { Button, Input, Select, Space } from '@arco-design/web-react'
import { IconMinus } from '@arco-design/web-react/icon'

export const PriceOptions = () => {
  return (
    <div className="price-options">
      <section className="inner">
        <Space size="mini">
          <Input placeholder="Min" />
          <IconMinus />
          <Input placeholder="Max" />
        </Space>
        <Select allowClear defaultValue="ETH">
          {['ETH', 'wETH', 'USDC'].map((option, index) => (
            <Select.Option key={option} disabled={index === 3} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      </section>
      <Button>Apply</Button>
    </div>
  )
}
