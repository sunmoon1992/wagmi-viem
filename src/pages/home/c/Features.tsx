import { useWallet } from '@solana/wallet-adapter-react'
import { useCallback, useEffect, useState } from 'react'
import { WHITELIST_API } from '@/config'
import MintNFT from '@/pages/mint/MintNFT'

export interface WhiteListApi {
  minted: boolean
  whiteList: boolean
}

const Features = () => {
  const { publicKey } = useWallet()
  const [proof, setPoof] = useState(false)
  const [isMinted, setIsMinted] = useState(true)
  const getProof = useCallback(async () => {
    if (!publicKey) return
    try {
      const req = await fetch('/api/getWhiteListAuth/' + publicKey)
      const rep = await req.json()
      const repData = rep.data as WhiteListApi
      setPoof(repData.whiteList)
      setIsMinted(repData.minted)
    } catch (e) {
      console.error('get proof failed!', e)
    }
  }, [publicKey])

  useEffect(() => {
    getProof().then()
  }, [getProof])
  return (
    <div>
      <p>
        Features for <br />
        the Future
      </p>

      <section>
        <div>
          <span>Whitelist</span>
          <span>
            <em>1500</em>
            <i>/1500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: '0%' }} />
          <em>0%</em>
        </div>
        <ul>
          <li>
            <span>Supply</span>
            <em>1500</em>
          </li>
          <li>
            <span>Mint Price</span>
            <em>1 Sol</em>
          </li>
          <li>
            <span>Balance</span>
            <em>0 Sol</em>
          </li>
        </ul>
        <MintNFT isPublicMint={false} isWhiteList={proof} isMinted={isMinted} />
        <small>Max 1 mint per wallet</small>
      </section>

      <section>
        <div>
          <span>Public Sale</span>
          <span>
            <em>500</em>
            <i>/500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: '0%' }} />
          <em>0%</em>
        </div>
        <ul>
          <li>
            <span>Supply</span>
            <em>500</em>
          </li>
          <li>
            <span>Mint Price</span>
            <em>1 Sol</em>
          </li>
          <li>
            <span>Balance</span>
            <em>0 Sol</em>
          </li>
        </ul>
        <MintNFT isPublicMint={true} />
        <small>Max 1 mint per wallet</small>
      </section>
    </div>
  )
}

export default Features
