import { formatUnits as _formatUnits, parseUnits as _parseUnits } from 'viem'

export const formatUnits = (v: unknown, decimals: number) => _formatUnits(v as bigint, decimals)

/**
 * case:
 * contract.write.withdraw([pid, BigInt(value)])
 */

export const parseUnits = (v: number | string, decimals = 8): bigint => {
  const p1 = String(v)
  const p2 = p1.indexOf('.') > -1 ? p1 : `${p1}.0`
  const p3 = p2.split('.')
  const p4 = `${p3[0]}.${p3[1].substring(0, decimals)}`
  return _parseUnits(p4, decimals)
}

const thousandthsDivision = (n: string | number) => {
  return n.toString().replace(/\d+/, (m) => m.replace(/(\d)(?=(\d{3})+$)/g, ($1) => $1 + ','))
}

export const keepDecimals = (value: string | number, decimal = 2, format = false): string => {
  const base = String(value)
  const _value = base.indexOf('.') > -1 ? base : `${base}.0`
  const [a, b] = _value.split('.')
  const padEnd = decimal > b.length ? b.padEnd(decimal, '0') : b
  const substr = `${a}.${padEnd.substring(0, decimal)}`
  return format ? thousandthsDivision(substr) : substr
}
