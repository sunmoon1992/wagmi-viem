import { useEffect } from 'react'

import { useRpcNodeStore } from '@/store'
import { RpcNodeState } from '@/store/types'

export default function useGlobalInit() {
  const fetchRpc = useRpcNodeStore((state: RpcNodeState) => state.fetch)
  useEffect(() => void fetchRpc(), [])
}