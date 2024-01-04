import banner3 from '@/assets/m-banner3.png'
import Swiper from '@/components/Swiper'
import { times } from 'lodash-es'

const Part3 = () => {
  return (
    <div className="soga-part3">
      <img src={banner3} alt="soga" />
      <div>
        <p>Mint NFT item</p>
        <p>My Soga</p>
        <section>
          <Swiper index={'nft'} limit={7}>
            {times(10, (i) => (
              <div className="swiper-slide" key={i}>
                <div className="card">
                  <em>#000000</em>
                </div>
              </div>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  )
}

export default Part3
