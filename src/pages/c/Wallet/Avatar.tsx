import jazzicon from '@metamask/jazzicon'
import { useLayoutEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'

interface Props {
  size?: number
  onClick: () => void
}

export default function Avatar({ onClick, size = 28 }: Props) {
  const { address = '' } = useAccount()

  const icon = useMemo(() => {
    return address && jazzicon(size, parseInt(address.slice(2, 16), 16))
  }, [address]) as DocumentFragment

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

  // return <div className="AVATAR"><img src="" alt=""/></div>
  return <div id="AVATAR" onClick={onClick} />
}
