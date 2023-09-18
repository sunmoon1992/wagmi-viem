import { UploadAvatar } from '@/pages/user/c/Avatar'
import { Media } from '@/pages/user/c/Media'
import UploadPoster from '@/pages/user/c/UploadPoster'
import { hideString } from '@/utils/tools'
import { Button, Divider, Space } from '@arco-design/web-react'
import { IconHeart, IconSafe, IconStar } from '@arco-design/web-react/icon'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

function Index() {
  const { address } = useAccount()
  const navigate = useNavigate()
  return (
    <section className="xyz-user">
      <section className="xyz-user-profile">
        <div className="xyz-user-profile-top">
          <UploadPoster />
          <UploadAvatar />
        </div>
        <div className="xyz-user-profile-bottom">
          <div className="left">
            <h3>
              <Space size="medium">
                {hideString(address ?? '', 10, 7)}
                <div className="xyz-user-verified">
                  <IconSafe />
                  <small>get verified</small>
                </div>
              </Space>
            </h3>
            <Space className="xyz-user-buttons">
              <Button size="small" onClick={() => navigate('/user/settings')}>
                Settings
              </Button>
              <Button size="small">Sell</Button>
              <Media />
            </Space>
          </div>
          <div className="right">
            <Space size="large">
              <span>
                <IconStar /> Followers
              </span>
              <span>100000</span>
            </Space>
            <Space size="large">
              <span>
                <IconHeart /> Following
              </span>
              <span>9999</span>
            </Space>
          </div>
        </div>
      </section>

      <section className="xyz-user-navs">
        <NavLink to="/user/owned">Owned</NavLink>
        <NavLink to="/user/sale">On sale</NavLink>
        <NavLink to="/user/collections">Collections</NavLink>
        <NavLink to="/user/created">Created</NavLink>
        <NavLink to="/user/activity">Activity</NavLink>
        <NavLink to="/user/sold">Sold</NavLink>
      </section>
      <Divider />
      <section className="xyz-explore-content">
        <Outlet />
      </section>
    </section>
  )
}

export default Index
