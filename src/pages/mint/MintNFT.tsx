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
// import { struct, u8 } from '@solana/buffer-layout';
// import * as BufferLayout from '@solana/buffer-layout';
import { useCallback, useState } from 'react'

const CONTRACT_PROGRAM_ID = new PublicKey('FXGypTfQELi8YE5v4AEgrB1zHLFYVNJ5yAYcGnV5vHZB')
const config_info = new PublicKey('3XtgZrQb9aQHm2iW8qeTrR1xamKBAbytzqXdtyVgHZB3')
const collection_mint = new PublicKey('H8FrtEmi9K7rjNm5dYUZm2ze8ueT7BCnqib5v4bK5Ute')
const collection_metadata = new PublicKey('DYN8pp7P1QMziRoPjsW2KwEReJkjLMuYC3q8W3dr1LUi')
const collection_edition = new PublicKey('9VzQQHUFdp4z8ndyTRHWvbXuFqJicRFvvvwJhfqxp9Qr')
const collection_authority_record = new PublicKey('5g3X4w4ndPjEdb5WpS8KhuZBiPT6gKPJASsyDRddcKm4')
const pda_creator = new PublicKey('4j4jvrFXQHiA6c7krpbQgVyqwaczuTdhoFfwz2MfrVh6')
const charge_address = new PublicKey('XYJ5UyjL1ukmE1kR7hmKYqRT4zV7rJJfMXkys1kd6Lu')
const metadata_program = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')

const MintNFT = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [minting, setMinting] = useState(false)

  const mintNFT = useCallback(async () => {
    if (!publicKey) {
      return
    }
    setMinting(true)
    const lamports = await connection.getBalance(publicKey)
    console.log(
      'Balance:',
      BigNumber(lamports)
        .dividedBy(10 ** 9)
        .toString()
    )

    //1、创建一个新的mint 并初始化mint
    const mintTx = new Transaction()
    const mintKey = Keypair.generate()

    mintTx.add(
      SystemProgram.createAccount({
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
      })
    )

    mintTx.add(createInitializeMint2Instruction(mintKey.publicKey, 0, publicKey, publicKey, TOKEN_PROGRAM_ID))
    //3、通过seed获取 对应钱包下 相应mint的 token——account；
    const associatedAccount = await getAssociatedTokenAddress(mintKey.publicKey, publicKey)

    mintTx.add(createAssociatedTokenAccountInstruction(publicKey, associatedAccount, publicKey, mintKey.publicKey))

    //2、通过seed['metadata', program id, mint id]生成metadata pda，
    const metadataKey = PublicKey.findProgramAddressSync(
      [Buffer.from('metadata'), metadata_program.toBuffer(), mintKey.publicKey.toBuffer()],
      metadata_program
    )[0]

    const edition = PublicKey.findProgramAddressSync(
      [Buffer.from('metadata'), metadata_program.toBuffer(), mintKey.publicKey.toBuffer(), Buffer.from('edition')],
      metadata_program
    )[0]

    const user_info = PublicKey.findProgramAddressSync(
      [CONTRACT_PROGRAM_ID.toBuffer(), publicKey.toBuffer(), Buffer.from('user_info')],
      CONTRACT_PROGRAM_ID
    )[0]

    mintTx.add(createMintToInstruction(mintKey.publicKey, associatedAccount, publicKey, 1, [publicKey, mintKey]))
    // const ata = await getAssociatedTokenAddress(new PublicKey(tokenAddress), wallet.provider.publicKey)
    // console.log('ata', ata.toBase58())
    // const account = await getAccount(connection, ata, new PublicKey(tokenAddress))
    // console.log('account', account)
    // console.log('account address', account.address.toBase58())
    // console.log('account amount', account.amount.toString())
    // console.log('account mint', account.mint.toBase58())
    // console.log('account owner', account.owner.toBase58())

    try {
      const mintInstruction = new TransactionInstruction({
        keys: [
          { pubkey: publicKey, isSigner: true, isWritable: false },
          { pubkey: config_info, isSigner: false, isWritable: true },
          { pubkey: pda_creator, isSigner: false, isWritable: true },
          { pubkey: mintKey.publicKey, isSigner: true, isWritable: true },
          { pubkey: metadataKey, isSigner: false, isWritable: true },
          { pubkey: edition, isSigner: false, isWritable: true },
          { pubkey: collection_mint, isSigner: false, isWritable: false },
          { pubkey: collection_metadata, isSigner: false, isWritable: true },
          { pubkey: collection_edition, isSigner: false, isWritable: true },
          { pubkey: collection_authority_record, isSigner: false, isWritable: true },
          { pubkey: charge_address, isSigner: false, isWritable: true },
          { pubkey: user_info, isSigner: false, isWritable: true },
          { pubkey: metadata_program, isSigner: false, isWritable: false },
          { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
          { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
          { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }
        ],
        programId: CONTRACT_PROGRAM_ID,
        data: Buffer.from([2])
      })

      mintTx.add(mintInstruction)
      const signature = await sendTransaction(mintTx, connection, { signers: [mintKey] })
      console.log(signature)
      await connection.confirmTransaction(signature, 'confirmed')
      console.log('NFT Minted Successfully!')
    } catch (error) {
      console.error(error)
      console.log('Minting Failed!')
    } finally {
      setMinting(false)
    }
  }, [publicKey, sendTransaction, connection])

  // 定义 WhitelistArgs 的结构和编码方式
  //   function encodeWhitelistArgs(proof: any) {
  //     const proofLayout = struct([u8('length'), ...Array(proof.length).fill(BufferLayout.blob(32))])

  //     const data = Buffer.alloc(1000) // 分配一个足够大的缓冲区
  //     const length = proofLayout.encode(
  //       {
  //         length: proof.length,
  //         ...proof
  //       },
  //       data
  //     )

  //     return data.slice(0, length)
  //   }

  //   const whitelistMint = useCallback(
  //     async (proof: any) => {
  //       if (!publicKey) {
  //         alert('Please connect to a wallet')
  //         return
  //       }

  //       setMinting(true)

  //       try {
  //         // 编码 WhitelistArgs
  //         const args = encodeWhitelistArgs(proof)

  //         // 创建 WhitelistMint 指令
  //         const whitelistMintInstruction = new TransactionInstruction({
  //           keys: [
  //             { pubkey: publicKey, isSigner: true, isWritable: false },
  //             { pubkey: config_info, isSigner: false, isWritable: true },
  //             { pubkey: collection_mint, isSigner: false, isWritable: false },
  //             { pubkey: collection_metadata, isSigner: false, isWritable: true },
  //             { pubkey: collection_edition, isSigner: false, isWritable: true },
  //             { pubkey: collection_authority_record, isSigner: false, isWritable: true },
  //             { pubkey: pda_creator, isSigner: false, isWritable: true },
  //             { pubkey: charge_address, isSigner: false, isWritable: true }
  //           ],
  //           programId: CONTRACT_PROGRAM_ID,
  //           data: Buffer.concat([Buffer.from([3]), args]) // WhitelistMint 指令下标和参数
  //         })

  //         // 创建并发送交易
  //         const transaction = new Transaction().add(whitelistMintInstruction)
  //         const signature = await sendTransaction(transaction, connection)
  //         await connection.confirmTransaction(signature, 'confirmed')
  //         alert('Whitelist NFT Minted Successfully!')
  //       } catch (error) {
  //         console.error(error)
  //         alert('Minting Failed!')
  //       } finally {
  //         setMinting(false)
  //       }
  //     },
  //     [publicKey, sendTransaction, connection]
  //   )

  return (
    <div>
      <button onClick={mintNFT} disabled={!publicKey || minting}>
        {minting ? 'Minting...' : 'Mint NFT'}
      </button>
    </div>
  )
}

export default MintNFT
