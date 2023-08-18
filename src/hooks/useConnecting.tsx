import { useCallback } from 'react'
import { ConnectorNotFoundError, SwitchChainNotSupportedError, useConnect } from 'wagmi'

import { ConnectorIds } from '@/utils/wallets'

const useConnecting = () => {
  const { connectAsync, connectors } = useConnect()

  const connectWallet = useCallback(
    async (connectorId: ConnectorIds) => {
      const connector = connectors.find((c) => (c.id as ConnectorIds) === connectorId)
      try {
        const connected = await connectAsync({ connector })
        // console.info(connected)
        return connected
      } catch (error) {
        if (error instanceof ConnectorNotFoundError) {
          throw new Error('ConnectorNotFoundError')
        }
        if (error instanceof SwitchChainNotSupportedError) {
          throw new Error('SwitchChainNotSupportedError')
        }
      }

      return undefined
    },
    [connectors, connectAsync]
  )

  return { connectWallet }
}

export default useConnecting
