import { Button, Modal } from '@arco-design/web-react'
import { useEffect, useMemo } from 'react'

import Image from '@/components/common/Image'
import useConnecting from '@/hooks/useConnecting'
import emitter, { EventTypes } from '@/utils/emitter'
import { getWallets, Wallet } from '@/utils/wallets'
import { useBoolean } from 'ahooks'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

const Connect = () => {
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const { isConnected, address } = useAccount()
  const { connectWallet } = useConnecting()
  const [showModal, { setTrue: setShowModalTrue, setFalse: setShowModalFalse }] = useBoolean(false)
  const [switchNet, { setTrue: setSwitchNetTrue }] = useBoolean(false)

  const handleClick = async (wallet: Wallet) => {
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

  const wallets = useMemo(() => getWallets(), [])

  return (
    <>
      <Button onClick={setShowModalTrue}>Connect Wallet</Button>
      <Modal
        simple
        closable
        title="Connect Wallet"
        footer={null}
        visible={showModal}
        onCancel={setShowModalFalse}
        className="xyz-wallet"
      >
        <div className="xyz-wallet-connect">
          {wallets.map((wallet, index) => (
            <Button key={wallet.id} onClick={() => handleClick(wallet)}>
              <Image src={wallet.icon} />
              <span>{wallet.title}</span>
            </Button>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default Connect
