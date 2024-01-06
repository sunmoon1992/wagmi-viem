import banner3 from '@/assets/m-banner3.png'
import card from '@/assets/passcard.mp4'
import Swiper from '@/components/Swiper'
import VideoPlayer from '@/components/Video'
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
                  <VideoPlayer video={card} />
                  <footer>
                    <em>#000000</em>
                    <button>BURN</button>
                  </footer>
                </div>
              </div>
            ))}
          </Swiper>
        </section>
        <p>
          After the NFT mint ends, you can burn it <br />
          within 24 hours and get permission to airdrop $SOGA.
        </p>
        <div className="count">
          <dl>
            <dd>
              <span>Total</span>
              <em>2000</em>
            </dd>
            <dd>
              <span>Burn</span>
              <em>0</em>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Part3
