import {
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getMint
} from '@solana/spl-token'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useCallback } from 'react'

import { BLACK } from '@/config'
import { PublicKey, Transaction } from '@solana/web3.js'
import console from 'console'

export const BurnNFT = ({ addr, owner }: { addr: string; owner: string }) => {
  const { connection } = useConnection()
  const { sendTransaction } = useWallet()

  const handle = useCallback(async () => {
    // if (!publicKey) return
    const publicKey = new PublicKey(owner)
    const mint = await getMint(connection, new PublicKey(addr))
    console.info(mint)
    const senderATA = await getAssociatedTokenAddress(new PublicKey(addr), publicKey)
    console.info(senderATA)
    const senderAccount = await getAccount(connection, senderATA)
    console.info(senderAccount.address.toJSON())
    if (!senderAccount.isInitialized) throw new Error('Sender not initialized')
    if (senderAccount.isFrozen) throw new Error('Sender frozen')
    const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, { mint: new PublicKey(addr) })
    console.info(tokenAccounts)
    // getAssociatedTokenAddress(splToken, recipient)
    const recipientATA = await getAssociatedTokenAddress(new PublicKey(addr), new PublicKey(BLACK))
    console.info(recipientATA)
    // const recipientAccount = await getAccount(connection, recipientATA)
    // console.info(recipientAccount)
    // if (!recipientAccount.isInitialized) throw new Error('Recipient not initialized')
    // if (recipientAccount.isFrozen) throw new Error('Recipient frozen')

    const transaction = new Transaction()
    transaction.add(
      createAssociatedTokenAccountInstruction(publicKey, recipientATA, new PublicKey(BLACK), new PublicKey(addr))
    )
    transaction.add(
      createTransferCheckedInstruction(
        senderATA,
        // tokenAccounts.value[0].pubkey,
        new PublicKey(addr),
        recipientATA,
        publicKey,
        1,
        mint.decimals,
        [publicKey]
      )
    )
    const signature = await sendTransaction(transaction, connection, { signers: publicKey })
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()
    const res = await connection.confirmTransaction({
      blockhash: blockhash,
      lastValidBlockHeight: lastValidBlockHeight,
      signature
    })
    console.log(res)
  }, [addr])

  return <button onClick={handle}>BURN</button>
}
