import { useRpcNodeStore } from '@/store'
import { RpcNodeState } from '@/store/types'
import { PropsWithChildren, useMemo } from 'react'

export const ProtectViemClient = (props: PropsWithChildren<any>) => {
  const { children } = props
  const loaded = useRpcNodeStore((state: RpcNodeState) => state.loaded)

  return useMemo(() => (!loaded ? <h1>loading</h1> : children), [loaded])
}
