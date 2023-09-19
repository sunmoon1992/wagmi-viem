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
        <div className="xyz-search">
          <InputSearch allowClear placeholder="Search for collections, NFTs or users" />
        </div>
        <Explore />
        <NavLink to="/user/owned">Sell</NavLink>
      </Space>
      <Space size="medium">
        <Creating />
        {address && (
          <div className="xyz-header-icon" onClick={() => navigate('/notification')}>
            <IconNotification />
          </div>
        )}
        <Wallet />
        {address && <Personal />}
      </Space>
    </section>
  )
}

export default Header
