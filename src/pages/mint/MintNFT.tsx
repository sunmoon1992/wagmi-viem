import {
  MintLayout,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMint2Instruction,
  createMintToInstruction,
  getAssociatedTokenAddress
} from '@solana/spl-token'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import {
  Keypair,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
  TransactionInstruction
} from '@solana/web3.js'
import BigNumber from 'bignumber.js'
import { Buffer } from 'buffer'
import { useCallback, useState } from 'react'
import * as console from 'console'
import toast from 'react-hot-toast'
import { minPublicKeyConfig, pda } from '@/utils/callFuncHelpers'

type PublicMintNFTProps = {
  isPublicMint: boolean
  isWhiteList?: boolean
  isMinted?: boolean
}

const MintNFT = ({ isPublicMint, isWhiteList, isMinted }: PublicMintNFTProps) => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [minting, setMinting] = useState(false)

  const recordWhiteListMint = useCallback(async (address: string, tx: string) => {
    return await fetch(
      '/api/whiteListMint',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address: address,
          txid: tx
        })
      }
    ).then((res) => res.json())
  }, [])

  const mintNFT = useCallback(async () => {
    if (!publicKey) {
      return
    }
    const lamports = await connection.getBalance(publicKey)
    console.log(
      'Balance:',
      BigNumber(lamports)
        .dividedBy(10 ** 9)
        .toString()
    )

    const mintTx = new Transaction()
    const mintKey = Keypair.generate()
    const metadataKey = pda(
      [
        Buffer.from('metadata'),
        minPublicKeyConfig.metadata_program.toBuffer(),
        mintKey.publicKey.toBuffer()
      ],
      minPublicKeyConfig.metadata_program
    )
    const edition = pda(
      [
        Buffer.from('metadata'),
        minPublicKeyConfig.metadata_program.toBuffer(),
        mintKey.publicKey.toBuffer(),
        Buffer.from('edition')
      ],
      minPublicKeyConfig.metadata_program
    )
    const user_info = pda(
      [
        minPublicKeyConfig.program_id_dev.toBuffer(),
        publicKey.toBuffer(),
        Buffer.from('user_info')
      ],
      minPublicKeyConfig.program_id_dev
    )

    mintTx.add(SystemProgram.createAccount({
        /** The account that will transfer lamports to the created account */
        fromPubkey: publicKey,
        /** Public key of the created account */
        newAccountPubkey: mintKey.publicKey,
        /** Amount of lamports to transfer to the created account */
        lamports: await connection.getMinimumBalanceForRentExemption(MintLayout.span),
        /** Amount of space in bytes to allocate to the created account */
        space: MintLayout.span,
        /** Public key of the program to assign as the owner of the created account */
        programId: TOKEN_PROGRAM_ID
      }))
    mintTx.add(createInitializeMint2Instruction(mintKey.publicKey, 0, publicKey, publicKey, TOKEN_PROGRAM_ID))
    const associatedTokenAddress = await getAssociatedTokenAddress(mintKey.publicKey, publicKey)
    mintTx.add(createAssociatedTokenAccountInstruction(publicKey, associatedTokenAddress, publicKey, mintKey.publicKey))
    mintTx.add(createMintToInstruction(mintKey.publicKey, associatedTokenAddress, publicKey, 1, [publicKey, mintKey]))

    try {
      const mintInstruction = new TransactionInstruction({
        keys: [
          { pubkey: publicKey, isSigner: true, isWritable: false },
          { pubkey: minPublicKeyConfig.config_info, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.pda_creator, isSigner: false, isWritable: true },
          { pubkey: mintKey.publicKey, isSigner: true, isWritable: true },
          { pubkey: metadataKey, isSigner: false, isWritable: true },
          { pubkey: edition, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.collection_mint, isSigner: false, isWritable: false },
          { pubkey: minPublicKeyConfig.collection_metadata, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.collection_edition, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.collection_authority_record, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.charge_address, isSigner: false, isWritable: true },
          { pubkey: user_info, isSigner: false, isWritable: true },
          { pubkey: minPublicKeyConfig.metadata_program, isSigner: false, isWritable: false },
          { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
          { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
          { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }
        ],
        programId: minPublicKeyConfig.program_id_dev,
        data: Buffer.from([2])
      })
      mintTx.add(mintInstruction)
      const signature = await sendTransaction(mintTx, connection, { signers: [mintKey] })
      console.log(signature)
      await connection.confirmTransaction(signature, 'confirmed')
      console.log('NFT Minted Successfully!')
      console.log('address', publicKey.toString())
      await recordWhiteListMint(publicKey.toString(), signature)
    } catch (error) {
      console.error(error)
      console.log('Minting Failed!')
    } finally {
      setMinting(false)
    }
  }, [publicKey, sendTransaction, connection, isWhiteList, isMinted])

  return (
    <button onClick={mintNFT}>
      {minting ? 'Minting...' : 'Go To MINT'}
    </button>
  )
}

export default MintNFT
