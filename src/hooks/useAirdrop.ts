import { TWalletClient } from '@/typings'
import { callWithGas, waitForTransaction } from '@/utils/callFuncHelpers'
import { getAirdropContract } from '@/utils/contractHelpers'

export const useAirdrop = () => {
  const claimed = async (wc: TWalletClient): Promise<boolean> => {
    if (!wc) return false

    try {
      const c = getAirdropContract()
      const data = await c.read.claimed([wc.account.address])
      return data
    } catch (e) {
      console.info(e)
      return false
    }
  }

  const claim = async (wc: TWalletClient) => {
    if (!wc) return false

    try {
      const r = await claimed(wc)
      console.info('claimed:', r)
      const c = getAirdropContract(wc)
      const hash = await callWithGas(c, 'claim')
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
