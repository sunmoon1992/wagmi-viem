import { useBoolean } from 'ahooks'
import { useEffect } from 'react'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

import useConnecting from '@/hooks/useConnecting'
import emitter, { EventTypes } from '@/utils/emitter'
import { Wallet } from '@/utils/wallets'

import Button from '@/components/Button'
import Account from '@/components/Wallet/Account'
import WalletModal from '@/pages/c/Modals/Wallet'

const Connect = () => {
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const { isConnected, address } = useAccount()
  const { connectWallet } = useConnecting()
  const [showModal, { setTrue: setShowModalTrue, setFalse: setShowModalFalse }] = useBoolean(false)
  const [switchNet, { setTrue: setSwitchNetTrue }] = useBoolean(false)

  const connectWalletFunc = async (wallet: Wallet) => {
    const { installed, connectorId, downloadLink } = wallet

    if (installed === false) return window.open(downloadLink, '_blank')

    const connected = await connectWallet(connectorId)

    if (connected && connected.chain.unsupported) setSwitchNetTrue()
  }

  useEffect(() => {
    if ((chain?.unsupported || switchNet) && switchNetwork) switchNetwork(chains[0]?.id)
  }, [chain, switchNet, switchNetwork, chains])

  useEffect(() => {
    emitter.removeAllListeners(EventTypes.connectWallet)
    emitter.addListener(EventTypes.connectWallet, () => {
      setShowModalTrue()
    })
  }, [])

  useEffect(() => {
    if (isConnected && address) {
      setShowModalFalse()
    }
  }, [address, isConnected])

  return (
    <div>
      {isConnected && address ? (
        <Account />
      ) : (
        <Button icon="wallet" size="small" onClick={setShowModalTrue}>
          Connect Wallet
        </Button>
      )}
      <WalletModal visible={showModal} onCancel={setShowModalFalse} onClick={connectWalletFunc} />
    </div>
  )
}

export default Connect
