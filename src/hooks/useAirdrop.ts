import { callWithGas, waitForTransaction } from '@/utils/callFuncHelpers'
import { getAirdropContract } from '@/utils/contractHelpers'
import { Address } from 'viem'

export const useAirdrop = () => {
  const claimed = async (account: Address): Promise<boolean> => {
    if (!account) return false

    try {
      const c = getAirdropContract()
      const data = await c.read.claimed([account])
      return data
    } catch (e) {
      console.info(e)
      return false
    }
  }

  const claim = async (account: Address) => {
    if (!account) return false

    try {
      const r = await claimed(account)
      console.info('claimed:', r)
      const c = getAirdropContract()
      const hash = await callWithGas(c, 'claim', [], { account })
      console.info('hash:', hash)
      const receipt = await waitForTransaction(hash)
      console.info(receipt)
      return receipt.status
    } catch (e) {
      console.info(e)
      return false
    }
  }

  return {
    claim,
    claimed
  }
}
