import Spin from '@/components/common/Spin'
import { useRpcNodeStore } from '@/store'
import { RpcNodeState } from '@/store/types'
import { PropsWithChildren, ReactNode, useMemo } from 'react'

export const FastClient = (props: PropsWithChildren<ReactNode>) => {
  const { children } = props
  const loaded = useRpcNodeStore((state: RpcNodeState) => state.loaded)
  return useMemo(() => (!loaded ? <Spin position="fixed" /> : children), [loaded])
}
