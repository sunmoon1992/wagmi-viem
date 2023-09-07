import Image from '@/components/common/Image'
import Creating from '@/pages/c/Creating'
import Explore from '@/pages/c/Explore'
import Wallet from '@/pages/c/Wallet'
import Personal from '@/pages/c/Wallet/Personal'
import { Input, Space } from '@arco-design/web-react'
import { IconNotification } from '@arco-design/web-react/icon'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

const InputSearch = Input.Search

function Header() {
  const navigate = useNavigate()
  const { address } = useAccount()

  return (
    <section className="xyz-header">
      <Space size="large">
        <Image onClick={() => navigate('/')} />
        <InputSearch allowClear placeholder="Search for collections, NFTs or users" />
        <Explore />
        <NavLink to="/sell">Sell</NavLink>
      </Space>
      <Space size="large">
        <Creating />
        <div className="xyz-header-icon" onClick={() => navigate('/notification')}>
          {address && <IconNotification />}
        </div>
        <Wallet />
        <Personal />
      </Space>
    </section>
  )
}

export default Header
