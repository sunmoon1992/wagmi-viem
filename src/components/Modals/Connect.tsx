import { useState } from 'react'

import copy from '@/assets/copy.svg'
import out from '@/assets/log-out.svg'
import { hideHashOrAddress } from '@/utils/tools'
import { useWallet } from '@solana/wallet-adapter-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import Modal from './index'

interface Props {
  visible: boolean
  onCancel: () => void
  onClick: (wallet: string) => void
}

const Connect = ({ visible, onCancel, onClick }: Props) => {
  const { wallet, wallets } = useWallet()

  return (
    <Modal footer={null} visible={visible} title="Connect your wallet" onCancel={onCancel}>
      <div className="c-wallet-modal">
        {wallets.map(({ adapter }) => (
          <button
            onClick={() => {
              onClick(adapter.name)
              onCancel()
            }}
          >
            <img src={adapter.icon} alt="soga" />
            <span>{adapter.name}</span>
          </button>
        ))}
      </div>
    </Modal>
  )
}

const Account = ({ visible, onCancel }: Omit<Props, 'onClick'>) => {
  const { publicKey, disconnect } = useWallet()
  return (
    <Modal footer={null} visible={visible} title="Connected wallet" onCancel={onCancel}>
      <div className="c-wallet-modal">
        <section>
          <span>{hideHashOrAddress(publicKey?.toBase58() ?? '', 7, 10)}</span>
          <section>
            <CopyToClipboard text={publicKey?.toBase58() ?? ''} onCopy={() => toast.success('Copied to clipboard')}>
              <div className="icon">
                <img src={copy} alt="soga" />
              </div>
            </CopyToClipboard>
            <div
              className="icon"
              onClick={() => {
                onCancel()
                void disconnect()
              }}
            >
              <img src={out} alt="soga" />
            </div>
          </section>
        </section>
      </div>
    </Modal>
  )
}

const ConnectWallet = () => {
  const { connected, publicKey, select } = useWallet()

  const [visible1, setVisible1] = useState<boolean>(false)
  const [visible2, setVisible2] = useState<boolean>(false)

  return (
    <>
      {connected ? (
        <button onClick={setVisible2} className=" soga-connected">
          <span />
          {hideHashOrAddress(publicKey?.toBase58() ?? '')}
        </button>
      ) : (
        <button onClick={setVisible1}>Connect Wallet</button>
      )}
      <Connect visible={visible1} onCancel={() => setVisible1(false)} onClick={select} />
      <Account visible={visible2} onCancel={() => setVisible2(false)} onClick={select} />
    </>
  )
}

export default ConnectWallet
