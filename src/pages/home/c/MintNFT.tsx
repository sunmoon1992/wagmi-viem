import { minPublicKeyConfig, pda } from '@/utils/callFuncHelpers'
import {
  MintLayout,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMint2Instruction,
  createMintToInstruction,
  getAssociatedTokenAddress
} from '@solana/spl-token'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey,Keypair, SYSVAR_RENT_PUBKEY, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js'
import { Buffer } from 'buffer'
import * as console from 'console'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { u8, struct } from '@solana/buffer-layout'

const config = minPublicKeyConfig.mainnet

const MintNFT = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()

  const handle = useCallback(async () => {
    if (!publicKey) return toast.error('Connect Your Wallet')

    try {
      const balance = await connection.getBalance(publicKey)
      console.log('balance=', balance)

      const transaction = new Transaction()
      const mintKeypair = Keypair.generate()

      transaction.add(
        SystemProgram.createAccount({
          fromPubkey: publicKey,
          newAccountPubkey: mintKeypair.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(MintLayout.span),
          space: MintLayout.span,
          programId: TOKEN_PROGRAM_ID
        })
      )
      transaction.add(
        createInitializeMint2Instruction(mintKeypair.publicKey, 0, publicKey, publicKey, TOKEN_PROGRAM_ID)
      )

      const associatedAccount = await getAssociatedTokenAddress(mintKeypair.publicKey, publicKey)

      transaction.add(
        createAssociatedTokenAccountInstruction(publicKey, associatedAccount, publicKey, mintKeypair.publicKey)
      )
      const metadataPda = pda(
        [Buffer.from('metadata'), config.metadata_program.toBuffer(), mintKeypair.publicKey.toBuffer()],
        config.metadata_program
      )

      const editionPda = pda(
        [
          Buffer.from('metadata'),
          config.metadata_program.toBuffer(),
          mintKeypair.publicKey.toBuffer(),
          Buffer.from('edition')
        ],
        config.metadata_program
      )

      const userInfoPda = pda(
        [config.program_id.toBuffer(), publicKey.toBuffer(), Buffer.from('user_info')],
        config.program_id
      )

      transaction.add(
        createMintToInstruction(mintKeypair.publicKey, associatedAccount, publicKey, 1, [publicKey, mintKeypair])
      )

      const mintInstruction = new TransactionInstruction({
        keys: [
          { pubkey: publicKey, isSigner: true, isWritable: false },
          { pubkey: config.config_info, isSigner: false, isWritable: true },
          { pubkey: config.pda_creator, isSigner: false, isWritable: true },
          { pubkey: mintKeypair.publicKey, isSigner: true, isWritable: true },
          { pubkey: metadataPda, isSigner: false, isWritable: true },
          { pubkey: editionPda, isSigner: false, isWritable: true },
          { pubkey: config.collection_mint, isSigner: false, isWritable: false },
          { pubkey: config.collection_metadata, isSigner: false, isWritable: true },
          { pubkey: config.collection_edition, isSigner: false, isWritable: true },
          { pubkey: config.collection_authority_record, isSigner: false, isWritable: true },
          { pubkey: config.charge_address, isSigner: false, isWritable: true },
          { pubkey: userInfoPda, isSigner: false, isWritable: true },
          { pubkey: config.metadata_program, isSigner: false, isWritable: false },
          { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
          { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
          { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }
        ],
        programId: config.program_id,
        data: Buffer.from([2])
      })
      transaction.add(mintInstruction)
      const signature = await sendTransaction(transaction, connection, { signers: [mintKeypair] })
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()
      const res = await connection.confirmTransaction({
        blockhash: blockhash,
        lastValidBlockHeight: lastValidBlockHeight,
        signature
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }, [publicKey, connection])

  const handle1 = useCallback(async () => {
    if (!publicKey) return
    const s = struct([
      u8('minted')
    ])
    const res = await connection.getAccountInfo(new PublicKey('78bD3gEA1mS9qZksNitZT8xrk4pHJkZGh8kAoRVruJGV'))
    try {
      console.log(res, s.decode(res.data as any))
    } catch (error) {
      console.log(error)
    }
  }, [publicKey, connection])

  return <>
    <button onClick={handle}>Go To MINT</button>
    <button onClick={handle1}>Get Mint Info</button>
  </>
}

export default MintNFT
