import { calcDuration } from '@/utils/tools'
import { useEffect, useMemo, useState } from 'react'

interface Props {
  initTimestamp: number
}

export const Countdown = ({ initTimestamp }: Props) => {
  const [estimatedTime, setEstimatedTime] = useState<[number, string, string, string, boolean]>([
    0,
    '00',
    '00',
    '00',
    false
  ])

  useEffect(() => {
    const timer = setInterval(function () {
      if (estimatedTime[4] && timer) return clearInterval(timer)
      if (initTimestamp > 0) setEstimatedTime(() => calcDuration(initTimestamp))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [initTimestamp])

  const h = useMemo(() => {
    const [d, h] = estimatedTime
    if (d > 0) return Number(h) + d * 24
    return h
  }, [estimatedTime])

  return !estimatedTime[4] && (<small>{`${h} hr : ${estimatedTime[2]} min : ${estimatedTime[3]} sec`}</small>)
}
