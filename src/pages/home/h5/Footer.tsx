import sogaIcon from '@/assets/soga-icon.svg'
import sogaLogo from '@/assets/soga-logo.svg'

import tg from '@/assets/tg.svg'
import tw from '@/assets/tw.svg'

const Header = () => {
  return (
    <div className="soga-footer">
      <section className="inner">
        <div className="logo">
          <img src={sogaIcon} alt="soga" />
          <img src={sogaLogo} alt="soga" />
        </div>
        <nav>
          <img src={tg} alt="soga" />
          <img src={tw} alt="soga" />
        </nav>
      </section>
    </div>
  )
}

export default Header
