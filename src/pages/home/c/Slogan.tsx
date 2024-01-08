import banner3 from '@/assets/banner3.png'
import tg from '@/assets/tg.svg'
import tw from '@/assets/tw.svg'
import { MEDIA_LINKS } from '@/config'
import { isMobile } from 'react-device-detect'

const Slogan = () => {
  return (
    <div className='soga-part1'>
      <section>
        <img src={banner3} alt='soga' />
      </section>
      <h1>Soga</h1>
      {isMobile
        ? <p>
          The mobile era of web3 begins now. Premium hardware purpose-built to power web3. Self custody on phone with
          Seed
          Vault. Access web3 native dApps. Experience the Saga difference.
        </p>
        : <p>
          The mobile era of web3 begins now. Premium hardware purpose-built to power <br />
          web3. Self custody on phone with Seed Vault. Access web3 native dApps. <br />
          Experience the Saga difference.
        </p>}

      <nav>
        <img src={tg} alt='soga' onClick={() => window.open(MEDIA_LINKS.tg)} />
        <img src={tw} alt='soga' onClick={() => window.open(MEDIA_LINKS.tw)} />
      </nav>
    </div>
  )
}

export default Slogan
