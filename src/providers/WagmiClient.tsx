import type { WagmiConfigProps } from 'wagmi'
import { WagmiConfig } from 'wagmi'

import * as React from 'react'

import { client } from '@/utils/wagmiConfig'

function Provider(props: React.PropsWithChildren<Omit<WagmiConfigProps, 'config'>>) {
  return <WagmiConfig config={client}>{props.children}</WagmiConfig>
}

export default Provider
