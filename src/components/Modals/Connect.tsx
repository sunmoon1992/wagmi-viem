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

const okx = {
  name: 'OKX Wallet',
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII='
}

const downloadLinks = {
  'OKX Wallet': 'https://www.okx.com/cn/download',
  Phantom: 'https://phantom.app/download',
  Backpack: 'https://backpack.app/downloads'
}

const Connect = ({ visible, onCancel, onClick }: Props) => {
  const { wallets } = useWallet()
  return (
    <Modal footer={null} visible={visible} title="Connect your wallet" onCancel={onCancel}>
      <div className="c-wallet-modal">
        {wallets.map(({ adapter }) => {
          return (
            <button
              key={adapter.name}
              onClick={() => {
                if (adapter.readyState === 'NotDetected') {
                  window.open(downloadLinks[adapter.name])
                } else {
                  onClick(adapter.name)
                }
                onCancel()
              }}
            >
              <div>
                <img src={adapter.icon} alt="soga" />
                <span>{adapter.name}</span>
              </div>
              {adapter.readyState === 'NotDetected' && <small>uninstall</small>}
            </button>
          )
        })}
        {!wallets.find(({ adapter }) => adapter.name === okx.name) && (
          <button
            key={okx.name}
            onClick={() => {
              window.open(downloadLinks[okx.name])
            }}
          >
            <div>
              <img src={okx.icon} alt="soga" />
              <span>{okx.name}</span>
            </div>
            <small>uninstall</small>
          </button>
        )}
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
