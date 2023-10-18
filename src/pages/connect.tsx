import { PropsWithChildren, ReactNode, useEffect, useMemo } from 'react'

import useConnecting from '@/hooks/useConnecting'
import { getWallets, Wallet } from '@/utils/wallets'
import { useBoolean } from 'ahooks'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

import { Navigate, useLocation } from 'react-router-dom'

export const InterceptConnect = (props: PropsWithChildren<ReactNode>) => {
  const location = useLocation()
  const { children } = props
  const { address } = useAccount()
  return useMemo(() => {
    const { state } = location
    return address ? <Navigate to={state?.from ? state?.from : '/'} /> : children
  }, [address, location])
}

const Connect = () => {
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const { connectWallet } = useConnecting()
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

  const wallets = useMemo(() => getWallets(), [])

  return (
    <div className="xyz-connect">
      <h3>Connect Your Wallet</h3>
      <p>Choose how you want to connect. There are several wallet providers.</p>
      <ul className="xyz-connect-inner">
        {wallets.map((wallet, index) => (
          <li key={wallet.id} onClick={() => handleClick(wallet)}>
            <img src={wallet.icon} alt="" />
            <span>{wallet.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Connect
