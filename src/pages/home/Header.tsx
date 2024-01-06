import sogaIcon from '@/assets/soga-icon.svg'
import sogaLogo from '@/assets/soga-logo.svg'

import Connect from '@/components/Modals/Connect'
import { NavLink } from 'react-router-dom'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import { clusterApiUrl, Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js'

const Header = () => {
  const { publicKey } = useWallet()
  useEffect(() => {
    const func = async () => {
      const programId = new PublicKey(
        '3XtgZrQb9aQHm2iW8qeTrR1xamKBAbytzqXdtyVgHZB3'
      )
      const connection = new Connection("http://localhost:8899", "confirmed")

      const getAccountInfo = await connection.getAccountInfo(publicKey)
      console.info(getAccountInfo)
    }

    if (publicKey) void func()
  }, [publicKey])

  return (
    <div className='soga-header'>
      <div className='logo'>
        <img src={sogaIcon} alt='soga' />
        <img src={sogaLogo} alt='soga' />
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
      <Connect />
    </div>
  )
}

export default Header
