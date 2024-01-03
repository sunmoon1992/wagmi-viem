import banner1 from '@/assets/m-banner1.png'
import tg from '@/assets/tg.svg'
import tw from '@/assets/tw.svg'

const Part1 = () => {
  return (
    <div className="soga-part1">
      <section>
        <img src={banner1} alt="soga" />
      </section>
      <h1>Soga</h1>
      <p>
        The mobile era of web3 begins now. Premium hardware purpose-built to power web3. Self custody on phone with Seed
        Vault. Access web3 native dApps. Experience the Saga difference.
      </p>

      <nav>
        <button>MINT</button>
        <img src={tg} alt="soga" />
        <img src={tw} alt="soga" />
      </nav>
    </div>
  )
}

export default Part1
