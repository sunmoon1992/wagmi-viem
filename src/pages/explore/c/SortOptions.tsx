import { Select } from '@arco-design/web-react'

const options = [
  {
    label: 'Trending',
    value: 'Trending'
  },
  {
    label: 'Recently listed',
    value: 'Recently'
  },
  {
    label: 'Price: low to high',
    value: 'low'
  },
  {
    label: 'Price: high to low',
    value: 'high'
  }
]

export const SortOptions = () => {
  return (
    <Select allowClear defaultValue="Trending">
      {options.map((option, index) => (
        <Select.Option key={option.label} value={option.label}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  )
}
