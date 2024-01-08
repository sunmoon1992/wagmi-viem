import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export const D = dayjs

export const hideHashOrAddress = (hash: string, before?: number, end?: number) => {
  const reg = new RegExp(`(\\w{${before ?? 5}})\\w*(\\w{${end ?? 7}})`)
  return hash.replace(reg, '$1......$2')
}

export const calcDuration = (s: number): [number, string, string, string, boolean] => {
  const duration = dayjs.duration(dayjs(s).diff(dayjs()))
  const days = duration.days()
  const hours = String(duration.hours()).padStart(2, '0')
  const minutes = String(duration.minutes()).padStart(2, '0')
  const seconds = String(duration.seconds()).padStart(2, '0')
  const over = Math.floor(duration.asSeconds()) <= 0
  return over ? [0, '00', '00', '00', true] : [days, hours, minutes, seconds, false]
}
