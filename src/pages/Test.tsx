import AccountButton from '@/components/Wallet/AccountButton'
import ConnectButton from '@/components/Wallet/ConnectButton'
import contracts from '@/config/contracts'
import { useAirdrop } from '@/hooks/useAirdrop'
import { publicClient, walletClient } from '@/utils/viem'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Client, EstimateContractGasParameters, ReadContractParameters, SimulateContractParameters } from 'viem'
import {
  estimateContractGas,
  readContract,
  simulateContract,
  waitForTransactionReceipt,
  writeContract
} from 'viem/actions'
import { useAccount, useWalletClient } from 'wagmi'

function Home() {
  const { t } = useTranslation()
  const { address } = useAccount()
  const { data: wc } = useWalletClient()
  const { claim } = useAirdrop()

  // console.info(import.meta.env)
  // console.info(parseUnits(1.99))
  // console.info(formatUnits(10000000100000001000000010000000n, 8))
  // console.info(publicClient)
  console.info(wc)
  console.info(walletClient)

  const f1 = async () => {
    if (wc) await claim(wc)
  }
  const f2 = async () => {
    try {
      if (!address || !wc) return
      const claimed = await readContract(
        publicClient as Client,
        {
          address: contracts.airdrop.contractAddress,
          abi: [
            {
              inputs: [
                {
                  internalType: 'address',
                  name: '',
                  type: 'address'
                }
              ],
              name: 'claimed',
              outputs: [
                {
                  internalType: 'bool',
                  name: '',
                  type: 'bool'
                }
              ],
              stateMutability: 'view',
              type: 'function'
            }
          ],
          functionName: 'claimed',
          args: [address]
        } as unknown as ReadContractParameters
      )
      console.info(`claimed:`, claimed)

      const gas = await estimateContractGas(
        publicClient as Client,
        {
          address: contracts.airdrop.contractAddress,
          abi: [
            {
              inputs: [],
              name: 'claim',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
          functionName: 'claim',
          account: address,
          value: 0n
        } as unknown as EstimateContractGasParameters
      )
      console.info(`gas:`, gas)

      const { request } = await simulateContract(
        publicClient as Client,
        {
          address: contracts.airdrop.contractAddress,
          abi: [
            {
              inputs: [],
              name: 'claim',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
          functionName: 'claim',
          account: address
        } as unknown as SimulateContractParameters
      )
      console.info(request)

      const hash = await writeContract(walletClient as Client, request)
      const receipt = await waitForTransactionReceipt(publicClient as Client, { hash })
      console.info(receipt)
    } catch (e) {
      console.info(e)
    }
  }
  return (
    <>
      <h1
        onClick={() => {
          i18n.changeLanguage('en')
        }}
      >
        {t('common.twoway')}
      </h1>
      <button onClick={f1}>Airdrop claim</button>
      <button onClick={f2}>Airdrop f2</button>
      <AccountButton />
      <ConnectButton />
    </>
  )
}

export default Home
