import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAccount, useDisconnect } from 'wagmi'

import Button from '@/components/common/Button'
import { DropDown, DropDownItem } from '@/components/common/DropDown'
import Image from '@/components/common/Image'
import { EXPLORER_SCAN_URL } from '@/config'
import { hideString } from '@/utils/tools'
import { useMemo } from 'react'

function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const entry = useMemo(() => {
    return (
      <Button icon="wallet" size="small" style={{ position: 'relative' }}>
        {address && hideString(address, 5, 4)}
      </Button>
    )
  }, [address])

  return (
    <DropDown entry={entry} wrapClassNames="libra-account-options">
      <DropDownItem
        content={
          <CopyToClipboard text={address} onCopy={() => console.info('Copy successfully')}>
            <span>
              <Image src="copy.svg" />
              Copy Address
            </span>
          </CopyToClipboard>
        }
      />
      <DropDownItem
        content={
          <a href={`${EXPLORER_SCAN_URL}/address/${address}`} target="_blank">
            <Image src="eye.svg" />
            View In Explorer
          </a>
        }
      />
      <DropDownItem content={<em />} />
      <DropDownItem
        content={
          <span onClick={disconnect}>
            <Image src="log-out.svg" />
            Disconnect
          </span>
        }
      />
    </DropDown>
  )
}

export default Account
