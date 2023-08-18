import invariant from 'tiny-invariant'
import warning from 'tiny-warning'
import { getAddress } from 'viem'

import { ChainId, ChainIdRec } from '@/typings'

export const _getAddress = (address: ChainIdRec): `0x${string}` => {
  const chainId = import.meta.env.DAPP_CHAIN_ID ?? ChainId.MAINNET
  const _address = address[chainId] ?? address[ChainId.MAINNET]
  return _address.toLowerCase()
}

export function addressCheck(address: string, key?: string) {
  try {
    if (!address) {
      warning(false, `${key} ▶ contract address not set`)
      return ''
    }

    const check = getAddress(address)

    warning(address === check, `${key} ▶ valid checksum address: ${address}`)

    return check
  } catch (error) {
    invariant(false, `${key} ▶ invalid address: ${address}`)
  }
}

class Token {
  readonly name: string
  readonly symbol: string
  readonly address: ChainIdRec
  readonly precision?: number
  readonly decimals?: number
  readonly projectLink?: string

  constructor(name: string, symbol: string, address: ChainIdRec, precision = 18, decimals = 8, projectLink = '') {
    this.name = name
    this.symbol = symbol
    this.address = Token.checkAddress(address, name)
    this.decimals = decimals
    this.precision = precision
    this.projectLink = projectLink
  }

  get icon() {
    return `symbol/${this.symbol.toLowerCase()}.svg`
  }

  get tokenAddress() {
    return _getAddress(this.address)
  }

  static checkAddress<T>(address: T, name: string): T {
    let obj = Object.create(null)
    for (const key in address) {
      if (Object.prototype.hasOwnProperty.call(address, key)) {
        const check = addressCheck(String(address[key]), `${name}-${key}`)
        obj = { ...obj, [key]: check }
      }
    }
    return obj as T
  }
}

export default Token
