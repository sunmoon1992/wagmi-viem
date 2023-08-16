import { formatUnits as _formatUnits } from 'viem'

export const formatUnits = (v: bigint, decimals: number) => _formatUnits(v, decimals)
