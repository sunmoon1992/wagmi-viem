import { Rec } from '@/typings'
import { publicClient, walletClient } from '@/utils/viem'
import {
  CallParameters,
  Client,
  EstimateContractGasParameters,
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
  readContract as _readContract,
  simulateContract as _simulateContract,
  writeContract as _writeContract,
  waitForTransactionReceipt
} from 'viem/actions'
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
