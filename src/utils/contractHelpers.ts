import { Abi, Address, GetContractParameters, getContract as _getContract } from 'viem'

import airdropAbi from '@/config/abi/Airdrop.json'
import contracts from '@/config/contracts'
import { publicClient, walletClient } from '@/utils/viem'
import { erc20ABI } from 'wagmi'

interface Params {
  abi: Abi
  address: Address
}

export const getContract = ({ abi, address }: Params) => {
  const contract = _getContract({
    abi,
    address,
    publicClient,
    walletClient
  } as GetContractParameters)
  return { ...contract }
}

export const getERC20Contract = (address: Address) => {
  return getContract({ abi: erc20ABI, address })
}

export const getAirdropContract = () => {
  return getContract({ abi: airdropAbi, address: contracts.airdrop.contractAddress })
}
