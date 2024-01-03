import sogaIcon from '@/assets/soga-icon.svg'
import sogaLogo from '@/assets/soga-logo.svg'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="soga-header">
      <div className="logo">
        <img src={sogaIcon} alt="soga" />
        <img src={sogaLogo} alt="soga" />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <button>Connect Wallet</button>
    </div>
  )
}

export default Header
