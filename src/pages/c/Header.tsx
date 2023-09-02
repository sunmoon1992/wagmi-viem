import Image from '@/components/common/Image'
import Wallet from '@/pages/c/Wallet'
import { Input, Space } from '@arco-design/web-react'
import { NavLink, useNavigate } from 'react-router-dom'

const InputSearch = Input.Search

function Header() {
  const navigate = useNavigate()

  return (
    <section className="xyz-header">
      <div className="xyz-header-left">
        <Space size="large">
          <Image onClick={() => navigate('/')} />
          <InputSearch allowClear placeholder="Search for collections, NFTs or users" />
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/sell">Sell</NavLink>
        </Space>
      </div>
      <div className="xyz-header-right">
        <Wallet />
      </div>
    </section>
  )
}

export default Header