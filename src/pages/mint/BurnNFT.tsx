import { useCallback } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import {
  MintLayout,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMint2Instruction,
  createMintToInstruction,
  getAssociatedTokenAddress, createTransferCheckedInstruction
} from '@solana/spl-token'

import {
  Keypair,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
  TransactionInstruction
} from '@solana/web3.js'
import console from 'console'


export const BurnNFT = () => {
  const connection = useConnection()
  const { publicKey } = useWallet()

  const burn = useCallback(async (nftAddress: string) => {
    if (!publicKey) return
    const ta = await connection.getTokenAccountsByOwner(publicKey, {mint: new PublicKey(nftAddress)})

    const blackh = '11111111111111111111111111111111'
    const ata = await getAssociatedTokenAddress(new PublicKey(nftAddress), new PublicKey(blackh))
    const tx = new Transaction()
    tx.add(
      createAssociatedTokenAccountInstruction(
        publicKey, // payer
        ata, // ata
        new PublicKey(blackh), // owner
        new PublicKey(nftAddress), // mint
      )
    );
    tx.add(
      createTransferCheckedInstruction(
        ta.value[0].pubkey, // token account
        new PublicKey('ELsoet7owh53WjaDJq1LCPUk8YreKvHqKTuxyJ8Zio8'), // mint
        ata, // to (should be a token account)
        publicKey, // from's owner
        1, // amount, if your deciamls is 8, send 10^8 for 1 token
        0, // decimals
        [publicKey]
      )
    );
    const signature = await sendTransaction(mintTx, connection, { signers: publicKey })
    console.log(signature)
    await connection.confirmTransaction(signature, 'confirmed')
    console.log('signature', signature)
  }, [])
  return (
    <button>
      Burn
    </button>
  )
}
