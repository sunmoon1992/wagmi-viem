import card from '@/assets/passcard.mp4'
import { NormalSwiper } from '@/components/Swiper'
import VideoPlayer from '@/components/Video'
import { times } from 'lodash-es'

const Part3 = () => {
  return (
    <div className="soga-part3">
      <div className="inner">
        <p>Mint NFT item</p>
        <p>My Soga</p>
        <section>
          <NormalSwiper limit={5} index="nft">
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
          </NormalSwiper>
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
