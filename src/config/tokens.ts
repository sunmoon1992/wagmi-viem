import { memoize } from 'lodash'

import Token from '@/class/Token'
import { ChainId, TokenKeys } from '@/typings'
import { isAddressEqual } from 'viem'
import { Address } from 'wagmi'

const tokens: { [key in TokenKeys]: Token } = {
  btc: new Token(
    'Bitcoin',
    'BTC',
    {
      [ChainId.MAINNET]: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      [ChainId.TESTNET]: '0x2418125AE1a9B637f77abE13B2C27FfF8007AD6F'
    },
    8,
    1
  ),
  usdc: new Token(
    'USD Coin',
    'USDC',
    {
      [ChainId.MAINNET]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      [ChainId.TESTNET]: '0x866E7EB209a32b8d3AcF449DFA0C3E150327dA9b'
    },
    6,
    2
  ),
  lp: new Token(
    'LP',
    'LP',
    {
      [ChainId.MAINNET]: '0x03229fb11e3D7E8Aca8C758DBD0EA737950d6CD0',
      [ChainId.TESTNET]: '0x43ecFf37B01e414b267AB6D5f49e1B442155b959'
    },
    18,
    2
  ),
  lion: new Token(
    'Lion Token',
    'LION',
    {
      [ChainId.MAINNET]: '0x8eBb85D53e6955e557b7c53acDE1D42fD68561Ec',
      [ChainId.TESTNET]: '0xAA7A5E02B75998d55467CC84324692cA277dd6F6'
    },
    18,
    2
  ),
  esLion: new Token(
    'esLion Token',
    'esLION',
    {
      [ChainId.MAINNET]: '0xFeb9Cc52aB4cb153FF1558F587e444Ac3DC2Ea82',
      [ChainId.TESTNET]: '0xa6244b42d67B97ffb4cC6B895E2a2D0736E8199B'
    },
    18,
    2
  )
}

export default tokens

export const findToken = memoize((key: string | Address): Token => {
  const upper = String(key).toUpperCase()
  const lower = String(key).toLowerCase()
  return Object.values(tokens).find(
    (t) =>
      t.symbol === upper || t.symbol === lower || t.symbol === key || isAddressEqual(t.tokenAddress, key as Address)
  )!
})

export const BASE_TOKEN = tokens.usdc
