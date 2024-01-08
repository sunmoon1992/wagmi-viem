import card from '@/assets/passcard.mp4'
import Swiper, { NormalSwiper } from '@/components/Swiper'
import VideoPlayer from '@/components/Video'
import { times } from 'lodash-es'
import { isMobile } from 'react-device-detect'

const MyCards = () => {
  return (
    <>
      <p>Mint NFT item</p>
      <p>My Soga</p>
      <section>
        {isMobile
          ? (<Swiper index={'nft'} limit={7}>
            {times(10, (i) => (
              <div className='swiper-slide' key={i}>
                <div className='card'>
                  <VideoPlayer video={card} />
                  <footer>
                    <em>#000000</em>
                    <button>BURN</button>
                  </footer>
                </div>
              </div>
            ))}
          </Swiper>)
          : (<NormalSwiper limit={5} index='nft'>
            {times(10, (i) => (
              <div className='swiper-slide' key={i}>
                <div className='card'>
                  <VideoPlayer video={card} />
                  <footer>
                    <em>#000000</em>
                    <button>BURN</button>
                  </footer>
                </div>
              </div>
            ))}
          </NormalSwiper>)}
      </section>
      <p>
        After the NFT mint ends, you can burn it <br />
        within 24 hours and get permission to airdrop $SOGA.
      </p>
      <div className='count'>
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
    </>
  )
}

export default MyCards
