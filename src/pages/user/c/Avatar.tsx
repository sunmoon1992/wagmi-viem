import { Upload } from '@arco-design/web-react'
import { IconFileImage } from '@arco-design/web-react/icon'
import jazzicon from '@metamask/jazzicon'
import { useLayoutEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'

interface Props {
  size?: number
}

export default function Avatar({ size = 64 }: Props) {
  const { address = '' } = useAccount()

  const icon = useMemo(() => {
    return address && jazzicon(size, parseInt(address.slice(2, 16), 16))
  }, [address]) as DocumentFragment

  useLayoutEffect(() => {
    const id = document.getElementById('USER_AVATAR')
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

  // return <div className="USER_AVATAR"><img src="" alt=""/></div>
  return <div id="USER_AVATAR" />
}

export function UploadAvatar() {
  return (
    <Upload
      action="/"
      onChange={(fileList, file) => {
        console.log(fileList, file)
      }}
    >
      <div className="xyz-user-profile-avatar-upload-trigger">
        <Avatar />
        <div className="mask">
          <IconFileImage style={{ color: 'white', fontSize: '18px' }} />
        </div>
      </div>
    </Upload>
  )
}
