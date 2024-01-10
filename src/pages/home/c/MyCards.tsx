import card from '@/assets/passcard.mp4'
import Swiper, { NormalSwiper } from '@/components/Swiper'
import VideoPlayer from '@/components/Video'
import { BurnNFT } from '@/pages/home/c/BurnNFT'
import console from 'console'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const MyCards = () => {
  const [cards, setCards] = useState<Record<string, any>[]>([])

  useEffect(() => {
    const func = async () => {
      const { result } = await fetch('https://mainnet.helius-rpc.com/?api-key=8559c286-95bc-4327-809f-bdcfaa18e70e', {
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'my-id',
          method: 'searchAssets',
          params: {
            // "ownerAddress": new PublicKey("78bD3gEA1mS9qZksNitZT8xrk4pHJkZGh8kAoRVruJGV"),
            grouping: [
              'collection',
              'CdTKgXi6DMsRuvkn4CUTMzQdqvBXa5X6YoNrPveS93Gq'
              // "3jiHd3gMyK9LjVFFLkNf2LF2Tw8PxANUyuVNX6sps7Wo"
            ],
            page: 1, // Starts at 1
            limit: 10
          }
        })
      }).then((res) => res.json())
      console.info(result)
      setCards(result?.items)
    }

    void func()
  }, [])

  return (
    <>
      <p>Mint NFT item</p>
      <p>My Soga</p>
      <section>
        {isMobile ? (
          <Swiper index={'nft'} limit={7}>
            {cards.map((i) => (
              <div className="swiper-slide" key={i.id}>
                <div className="card">
                  <VideoPlayer video={card} />
                  <footer>
                    <em>{i.content.metadata.name}</em>
                    <BurnNFT addr={i.id} owner={i.ownership.owner} />
                  </footer>
                </div>
              </div>
            ))}
          </Swiper>
        ) : (
          <NormalSwiper limit={5} index="nft">
            {cards.map((i) => (
              <div className="swiper-slide" key={i.id}>
                <div className="card">
                  <VideoPlayer video={card} />
                  <footer>
                    <em>{i.content.metadata.name}</em>
                    <BurnNFT addr={i.id} owner={i.ownership.owner} />
                  </footer>
                </div>
              </div>
            ))}
          </NormalSwiper>
        )}
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
    </>
  )
}

export default MyCards
