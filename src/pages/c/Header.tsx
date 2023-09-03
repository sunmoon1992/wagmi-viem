import Image from '@/components/common/Image'
import Creating from '@/pages/c/Creating'
import Wallet from '@/pages/c/Wallet'
import { Input, Space } from '@arco-design/web-react'
import { NavLink, useNavigate } from 'react-router-dom'

const InputSearch = Input.Search

function Header() {
  const navigate = useNavigate()

  return (
    <section className="xyz-header">
      <Space size="large">
        <Image onClick={() => navigate('/')} />
        <InputSearch allowClear placeholder="Search for collections, NFTs or users" />
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/sell">Sell</NavLink>
      </Space>
      <Space size="large">
        <Creating />
        <Wallet />
      </Space>
    </section>
  )
}

export default Header
