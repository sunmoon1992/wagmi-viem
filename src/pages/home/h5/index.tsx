import Footer from '@/pages/home/c/Footer'
import Header from '@/pages/home/c/Header'
import Slogan from '@/pages/home/c/Slogan'
import Part2 from '@/pages/home/h5/Part2'
import Part3 from '@/pages/home/h5/Part3'
import * as React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import * as web3 from '@solana/web3.js'
import { PublicKey } from '@solana/web3.js'
import { ns64, struct, u32 } from '@solana/buffer-layout'
import { Buffer } from 'buffer'

function Index() {
  const { publicKey } = useWallet()
  useEffect(() => {
    const func = async () => {
      let keypair = web3.Keypair.generate()
      let payer = new PublicKey(publicKey)

      // let connection = new web3.Connection(web3.clusterApiUrl('testnet'))
      // let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
      let connection = new web3.Connection('https://solana-api.projectserum.com', 'recent');

      let slot = await connection.getSlot();
      console.log(slot);
// 93186439

      let blockTime = await connection.getBlockTime(slot);
      console.log(blockTime);
// 1630747045

      let block = await connection.getBlock(slot);
      console.log(block);
    }
    if (publicKey) void func()
  }, [publicKey])

  return (
    <div className="h5">
      <Header />
      <Slogan />
      <Part2 />
      <Part3 />
      <Footer />
    </div>
  )
}

export default React.memo(Index)
