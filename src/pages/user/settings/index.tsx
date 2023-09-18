import { Space } from '@arco-design/web-react'
import { IconIdcard, IconInteraction, IconNotification, IconUser } from '@arco-design/web-react/icon'
import { NavLink, Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <section className="xyz-user-settings">
      <h2>Settings</h2>
      <div className="xyz-user-settings-content">
        <div className="left">
          <NavLink to="/user/settings/profile">
            <Space>
              <IconUser />
              Profile
            </Space>
          </NavLink>
          <NavLink to="/user/settings/account">
            <Space>
              <IconIdcard />
              Account
            </Space>
          </NavLink>
          <NavLink to="/user/settings/wallets">
            <Space>
              <IconInteraction />
              Wallets
            </Space>
          </NavLink>
          <NavLink to="/user/settings/notifications">
            <Space>
              <IconNotification />
              Notifications
            </Space>
          </NavLink>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Index
