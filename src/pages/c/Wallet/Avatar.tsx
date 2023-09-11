import jazzicon from '@metamask/jazzicon'
import { useLayoutEffect, useMemo } from 'react'

interface Props {
  size?: number
  account: string
  onClick: () => void
}

export default function Avatar({ onClick, account, size = 28 }: Props) {
  const icon = useMemo(() => {
    return account && jazzicon(size, parseInt(account.slice(2, 16), 16))
  }, [account]) as DocumentFragment

  useLayoutEffect(() => {
    const id = document.getElementById('AVATAR')
    if (id && icon) {
      id.appendChild(icon)
      return () => {
        try {
          id.removeChild(icon)
        } catch (e) {
          console.error('Avatar icon not found')
        }
      }
    }
    return
  }, [icon])

  return <div id="AVATAR" onClick={onClick} />
}
