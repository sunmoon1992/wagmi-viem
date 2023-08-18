import Contract from '@/class/Contract'
import { ChainId, ContractKeys } from '@/typings'

export const contracts: { [key in ContractKeys]: Contract } = {
  multicall: new Contract('multicall', {
    [ChainId.MAINNET]: '0xca11bde05977b3631167028862be2a173976ca11',
    [ChainId.TESTNET]: '0xca11bde05977b3631167028862be2a173976ca11'
  }),
  airdrop: new Contract('airdrop', {
    [ChainId.MAINNET]: '0x1140384c300397aC4dBb4b3D8fB537C7903C3410',
    [ChainId.TESTNET]: '0xed21eb238191077A22da6674a508ebd5486a8623'
  })
}

export default contracts
