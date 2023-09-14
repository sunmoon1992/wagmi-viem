import { atom } from 'jotai'

interface UserInfo {
  jazzicon: any
}

export const useUserInfoAtom = atom<UserInfo>({ jazzicon: '' })
