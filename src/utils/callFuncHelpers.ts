import { Rec } from '@/typings'
import { CallParameters, Client, publicClient, TransactionReceipt } from 'viem'
import { waitForTransactionReceipt } from 'viem/actions'
import { SendTransactionResult, WaitForTransactionArgs } from 'wagmi/actions'

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

export const waitForTransaction = async (opts: WaitForTransactionArgs): Promise<TransactionReceipt> => {
  const receipt = await waitForTransactionReceipt(publicClient as Client, opts)
  // const receipt = _waitForTransaction({ ...opts })
  return receipt
}
