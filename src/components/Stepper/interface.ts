export interface StepperProps {
  value?: number // 初始值
  min?: number // 允许设置的最小值
  max?: number // 允许设置的最大值
  step?: number // 每点击一次，步进值
  onChange?: (value: number) => void
  cRef?: any
  suffix?: string
  className?: string
}
