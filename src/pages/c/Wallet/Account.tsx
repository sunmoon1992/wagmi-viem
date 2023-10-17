import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAccount, useDisconnect, useNetwork } from 'wagmi'

import wallet from '@/assets/wallet.svg'
import Image from '@/components/common/Image'
import { useBalances } from '@/hooks/useBalances'
import { hideString, keepDecimals } from '@/utils/tools'
import { Button, Divider, Modal, Space } from '@arco-design/web-react'
import { IconCopy, IconExport, IconEye } from '@arco-design/web-react/icon'
import { useBoolean } from 'ahooks'

function Account() {
  const { address, connector } = useAccount()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()
  const { balances } = useBalances(address)
  const [showModal, { setTrue: setShowModalTrue, setFalse: setShowModalFalse }] = useBoolean(false)

  return (
    <>
      <div className="xyz-header-icon" onClick={setShowModalTrue}>
        {address && <img src={wallet} alt="wallet" />}
      </div>
      <Modal
        simple
        closable
        focusLock
        title="Connected Wallet"
        footer={null}
        visible={showModal}
        onCancel={setShowModalFalse}
        autoFocus={false}
        className="xyz-wallet"
      >
        <div className="xyz-wallet-account">
          <dl>
            <dt>
              <Image src={`${connector?.name.toLowerCase()}.svg`} />
              <div>
                <span>
                  <em>{chain?.name}</em>
                </span>
                <span>{address && hideString(address, 7, 5)}</span>
              </div>
            </dt>
            <dd>
              <Space>
                <CopyToClipboard text={address} onCopy={() => console.info('Copy successfully')}>
                  <Button size="small" icon={<IconCopy />} />
                </CopyToClipboard>
                <Button
                  size="small"
                  icon={<IconEye />}
                  onClick={() => window.open(`${chain?.blockExplorers?.etherscan?.url}/address/${address}`)}
                />
                <Button size="small" icon={<IconExport />} onClick={disconnect} />
              </Space>
            </dd>
          </dl>
          <Divider />
          <div className="xyz-wallet-account-assets">
            <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" />
            <small>{keepDecimals(balances?.eth ?? 0, 8)} ETH</small>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Account
