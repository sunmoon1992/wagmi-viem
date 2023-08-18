import { Wallet, getWallets } from '@/utils/wallets'
import { FC, useMemo } from 'react'

interface Props {
  show: boolean
  onClose: () => void
  onClick: (wallet: Wallet) => void
}

const ConnectModal: FC<Props> = ({ show, onClick }) => {
  const wallets = useMemo(() => getWallets(), [])

  return (
    show && (
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.id} onClick={() => onClick(wallet)}>
            <img src={`icon/${wallet.icon}`} alt="" />
            <span>{wallet.title}</span>
          </li>
        ))}
      </ul>
    )
  )
}

export default ConnectModal
