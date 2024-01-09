import card from '@/assets/passcard.mp4'
import Swiper, { NormalSwiper } from '@/components/Swiper'
import VideoPlayer from '@/components/Video'
import { times } from 'lodash-es'
import { isMobile } from 'react-device-detect'
import { useCallback, useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { collection_mint } from '@/pages/mint/MintNFT'

interface NftDetails {
  authorities: any
  id: string
  grouping: Grouping[]
  content: {
    metadata: NFTContent
  }
}

type Grouping = {
  group_key: string
  group_value: string
}

type NFTContent = {
  name: string
  symbol: string
  token_standard: string
}

const MyCards = () => {
  const { publicKey } = useWallet()
  const [userSogaList, setUserSogaList] = useState<NftDetails[]>([])
  const getUserNft = useCallback(async () => {
    if (!publicKey) return
    try {
      const req = await fetch(
        'https://mainnet.helius-rpc.com/?api-key=8559c286-95bc-4327-809f-bdcfaa18e70e',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": "my-id",
            "method": "searchAssets",
            "params": {
              "ownerAddress": publicKey,
              "grouping": [
                "collection",
                "3jiHd3gMyK9LjVFFLkNf2LF2Tw8PxANUyuVNX6sps7Wo"
              ],
              "page": 1, // Starts at 1
              "limit": 1000
            }
          }),
        }
      )
      const nftDetails = await req.json()
      const userAllNFT = nftDetails.result.items as NftDetails[]
      const list: NftDetails[] = []
      userAllNFT.forEach((item) => {
        if (new PublicKey(item.grouping[0].group_value).equals(collection_mint)) {
          list.push(item)
        }
      })
      setUserSogaList(list)
    } catch (e) {
      console.log('get user NFT failed!', e)
    }
  }, [publicKey])

  useEffect(() => {
    getUserNft().then()
    setInterval(() => {
      getUserNft().then()
    }, 15000)
  }, [getUserNft])

  return (
    <>
      <p>Mint NFT item</p>
      <p>My Soga</p>
      <section>
        {isMobile
          ? (<Swiper index={'nft'} limit={7}>
            {times(userSogaList.length, (i) => (
              <div className='swiper-slide' key={i}>
                <div className='card'>
                  <VideoPlayer video={card} />
                  <footer>
                    <em>{userSogaList[i].content.metadata.name}</em>
                    {/*<em>#000000</em>*/}
                    {/*<button>BURN</button>*/}
                  </footer>
                </div>
              </div>
            ))}
          </Swiper>)
          : (<NormalSwiper limit={5} index='nft'>
            {times(userSogaList.length, (i) => (
              <div className='swiper-slide' key={i}>
                <div className='card'>
                  <VideoPlayer video={card} />
                  <footer>
                    <em>{userSogaList[i].content.metadata.name}</em>
                    {/*<button>BURN</button>*/}
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
