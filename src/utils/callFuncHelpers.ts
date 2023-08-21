import { Rec, TXStatus } from '@/typings'
import { getERC20Contract } from '@/utils/contractHelpers'
import { publicClient, walletClient } from '@/utils/viem'
import {
  CallParameters,
  Client,
  EstimateContractGasParameters,
  MulticallParameters,
  MulticallReturnType,
  ReadContractParameters,
  SimulateContractParameters,
  TransactionReceipt
} from 'viem'
import {
  EstimateContractGasReturnType,
  ReadContractReturnType,
  SimulateContractReturnType,
  WriteContractParameters,
  WriteContractReturnType,
  estimateContractGas as _estimateContractGas,
  multicall as _multicall,
  readContract as _readContract,
  simulateContract as _simulateContract,
  watchPendingTransactions as _watchPendingTransactions,
  writeContract as _writeContract,
  waitForTransactionReceipt
} from 'viem/actions'
import { WatchPendingTransactionsParameters } from 'viem/dist/types/actions/public/watchPendingTransactions'
import { SendTransactionResult, WaitForTransactionArgs } from 'wagmi/actions'

export const multicall = async (args: MulticallParameters): Promise<MulticallReturnType> => {
  const data = await _multicall(publicClient as Client, args)
  return data
}

export const estimateGas = async (contract: Rec, methodName: string, methodArgs?: Rec, overrides?: CallParameters) => {
  if (!contract.estimateGas[methodName]) throw new Error(`${methodName} doesn't exist`)
  const gas = await contract.estimateGas[methodName](methodArgs, { ...overrides })
  return gas
}

export const callWithGas = async (
  contract: Rec,
  methodName: string,
  methodArgs?: Rec,
  overrides?: CallParameters
): Promise<SendTransactionResult> => {
  const gas = await estimateGas(contract, methodName, methodArgs, overrides)
  const hash = await contract.write[methodName](methodArgs, { gas, ...overrides })
  return { hash }
}

export const readContract = async (args: ReadContractParameters): Promise<ReadContractReturnType> => {
  const data = await _readContract(publicClient as Client, args)
  return data
}

export const writeContract = async (args: WriteContractParameters): Promise<WriteContractReturnType> => {
  const data = await _writeContract(walletClient as Client, args)
  return data
}

export const simulateContract = async (args: SimulateContractParameters): Promise<SimulateContractReturnType> => {
  const data = await _simulateContract(publicClient as Client, args)
  return data
}

export const waitForTransaction = async (args: WaitForTransactionArgs): Promise<TransactionReceipt> => {
  const receipt = await waitForTransactionReceipt(publicClient as Client, args) // way1
  // const receipt = _waitForTransaction({ ...opts }) // way2
  return receipt
}

export const estimateContractGas = async (
  args: EstimateContractGasParameters
): Promise<EstimateContractGasReturnType> => {
  const data = await _estimateContractGas(publicClient as Client, args)
  return data
}

/**
 * @param args:
 * {
 *   address: '',
 *   abi: [],
 *   args: [account, spender]
 * }
 */
export const contractApprove = async (args: ReadContractParameters): Promise<TXStatus> => {
  try {
    const isApprovedForAll = await readContract({ ...args, functionName: 'isApprovedForAll' })
    console.info('isApprovedForAll:', isApprovedForAll)
    if (!isApprovedForAll) {
      const [, spender] = args.args
      const params = {
        ...args,
        args: [spender, true],
        functionName: 'setApprovalForAll'
      }
      const gas = await estimateContractGas(params as EstimateContractGasParameters)
      const hash = await writeContract({ ...params, gas } as WriteContractParameters)
      const receipt = await waitForTransaction({ hash })
      return receipt.status
    }
    return 'success'
  } catch (e) {
    console.info(e)
    return 'reverted'
  }
}

/**
 * @param args:
 * {
 *   address: '',
 *   abi: [],
 *   args: [account, spender]
 * }
 * @param amount
 */
export const approveAllowance = async (args: ReadContractParameters, amount: bigint): Promise<TXStatus> => {
  try {
    const allowance = await readContract({ ...args, functionName: 'allowance' })
    if (allowance < amount) {
      const c = getERC20Contract(args.address)
      const [account, spender] = args.args
      const hash = await callWithGas(c, 'approve', [spender, amount], { account } as any)
      const receipt = await waitForTransaction(hash)
      return receipt.status
    }
    return 'success'
  } catch (e) {
    console.info(e)
    return 'reverted'
  }
}

/**
 watchPendingTransactions({
  onError: error => console.log(error),
  onTransactions: (hashes) => console.log(hashes),
})
 * @param args
 */
export const watchPendingTransactions = (args: WatchPendingTransactionsParameters) => {
  _watchPendingTransactions(publicClient as Client, { ...args, poll: true })
}
