import { ENDPOINT } from '@/config'
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { useMemo } from 'react'

function Provider(props: React.PropsWithChildren) {
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new BackpackWalletAdapter()], [])
  return (
    <ConnectionProvider endpoint={ENDPOINT}>
      <WalletProvider autoConnect wallets={wallets}>
        {props.children}
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default Provider
