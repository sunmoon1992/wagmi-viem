import AccountButton from '@/components/Wallet/AccountButton'
import ConnectButton from '@/components/Wallet/ConnectButton'
import contracts from '@/config/contracts'
import { useAirdrop } from '@/hooks/useAirdrop'
import {
  estimateContractGas,
  readContract,
  simulateContract,
  waitForTransaction,
  writeContract
} from '@/utils/callFuncHelpers'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { EstimateContractGasParameters, ReadContractParameters, SimulateContractParameters } from 'viem'
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

  const f1 = async () => {
    await claim(address)
  }
  const f2 = async () => {
    try {
      if (!address || !wc) return
      const claimed = await readContract({
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
      } as unknown as ReadContractParameters)
      console.info(`claimed:`, claimed)

      const gas = await estimateContractGas({
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
      } as unknown as EstimateContractGasParameters)
      console.info(`gas:`, gas)

      const { request } = await simulateContract({
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
      } as unknown as SimulateContractParameters)
      console.info(request)

      const hash = await writeContract(request)
      const receipt = await waitForTransaction({ hash })
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
