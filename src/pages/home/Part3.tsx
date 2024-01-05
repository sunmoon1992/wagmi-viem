import { NormalSwiper } from '@/components/Swiper'
import { times } from 'lodash-es'
import card from '@/assets/passcard.mp4'

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
                  <video src={card} autoPlay />
                  <em>#000000</em>
                </div>
              </div>
            ))}
          </NormalSwiper>
        </section>
      </div>
    </div>
  )
}

export default Part3
