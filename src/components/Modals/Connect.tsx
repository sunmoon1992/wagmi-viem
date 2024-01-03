import { useMemo, useState } from 'react'

import phantom from '@/assets/phantom.svg'
import { getWallets } from '@/utils/wallets'
import Modal from './index'

interface Props {
  visible: boolean
  onCancel: () => void
  onClick: (wallet: string) => void
}

const M = ({ visible, onCancel, onClick }: Props) => {
  const wallets = useMemo(() => getWallets(), [])

  return (
    <Modal footer={null} visible={visible} title="Connect your wallet" onCancel={onCancel}>
      <div className="c-wallet-modal">
        {/*{wallets.map((wallet) => (*/}
        {/*  <Button size="default" type="dark" key={wallet.id} onClick={() => onClick(wallet)}>*/}
        {/*    <Image src={`icon/${wallet.icon}`} />*/}
        {/*    <span>{wallet.title}</span>*/}
        {/*  </Button>*/}
        {/*))}*/}
        <button onClick={() => onClick('phantom')}>
          <img src={phantom} alt="soga" />
          <span>phantom</span>
        </button>
      </div>
    </Modal>
  )
}

const ConnectWallet = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const onClick = () => {
    return null
  }

  return (
    <>
      <button onClick={setVisible}>Connect Wallet</button>
      <M visible={visible} onCancel={() => setVisible(false)} onClick={onClick} />
    </>
  )
}

export default ConnectWallet
