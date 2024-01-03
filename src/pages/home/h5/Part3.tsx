import banner3 from '@/assets/m-banner3.png'
import { times } from 'lodash-es'

const Part3 = () => {
  return (
    <div className="soga-part3">
      <img src={banner3} alt="soga" />
      <div>
        <p>Mint NFT item</p>
        <p>My Soga</p>
        <section>
          {times(1, (i) => (
            <div className="card" key={i}>
              <em>#000000</em>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Part3
