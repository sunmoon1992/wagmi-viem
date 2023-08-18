import { Abi, Address, GetContractParameters, PublicClient, WalletClient, getContract as _getContract } from 'viem'

import airdropAbi from '@/config/abi/Airdrop.json'
import contracts from '@/config/contracts'
import { publicClient } from '@/utils/viem'

interface Params {
  abi: Abi
  address: Address
  pc?: PublicClient
  wc?: WalletClient
}

export const getContract = ({ abi, address, pc, wc }: Params) => {
  const _pc = pc ?? publicClient
  const contract = _getContract({
    abi,
    address,
    publicClient: _pc,
    walletClient: wc
  } as GetContractParameters)
  return { ...contract }
}

export const getAirdropContract = (wc?: WalletClient) => {
  return getContract({ abi: airdropAbi, address: contracts.airdrop.contractAddress, wc })
}
