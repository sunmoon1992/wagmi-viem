import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/common/Button'
import Image from '@/components/common/Image'
import Modal from '@/components/common/Modal'
import { getWallets, Wallet } from '@/utils/wallets'

interface Props {
  visible: boolean
  onCancel: () => void
  onClick: (wallet: Wallet) => void
}

const Wallet: FC<Props> = ({ visible, onCancel, onClick }) => {
  const { t } = useTranslation()

  const wallets = useMemo(() => getWallets(), [])

  return (
    <Modal visible={visible} title="Connect Wallet" footer={null} onCancel={onCancel}>
      <div className="libra-wallet-connect">
        {wallets.map((wallet, index) => (
          <Button size="default" type="dark" key={wallet.id} onClick={() => onClick(wallet)}>
            <Image src={wallet.icon} />
            <span>{wallet.title}</span>
          </Button>
        ))}
      </div>
      <div className="libra-wallet-tips">不向美国或其他受限制地区公民、居民提供交易服务</div>
    </Modal>
  )
}

export default Wallet
