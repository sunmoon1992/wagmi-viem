import sogaIcon from '@/assets/soga-icon.svg'
import sogaLogo from '@/assets/soga-logo.svg'

import Connect from '@/components/Modals/Connect'
import { isMobile } from 'react-device-detect'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="soga-header">
      <div className="logo">
        <img src={sogaIcon} alt="soga" />
        <img src={sogaLogo} alt="soga" />
      </div>
      {!isMobile && (
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      )}
      <Connect />
    </div>
  )
}

export default Header
