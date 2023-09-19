import { Rec } from '@/typings'
import { Select } from '@arco-design/web-react'

export const SortOptions = ({ options }: { options: Rec[] }) => {
  return (
    <Select allowClear defaultValue="received">
      {options.map((option) => (
        <Select.Option key={option.label} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  )
}
