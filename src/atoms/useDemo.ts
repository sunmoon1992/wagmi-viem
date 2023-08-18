import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'

import { x } from '@/api'

export const xAtom = atom<number | null>(null)

type UserAccount = string | undefined

interface Params {
  marginToken: string
  userAccount: UserAccount
}

export const asyncTestAtom = atomFamily((params: Params) =>
  atom(null, async (get, set) => {
    const { userAccount, marginToken } = params
    try {
      if (userAccount && marginToken) {
        const { data } = await x({})
        set(xAtom, data ?? null)
      }
    } catch (e) {
      set(xAtom, null)
    }
  })
)
/**
 * case:
 import { xAtom, asyncTestAtom } from '@/atoms/useDemo'
 const variables = useAtomValue(xAtom)
 const asyncTest = useSetAtom(
 asyncTestAtom({
      userAccount: '',
      marginToken: ''
    })
 )
 */
