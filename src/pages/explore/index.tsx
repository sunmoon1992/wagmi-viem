import { Divider } from '@arco-design/web-react'
import { NavLink, Outlet } from 'react-router-dom'

function Index() {
  return (
    <section className="xyz-explore">
      <section className="xyz-explore-navs">
        <NavLink to="/explore/collections">Collections</NavLink>
        <NavLink to="/explore/marketplaces">Marketplaces</NavLink>
        <NavLink to="/explore/items">NFTs</NavLink>
        <NavLink to="/explore/users">Users</NavLink>
      </section>
      <Divider />
      <section className="xyz-explore-content">
        <Outlet />
      </section>
    </section>
  )
}

export default Index
